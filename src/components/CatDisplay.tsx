/** @format */

import { useState, useMemo, ReactNode } from "react"
import Tooltip from "./Tooltip"

type Props = {
  Data: CatDisplayDataType[]
  Headers: string[]
  flexBasis: string
}

const CatDisplay = ({ Data, Headers, flexBasis }: Props) => {
  const navBtns: string[] = []

  Data.forEach(data => {
    navBtns.push(data.category)
  })

  const [activeBtn, setActiveBtn] = useState<string>(navBtns[0])

  return (
    <div className="mx-auto w-fit max-w-3xl rounded-xl border-2 border-white ">
      <div className="   flex  flex-wrap justify-center  rounded-t-xl bg-primary py-3">
        {navBtns.map((btn, i) => (
          <div
            key={i}
            onClick={() => setActiveBtn(() => btn)}
            className={`  ${
              activeBtn === btn && `!text-slate-900`
            } text-md cursor-pointer   px-2     font-cursiveCustom font-bold   duration-200  sm:mx-2 sm:hover:text-slate-600 md:mx-6 md:text-lg`}
          >
            {btn}
          </div>
        ))}
      </div>

      <div className="px-4 py-2">
        <div className={"flex"}>
          {Headers.map((header, i) => (
            <h3 key={i} className={`${flexBasis} pr-8 font-bold`}>
              {header}
            </h3>
          ))}
        </div>
        <hr className="mb-1 mt-2 h-[1px] border-0 bg-slate-500 opacity-30" />
        {Data.map((cat, i) => (
          <div key={i}>
            {cat.category === activeBtn && (
              <div>
                {cat.content.map((char, i) => (
                  <div key={i}>
                    <div className={"flex"}>
                      <div className={`${flexBasis}  px-2 `}>{char.character}</div>
                      <div className={`${flexBasis} `}>
                        <div
                          className={`group  w-fit   cursor-pointer  rounded-md px-2 transition-colors  active:bg-slate-300 sm:hover:bg-slate-100 sm:hover:text-slate-900 `}
                          onClick={() => {
                            navigator.clipboard.writeText(char.hexadecimal)
                          }}
                        >
                          <Tooltip text="Copied" onClick={true}>
                            {char.hexadecimal}
                          </Tooltip>
                          <div className=" invisible  absolute  z-50 h-[70px] w-[70px] translate-y-[-48px] translate-x-[-100px] rounded-full border-[3px] border-white bg-primary text-center text-5xl font-bold   leading-[58px]  opacity-0 transition-opacity delay-200  sm:group-hover:visible sm:group-hover:opacity-100">
                            {char.character}
                          </div>
                        </div>
                      </div>
                      {char.description && (
                        <div className={`${flexBasis}  px-2 `}>{char.description}</div>
                      )}
                    </div>
                    <hr className="my-1 h-[1px] border-0 bg-slate-500 opacity-30" />
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
