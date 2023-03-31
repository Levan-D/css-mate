/** @format */

import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { handleOutputBtn } from "../colorConverterSlice"
import Tooltip from "../../../../components/Tooltip"
import { inputBtns, convertColor, inputBtnsProps } from "../colorConverterSlice"

export default function Output() {
  const { inputType, outputType, outputText, inputText } = useAppSelector(
    (store) => store.colorConverter
  )
  const dispatch = useAppDispatch()

  const outputString =
    outputType.name === "HEX" ? outputText : `${outputType.name}(${outputText})`

  const handleClick = (btnType: inputBtnsProps) => {
    dispatch(handleOutputBtn(btnType))

    if (inputText !== "") {
      dispatch(convertColor())
    }
  }
  return (
    <div className="menuContainer m-4  pb-4  ">
      <div className="menuHeader py-1 text-center text-xs italic text-slate-200">
        Output Color Value
      </div>
      <div className="menuBlock m-2 flex justify-between px-2 py-1">
        {inputBtns.map((btnType, i) => (
          <div
            key={i}
            onClick={() => handleClick(btnType)}
            className={`${
              outputType.name === btnType.name
                ? "btnSecondary"
                : "btnSecondaryDisabled"
            } ${
              inputType.name === btnType.name && " cursor-auto opacity-60"
            }   h-8 px-3 text-sm leading-4`}
          >
            {btnType.name}
          </div>
        ))}
      </div>

      <div className="menuBlock m-2   px-2 py-1 text-center">
        <div
          className={`${
            outputText === "" && `text-slate-300`
          } menuContainer py-2 text-lg font-bold`}
        >
          {outputText === "" ? outputType.outputValue : outputString}
        </div>
        <Tooltip text="Copied" onClick={true}>
          <div
            onClick={() => {
              navigator.clipboard.writeText(
                outputText === "" ? outputType.outputValue : outputString
              )
            }}
            className="btnPrimary shadow-custom my-1 w-full !py-2 "
          >
            Copy
          </div>
        </Tooltip>
      </div>
    </div>
  )
}
