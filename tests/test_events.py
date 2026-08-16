# -*- coding: utf-8 -*-
"""Tests for event vocabulary and payload sanitization."""
from __future__ import annotations

from agent_trace import events as ev


class TestSanitizePayload:
    def test_truncates_long_strings_and_marks_fields(self):
        data = {"text": "a" * 500}
        result = ev.sanitize_payload(
            data,
            limit=100,
            patterns=ev.compile_patterns([]),
        )
        assert len(result["text"]) == 100
        assert result["_truncated_fields"] == ["text"]

    def test_short_strings_untouched(self):
        data = {"text": "short", "count": 3, "flag": True, "none": None}
        result = ev.sanitize_payload(
            data,
            limit=100,
            patterns=ev.compile_patterns([]),
        )
        assert result == data
        assert "_truncated_fields" not in result

    def test_builtin_redaction(self):
        text = "key sk-abcdefghijklmnop1234 and Bearer abc.def.ghi"
        result = ev.sanitize_payload(
            {"text": text},
            limit=0,
            patterns=ev.compile_patterns([]),
        )
        assert "sk-abcdefghijklmnop1234" not in result["text"]
        assert "Bearer ***" in result["text"]

    def test_user_patterns_apply(self):
        result = ev.sanitize_payload(
            {"text": "password hunter2 leaked"},
            limit=0,
            patterns=ev.compile_patterns([r"hunter2"]),
        )
        assert result["text"] == "password *** leaked"

    def test_invalid_user_pattern_skipped(self):
        patterns = ev.compile_patterns(["(["])
        assert len(patterns) == len(ev._BUILTIN_REDACT_PATTERNS)

    def test_nested_structures_sanitized(self):
        data = {
            "outer": {"inner": "b" * 300},
            "items": [{"v": "x"}] * 250,
        }
        result = ev.sanitize_payload(
            data,
            limit=50,
            patterns=ev.compile_patterns([]),
        )
        assert len(result["outer"]["inner"]) == 50
        assert "outer.inner" in result["_truncated_fields"]
        assert len(result["items"]) == ev.MAX_LIST_ITEMS + 1
        assert "...(" in result["items"][-1]

    def test_unknown_objects_stringified(self):
        class Weird:
            def __str__(self):
                return "weird-object"

        result = ev.sanitize_payload(
            {"obj": Weird()},
            limit=0,
            patterns=ev.compile_patterns([]),
        )
        assert result["obj"] == "weird-object"


class TestMakeEvent:
    def test_event_shape(self):
        event = ev.make_event(7, "run/start", "run-abc", {"x": 1})
        assert event["seq"] == 7
        assert event["type"] == "run/start"
        assert event["run_id"] == "run-abc"
        assert event["data"] == {"x": 1}
        assert "t" in event
