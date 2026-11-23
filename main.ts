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

import { mkdirSync, writeFileSync } from "node:fs";

const LETTER = "J";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");
