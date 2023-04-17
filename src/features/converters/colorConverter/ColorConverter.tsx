/** @format */

import ConverterSidemenu from "./converterSidemenu/ConverterSidemenu"
import Shape from "./Shape"
//@ts-ignore
import { Helmet } from "react-helmet"

export default function ColorConverter() {
  return (
    <main className="mx-4  my-8   ">
      <Helmet>
        <title>Color Converter - CSS Mate</title>
        <meta
          name="description"
          content="Easily convert between HSL, CMYK, HEX, RGB, and HSV color formats with our color converter app. Our app makes it easy to switch between different color formats and find the perfect color for your design project. Use our app to streamline your color conversion process and save time on your design projects."
        />

        <meta
          name="keywords"
          content="color converter, HSL to CMYK, HEX to RGB, color formats, web design, graphic design, color matching, color selection, color conversion, color theory, color models, color space, color picker, color palette, color combinations"
        />
      </Helmet>
      <h1 className="mb-8 text-center font-cursiveCustom   text-2xl">
        Convert
        <span className="text-secondary-300">&#32;colors&#32;</span>
        below
      </h1>

      <ConverterSidemenu />
      <Shape />
    </main>
  )
}
