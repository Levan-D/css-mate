/** @format */

import React from "react"
import Shape from "./Shape"
import DropShadowOutput from "./DropShadowOutput"
import DropShadowSidemenu from "./dropShadowSidemenu/DropShadowSidemenu"
import Tips from "./tips/Tips"
import TableOfContents from "../../components/TableOfContents"

const DropShadow = () => {
  const tableOfContets = [
    "Drop shadow",
    "Tips & tricks",
    "Basics",
    "Difference between box & drop",
    "When to use",
  ]

  return (
    <div className=" my-16 mx-4">
      <h1 className="mb-2 text-center font-cursiveCustom   text-2xl">
        Generate <span className="text-secondary">drop shadows</span> for your project
        with ease
      </h1>
      <div className="mb-8 text-center font-cursiveCustom text-base">
        Scroll below for tips & tricks
      </div>
      <TableOfContents tableOfContets={tableOfContets} />
      <div
        id="Drop shadow"
        className="mt-16 mb-16 flex flex-col justify-between gap-16 md:flex-row md:justify-center md:gap-2 lg:gap-36 "
      >
        <DropShadowSidemenu />
        <div>
          <Shape />
        </div>
      </div>
      <DropShadowOutput />
      <div className="mt-20">
        <Tips />
      </div>
    </div>
  )
}

export default DropShadow
