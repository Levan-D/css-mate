/** @format */

import React, { useState } from "react"
import FlooFGPTIcon from "../../assets/icons/floofGPT.png"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import Nav from "./Nav"
import Input from "./Input"
import Body from "./Body"
import { setIsOpen } from "./floofGPTSlice"
import Tooltip from "../Tooltip"

const FloofGPT = () => {
  const dispatch = useAppDispatch()
  const { isOpen, isExpanded } = useAppSelector(state => state.floof)

  return (
    <>
      <div
        className={`${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-40"} ${
          isExpanded ? "w-[500px] h-[600px]" : " w-72 h-[460px]"
        } flex flex-col fixed bottom-4 left-4  rounded-xl border duration-200  bg-slate-200   shadow-primaryBr origin-bottom-left  z-50`}
      >
        <Nav />
        <Body />
        <Input />
      </div>

      <div
        onClick={() => dispatch(setIsOpen(true))}
        className={` ${
          !isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }   duration-500 ease-out fixed bottom-4 left-4 cursor-pointer hover:brightness-110 hover:border-secondary rounded-full shadow-primaryBr  border-2     z-40`}
      >
        <Tooltip text="Hi, chat?">
          <img className="w-14  " src={FlooFGPTIcon} alt="" />
        </Tooltip>
      </div>
    </>
  )
}

export default FloofGPT
