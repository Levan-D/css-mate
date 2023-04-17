/** @format */

const puppeteer = require("puppeteer")
const fs = require("fs")
const path = require("path")

const OUTPUT_DIR = "dist" // Change this to your Vite build output directory
const URL = "http://localhost:3000" // Change this to your app's URL

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  // Define your routes here
  const routes = [
    { path: "/", output: "index.html" },
    { path: "/shadows", output: "shadows/index.html" },
    { path: "/shadows/box-shadow", output: "shadows/box-shadow/index.html" },
    { path: "/shadows/drop-shadow", output: "shadows/drop-shadow/index.html" },
    { path: "/shadows/text-shadow", output: "shadows/text-shadow/index.html" },
    { path: "/colors", output: "colors/index.html" },
    { path: "/colors/gradient-maker", output: "colors/gradient-maker/index.html" },
    { path: "/colors/color-namer", output: "colors/color-namer/index.html" },
    { path: "/colors/contrast-checker", output: "colors/contrast-checker/index.html" },
    { path: "/colors/palette-generator", output: "colors/palette-generator/index.html" },
    { path: "/colors/palette-mixer", output: "colors/palette-mixer/index.html" },
    { path: "/converters", output: "converters/index.html" },
    {
      path: "/converters/color-converter",
      output: "converters/color-converter/index.html",
    },
    { path: "/misc", output: "misc/index.html" },
    { path: "/misc/cursors", output: "misc/cursors/index.html" },
    { path: "/misc/emojis", output: "misc/emojis/index.html" },
    { path: "/misc/entities", output: "misc/entities/index.html" },
    // Add more routes as needed
  ]

  for (const route of routes) {
    await page.goto(`${URL}${route.path}`, { waitUntil: "networkidle0" })
    const content = await page.content()
    const outputFile = path.join(OUTPUT_DIR, route.output)

    fs.writeFileSync(outputFile, content)
    console.log(`Prerendered: ${route.path}`)
  }

  await browser.close()
})()
