/** @format */

import React, { useState } from "react"
import FlooFGPTIcon from "../../assets/icons/floofGPT.png"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import Nav from "./Nav"
import Input from "./Input"
import Body from "./Body"
import { setIsOpen } from "./floofGPTSlice"
import Tooltip from "../Tooltip"
import { useLocation, Link } from "react-router-dom"
const FloofGPT = () => {
  const dispatch = useAppDispatch()
  const { isOpen, isExpanded } = useAppSelector(state => state.floof)
  const location = useLocation()
  return (
    <>
      {location.pathname !== "/floof-gpt" && (
        <>
          <div
            className={`${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-40"} ${
              isExpanded ? "w-[500px] h-[600px]" : " w-72 h-[460px]"
            }  flex-col fixed  hidden sm:flex bottom-4 left-4  rounded-xl  duration-200  bg-slate-200   shadow-primaryBr origin-bottom-left  z-50`}
          >
            <Nav />
            <Body />
            <Input />
          </div>

          <div
            className={` fixed  sm:hidden duration-500 ease-out  bottom-4 left-4 cursor-pointer sm:hover:brightness-110 sm:hover:border-secondary rounded-full shadow-primaryBr  border-2     z-40`}
          >
            <Link to="/floof-gpt">
              <img className="w-14  " src={FlooFGPTIcon} alt="" />
            </Link>
          </div>

          <div
            onClick={() => dispatch(setIsOpen(true))}
            className={` ${
              !isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
            } hidden sm:block   fixed duration-500 ease-out  bottom-4 left-4 cursor-pointer sm:hover:brightness-110 sm:hover:border-secondary rounded-full shadow-primaryBr  border-2     z-40`}
          >
            <Tooltip text="Hi, chat?">
              <img className="w-14  " src={FlooFGPTIcon} alt="" />
            </Tooltip>
          </div>
        </>
      )}
    </>
  )
}

export default FloofGPT
