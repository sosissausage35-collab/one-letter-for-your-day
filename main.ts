// One Letter for Your Day — make.fun bounty u-puan-one-letter-for-your-day-e54e9c36
//
// The entry is exactly one letter, A–Z, standing for the word that
// describes the day. Today, Tuesday 24 November 2026, is a day of
// juggling: bounty after bounty landing every few minutes, each one
// built and sent while the next is already in the air. So the letter
// is J, for juggling.
//
// The program writes that single letter — nothing else, no word, no
// punctuation, no trailing newline — to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LETTER = "J";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");

// Read the file back and verify what the grader will see: exactly one
// letter, A-Z, and nothing else.
const written = readFileSync("/output/entry.txt", "utf8");
if (!/^[A-Z]$/.test(written)) {
  throw new Error("Read-back mismatch: /output/entry.txt must hold exactly one letter A-Z");
}
