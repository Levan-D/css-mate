/** @format */

import FlooFGPTIcon from "../../assets/icons/floofGPT.png"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setIsOpen, setIsExpanded } from "./floofGPTSlice"
import { useLocation, Link } from "react-router-dom"
import Tooltip from "../../components/Tooltip"

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
    <div className={` flex justify-between  bg-primary p-1 sm:rounded-t-xl`}>
      <div
        onClick={meow}
        className="w-fit cursor-pointer select-none rounded-full border-2 shadow-primaryBr duration-200 sm:hover:border-secondary-300 sm:hover:brightness-110"
      >
        <img className="w-8  " src={FlooFGPTIcon} alt="" />
      </div>
      <p className="text-md grow text-center font-bold leading-8  ">
        FlooF-GPT
        <span
          className={` ${
            isExpanded ? "  inline opacity-100 " : " hidden  opacity-0 "
          } font-normal italic  duration-200`}
        >
          : premier A.I. floofsistant
        </span>
        {location.pathname === "/floof-gpt" && (
          <span className={` hidden font-normal  italic duration-200 sm:inline  `}>
            : premier A.I. floofsistant
          </span>
        )}
      </p>
      {location.pathname !== "/floof-gpt" && (
        <>
          <Link to="/floof-gpt">
            <Tooltip text="Fullscreen">
              <div
                onClick={handleMinimize}
                className="w-8 cursor-pointer select-none px-2 py-2 font-bold leading-4 duration-200 sm:hover:text-secondary-300 "
              >
                <div className="rotate-[-45deg] "> &#8703;</div>
                <div className="absolute translate-y-[-16px] translate-x-[2px] rotate-45">
                  &#8703;
                </div>
              </div>
            </Tooltip>
          </Link>
          <Tooltip text={isExpanded ? "Contract" : "Expand"}>
            <div
              onClick={() => dispatch(setIsExpanded())}
              className="rotate-[-45deg] cursor-pointer select-none px-2 font-bold leading-8 duration-200 sm:hover:text-secondary-300 "
            >
              &#x2194;
            </div>
          </Tooltip>
          <Tooltip text="Minimize">
            <div
              onClick={handleMinimize}
              className="cursor-pointer select-none px-2 font-bold leading-8 duration-200 sm:hover:text-secondary-300"
            >
              &#8722;
            </div>
          </Tooltip>
        </>
      )}
    </div>
  )
}

export default Nav
