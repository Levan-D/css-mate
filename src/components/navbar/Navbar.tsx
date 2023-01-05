/** @format */

import { useState, useEffect } from "react"
import logo from "../../assets/logo/logo.png"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const [selected, setSelected] = useState<string>("")
  const location = useLocation()

  useEffect(() => {
    const index = buttons.findIndex(button => {
      return button.path == location.pathname.slice(1)
    })
    index !== -1 && setSelected(() => buttons[index].name)
  }, [])

  const buttons = [
    {
      name: "Box Shadow",
      path: "box-shadow",
    },
    // {
    //   name: "Text Shadow",
    //   path: "text-shadow",
    // },
    {
      name: "Gradient",
      path: "gradient",
    },
    // {
    //   name: "Border",
    //   path: "border",
    // },
    // {
    //   name: "Transform",
    //   path: "transform",
    // },
    // {
    //   name: "Color Converter",
    //   path: "color-converter",
    // },
  ]

  return (
    <div className="bg-primary h-16 z-50">
      <nav className="max-w-4xl h-16 align-bottom items-center flex justify-between mx-auto">
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
          {buttons.map((button, i) => (
            <li
              key={i}
              className={`${
                selected === button.name && "!border-secondary"
              } font-bold cursor-pointer select-none  border-b-2 border-transparent hover:border-white duration-300 active:brightness-75 `}
              onClick={() => setSelected(() => button.name)}
            >
              <Link className="p-1" to={button.path}>
                {button.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
