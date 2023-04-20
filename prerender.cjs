/** @format */

;(async () => {
  const { pageButtons } = await import("./src/data/pageButtonsCommon.js")

  const puppeteer = require("puppeteer")
  const fs = require("fs")
  const path = require("path")

  const OUTPUT_DIR = "dist" // Change this to your Vite build output directory
  const URL = "http://localhost:3000" // Change this to your app's URL

  function ensureDirectoryExistence(filePath) {
    const dirname = path.dirname(filePath)
    if (fs.existsSync(dirname)) {
      return true
    }
    ensureDirectoryExistence(dirname)
    fs.mkdirSync(dirname)
  }

  ;(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    // Define your routes here
    const routes = generatePrerenderRoutes(pageButtons)

    for (const route of routes) {
      await page.goto(`${URL}${route.path}`, { waitUntil: "networkidle0" })
      const content = await page.content()
      const outputFile = path.join(OUTPUT_DIR, route.output)

      ensureDirectoryExistence(outputFile) // Add this line before writing the file
      fs.writeFileSync(outputFile, content)
      console.log(`Prerendered: ${route.path}`)
    }

    await browser.close()
  })()

  function generatePrerenderRoutes(pageButtons) {
    const routes = [{ path: "/", output: "index.html" }]

    for (const category of pageButtons) {
      const catPath = `/${category.catPath}`
      routes.push({
        path: catPath,
        output: `${category.catPath}/index.html`,
      })

      for (const page of category.catCon) {
        const pagePath = `${catPath}/${page.path}`
        routes.push({
          path: pagePath,
          output: `${category.catPath}/${page.path}/index.html`,
        })
      }
    }

    return routes
  }
})()
