/** @format */

import { useEffect, useState } from "react"
import { useAppSelector } from "../../../../app/hooks"
import ColorInverter from "../../../../utils/ColorInverter"
//@ts-ignore
import colorNamer from "color-namer"
import Tooltip from "../../../../components/Tooltip"

export default function Output() {
  const { outputText, inputText, isColorValid } = useAppSelector(
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
        className={`  m-2 flex  h-24  flex-col justify-around rounded-xl border-2    font-bold`}
      >
        <div
          style={{ color: outputText && ColorInverter(outputText, "bw") }}
          className="mx-auto w-fit text-xl [text-shadow:0px_0px_10px__rgba(0,_0,_0,1),0px_0px_16px__rgba(255,255,255,1)]"
        >
          {colorDisplay}
        </div>
      </div>

      <div className="m-2">
        <Tooltip text="Copied" onClick={colorDisplay !== "" ? true : false}>
          <div
            onClick={() => {
              colorDisplay !== "" && navigator.clipboard.writeText(colorDisplay)
            }}
            className={` ${
              colorDisplay !== "" && `cursor-pointer`
            }  btnPrimary w-full text-center`}
          >
            Copy
          </div>
        </Tooltip>
      </div>
    </div>
  )
}
