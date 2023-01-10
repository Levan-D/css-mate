/** @format */

import { useState, useEffect } from "react"
import logo from "../../assets/logo/logo.png"
import { Link, useLocation } from "react-router-dom"
import { pageButtons } from "../../data/PageButtons"
import githubIcon from "../../assets/icons/github.png"

const Navbar = () => {
  const [selected, setSelected] = useState<string>("")
  const location = useLocation()

  useEffect(() => {
    const index = pageButtons.findIndex(button => {
      return button.path == location.pathname.slice(1)
    })
    index !== -1 && setSelected(() => pageButtons[index].name)
  }, [])

  return (
    <div className="bg-primary h-16 z-50">
      <nav className="max-w-4xl h-16 align-bottom items-center flex justify-between mx-auto px-4">
        <div>
          <Link to="/">
            <img
              onClick={() => setSelected(() => "")}
              className="h-12 cursor-pointer active:brightness-75 duration-75"
              src={logo}
              alt="logo"
            />
          </Link>
        </div>
        <ul className="flex gap-4   ">
          {pageButtons.map((button, i) => (
            <li
              key={i}
              className={`${
                selected === button.name && "!border-secondary"
              } font-bold font-cursiveCustom text-lg cursor-pointer select-none  border-b-2 border-transparent hover:border-white duration-300 active:brightness-75 `}
              onClick={() => setSelected(() => button.name)}
            >
              <Link className="p-1" to={button.path}>
                {button.name}
              </Link>
            </li>
          ))}
          <li
            className={` font-bold font-cursiveCustom text-lg cursor-pointer select-none  border-b-2 border-transparent hover:brightness-90 duration-300 active:brightness-75 `}
          >
            <a href="https://github.com/Levan-D/CSSHomie" target="_blank">
              <img className="h-7" src={githubIcon} alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
