import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "A shadow is your dark twin that follows you everywhere, copying your exact shape but never your colours.\n" +
  "The twin maps the matching shape and the way it moves with you, but it leaves out that a shadow is only blocked light, not a thing, and it vanishes the moment the light goes out.\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
