/** @format */

import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import logo from "../../assets/logo/logo.png"
import { Link, useLocation } from "react-router-dom"
import { pageButtons } from "../../data/PageButtons"
import githubIcon from "../../assets/icons/github.png"
import { setPath, setWindowWidth } from "./navbarSlice"
import DropDown from "./DropDown"

const Navbar = () => {
  const dispatch = useAppDispatch()
  const location = useLocation()

  const { pathArray, windowWidth } = useAppSelector(store => store.navbar)

  const [subMenuVis, setSubMenuVis] = useState("")

  const handleSubMenuClick = (path: string) => {
    if (subMenuVis === path) {
      setSubMenuVis("")
    } else setSubMenuVis(path)
  }

  const updateWindowWidth = () => {
    dispatch(setWindowWidth(window.innerWidth))
    setSubMenuVis("")
  }

  useEffect(() => {
    dispatch(setPath(location.pathname))
    window.addEventListener("resize", updateWindowWidth)

    return () => window.removeEventListener("resize", updateWindowWidth)
  }, [location])

  return (
    <div
      className={` ${
        !location.pathname.includes("/gradient-maker")
          ? "bg-primary"
          : "bg-primary sm:bg-transparent"
      }  z-40 h-fit     sm:h-16`}
    >
      <nav className="mx-auto h-fit max-w-4xl items-center justify-between align-bottom sm:flex sm:h-16 sm:px-4">
        {/* home */}
        <div className="mx-auto w-fit py-2 pl-8 sm:mx-0 sm:p-0">
          <Link to="/">
            <img
              className="h-12 cursor-pointer duration-200 active:brightness-75  "
              src={logo}
              alt="logo"
            />
          </Link>
        </div>
        {/* home */}

        <ul className=" bg-slate-700 py-2 text-center sm:flex sm:bg-transparent sm:py-0 sm:text-start">
          {pageButtons.map((category, i) => (
            <li
              key={i}
              className={` ${
                windowWidth > 540
                  ? pathArray[0] === category.catPath &&
                    "   mx-4 !bg-slate-500 sm:mx-0 sm:!bg-secondary-300  "
                  : subMenuVis === category.catPath &&
                    "   mx-4 !bg-slate-500 sm:mx-0 sm:!bg-secondary-300  "
              }  group shrink-0 cursor-pointer select-none whitespace-nowrap rounded-2xl  px-4 py-1 font-cursiveCustom text-xl  font-bold duration-200  sm:hover:bg-secondary-200 `}
            >
              {windowWidth < 540 ? (
                <div onClick={() => handleSubMenuClick(category.catPath)}>
                  {category.catName}
                </div>
              ) : (
                <Link to={category.catPath}>
                  <div> {category.catName}</div>
                </Link>
              )}

              {/* dropdown menu */}
              <DropDown
                category={category}
                subMenuVis={subMenuVis}
                windowWidth={windowWidth}
                handleSubMenuClick={handleSubMenuClick}
              />
              {/* dropdown menu */}
            </li>
          ))}
          {/* github link */}
          <li
            className={` my-1 ml-4 hidden shrink-0  cursor-pointer select-none rounded-full border-2  border-transparent text-lg duration-300 active:brightness-75 sm:block sm:hover:border-white`}
          >
            <a href="https://github.com/Levan-D/CSSHomie" target="_blank">
              <img className="h-6" src={githubIcon} alt="" />
            </a>
          </li>
          {/* github link */}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
