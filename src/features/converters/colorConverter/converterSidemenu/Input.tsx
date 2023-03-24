/** @format */

import React from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { handleInputBtn, setInputText, convertColor } from "../colorConverterSlice"
import { inputBtns } from "../colorConverterSlice"

export default function Input() {
  const { inputType, inputText, error } = useAppSelector(store => store.colorConverter)
  const dispatch = useAppDispatch()

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(convertColor())
  }
  return (
    <div className="menuContainer m-4    ">
      <div className="menuHeader py-1 text-center">Input Color Value</div>
      <div className="menuBlock m-2 flex justify-between px-2 py-1">
        {inputBtns.map((btnType, i) => (
          <div
            key={i}
            onClick={() => {
              dispatch(handleInputBtn(btnType))
              dispatch(convertColor())
            }}
            className={`${
              inputType.name === btnType.name ? "btnSecondary" : "btnSecondaryDisabled"
            }   h-8 px-3 text-sm leading-4`}
          >
            {btnType.name}
          </div>
        ))}
      </div>
      <div className="menuBlock mx-2  mb-2  px-2 py-1">
        <form onSubmit={handleFormSubmit}>
          <div className="flex justify-between   ">
            <input
              type="text"
              required
              value={inputText}
              onChange={e => {
                dispatch(setInputText(e.target.value))
                dispatch(convertColor())
              }}
              autoComplete="off"
              name="name"
              placeholder={inputType.value}
              className={`mr-4 w-full rounded-md bg-slate-400   px-3 py-2 text-slate-900 placeholder-slate-600 outline  outline-transparent duration-200 `}
            />

            <button
              type="submit"
              value="Rename"
              className=" my-1 h-8 w-8 rotate-[140deg] rounded-full border-2 border-transparent text-4xl font-bold leading-[25px]  text-slate-300 duration-200  sm:hover:border-slate-300  "
            >
              &#8630;
            </button>
          </div>
        </form>
      </div>
      {error && (
        <div className=" mb-2 text-center text-sm text-red-300">{`${inputText} is not a valid ${inputType.name} value`}</div>
      )}
    </div>
  )
}
