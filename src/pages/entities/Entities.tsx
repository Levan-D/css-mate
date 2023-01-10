/** @format */

import React from "react"
import { EntitiesData } from "./Data"
import CatDisplay from "../../components/wrappers/CatDisplay"

const Entities = () => {
  return (
    <div className="my-16">
      <h1 className="font-cursiveCustom text-center text-2xl   mb-2">
        You can find commonly used HTML <span className="text-secondary">entities</span>{" "}
        below
      </h1>
      <div className="font-cursiveCustom text-center mb-16 text-base">
        rata ta tat aaaa
      </div>
      <div>
        <CatDisplay Data={EntitiesData} />
      </div>
    </div>
  )
}

export default Entities
