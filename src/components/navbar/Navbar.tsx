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

    window.scrollTo(0, 0)

    return () => window.removeEventListener("resize", updateWindowWidth)
  }, [location])

  return (
    <div
      className={` ${
        !location.pathname.includes("/gradient-maker")
          ? "bg-primary"
          : "bg-primary md:bg-transparent"
      }  z-20 h-fit     md:h-16`}
    >
      <nav className="mx-auto h-fit max-w-4xl items-center justify-between align-bottom md:flex md:h-16 md:px-4">
        {/* home */}
        <div
          className="mx-auto w-fit py-2 pl-8 md:mx-0 md:p-0 "
          onClick={() => handleSubMenuClick("")}
        >
          <Link to="/">
            <img
              className="h-12 cursor-pointer duration-200 active:brightness-75  "
              src={logo}
              alt="logo"
            />
          </Link>
        </div>
        {/* home */}

        <ul className=" bg-slate-700 py-2 text-center md:flex md:bg-transparent md:py-0 md:text-start">
          {pageButtons.map((category, i) => (
            <li
              key={i}
              onClick={() => handleSubMenuClick(category.catPath)}
              className={` group  shrink-0  select-none whitespace-nowrap   rounded-2xl font-cursiveCustom  text-xl  font-bold md:mb-0  `}
            >
              {windowWidth < 768 ? (
                <div
                  onClick={() => handleSubMenuClick(category.catPath)}
                  className={`  ${
                    subMenuVis === category.catPath && `bg-slate-500`
                  } mx-8 rounded-t-lg  pt-2  sm:mx-16  cursor-pointer`}
                >
                  <div
                    className={` ${
                      pathArray[0] === category.catPath && "   !bg-secondary-300  "
                    } ${
                      subMenuVis === category.catPath && "    !bg-slate-600  "
                    } mx-8 rounded-full pb-1 pt-2 cursor-pointer sm:mx-16`}
                  >
                    {" "}
                    {category.catName}
                  </div>
                </div>
              ) : (
                <div className="py-3">
                  <Link to={category.catPath}>
                    <div
                      className={`${
                        pathArray[0] === category.catPath && "   !bg-secondary-300  "
                      } ${
                        subMenuVis === category.catPath && "    !bg-secondary-300  "
                      } rounded-full px-4 py-1 duration-200  hover:bg-secondary-200`}
                    >
                      {category.catName}
                    </div>
                  </Link>
                </div>
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
            className={` my-3.5 ml-4 hidden h-7 shrink-0 cursor-pointer select-none rounded-full border-2  border-transparent text-lg duration-300 active:brightness-75 md:block md:hover:border-white`}
          >
            <a href="https://github.com/Levan-D/CSSHomie" target="_blank">
              <img className="h-6" src={githubIcon} alt="github icon" />
            </a>
          </li>
          {/* github link */}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
