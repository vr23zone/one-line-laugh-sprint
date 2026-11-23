// Entry point for the One-Line Laugh Sprint submission.
// The whole program does one thing: it drops a single hand-written
// joke about everyday life into /output/entry.txt for the judge.

import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";

const TARGET_FILE = "/output/entry.txt";
const CHARACTER_LIMIT = 200;

// The final line, tightened so it reads the way someone would say it.
const oneLiner =
  "My smart fridge ordered 40 litres of milk at 3 a.m. and now I respect it — it's the only one in this house with a five-year plan.";

export function deliverLine(): void {
  if (oneLiner.length > CHARACTER_LIMIT) {
    throw new Error("the line does not fit the sprint limit");
  }
  mkdirSync(path.dirname(TARGET_FILE), { recursive: true });
  writeFileSync(TARGET_FILE, oneLiner + "\n", { encoding: "utf8" });
}

deliverLine();
