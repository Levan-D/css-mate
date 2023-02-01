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
    <div className="z-40 h-fit bg-primary sm:h-16">
      <nav className="mx-auto h-fit max-w-4xl items-center justify-between px-4 align-bottom sm:flex sm:h-16">
        <div className="mx-auto w-fit pl-8 sm:mx-0 sm:p-0">
          <Link to="/">
            <img
              onClick={() => setSelected(() => "")}
              className="h-12 cursor-pointer duration-200 active:brightness-75  "
              src={logo}
              alt="logo"
            />
          </Link>
        </div>

        <ul className="gap-4 text-center sm:flex sm:text-start">
          {pageButtons.map((category, i) => (
            <li
              key={i}
              className={`  group shrink-0 cursor-pointer select-none whitespace-nowrap border-b-2  border-transparent font-cursiveCustom text-xl font-bold `}
            >
              <div> {category.catName}</div>
              <ul className="absolute hidden translate-x-[-50px] rounded-lg border-2 bg-gradient-to-r from-[#151f36] to-slate-900 py-4 px-8 duration-200 group-hover:block">
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
            className={` hidden shrink-0  cursor-pointer select-none rounded-full border-2  border-transparent text-lg duration-300 active:brightness-75 sm:block sm:hover:border-white`}
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
