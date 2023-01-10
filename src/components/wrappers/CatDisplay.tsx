/** @format */

import React from "react"
import { CatDisplayDataType } from "./WrapperTypes"

type CatDisplayType = {
  Data: CatDisplayDataType[]
}

const CatDisplay = ({ Data }: CatDisplayType) => {
  return (
    <div>
      {Data.map((cat, i) => (
        <div key={i}>
          <h2>{cat.category}</h2>
          <div>
            {cat.content.map((char, i) => (
              <div key={i} className="flex">
                <div>{char.character}</div>
                <div>{char.hexadecimal}</div>
                <div>{char.description}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CatDisplay
