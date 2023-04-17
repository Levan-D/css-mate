/** @format */

import React from "react"
import ConverterSidemenu from "./converterSidemenu/ConverterSidemenu"
//@ts-ignore
import { Helmet } from "react-helmet"

export default function PixelConverter() {
  return (
    <main className="mx-4  my-8   ">
      <Helmet>
        <title>Pixel Converter - CSS Mate</title>
        <meta
          name="description"
          content="Convert measurements between pt, em, cm, mm, and px with our easy-to-use measurement converter app. Our app makes it easy to switch between different measurement units and find the perfect measurement for your design project. Use our app to streamline your measurement conversion process and save time on your design projects."
        />

        <meta
          name="keywords"
          content="measurement converter, pt to em, cm to mm, px to pt, web design, graphic design, measurement units, conversion calculator, design tools, typography, font sizes, responsive design, layout design, user interface design, user experience design"
        />
      </Helmet>
      <h1 className="mb-8 text-center font-cursiveCustom   text-2xl">
        Convert
        <span className="text-secondary-300">&#32;pixels&#32;</span>
        below
      </h1>

      <ConverterSidemenu />
    </main>
  )
}
