/** @format */

import React from "react"
import Shape from "./Shape"
import BoxShadowOutput from "./BoxShadowOutput"
import BoxShadowSidemenu from "./boxShadowSidemenu/BoxShadowSidemenu"
import BackToTopBtn from "../../components/BackToTopBtn"
import Tips from "./Tips"
import TableOfContents from "../../components/TableOfContents"

const BoxShadow = () => {
  return (
    <div className=" my-16 mx-4">
      <BackToTopBtn />
      <h1 className="font-cursiveCustom text-center text-2xl   mb-2">
        Generate <span className="text-secondary">box shadows</span> for your project with
        ease
      </h1>
      <div className="font-cursiveCustom text-center text-base mb-8">
        Scroll to bot for tips & tricks
      </div>
      <TableOfContents tableOfContets={["s", "3333"]} />
      <div className="md:flex-row flex flex-col md:justify-center justify-between md:gap-2 gap-16 lg:gap-36 mt-16 mb-16 ">
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
