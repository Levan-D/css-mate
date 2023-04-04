/** @format */

import { useState, useEffect } from "react"
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

  const scrollToTopSmooth = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div>
      <div
        onClick={scrollToTopSmooth}
        className={`${
          !showButton ? " collapse opacity-0" : " opacity-100"
        }  fixed bottom-4 right-4 z-50 cursor-pointer rounded-full bg-slate-100  p-3 shadow-[3px_3px_2px_0px_rgba(_255,_114,_94,0.40)] duration-300 active:bg-slate-500 sm:hover:translate-y-[-5px] 8xl:right-[calc(50%-1240px)]`}
      >
        <ChevronIcon
          height={26}
          width={26}
          fill="#ff725e"
          className={`rotate-[-90deg]`}
        />
      </div>
    </div>
  )
}

export default BackToTopBtn
