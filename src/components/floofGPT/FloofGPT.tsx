/** @format */

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
              isExpanded ? "h-[600px] w-[500px]" : " h-[460px] w-72"
            }  fixed bottom-4 left-4  z-50 hidden origin-bottom-left flex-col  rounded-xl  bg-slate-200  shadow-primaryBr   duration-200 sm:flex  8xl:left-[calc(50%-1240px)]`}
          >
            <Nav />
            <Body />
            <Input />
          </div>

          <div
            className={` fixed bottom-4 left-4 z-40 cursor-pointer  rounded-full border-2 shadow-primaryBr duration-500 ease-out sm:hidden sm:hover:border-secondary  sm:hover:brightness-110     8xl:left-[calc(50%-1240px)]`}
          >
            <Link to="/floof-gpt">
              <img className="w-14  " src={FlooFGPTIcon} alt="" />
            </Link>
          </div>

          <div
            onClick={() => dispatch(setIsOpen(true))}
            className={` ${
              !isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
            } fixed bottom-4 left-4  z-40 hidden cursor-pointer  rounded-full border-2 shadow-primaryBr duration-500 ease-out sm:block sm:hover:border-secondary  sm:hover:brightness-110     8xl:left-[calc(50%-1240px)]`}
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
