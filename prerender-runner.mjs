/** @format */

import { spawn } from "child_process"

const tsNode = spawn("npx", ["ts-node", "./prerender.ts"], {
  stdio: "inherit",
})

tsNode.on("exit", code => {
  process.exit(code)
})
