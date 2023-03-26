/** @format */

import { useState, useEffect } from "react"
// @ts-ignore
import { ReactComponent as ChevronIcon } from "../assets/icons/chevron.svg"

type tableOfContetsType = {
  TOCData: string[]
}

const TableOfContents = ({ TOCData }: tableOfContetsType) => {
  const [visibility, setVisibility] = useState(true)
  const [tableOffset, setTableOffset] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 70) {
        setTableOffset(true)
      } else {
        setTableOffset(false)
      }
    })
    return window.removeEventListener("scroll", () => {
      if (window.pageYOffset > 70) {
        setTableOffset(true)
      } else {
        setTableOffset(false)
      }
    })
  }, [])

  const scrollToElementSmooth = (elementId: string) => {
    const element = document.getElementById(elementId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      style={{ top: !tableOffset ? "144px" : "40px" }}
      className="left-4 mx-auto  block w-fit select-none rounded-xl border-2   border-white duration-200 2xl:fixed 8xl:left-[calc(50%-1240px)]"
    >
      <div
        onClick={() => setVisibility(x => !x)}
        className={`flex cursor-pointer gap-2 px-3 py-2 duration-200 sm:hover:bg-blue-400 ${
          visibility ? "rounded-t-lg " : "rounded-lg"
        }`}
      >
        <h2 className="text-center font-cursiveCustom text-xl  ">Table of contents</h2>
        <div>
          <ChevronIcon
            height={15}
            width={15}
            fill={!visibility ? `#ff725e` : `white`}
            className={`${
              !visibility
                ? "translate-y-[4px] rotate-[-90deg]"
                : "translate-y-[7px] rotate-90"
            }  ml-3  duration-200 `}
          />
        </div>
      </div>

      <hr
        className={`${
          visibility ? "  opacity-100 " : " opacity-0"
        }  mx-2  origin-top duration-300   `}
      />

      <nav
        className={`${
          visibility
            ? "visible h-auto scale-y-100 py-2  opacity-100"
            : " collapse  h-0  scale-y-0 overflow-hidden opacity-0"
        }    origin-top   duration-300 `}
      >
        <ul>
          {TOCData.map((link, i) => (
            <li
              key={i}
              onClick={() => scrollToElementSmooth(link)}
              className="cursor-pointer px-3 py-[2px] duration-200 active:bg-slate-500 sm:hover:bg-slate-100  sm:hover:text-slate-900"
            >
              {link}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default TableOfContents
