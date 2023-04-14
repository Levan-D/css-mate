/** @format */

import React from "react"
import Tooltip from "./Tooltip"
import type { paletteSwatches } from "../data/PaletteData"
//@ts-ignore
import { ReactComponent as CopyIcon } from "../assets/icons/copy.svg"
import ColorInverter from "../utils/colors/ColorInverter"

type Props = { swatch: paletteSwatches }

export default function PaletteCard({ swatch }: Props) {
  const basis = (1 / swatch.colors.length) * 100
  return (
    <div className="h-fit rounded-lg bg-slate-500 p-2 duration-300 hover:shadow-[0px_0px_12px_6px_rgba(255,_255,_255,0.7)]">
      <div className={`flex h-36 w-72`}>
        {swatch.colors.map((color, index) => (
          <div
            key={index}
            className={`${index === 0 && `rounded-l-md`} ${
              index === swatch.colors.length - 1 && `rounded-r-md`
            } group h-full shrink-0 grow duration-300 hover:grow-[2]`}
            style={{ transformOrigin: "left", background: color }}
          >
            <Tooltip text="Copied" onClick={true} customCSS="translate-y-[20px]">
              <div
                style={{ color: ColorInverter(color, `bw`) }}
                onClick={() => {
                  navigator.clipboard.writeText(color)
                }}
                className={`  hidden h-full cursor-pointer items-center justify-center p-1 font-semibold text-white   opacity-0 transition-opacity duration-300 group-hover:flex group-hover:opacity-100`}
              >
                {color}
              </div>
            </Tooltip>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between p-1 pt-2">
        <div>{swatch.name}</div>
        <div className="flex  gap-2">
          <Tooltip text="Copied" onClick={true}>
            <div
              onClick={() => {
                navigator.clipboard.writeText(swatch.colors.join(", "))
              }}
              className="btnSecondary shadow-custom  py-1 px-2 text-sm"
            >
              <CopyIcon height={20} width={20} />
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
