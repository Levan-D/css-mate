/** @format */

import { pageButtons } from "./PageButtons"

export const routePaths = pageButtons.map(({ catName, catPath, catCon }) => ({
  catName,
  catPath,
  catCon: catCon.map(({ name, path }) => ({ name, path })),
}))
