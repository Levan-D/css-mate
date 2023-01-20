/** @format */

import React, { useState, useRef } from "react"

import { useAppSelector } from "../../app/hooks"
import moon from "../../assets/icons/moon.png"
import sun from "../../assets/icons/sun.png"
import { btnResponse } from "./Data"
import { useNavigate } from "react-router-dom"
import ColorPicker from "../../components/ColorPicker"
import ColorInverter from "../../utils/ColorInverter"
import RgbToHex from "../../utils/RGBToHex"
// @ts-ignore
import { ReactComponent as ChangeShape } from "../../assets/icons/changeShape.svg"

const Shape = () => {
  const navigate = useNavigate()
  const [shapeColor, setShapeColor] = useState("94,161,255")
  const { boxShadowData } = useAppSelector(state => state.boxShadow)

  const [darkmode, setDarkmode] = useState<boolean>(true)
  const [shape, setShape] = useState<boolean>(true)
  const [btnContent, setBtnContent] = useState<string>("I am a button")
  const btnIndex = useRef(0)
  const btnActive = useRef(false)

  let bowShadowStyle = boxShadowData
    .map(data => {
      return `${data.settings.inset ? "inset" : ""} ${data.settings.horizontal}px ${
        data.settings.vertical
      }px ${data.settings.blur}px ${data.settings.spread}px rgba(${
        data.settings.shadowColor
      },${data.settings.opacity / 100})`
    })
    .toString()

  const handleColorPick = (color: string) => {
    setShapeColor(color.replace(/ /g, ""))
  }

  const handleMouseDown = () => {
    if (btnActive.current === false) {
      setBtnContent(() => btnResponse[btnIndex.current])
      btnIndex.current = btnIndex.current + 1
      btnActive.current = true
    }
  }
  const handleMouseUp = () => {
    if (btnActive.current === true) {
      if (btnResponse[btnIndex.current] === "1") {
        navigate("/rekt")
      }
      setBtnContent(() => "I am a button")
      btnActive.current = false
    }
  }
  const handleMouseOut = () => {
    if (btnActive.current === true) {
      if (btnResponse[btnIndex.current] === "1") {
        navigate("/rekt")
      }
      setBtnContent(() => "I am a button")
      btnActive.current = false
    }
  }

  return (
    <div
      className={` ${
        darkmode ? "bg-inherit" : "bg-slate-100 border-secondary "
      } mx-auto  border-2 rounded-xl h-[530px] md:h-full lg:w-[430px] w-96 flex  flex-col justify-between  `}
    >
      <div className="flex justify-between">
        <div>
          <img
            onClick={() => setDarkmode(x => !x)}
            className={` ${
              darkmode ? `hover:border-white` : "hover:border-secondary"
            } border-2 border-transparent rounded-full h-10  cursor-pointer m-1`}
            src={darkmode ? moon : sun}
            alt="dark mode"
          />
        </div>
        <div className="mx-2 my-1">
          <ColorPicker handleColorPick={handleColorPick} />
        </div>
      </div>
      {/* shape */}
      <div
        style={{
          boxShadow: bowShadowStyle,
          backgroundColor: `rgb(${shapeColor})`,
        }}
        onClick={() => {
          setShape(x => !x)
        }}
        className={` ${shape ? "rounded-xl" : "rounded-full"} ${
          darkmode ? `hover:border-white` : "hover:border-secondary"
        }    border-2 border-transparent  mx-auto  mb-4 h-[250px] w-[250px] cursor-pointer  select-none `}
      >
        <ChangeShape
          height={72}
          width={72}
          stroke={ColorInverter(RgbToHex(shapeColor), `bw`)}
          className="mx-auto mt-[89px]"
        />
      </div>
      {/* shape */}
      {/* spicey button */}
      <div
        style={{
          boxShadow: bowShadowStyle,
          backgroundColor: `rgb(${shapeColor})`,
          color: ColorInverter(RgbToHex(shapeColor), `bw`),
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseOut={handleMouseOut}
        className={`btnPrimary  mx-auto mt-8 transition-transform active:translate-y-[-10px]`}
      >
        {btnContent}
      </div>
      {/* spicey button */}
      <div className=" h-6 md:h-20  "></div>
    </div>
  )
}

export default Shape
