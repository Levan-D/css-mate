/** @format */

import { useState, useRef } from "react"
import { selectBoxShadowStyle } from "./boxShadowSlice"
import { useAppSelector } from "../../../app/hooks"
import moon from "../../../assets/icons/moon.png"
import sun from "../../../assets/icons/sun.png"
import { btnResponse } from "./Data"
import { useNavigate } from "react-router-dom"
import ColorPicker from "../../../components/ColorPicker"
import ColorInverter from "../../../utils/colors/ColorInverter"
import RgbToHex from "../../../utils/colors/RGBToHex"
// @ts-ignore
import { ReactComponent as ChangeShape } from "../../../assets/icons/changeShape.svg"

const Shape = () => {
  const navigate = useNavigate()
  const boxShadowStyle = useAppSelector(selectBoxShadowStyle).join()

  const [shapeColor, setShapeColor] = useState("94,161,255")
  const [darkmode, setDarkmode] = useState<boolean>(true)
  const [shape, setShape] = useState<boolean>(true)
  const [btnContent, setBtnContent] = useState<string>("I am a button")
  const btnIndex = useRef(0)
  const btnActive = useRef(false)

  const handleColorPick = (color: string) => {
    setShapeColor(color.replace(/ /g, ""))
  }

  const handleMouseDown = () => {
    if (!btnActive.current) {
      setBtnContent(() => btnResponse[btnIndex.current])
      btnIndex.current = btnIndex.current + 1
      btnActive.current = true
    }
  }
  const handleButtonAction = () => {
    if (btnActive.current) {
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
        darkmode ? "bg-inherit" : "border-secondary-300 bg-slate-100 "
      } mx-auto  flex h-[530px] w-96 flex-col justify-between rounded-xl border-2  md:h-full lg:w-[430px]  `}
    >
      {/* nav section */}
      <div className="menuHeader flex justify-between">
        <div>
          <img
            onClick={() => setDarkmode(x => !x)}
            className={` ${
              darkmode ? `sm:hover:border-white` : "sm:hover:border-secondary-300"
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
      <div
        style={{
          boxShadow: boxShadowStyle,
          backgroundColor: `rgb(${shapeColor})`,
        }}
        onClick={() => {
          setShape(x => !x)
        }}
        className={` ${shape ? "rounded-xl" : "rounded-full"} ${
          darkmode ? `sm:hover:border-white` : "sm:hover:border-secondary-300"
        }    mx-auto mb-4  h-[250px]  w-[250px] cursor-pointer select-none border-2  border-transparent `}
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
          boxShadow: boxShadowStyle,
          backgroundColor: `rgb(${shapeColor})`,
          color: ColorInverter(RgbToHex(shapeColor), `bw`),
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleButtonAction}
        onMouseOut={handleButtonAction}
        className={`btnPrimary  mx-auto mt-8 transition-transform active:translate-y-[-10px]`}
      >
        {btnContent}
      </div>
      {/* spicey button */}
      {/* bottom padding for flexbox to work @me */}
      <div className=" h-6 md:h-20  "></div>
      {/* bottom padding for flexbox to work @me */}
    </div>
  )
}

export default Shape
