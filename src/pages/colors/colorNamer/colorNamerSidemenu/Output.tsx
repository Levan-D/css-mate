/** @format */

import { useEffect, useState } from "react"
import { useAppSelector } from "../../../../app/hooks"
import ColorInverter from "../../../../utils/ColorInverter"
//@ts-ignore
import colorNamer from "color-namer"

export default function Output() {
  const { outputText, outputType, inputText, isColorValid } = useAppSelector(
    store => store.colorNamer
  )
  const [colorDisplay, setColorDisplay] = useState("")

  useEffect(() => {
    if (isColorValid) {
      try {
        setColorDisplay(() => colorNamer(outputText).ntc[0].name)
      } catch (errz) {
        setColorDisplay(() => colorDisplay)
      }
    }
  }, [inputText])

  return (
    <div className="menuContainer m-4">
      <div
        style={{ backgroundColor: outputText || `#172437` }}
        className=" m-2 flex  h-24  flex-col justify-around rounded-xl border-2    font-bold"
      >
        <div
          style={{ color: outputText && ColorInverter(outputText, "bw") }}
          className="mx-auto w-fit"
        >
          {colorDisplay}
        </div>
      </div>
    </div>
  )
}
