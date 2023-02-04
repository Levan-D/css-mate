/** @format */

import React, { useState, useRef } from "react"
import { selectDropShadowStyle } from "./dropShadowSlice"
import { useAppSelector } from "../../app/hooks"
import moon from "../../assets/icons/moon.png"
import sun from "../../assets/icons/sun.png"
import { btnResponse } from "./Data"
import { useNavigate } from "react-router-dom"
import ColorPicker from "../../components/ColorPicker"
import ColorInverter from "../../utils/ColorInverter"
import RgbToHex from "../../utils/RGBToHex"
// @ts-ignore
import { ReactComponent as Triangle } from "../../assets/misc/triangle.svg"
// @ts-ignore
import { ReactComponent as ChangeShapeThrise } from "../../assets/icons/changeShapeThrise.svg"

const Shape = () => {
  const navigate = useNavigate()
  const [shapeColor, setShapeColor] = useState("94,161,255")
  const dropShadowRender = useAppSelector(selectDropShadowStyle)
  const [darkmode, setDarkmode] = useState(true)
  const [shape, setShape] = useState(0)
  const [btnContent, setBtnContent] = useState("I am a button")
  const btnIndex = useRef(0)
  const btnActive = useRef(false)
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

  const handleShapeClick = () => {
    if (shape >= 2) {
      setShape(() => 0)
    } else if (shape < 2) {
      setShape(x => x + 1)
    }
  }

  return (
    <div
      className={` ${
        darkmode ? "bg-inherit" : "border-secondary bg-slate-100 "
      } mx-auto  flex h-[530px] w-96 flex-col justify-between rounded-xl border-2  md:h-full lg:w-[430px]  `}
    >
      {/* nav section */}
      <div className="menuHeader flex justify-between">
        <div>
          <img
            onClick={() => setDarkmode(x => !x)}
            className={` ${
              darkmode ? `sm:hover:border-white` : "sm:hover:border-secondary"
            } m-2 h-10 cursor-pointer rounded-full border-2  border-transparent duration-200`}
            src={darkmode ? moon : sun}
            alt="dark mode"
          />
        </div>
        <div className="m-2">
          <ColorPicker handleColorPick={handleColorPick} />
        </div>
      </div>
      {/* nav section */}
      {/* shape */}
      {shape > 1 ? (
        <div onClick={handleShapeClick} className="grid grid-cols-1">
          <Triangle
            style={{
              filter: dropShadowRender,
            }}
            stroke={ColorInverter(RgbToHex(shapeColor), `bw`)}
            fill={RgbToHex(shapeColor)}
            className={`  gridChild z-10  mx-auto  mb-4 h-[250px]  w-[250px]   cursor-pointer select-none border-2  border-transparent `}
          />

          <ChangeShapeThrise
            height={100}
            width={100}
            stroke={ColorInverter(RgbToHex(shapeColor), `bw`)}
            className=" gridChild z-20  mx-auto mt-[80px]"
          />
        </div>
      ) : (
        <div
          style={{
            filter: dropShadowRender,
            backgroundColor: `rgb(${shapeColor})`,
          }}
          onClick={handleShapeClick}
          className={` ${shape ? "rounded-xl" : "rounded-full"} ${
            darkmode ? `sm:hover:border-white` : "sm:hover:border-secondary"
          }    mx-auto mb-4  h-[250px]  w-[250px] cursor-pointer select-none border-2  border-transparent `}
        >
          <ChangeShapeThrise
            height={100}
            width={100}
            stroke={ColorInverter(RgbToHex(shapeColor), `bw`)}
            className=" mx-auto  mt-[78px]"
          />
        </div>
      )}
      {/* shape */}
      {/* spicey button */}
      <div
        style={{
          filter: dropShadowRender,
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
      {/* bottom padding for flexbox to work @me */}
      <div className=" h-6  "></div>
      {/* bottom padding for flexbox to work @me */}
    </div>
  )
}

export default Shape
