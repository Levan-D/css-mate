/** @format */

import React from "react"
import { EntitiesData } from "./Data"
import CatDisplay from "../../components/wrappers/CatDisplay"

const Entities = () => {
  return (
    <div className="my-16 mx-4">
      <h1 className="font-cursiveCustom text-center text-2xl   mb-2">
        You can find commonly used HTML
        <span className="text-secondary">&#32;entities&#32;</span>
        below
      </h1>
      <div className="font-cursiveCustom text-center mb-16 text-base">
        click on hexadecimal elements to copy to clipboard
      </div>
      <div>
        <CatDisplay
          Data={EntitiesData}
          flexBasis={"basis-1/3"}
          Headers={["Character", "Hexadecimal", "Description"]}
        />
      </div>
    </div>
  )
}

export default Entities
