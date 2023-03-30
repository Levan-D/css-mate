/** @format */

import React from "react"
import Tooltip from "./Tooltip"

type props = {
  bgColor: string
  children?: React.ReactNode
  hex: string
  rgb: string
  colorName: string
}

export default function ColorCard({ bgColor, children, hex, rgb, colorName }: props) {
  return (
    <div className="menuBlock w-40">
      <div
        style={{ backgroundColor: `rgb(${bgColor})` }}
        className=" flex h-24 flex-col justify-around rounded-t-lg rounded-b-md text-center"
      >
        {children}
      </div>
      <div className="mx-2 mt-1 rounded-md text-center  font-semibold  ">{colorName}</div>
      <Tooltip text="Copied" onClick={true}>
        <div
          onClick={() => {
            navigator.clipboard.writeText(hex)
          }}
          className="mx-2 cursor-pointer rounded-md py-[2px] text-center text-sm font-semibold text-slate-200 duration-300 hover:bg-darkJungle-900 "
        >
          {hex}
        </div>
      </Tooltip>

      <Tooltip text="Copied" onClick={true}>
        <div
          onClick={() => {
            navigator.clipboard.writeText(`rgb(${rgb})`)
          }}
          className="  mx-2 mb-1 cursor-pointer rounded-md py-[2px] text-center text-sm font-semibold text-slate-200 duration-300 hover:bg-darkJungle-900"
        >
          rgb({rgb})
        </div>
      </Tooltip>
    </div>
  )
}
