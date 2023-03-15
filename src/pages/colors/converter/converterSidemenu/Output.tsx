/** @format */

import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { handleOutputBtn } from "../converterSlice"
import Tooltip from "../../../../components/Tooltip"
import { inputBtns } from "../converterSlice"

export default function Output() {
  const { inputType, outputType, outputText } = useAppSelector(store => store.converter)
  const dispatch = useAppDispatch()

  return (
    <div className="menuContainer m-4  pb-4  ">
      <div className="menuHeader py-1 text-center">Output Color Value</div>
      <div className="menuBlock m-2 flex justify-between px-2 py-1">
        {inputBtns.map((btnType, i) => (
          <div
            key={i}
            onClick={() => dispatch(handleOutputBtn(btnType))}
            className={`${
              outputType.name === btnType.name ? "btnSecondary" : "btnSecondaryDisabled"
            } ${
              inputType.name === btnType.name && " cursor-auto opacity-60"
            }   h-8 px-3 text-sm leading-4`}
          >
            {btnType.name}
          </div>
        ))}
      </div>

      <div className="menuBlock m-2   px-2 py-1 text-center">
        <div className={`${outputText === "" && `text-slate-300`} menuContainer py-2 text-lg font-bold`}>
          {outputText === "" ? outputType.value : outputText}
        </div>
        <Tooltip text="Copied" onClick={true}>
          <div
            onClick={() => {
              navigator.clipboard.writeText(
                outputText === "" ? outputType.value : outputText
              )
            }}
            className="btnPrimary shadow-custom my-1 w-full !py-1 "
          >
            Copy
          </div>
        </Tooltip>
      </div>
    </div>
  )
}
