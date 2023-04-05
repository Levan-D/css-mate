/** @format */

import React, { useState } from "react";
import PaletteSideMenu from "./PaletteSideMenu";
import PaletteOutput from "./PaletteOutput";

export default function PaletteGenerartor() {
  const [mainColor, setMainColor] = useState("#5ea1ff");

  return (
    <main className=" mx-4   mb-16  mt-8">
      <h1 className="mb-2 text-center font-cursiveCustom   text-2xl">
        Generate <span className="text-secondary-300">color palettes</span> for
        your project with ease
      </h1>
      <p className=" mb-2 text-center font-cursiveCustom text-base">
        Discover the perfect color palette for your projects with our all-in-one
        generator
      </p>

      <p className="mb-8 text-center font-cursiveCustom text-base">
        Just input a color and explore!
      </p>

      <div className="mx-auto   mt-12 w-fit">
        <PaletteSideMenu setMainColor={setMainColor} />
      </div>

      <PaletteOutput mainColor={mainColor} />
    </main>
  );
}
