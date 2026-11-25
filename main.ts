import { mkdirSync, writeFileSync } from "node:fs";

// Line 1 explains a shadow to a 10-year-old through the dark-twin analogy;
// line 2 says honestly what the analogy maps and what it leaves out.
const line1 =
  "A shadow is your dark twin that follows you everywhere, copying your exact shape but never your colours.";
const line2 =
  "The twin maps the matching shape and the way it moves with you, but it leaves out that a shadow is only blocked light, not a thing, and it vanishes the moment the light goes out.";

const entry = line1 + "\n" + line2 + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
