/** @format */

import React from "react"
import FlooFGPTIcon from "../../assets/icons/floofGPT.png"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setIsOpen, setIsExpanded } from "./floofGPTSlice"

const Nav = () => {
  const dispatch = useAppDispatch()
  const { isExpanded } = useAppSelector(state => state.floof)

  const meow = () => {
    let audio = new Audio("/meow.mp3")
    audio.volume = 0.2
    audio.play()
  }

  const handleMinimize = () => {
    dispatch(setIsOpen(false))
    dispatch(setIsExpanded(false))
  }

  return (
    <div className="bg-primary rounded-t-xl p-1 flex justify-between ">
      <div
        onClick={meow}
        className="border-2 w-fit cursor-pointer hover:brightness-110 hover:border-secondary duration-200 rounded-full shadow-primaryBr select-none"
      >
        <img className="w-8  " src={FlooFGPTIcon} alt="" />
      </div>
      <p className="font-bold text-md leading-8 grow text-center  ">
        FlooF-GPT
        <span
          className={` ${
            isExpanded ? "  opacity-100 inline " : " opacity-0  hidden "
          } italic font-normal  duration-200`}
        >
          : premier A.I. floofsistant
        </span>
      </p>
      <div
        onClick={() => dispatch(setIsExpanded())}
        className="px-2 font-bold rotate-[-45deg] hover:text-secondary leading-8 cursor-pointer duration-200 select-none "
      >
        &#x2194;
      </div>
      <div
        onClick={handleMinimize}
        className="px-2 font-bold hover:text-secondary leading-8 cursor-pointer duration-200 select-none"
      >
        &#8722;
      </div>
    </div>
  )
}

export default Nav
