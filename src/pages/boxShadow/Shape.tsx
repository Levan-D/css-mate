/** @format */

import React, { useState, useRef } from "react"
import type { CurrentValueType } from "./BoxShadowTypes"
import moon from "../../assets/icons/moon.png"
import sun from "../../assets/icons/sun.png"
import changeShape from "../../assets/icons/changeShape.png"
import { btnResponse } from "./Data"
import { useNavigate } from "react-router-dom"

type ShapeProps = {
  currentValue: CurrentValueType
  shadowColor: string
  inset: boolean
}

const Shape = ({
  shadowColor,
  inset,
  currentValue: { horizontal, vertical, blur, spread, opacity },
}: ShapeProps) => {
  const navigate = useNavigate()
  const [darkmode, setDarkmode] = useState<boolean>(true)
  const [square, setSquare] = useState<boolean>(true)
  const [btnContent, setBtnContent] = useState<string>("I am a button")
  const btnIndex = useRef(0)
  const btnActive = useRef(false)

  return (
    <div
      className={` ${
        darkmode ? "bg-inherit" : "bg-slate-100 border-secondary "
      } mx-auto  border-2 rounded-xl h-[530px] md:h-full lg:w-[430px] w-96 flex  flex-col justify-between  `}
    >
      <div>
        <img
          onClick={() => setDarkmode(x => !x)}
          className={` ${
            darkmode ? `hover:border-white` : "hover:border-secondary"
          } border-2 border-transparent rounded-full h-10  cursor-pointer m-1   `}
          src={darkmode ? moon : sun}
          alt="dark mode"
        />
      </div>
      <div
        style={{
          boxShadow: `${
            inset ? `inset` : ""
          } ${horizontal}px ${vertical}px ${blur}px ${spread}px rgba(${shadowColor},${
            opacity / 100
          })`,
        }}
        onClick={() => setSquare(x => !x)}
        className={` ${square ? "rounded-xl" : "rounded-full"}   ${
          darkmode ? `hover:border-white` : "hover:border-secondary"
        } border-2 border-transparent  mx-auto  mb-4 h-[250px] w-[250px] cursor-pointer  select-none   bg-primary`}
      >
        <img
          className="h-[50px] mx-auto my-auto  translate-y-[105px]"
          src={changeShape}
          alt=""
        />
      </div>
      <div
        style={{
          boxShadow: `${
            inset ? `inset` : ""
          } ${horizontal}px ${vertical}px ${blur}px ${spread}px rgba(${shadowColor},${
            opacity / 100
          })`,
        }}
        onMouseDown={() => {
          if (btnActive.current === false) {
            setBtnContent(() => btnResponse[btnIndex.current])
            btnIndex.current = btnIndex.current + 1
            btnActive.current = true
          }
        }}
        onMouseUp={() => {
          if (btnActive.current === true) {
            if (btnResponse[btnIndex.current] === "1") {
              navigate("/rekt")
            }
            setBtnContent(() => "I am a button")
            btnActive.current = false
          }
        }}
        onMouseOut={() => {
          if (btnActive.current === true) {
            if (btnResponse[btnIndex.current] === "1") {
              navigate("/rekt")
            }
            setBtnContent(() => "I am a button")
            btnActive.current = false
          }
        }}
        className={`   btnPrimary  tran mx-auto mt-8     active:translate-y-[-10px]  `}
      >
        {btnContent}
      </div>
      <div className=" h-6 md:h-20  "></div>
    </div>
  )
}

export default Shape
