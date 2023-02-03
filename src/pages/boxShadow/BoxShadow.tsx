/** @format */

import React from "react"
import Shape from "./Shape"
import BoxShadowOutput from "./BoxShadowOutput"
import BoxShadowSidemenu from "./boxShadowSidemenu/BoxShadowSidemenu"
import Tips from "./tips/Tips"
import TableOfContents from "../../components/TableOfContents"

const BoxShadow = () => {
  const tableOfContets = [
    "Box shadow",
    "Tips & tricks",
    "Basics",
    "Multiple shadows",
    "Glow effects",
    "3D effects",
    "Cheese",
  ]

  return (
    <div className=" my-16 mx-4">
      <h1 className="mb-2 text-center font-cursiveCustom   text-2xl">
        Generate <span className="text-secondary">box shadows</span> for your project with
        ease
      </h1>
      <div className="mb-8 text-center font-cursiveCustom text-base">
        Scroll below for tips & tricks
      </div>
      <TableOfContents tableOfContets={tableOfContets} />
      <div
        id="Box shadow"
        className="mt-16 mb-16 flex flex-col justify-between gap-16 md:flex-row md:justify-center md:gap-2 lg:gap-36 "
      >
        <BoxShadowSidemenu />
        <div>
          <Shape />
        </div>
      </div>
      <BoxShadowOutput />
      <div className="mt-20">
        <Tips />
      </div>
    </div>
  )
}

export default BoxShadow
