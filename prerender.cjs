const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = 'dist'; // Change this to your Vite build output directory
const URL = 'http://localhost:3000'; // Change this to your app's URL

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Define your routes here
  const routes = [
    { path: '/', output: 'index.html' },
    // Add more routes as needed
  ];

  for (const route of routes) {
    await page.goto(`${URL}${route.path}`, { waitUntil: 'networkidle0' });
    const content = await page.content();
    const outputFile = path.join(OUTPUT_DIR, route.output);

    fs.writeFileSync(outputFile, content);
    console.log(`Prerendered: ${route.path}`);
  }

  await browser.close();
})();
