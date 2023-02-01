/** @format */

import { useState, useEffect } from "react"
import logo from "../../assets/logo/logo.png"
import { Link, useLocation } from "react-router-dom"
import { pageButtons } from "../../data/PageButtons"
import githubIcon from "../../assets/icons/github.png"

const Navbar = () => {
  const [selected, setSelected] = useState<string>("")
  const location = useLocation()

  // useEffect(() => {
  //   const index = pageButtons.findIndex(button => {
  //     return button.path == location.pathname.slice(1)
  //   })
  //   index !== -1 && setSelected(() => pageButtons[index].name)
  // }, [])

  return (
    <div className="z-40 h-16 bg-primary">
      <nav className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 align-bottom">
        <div>
          <Link to="/">
            <img
              onClick={() => setSelected(() => "")}
              className="h-12 cursor-pointer duration-200 active:brightness-75  "
              src={logo}
              alt="logo"
            />
          </Link>
        </div>
        <ul className="flex gap-4">
          {pageButtons.map((category, i) => (
            <li
              key={i}
              className={`  group shrink-0 cursor-pointer select-none whitespace-nowrap border-b-2  border-transparent font-cursiveCustom text-xl font-bold `}
            >
              <div> {category.catName}</div>
              <ul className="absolute hidden rounded-lg border-2 bg-gradient-to-r from-[#151f36] to-slate-900 py-4 px-8 duration-200 group-hover:block">
                {category.catCon.map((btn, index) => (
                  <li
                    key={index}
                    className={`${
                      selected === btn.name && "!text-secondary"
                    } shrink-0 cursor-pointer select-none border-b-2 border-transparent font-cursiveCustom  text-lg font-bold duration-300 active:brightness-75 sm:hover:border-white `}
                    onClick={() => setSelected(() => btn.name)}
                  >
                    <Link className="p-1" to={btn.path}>
                      {btn.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}

          <li
            className={`   shrink-0 cursor-pointer select-none rounded-full  border-2 border-transparent text-lg duration-300 active:brightness-75 sm:hover:border-white`}
          >
            <a href="https://github.com/Levan-D/CSSHomie" target="_blank">
              <img className="h-6" src={githubIcon} alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
