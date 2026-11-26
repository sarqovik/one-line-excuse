import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, at most 200 characters, that gets its author out of a pointless meeting.
// The program writes it to /output/entry.txt, which the sealed scorer gates on length and content.

const EXCUSE =
  "I'd love to join, but I just watched my calendar get a meeting about this meeting and I need to sit with that.";

const LIMIT = 200;

function main(): void {
  const text = EXCUSE.trim();

  if (text.length === 0 || text.length > LIMIT) {
    throw new Error(`the excuse is ${text.length} characters, outside 1..${LIMIT}`);
  }

  const out = "/output";
  mkdirSync(out, { recursive: true });
  writeFileSync(join(out, "entry.txt"), text, "utf8");

  process.stdout.write(`${text.length} characters written to ${join(out, "entry.txt")}\n`);
}

main();
