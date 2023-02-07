/** @format */

import React, { useState } from "react"
import { selectTextShadowStyle } from "./textShadowSlice"
import { useAppSelector } from "../../../app/hooks"
import moon from "../../../assets/icons/moon.png"
import sun from "../../../assets/icons/sun.png"
import { quotes } from "./Data"
import SendIcon from "../../../assets/icons/send.png"
import ColorPicker from "../../../components/ColorPicker"

const Shape = () => {
  const [shapeColor, setShapeColor] = useState("94,161,255")
  const [quote, setQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  )
  const textShadowStyle = useAppSelector(selectTextShadowStyle).join(",")
  const [darkmode, setDarkmode] = useState<boolean>(true)
  const [inputText, setInputText] = useState("")

  const handleColorPick = (color: string) => {
    setShapeColor(color.replace(/ /g, ""))
  }

  const handleQuoteRandom = () => {
    setQuote(() => quotes[Math.floor(Math.random() * quotes.length)])
    setInputText(() => "")
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setQuote(() => inputText)
  }

  return (
    <div
      className={` ${
        darkmode ? "bg-inherit" : "border-secondary-300 bg-slate-100 "
      } mx-auto  flex h-[530px] w-96 flex-col justify-between rounded-xl border-2  md:h-full lg:w-[430px]  `}
    >
      {/* nav section */}
      <div>
        <div className="menuHeader flex justify-between">
          <div>
            <img
              onClick={() => setDarkmode((x) => !x)}
              className={` ${
                darkmode
                  ? `sm:hover:border-white`
                  : "sm:hover:border-secondary-300"
              } m-2 h-10 cursor-pointer rounded-full border-2  border-transparent duration-200`}
              src={darkmode ? moon : sun}
              alt="dark mode"
            />
          </div>
          <div className="m-2">
            <ColorPicker handleColorPick={handleColorPick} />
          </div>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="flex justify-between bg-darkJungle-400 py-2 px-4">
            <input
              type="text"
              required
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value)
              }}
              autoComplete="off"
              name="name"
              placeholder="Enter Text here"
              className={`mr-4 w-full rounded-md bg-slate-400   px-2 py-1 text-slate-900 placeholder-slate-600 outline  outline-transparent duration-200 `}
            />

            <button type="submit" value="Rename" className=" h-8">
              <img
                className="h-7 px-1 opacity-80 duration-200 active:brightness-75 sm:hover:brightness-90 "
                src={SendIcon}
                alt=""
              />
            </button>
          </div>
        </form>
      </div>
      {/* nav section */}
      {/* shape */}
      <div
        style={{
          textShadow: textShadowStyle,
          color: `rgb(${shapeColor})`,
        }}
        onClick={handleQuoteRandom}
        className={`  mx-auto mb-4 w-80   cursor-pointer	  select-none break-words		 text-center text-4xl font-bold`}
      >
        &#34;{quote}&#34;
      </div>
      {/* shape */}

      {/* bottom padding for flexbox to work @me */}
      <div className=" h-6"></div>
      {/* bottom padding for flexbox to work @me */}
    </div>
  )
}

export default Shape
