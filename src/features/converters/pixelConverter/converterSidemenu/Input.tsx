/** @format */

import React from "react"
import { useAppSelector, useAppDispatch } from "../../../../app/hooks"
import { setInputNumb, setInputBase, setFlip, setInputPPI } from "../pixelConverterSlice"

export default function Input() {
  const dispatch = useAppDispatch()
  const { inputNumb, base, inputType, PPI, flip } = useAppSelector(
    store => store.pixelConverter
  )

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="menuContainer m-4">
      <div className="menuHeader py-1  text-center  text-xs italic text-slate-200">
        Input {flip ? inputType : "PX"}{" "}
        {inputType === "PT" ? "" : inputType === "EM" ? "& Base" : "& PPI"}
      </div>
      <div className="menuBlock m-2  px-2 py-1">
        <form onSubmit={handleFormSubmit}>
          <div className="flex justify-between   ">
            <input
              type="number"
              required
              value={inputNumb}
              onChange={e => {
                dispatch(setInputNumb(Number(e.target.value)))
              }}
              autoComplete="off"
              name="main"
              placeholder={"0"}
              className={`mr-4 w-full rounded-md bg-slate-400 px-3 py-2  pl-8 text-center text-slate-900 placeholder-slate-600 outline  outline-transparent duration-200 `}
            />

            {inputType === "EM" ? (
              <input
                type="number"
                required
                value={base}
                onChange={e => {
                  dispatch(setInputBase(Number(e.target.value)))
                }}
                autoComplete="off"
                name="base"
                placeholder={"16"}
                className={`mr-4 w-full basis-2/5 rounded-md bg-slate-400 px-3 py-2  pl-5 text-center text-slate-900 placeholder-slate-600 outline  outline-transparent duration-200 `}
              />
            ) : null}
            {inputType !== "EM" && inputType !== "PT" ? (
              <input
                type="number"
                required
                value={PPI}
                onChange={e => {
                  dispatch(setInputPPI(Number(e.target.value)))
                }}
                autoComplete="off"
                name="PPI"
                placeholder={"96"}
                className={`mr-4 w-full basis-2/5 rounded-md  bg-slate-400 px-3 py-2  pl-5 text-center text-slate-900 placeholder-slate-600 outline  outline-transparent duration-200 `}
              />
            ) : null}

            <div
              onClick={() => dispatch(setFlip())}
              className=" my-1 mr-2 h-8 w-8 cursor-pointer select-none rounded-full  border-2 border-transparent px-2 text-xl font-bold leading-[25px]  text-slate-300 duration-200  sm:hover:border-slate-300  "
            >
              <span className="inline-block -translate-x-[2px]  -translate-y-1">
                &#8630;
              </span>
              <span className="inline-block -translate-x-[2px] -translate-y-5 rotate-[180deg]">
                &#8630;
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
