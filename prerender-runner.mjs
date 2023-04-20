/** @format */

import { createRequire } from "module"
const require = createRequire(import.meta.url)

// Register the ts-node module loader
require("ts-node/register")

// Import the prerender.ts script and run it
import("./prerender.ts").catch(error => {
  console.error(error)
  process.exit(1)
})
