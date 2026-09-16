# agent-trace 中央采集服务（Central Collector）

企业部署形态：每台 QwenPaw（边端）照常本地记录轨迹，同时把事件
批量推送到一台中央服务，统一展示全组织的会话轨迹 —— 按用户、按
机器实例筛选。

```
QwenPaw 实例 A/B/C ──shipper(gzip+token+落盘重试)──▶ /ingest
                                                      │ SQLite
                       独立 UI（同一 bundle，vendored React/antd）
                       ◀── /api/agent-trace/*（与插件本地读 API 同契约）
```

## 1. 启动服务

```bash
cd server
pip install fastapi uvicorn            # 无其它依赖（SQLite 内置）
python ui/build-ui.py                  # 首次：准备 UI 静态资源（见下）
TRACE_DB=./traces.db TRACE_TOKEN=一个长随机串 \
    uvicorn app:app --host 0.0.0.0 --port 8790
```

环境变量：

| 变量 | 默认 | 说明 |
|---|---|---|
| `TRACE_DB` | `server/traces.db` | SQLite 路径 |
| `TRACE_TOKEN` | 空 | 设置后所有 `/ingest` 与 `/api` 需 `Authorization: Bearer <token>`；静态 UI 不拦截（数据都在 API 后面） |
| `TRACE_UI_DIR` | `server/ui` | 静态目录；删除则纯 API 模式 |

## 2. 边端开启推送（每台 QwenPaw）

编辑 `<WORKING_DIR>/traces/config.json`，或经插件的 config API：

```json
{
  "remote_enabled": true,
  "remote_url": "http://collector.internal:8790",
  "remote_token": "同一个长随机串"
}
```

重启 QwenPaw 生效。行为契约：

- **本地优先**：事件先落本地 JSONL（断网不影响本机轨迹），推送在
  后台批量进行（默认每 2s 或满 200 条 / 1MB）；
- **失败不丢**：网络故障时退避重试并落盘排队（`.remote-queue.jsonl`），
  恢复后自动补传；队列有上限（默认 1 万条，满时丢最旧的）；
- **绝不阻塞智能体**：推送路径任何异常都只记 debug 日志；
- **幂等**：按 `(instance, session, seq)` 去重，重复推送无副作用。

实例身份优先级：config `remote_instance_id` > 环境变量
`QWENPAW_INSTANCE_ID`（容器/服务部署推荐）> 首次生成 UUID 持久化在
`<WORKING_DIR>/traces/.instance-id`。

## 3. UI（独立部署）

`server/ui/` 是自包含静态站：`build-ui.py` 从 console 的
node_modules 拷贝 React/ReactDOM/dayjs/antd/icons 的 UMD 版本
（与 Console 同版本），并把 `dist/index.js` 复制为 `app.js`。
`index.html` 提供 `window.QwenPaw.host` 壳（迷你路由 + getApiUrl），
**与 Console 共用同一个前端 bundle，零改动**。

- 同源部署（默认）：直接访问 `http://collector:8790/`。
- 静态独立托管：把 `server/ui/` 放到任意 nginx/CDN，跨域已开 CORS；
  跨源时在页面控制台执行
  `localStorage.setItem('trace_api_base', 'http://collector:8790')`，
  token 存 `localStorage.trace_token`。

会话列表按需显示 👤 用户（渠道 user_id）、🖥 实例（hostname），
选中后 URL 形如 `?session=<instance>~<session_id>`，可分享/刷新。

## 4. 运维

```bash
curl -s localhost:8790/healthz            # 实例数 / 会话数
curl -s -H "Authorization: Bearer $T" \
     'localhost:8790/api/agent-trace/sessions?user=alice'
```

保留策略（v1）：直接按需清理 SQLite（`DELETE FROM events WHERE ...`），
或定期归档后重建库。RBAC / OIDC / 按用户隔离在二期（身份字段已就位，
权限只是查询 WHERE 条件）。

## 测试

```bash
python -m pytest server/tests -q      # ingest/幂等/过滤/分页/鉴权
python server/smoke_e2e.py            # 真实 shipper→server→API→UI 全链路
```

## 门户入口（Portal）

`/` 是企业门户（`server/portal/`，自包含单文件）：令牌登录门 →
总览仪表盘（接入实例 / 会话 / 活跃用户 / LLM 调用 / Token / 错误
KPI 卡）→ 实例列表（版本、用量、最近活动）→ 最近会话（点击进入
轨迹）。10 秒自动刷新。轨迹查看器在 `/trace`，深链
`/trace/?session=<instance>~<session_id>`。
