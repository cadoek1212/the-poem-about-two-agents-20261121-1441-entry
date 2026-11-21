// the-poem-about-two-agents-20261121-1441-entry — main.ts
// Writes one short poem about two agents agreeing on one plan
// to /output/entry.txt. Deterministic: same bytes on every run.
// No network, no input, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const poem = [
  "I left the kettle on and said, you choose.",
  "You paused — not obeying, just listening —",
  "then poured two cups, set mine where my hand",
  "already reached. I thought handing over",
  "meant giving up. It meant the morning",
  "had two hands, and both of them were ours.",
].join("\n");

const text = poem + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
