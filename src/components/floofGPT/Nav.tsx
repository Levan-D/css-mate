/** @format */

import React from "react"
import FlooFGPTIcon from "../../assets/icons/floofGPT.png"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setIsOpen, setIsExpanded } from "./floofGPTSlice"
import { useLocation, Link } from "react-router-dom"
//@ts-ignore
import { ReactComponent as FullScreenIcon } from "../../assets/icons/fullScreen.svg"

const Nav = () => {
  const dispatch = useAppDispatch()
  const { isExpanded } = useAppSelector(state => state.floof)
  const location = useLocation()

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
    <div
      className={`${
        location.pathname === "/floof-gpt" ? "" : "rounded-t-xl"
      } bg-primary  p-1 flex justify-between`}
    >
      <div
        onClick={meow}
        className="border-2 w-fit cursor-pointer sm:hover:brightness-110 sm:hover:border-secondary duration-200 rounded-full shadow-primaryBr select-none"
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
        {location.pathname === "/floof-gpt" && (
          <span className={` italic font-normal  duration-200  `}>
            : premier A.I. floofsistant
          </span>
        )}
      </p>
      {location.pathname !== "/floof-gpt" && (
        <>
          <Link to="/floof-gpt">
            <div
              onClick={handleMinimize}
              className="px-2 font-bold w-8 py-2 sm:hover:text-secondary leading-4 cursor-pointer duration-200 select-none "
            >
              <div className="rotate-[-45deg] "> &#8703;</div>
              <div className="absolute rotate-45 translate-y-[-16px] translate-x-[2px]">
                {" "}
                &#8703;
              </div>
            </div>
          </Link>
          <div
            onClick={() => dispatch(setIsExpanded())}
            className="px-2 font-bold rotate-[-45deg] sm:hover:text-secondary leading-8 cursor-pointer duration-200 select-none "
          >
            &#x2194;
          </div>
          <div
            onClick={handleMinimize}
            className="px-2 font-bold sm:hover:text-secondary leading-8 cursor-pointer duration-200 select-none"
          >
            &#8722;
          </div>
        </>
      )}
    </div>
  )
}

export default Nav
