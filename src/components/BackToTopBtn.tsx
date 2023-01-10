/** @format */

import React, { useState, useEffect } from "react"
// @ts-ignore
import { ReactComponent as ChevronIcon } from "../assets/icons/chevron.svg"

const BackToTopBtn = () => {
  const [showButton, setShowButton] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
    return window.removeEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])
  return (
    <div>
      <a href={showButton ? `#` : ""}>
        <div
          className={`${
            showButton ? "opacity-100" : "opacity-0  cursor-default"
          }  fixed bottom-4 right-4 bg-slate-100 p-3  rounded-full cursor-pointer duration-200 shadow-[3px_3px_2px_0px_rgba(_255,_114,_94,0.40)] hover:translate-y-[-5px] active:bg-slate-500`}
        >
          <ChevronIcon
            height={26}
            width={26}
            fill="#ff725e"
            className={`rotate-[-90deg]`}
          />
        </div>
      </a>
    </div>
  )
}

export default BackToTopBtn
