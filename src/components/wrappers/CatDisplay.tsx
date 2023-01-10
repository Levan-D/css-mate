/** @format */

import React, { useState, useMemo } from "react"
import { CatDisplayDataType } from "./WrapperTypes"

type CatDisplayType = {
  Data: CatDisplayDataType[]
  Headers: string[]
  gridCols: number
}

const CatDisplay = ({ Data, Headers, gridCols }: CatDisplayType) => {
  const navBtns: string[] = []

  Data.forEach(data => {
    navBtns.push(data.category)
  })

  const [activeBtn, setActiveBtn] = useState<string>(navBtns[0])

  return (
    <div className="border-2 border-white rounded-xl mx-auto w-fit max-w-6xl ">
      <div className="flex   bg-primary [&>*:not(:last-child)]:border-r-2 [&>*]:border-l-white rounded-t-xl py-3 overflow-y-auto">
        {navBtns.map((btn, i) => (
          <div
            key={i}
            onClick={() => setActiveBtn(() => btn)}
            className={`  ${
              activeBtn === btn && `!text-dark`
            } cursor-pointer font-bold text-lg  font-cursiveCustom  px-8 shrink-0  hover:text-slate-600  duration-200 `}
          >
            {btn}
          </div>
        ))}
      </div>

      <div className="px-4 py-2">
        <div className={"grid grid-cols-" + gridCols + " font-bold"}>
          {Headers.map((header, i) => (
            <h3 key={i}>{header}</h3>
          ))}
        </div>
        {Data.map((cat, i) => (
          <div key={i}>
            {cat.category === activeBtn && (
              <div>
                {cat.content.map((char, i) => (
                  <div key={i} className={"grid grid-cols-" + gridCols + " py-1 "}>
                    <div className="px-2">{char.character}</div>
                    <div
                      className="cursor-pointer hover:bg-slate-100  active:bg-slate-300 hover:text-dark w-fit px-2 duration-200 rounded-md"
                      onClick={() => {
                        navigator.clipboard.writeText(char.hexadecimal)
                      }}
                    >
                      {char.hexadecimal}
                    </div>
                    <div className="px-2">{char.description}</div>
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
