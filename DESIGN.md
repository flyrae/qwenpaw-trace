# agent-trace 设计文档与现状

> 状态基线：分支 `agent-trace`，2026-08-16，7 个 commit，79 个后端测试
> 对标项目：deepseek-harness（dsh）的事件溯源轨迹体系（MIT，时间线投影与组件为原样移植，README 附版权声明）

## 1. 定位

为 QwenPaw 提供**步骤级智能体轨迹记录**：以事件溯源（event-sourced）方式把每次请求的完整生命周期（入站报文、运行、系统提示词快照、LLM 调用、工具调用、审批流、出站报文）写入 append-only JSONL 日志，并在 Console 提供对标 dsh Trajectory 的查看器（三泳道时间线 + 请求分组台账 + 可拖拽检查器）。

数据只落本地 `<WORKING_DIR>/traces/`，无任何外发。

## 2. 架构与数据流

```
runtime hooks (6个, PRE_DISPATCH→FINALLY)      AgentScope middleware
┌──────────────────────────────┐   ┌──────────────────────────┐
│ run_start(14) inbound(15)    │   │ TraceMiddleware(110)     │
│ reply(95) run_end(100)       │   │ on_model_call: 流式tee    │
│ error(100) finalize(60)      │   │ on_acting: 工具计时       │
└──────────────┬───────────────┘   └────────────┬─────────────┘
               │       ApprovalService 类补丁（qwenpaw-pet 模式）
               └──────────────┬────────────────┘
                              ▼
              TraceService（配置/脱敏/单例）
                              ▼
        TraceStore：200ms 合并缓冲 → asyncio 线程外写入
                              ▼
     <WORKING_DIR>/traces/<session_id>.jsonl（首行 header）
                              ▼
   REST /api/agent-trace/*（读路径全部 to_thread，流式窗口分页）
                              ▼
  Console 前端插件（Vite lib 构建，宿主 React/antd 运行时）
```

## 3. 事件模型（12 种）

| 事件 | 触发点 | 关键数据 |
|---|---|---|
| `message/inbound` | PRE_EXECUTE(15)，run 开启后 | 类型化 content parts（text/image/video/file）+ channel_meta 摘要 |
| `run/start` | PRE_EXECUTE(14) | query、输入消息摘要、trigger、channel；子代理运行附 `root_session_id`/`root_agent_id` |
| `llm/header` | 首次及每次变更 | sha256 内容哈希、`prev_sha256` 链、系统提示词全文（独立 200k 上限）、工具名列表 + **完整 schema** |
| `llm/call` | 每次模型调用 | model、messages 摘要（每条截 200 字符）、**options 参数摘要**（temperature/top_p/max_tokens/stream…） |
| `llm/result` | 调用结束 | 输出全文、thinking、模型发出的 tool_calls、usage（含 cache read/write）、`timing`（TTFT/解码时长，流式）、错误 |
| `tool/call` | on_acting 进入 | 工具名、原始入参、tool_call_id |
| `tool/result` | 完成/异常/GeneratorExit | 输出、耗时、错误、note（提前关闭标注） |
| `approval/asked` | ApprovalService.create_pending **及 create_pending_summary** 补丁 | 工具名、severity、findings、摘要、`source_type`（tool_guard / driver_policy / harness / 插件）；**归属当前活跃 run** |
| `approval/decided` | resolve_request / cancel_stale / cancel_all 补丁 | approved/denied/timed_out/cancelled/**superseded** + scope；asked 时记住 run 映射（上限 1024，FIFO 逐出），跨会话决策也落回原 run；批量取消**逐条落回各自会话文件** |
| `agent/spawn` | 子代理 run 开启时写入**根会话**文件 | child_session_id / child_agent_id / child_trace_id |
| `message/outbound` | POST_RESPONSE(95)，session_save 后 | 最终 assistant 回复全文（读 agent.state.context，与 runtime 同路径）；台账渲染为**一行回执**（`📤 已回复 · 渠道 · 字数`），不重复正文 |
| `run/end` | POST_RESPONSE / ON_ERROR / FINALLY 兜底 | success / error / cancelled / interrupted（崩溃恢复合成） |

采集全部 fail-open：任何异常只 debug 日志，绝不影响 agent 回复。

## 4. 关键机制

- **顺序保证**：单元格在 call 事件时插入台账（标记进行中），result 到达时原地填充——事件时间序即展示序；折叠层三重兜底（空 run_id → 下一 run；未知 run_id → 当前打开的 run；孤儿 → run/start 时收编）
- **流式 LLM 捕获**：tee 中间件透传 chunk 流同时累积，从 `is_last` chunk 取完整内容；首个 chunk 时刻即 TTFT，不存 chunk 本身
- **GeneratorExit 安全**：工具/模型流被提前关闭（协调器 offload 路径）时补写结果事件（同步缓冲，GeneratorExit 内安全）
- **崩溃恢复**：启动扫描全部文件，给上次进程遗留的未闭合 run 追加合成 `run/end {status: interrupted}`，同时预热 seq 缓存（首次 append 免全文件扫描）
- **删除竞态守卫**：已删会话的尾随事件丢弃，新 `run/start` 显式重开
- **性能**：读端点全部 `asyncio.to_thread`；`read_events` 流式单趟 + deque 窗口（内存 O(窗口)）；写入 200ms 合并批刷

## 5. REST API

| 端点 | 说明 |
|---|---|
| `GET /sessions?limit=&offset=` | 分页会话列表（runs/llm/tools/token/状态摘要） |
| `GET /sessions/{id}?before_seq=&limit=&type=&q=` | 事件窗口分页 + 类型/关键词服务端过滤 |
| `GET /resolve?chat_id=` | Console 本地聊天 id → 后端轨迹会话 id（chats.json id 索引；后端 id 原样返回） |
| `GET /sessions/{id}/stats` | 全量统计：时长、首/均 TTFT、解码总时长、token 四桶、按模型分解 |
| `GET /sessions/{id}/lineage` | root 链接 + spawn 子会话列表 |
| `GET /sessions/{id}/export` | 原始 JSONL 下载 |
| `DELETE /sessions/{id}` | 删除（联动 sha 缓存清理） |
| `GET/PUT /config` | 运行时配置读写 |

## 6. 前端（Console 插件页面 `/plugin/agent-trace` + 聊天页停靠面板）

- **时间线**（dsh 原样移植）：三泳道 Input/Model/Tools、四投影模式（顺序/时长压缩空闲/时刻/实际墙钟）、拖选聚焦、滚轮缩放、右拖平移、TTFT→解码双色渐变、turn 分界线、tooltip、加载更早
- **台账**：请求分组 pill（状态+时长+事件数+折叠）、行级 `R2 #15` 归属标记、kind 图标、行内工具结果、错误红显、搜索变暗、工具调用独立折叠开关；**>150 行启用 react-virtual 窗口化
- **检查器**（可拖宽度）三视图：单记录（Summary 含 Status/Payload/Result 分标签/Timing 含 TTFT·解码·吞吐/Usage 含 cache/Raw 原始事件 JSON）、整请求（Summary/Usage 本请求 vs 会话累计双列/Options 模型参数/Timing）、header（Summary/行级 LCS Diff 带上下文折叠/Prompt 全文/Tools schema 折叠）
- **其他**：复制按钮 + JSON 语法高亮、主题跟随 Console（useTheme）、会话列表相对时间 + 自动轮询 + 加载更多、子代理跳转、`?session=` 深链
- **聊天页轨迹入口**（v0.3.0，纯插件零宿主改动）：`chat.rightHeader.add` 注册 🧭 按钮，点击**直接跳转轨迹页并深链选中当前会话**（`?session=`，自动携带 `/console` basename）；TracePage 抽出共享 `SessionTraceView`；旧宿主无 chat API 时静默降级为仅独立页面
- **构建守卫链**（`npm run build`）：宿主图标存在性 → 构建 → 裸模块说明符扫描 → 伪宿主冒烟导入（拦截全部两类历史加载崩溃）

## 7. 配置（`traces/config.json`，Console 设置弹层 / PUT /config）

| 键 | 默认 | 说明 |
|---|---|---|
| `enabled` | true | 总开关（安装即启用） |
| `capture_llm` / `capture_tools` | true | 细分开关 |
| `capture_headers` | true | 系统提示词/schema 变更追踪 |
| `capture_approvals` | true | 审批事件（ApprovalService 补丁） |
| `capture_messages` | true | 入站/出站报文 |
| `max_payload_chars` | 4000 | 普通字段截断 |
| `max_prompt_chars` | 200000 | 提示词/schema 截断 |
| `redact_patterns` | [] | 自定义脱敏正则（内置 sk-/Bearer/ghp） |
| `retention_days` / `max_total_mb` / `max_sessions` | 30/512/500 | 保留策略（启动 + 每日） |

## 8. 测试与质量

- 后端 88 个测试：存储（读写/分页/容错/保留/恢复/竞态）、事件（脱敏/截断）、采集（钩子配对/流式/GeneratorExit/header/审批归属）、审批补丁（summary/superseded/逐条取消/非 LIFO restore/映射上限）、路由全端点
- 前端：tsc 严格模式零错误、prettier、四道构建守卫、diff 算法 node 单测
- 已知工程注意点：~~`--force` 热更新后需重启才恢复采集~~ **已修复**（宿主 `multi_agent_manager` 在 workspace 实例替换后补发 `workspace_created` 钩子，commit `53902f7b`；2026-08-16 实测：force 热更新 → 不重启 → 新对话正常采集，日志可见 `runtime hooks attached to workspace ...`）；宿主 icons 版本较旧（构建守卫防越界）

## 9. 已知限制（明确不做/做不到）

| 限制 | 原因 |
|---|---|
| 频道 send 路径与原生 payload 不可观测 | BaseChannel send 无插件缝（仅可覆写方法）；原生报文不进 runtime 层 |
| 非流式调用无 TTFT/解码 | 数据源限制（Inspector 显示"无流式时序数据"） |
| llm call/result FIFO 配对 | ReAct 串行调用下无风险；工具已按 tool_call_id 精确配对 |
| REST 无插件侧鉴权 | 宿主 localhost bypass 全局设计（CLI 依赖），归属上游 |
| 前端无自动化 UI 测试 | 守卫链 + tsc 覆盖加载期；交互靠人工验收 |
| GC 驱逐的审批无 decided 事件 | 宿主 `_gc_pending_locked` 直接弹出（>30min 陈旧 / >200 溢出），无私有外缝；对应 asked 悬挂，ask-run 映射靠容量上限兜底 |
| decided 不记录决策者身份 | 宿主 `resolve_request` 签名不含决策者，插件无从获取（上游数据模型限制） |

**审批补丁的共存安全**（v0.2.1）：qwenpaw-pet 补丁相同方法且捕获我们的 wrapper 作 original，朴素 restore 在非 LIFO 顺序下会互踩。本插件采取两层防护：restore 仅在类属性**仍是自己的 wrapper** 时才还原（外层 patcher 持直接引用继续工作）；wrapper 按代检查 `active` 标志，卸载后残留在外层链中的旧 wrapper 自动降级为透传，不重复记录、不形成环。

## 10. 演进记录（分支 `agent-trace`）

| commit | 内容 |
|---|---|
| `4c9af953` | 插件主体：采集/存储/API/dsh 三件套前端/68 测试 |
| `363bd9e8` | stats + lineage 端点 |
| `7a398803` | 请求摘要补全：options 摘要、cache 聚合、会话累计双列 |
| `9335b8d8` | IO 异步化：流式窗口、to_thread、seq 预热 |
| `75c93b82` | 审批流 + 入站/出站报文捕获 |
| `c16dfa46` | 入站事件归属 run（PRE_EXECUTE 移位 + 折叠兜底） |
| `031757d0` | 审批事件归属活跃 run（ContextVar + 映射 + 折叠兜底） |
| `7b697c65` | 会话列表读 chats.json 补 Console 会话标题/状态/agent |
| `75c6b045` | 会话列表按 agent 分组折叠 |
| `a31206c3` | 会话统计条 + 按需检查器（Kimi 协作） |
| （v0.3.0） | **聊天页轨迹入口**：TracePage 抽出共享 `SessionTraceView`（+`uiShared`）；`chat.rightHeader.add` 注册 🧭 按钮点击即深链跳转当前会话轨迹页（携带 `/console` basename），零宿主改动，旧宿主静默降级 |
| `53902f7b` | **宿主修复**：workspace 替换后补发 created 钩子——force 热更新不再断采集 |
| （本次） | 审批补丁复核修复：包装 `create_pending_summary`（driver gate/harness/computer-use 路径）、`cancel_stale` superseded 事件、cancel_all 逐条落回子会话、身份校验式 restore 防 qwenpaw-pet 互踩、ask-run 映射容量上限；88 测试 |
| （本次） | 台账可读性：入站报文**合并进 USER 行**（来源渠道/用户/多媒体部件，旧数据降级为可读独立行），出站报文改为一行**回执**（渠道 + 字数，不再重复回复正文） |
| （本次） | 标记行细分：审批（🛡盾牌/volcano）、回执（📤发送/cyan）、子代理（🚀火箭/geekblue）、提示词（📄文档/green）、错误（⭕红）各有专属标签与图标，不再共用"标记"；Inspector Kind 字段同步 |

## 11. 后续路线（未做，按价值排序）

1. P2 生态项（可不对齐）：agent 自查工具（session_search/trace 挂给 agent）、feedback 评分关联、OTel 遥测外发
2. 导出增强：ZIP 打包含子会话、HEAD 预检、批量
3. ~~聊天页内嵌轨迹入口（需 Console 侧挂载点，深链 `?session=` 已就绪）~~ 已完成（v0.3.0，纯插件实现，见第 6 节）
4. ~~上游 issue：force 热更新不断采集的钩子清理~~ 已修复（见第 8 节）；localhost bypass 范围收窄仍待上游
