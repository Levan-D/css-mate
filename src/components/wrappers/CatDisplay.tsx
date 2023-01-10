/** @format */

import React, { useState, useMemo } from "react"
import { CatDisplayDataType } from "./WrapperTypes"

type CatDisplayType = {
  Data: CatDisplayDataType[]
  Headers: string[]
  flexBasis: string
}

const CatDisplay = ({ Data, Headers, flexBasis }: CatDisplayType) => {
  const navBtns: string[] = []

  Data.forEach(data => {
    navBtns.push(data.category)
  })

  const [activeBtn, setActiveBtn] = useState<string>(navBtns[0])

  return (
    <div className="border-2 border-white rounded-xl mx-auto w-fit ">
      <div className="   bg-primary  rounded-t-xl py-3  justify-center flex flex-wrap">
        {navBtns.map((btn, i) => (
          <div
            key={i}
            onClick={() => setActiveBtn(() => btn)}
            className={`  ${
              activeBtn === btn && `!text-dark`
            } cursor-pointer font-bold   font-cursiveCustom     px-2 text-md   hover:text-slate-600  duration-200 sm:mx-2 md:mx-6 md:text-lg`}
          >
            {btn}
          </div>
        ))}
      </div>

      <div className="px-4 py-2">
        <div className={"flex"}>
          {Headers.map((header, i) => (
            <h3 key={i} className={`${flexBasis} font-bold`}>
              {header}
            </h3>
          ))}
        </div>
        {Data.map((cat, i) => (
          <div key={i}>
            {cat.category === activeBtn && (
              <div>
                {cat.content.map((char, i) => (
                  <div key={i} className={"flex"}>
                    <div className={`${flexBasis}  px-2 `}>{char.character}</div>
                    <div className={`${flexBasis} `}>
                      <div
                        className={` cursor-pointer   hover:bg-slate-100  active:bg-slate-300 hover:text-dark w-fit px-2 duration-200 rounded-md `}
                        onClick={() => {
                          navigator.clipboard.writeText(char.hexadecimal)
                        }}
                      >
                        {char.hexadecimal}
                      </div>
                    </div>
                    <div className={`${flexBasis}  px-2 `}>{char.description}</div>
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
