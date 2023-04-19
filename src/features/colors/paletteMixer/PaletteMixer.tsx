/** @format */

import React from "react"
import PaletteSidemenu from "./paletteSidemenu/PaletteSidemenu"
import StopDisplay from "./StopDisplay"
import PaletteOutput from "./PaletteOutput"
//@ts-ignore
import { Helmet } from "react-helmet"

export default function PaletteMixer() {
  return (
    <main className=" mx-4   mb-16  mt-8">
      <Helmet>
        <title>Palette Mixer - CSS Mate</title>
        <meta
          name="description"
          content="Create custom color blends for your design projects with our easy-to-use palette mixer app. Our app lets you mix two colors and generate a custom number of color steps in between, making it easy to create unique gradients and color blends. Use our app to experiment with different color combinations and find the perfect blend for your next project."
        />

        <meta
          name="keywords"
          content="color mixer, color blending, color steps, gradient generator, web design, graphic design, color schemes, color selection, color combinations, color matching, color theory, color palettes, custom color blends, color picker"
        />

        <meta property="og:title" content="Palette Mixer" />
        <meta
          property="og:description"
          content="Create custom color blends for your design projects with our easy-to-use palette mixer app. Our app lets you mix two colors and generate a custom number of color steps in between, making it easy to create unique gradients and color blends. Use our app to experiment with different color combinations and find the perfect blend for your next project."
        />
        <meta
          property="og:image"
          content="https://cssmate.online/openGraphTags/paletteMixer.png"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cssmate.online/colors/palette-mixer" />
      </Helmet>
      <h1 className="mb-2 text-center font-cursiveCustom   text-2xl">
        Mix <span className="text-secondary-300">colors</span> and create gradients below
      </h1>
      <p className=" mb-2 text-center font-cursiveCustom text-base">
        Pick the starting & ending color by clicking the shade rectangle, from swatches,
        or by entering a custom hex value.
      </p>
      <p className="mb-2 text-center font-cursiveCustom text-base">
        Pick a color close to white as the last shade to create a neutral tint palette for
        your styleguide.
      </p>
      <p className="mb-8 text-center font-cursiveCustom text-base">
        You can also check contrast ratios of backgrounds and textcolors for readability
        based on w3 standards.
      </p>

      <div className="mt-16 mb-16 flex flex-col justify-between gap-16 md:flex-row md:justify-center md:gap-4 lg:gap-12 ">
        <div>
          <PaletteSidemenu />
        </div>
        <StopDisplay />
      </div>
      <PaletteOutput />
    </main>
  )
}
