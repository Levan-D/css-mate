/** @format */

import React from "react"
import Shape from "./Shape"
import BoxShadowOutput from "./BoxShadowOutput"
import BoxShadowSidemenu from "./BoxShadowSidemenu"
import BackToTopBtn from "../../components/BackToTopBtn"

const BoxShadow = () => {
  return (
    <div className=" my-16 mx-4">
      <BackToTopBtn />
      <h1 className="font-cursiveCustom text-center text-2xl   mb-2">
        Generate <span className="text-secondary">box shadows</span> for your project with
        ease
      </h1>
      <div className="font-cursiveCustom text-center text-base mb-16">
        Start tinkering!
      </div>

      <div className="md:flex-row flex flex-col md:justify-center justify-between md:gap-8 gap-16 lg:gap-36 mb-16 ">
        <BoxShadowSidemenu />
        <div>
          <Shape />
        </div>
      </div>
      <BoxShadowOutput />
    </div>
  )
}

export default BoxShadow
