#!/usr/bin/env python3
"""Validate PharmaShift snapshots using only the Python standard library."""

import json
import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SCHEMA_PATH = ROOT / "specs/001-revision-trimestral-big-pharma/contracts/snapshot.schema.json"


def fail(message: str) -> None:
    raise SystemExit(f"ERROR: {message}")


def validate(snapshot_path: Path) -> None:
    schema = json.loads(SCHEMA_PATH.read_text(encoding="utf-8"))
    data = json.loads(snapshot_path.read_text(encoding="utf-8"))

    for field in schema["required"]:
        if field not in data:
            fail(f"missing required field: {field}")

    if not re.fullmatch(r"[0-9]{4}-Q[1-4](?:-baseline)?", data["review_id"]):
        fail("review_id does not match YYYY-QN[-baseline]")
    if data["currency"] != "USD" or data["units"] != "billions":
        fail("currency and units must be USD billions")
    if not isinstance(data["ranking"], list) or len(data["ranking"]) < 15:
        fail("ranking must contain at least 15 companies")

    ranks = []
    companies = []
    for index, entry in enumerate(data["ranking"], start=1):
        for field in ("rank", "company", "sales", "crm", "crm_scope"):
            if field not in entry:
                fail(f"ranking entry {index} missing {field}")
        if not isinstance(entry["sales"], (int, float)) or entry["sales"] < 0:
            fail(f"invalid sales for {entry['company']}")
        for field in ("projected_rank_range", "projected_sales_range"):
            if field in entry:
                values = entry[field]
                if not isinstance(values, list) or len(values) != 2 or values[0] > values[1]:
                    fail(f"invalid {field} for {entry['company']}")
        ranks.append(entry["rank"])
        companies.append(entry["company"])

    if ranks != list(range(1, len(ranks) + 1)):
        fail("ranking positions must be continuous and ordered")
    if len(set(companies)) != len(companies):
        fail("company names must be unique")

    print(f"OK: {snapshot_path.relative_to(ROOT)} matches the PharmaShift snapshot contract")


if __name__ == "__main__":
    target = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "data/snapshots/latest.json"
    if not target.is_absolute():
        target = ROOT / target
    validate(target)
