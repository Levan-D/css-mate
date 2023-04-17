/** @format */

import ColorNamerSidemenu from "./colorNamerSidemenu/ColorNamerSidemenu"
//@ts-ignore
import { Helmet } from "react-helmet"

export default function ColorNamer() {
  return (
    <main className="mx-4  my-8   ">
      <Helmet>
        <title>Color Namer - CSS Mate</title>
        <meta
          name="description"
          content="Discover the perfect color for your project with our color naming app.  Try our color naming app today and take your design to the next level."
        />

        <meta name="keywords" content="color tool, color naming app, design tool" />
      </Helmet>
      <h1 className="mb-8 text-center font-cursiveCustom   text-2xl">
        Name
        <span className="text-secondary-300">&#32;colors&#32;</span>
        below
      </h1>

      <ColorNamerSidemenu />
    </main>
  )
}
