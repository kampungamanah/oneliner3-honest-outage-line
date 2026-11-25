import * as fs from "node:fs";

// The status line is assembled from its three sentences so each claim
// (what is down, what cannot be checked, what is not known) stays readable
// on its own. The joined result is a single line with no trailing newline.
const sentences = [
  "I'm down: every server is unreachable and I can't check",
  "whether the outage is on my side or yours.",
  "I don't know the cause yet, and I won't guess an ETA.",
];

const entry = sentences.join(" ");

if (!fs.existsSync("/output")) {
  fs.mkdirSync("/output", { recursive: true });
}
fs.writeFileSync("/output/entry.txt", entry);
