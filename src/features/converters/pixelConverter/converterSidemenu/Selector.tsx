/** @format */

import React from "react"
import { inputBtnsPX } from "../pixelConverterSlice"
import { useAppSelector, useAppDispatch } from "../../../../app/hooks"
import { handleInputBtn } from "../pixelConverterSlice"

export default function Selector() {
  const dispatch = useAppDispatch()
  const { inputType } = useAppSelector(store => store.pixelConverter)

  return (
    <div className="menuContainer m-4">
      <div className="menuHeader py-1  text-center  text-xs italic text-slate-200">
        Pick type
      </div>
      <div className="menuBlock m-2 flex justify-around px-2 py-1">
        {inputBtnsPX.map((btnType, i) => (
          <div
            key={i}
            onClick={() => {
              dispatch(handleInputBtn(btnType))
            }}
            className={`${
              inputType === btnType ? "btnSecondary" : "btnSecondaryDisabled"
            }   h-8 px-4 text-sm leading-4`}
          >
            {btnType}
          </div>
        ))}
      </div>
    </div>
  )
}
