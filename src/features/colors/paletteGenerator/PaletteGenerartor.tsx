/** @format */

import React, { useState } from "react"
import PaletteSideMenu from "./PaletteSideMenu"
import PaletteOutput from "./PaletteOutput"
//@ts-ignore
import { Helmet } from "react-helmet"

export default function PaletteGenerartor() {
  const [mainColor, setMainColor] = useState("#5ea1ff")

  return (
    <main className=" mx-4   mb-16  mt-8">
      <Helmet>
        <title>Palette Generator - CSS Mate</title>
        <meta
          name="description"
          content="Create beautiful color palettes for your design projects with our hex color palette generator app. Our app lets you generate a palette of complementary colors based on a hex color input, making it easy to create cohesive designs with just a few clicks. Use our app to explore new color schemes and find the perfect palette for your next project."
        />

        <meta
          name="keywords"
          content="color palettes, hex color input, color schemes, complementary colors, design tools, web design, graphic design, color generator, palette generator, color matching, color harmony, color coordination, color selection, color picker, color theory"
        />
      </Helmet>
      <h1 className="mb-2 text-center font-cursiveCustom   text-2xl">
        Generate <span className="text-secondary-300">color palettes</span> for your
        project with ease
      </h1>
      <p className=" mb-2 text-center font-cursiveCustom text-base">
        Discover the perfect color palette for your projects with our all-in-one generator
      </p>

      <p className="mb-8 text-center font-cursiveCustom text-base">
        Just input a color and explore or <br /> choose one of our carefully curated
        palettes from the side menu!
      </p>

      <div className="mx-auto   mt-12 w-fit">
        <PaletteSideMenu setMainColor={setMainColor} />
      </div>

      <PaletteOutput mainColor={mainColor} />
    </main>
  )
}
