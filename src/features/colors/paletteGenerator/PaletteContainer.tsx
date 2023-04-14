/** @format */

import { MutableRefObject } from "react"
import ColorCard from "../../../components/ColorCard"
//@ts-ignore
import colorNamer from "color-namer"
import calculatePalette from "./OutputGeneratorFuncs"
import HexToRGB from "../../../utils/colors/HexToRGB"

type Props = {
  compRef: MutableRefObject<HTMLDivElement | null>
  conditional: boolean
  colorInput: string
  title: string
  type: string
  descr: string
  amount: number
}

export default function PaletteContainer({
  compRef,
  conditional,
  colorInput,
  title,
  type,
  descr,
  amount,
}: Props) {
  function colorNamerFunc(hex: string) {
    try {
      return colorNamer(hex).ntc[0].name
    } catch (errz) {
      return `Unnamed`
    }
  }

  function pushObjToArray(times: number) {
    const array = []

    for (let i = 0; i < times; i++) {
      array.push("obj")
    }

    return array
  }

  return (
    <div
      className={` my-16 mx-auto  w-fit rounded-xl border-2 border-slate-500 bg-darkJungle-900 opacity-0 duration-500 ${
        conditional ? "-translate-y-20 opacity-100" : ""
      }`}
    >
      <div className="menuHeader     px-4 py-2">
        <h3 className="  text-center font-cursiveCustom  text-lg text-slate-300 ">
          {title}
        </h3>
      </div>

      <p
        className={`m-4 mx-auto px-4 ${
          amount > 2 ? "max-w-lg " : "max-w-md "
        }text-center text-slate-200`}
      >
        {descr}
      </p>
      <div
        className="mx-8 mb-8 flex min-h-[180px] flex-wrap justify-center gap-4"
        ref={compRef}
      >
        {conditional
          ? calculatePalette(type, colorInput).map((color, i) => (
              <div key={i}>
                <ColorCard
                  colorName={colorNamerFunc(color)}
                  bgColor={HexToRGB(color)}
                  hex={color}
                  rgb={HexToRGB(color)}
                />
              </div>
            ))
          : pushObjToArray(amount).map((color, i) => (
              <div key={i}>
                <div className="menuBlock w-40">
                  <div className=" flex h-24 flex-col justify-around rounded-t-lg rounded-b-md ">
                    &nbsp;
                  </div>
                  <div className="mx-2 mt-1 rounded-md   ">&nbsp;</div>
                  <div className="mx-2  rounded-md py-[2px]   ">&nbsp;</div>
                  <div className="  mx-2 mb-1  rounded-md py-[2px]">&nbsp;</div>
                </div>
              </div>
            ))}
      </div>
    </div>
  )
}
