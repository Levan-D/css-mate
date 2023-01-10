/** @format */

import React, { useState, useMemo } from "react"
import { CatDisplayDataType } from "./WrapperTypes"

type CatDisplayType = {
  Data: CatDisplayDataType[]
}

const CatDisplay = ({ Data }: CatDisplayType) => {
  const navBtns: string[] = []

  Data.forEach(data => {
    navBtns.push(data.category)
  })

  const [activeBtn, setActiveBtn] = useState<string>(navBtns[0])

  return (
    <div className="border-2 border-white rounded-xl mx-auto w-fit max-w-6xl ">
      <div className="flex   bg-primary [&>*:not(:last-child)]:border-r-2 [&>*]:border-l-white rounded-t-xl pt-3 pb-2 overflow-y-auto">
        {navBtns.map((btn, i) => (
          <div
            key={i}
            onClick={() => setActiveBtn(() => btn)}
            className={`  ${
              activeBtn === btn && `!text-dark`
            } cursor-pointer font-bold text-lg  font-cursiveCustom  px-4 shrink-0  hover:text-slate-600  duration-200 `}
          >
            {btn}
          </div>
        ))}
      </div>

      <div className="px-4 py-2">
        <div className="grid grid-cols-3 font-bold">
          <h3>Char</h3>
          <h3>Hex</h3>
          <h3>Desc</h3>
        </div>
        {Data.map((cat, i) => (
          <div key={i}>
            {cat.category === activeBtn && (
              <div>
                {cat.content.map((char, i) => (
                  <div key={i} className="grid grid-cols-3">
                    <div>{char.character}</div>
                    <div>{char.hexadecimal}</div>
                    <div>{char.description}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CatDisplay
