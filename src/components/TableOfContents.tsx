/** @format */

import React, { useState, useEffect } from "react"
// @ts-ignore
import { ReactComponent as ChevronIcon } from "../assets/icons/chevron.svg"

type tableOfContetsType = {
  tableOfContets: string[]
}

const TableOfContents = ({ tableOfContets }: tableOfContetsType) => {
  const [visibility, setVisibility] = useState(true)
  const [showButton, setShowButton] = useState(false)

  const height = 28 * tableOfContets.length + "px"

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
    <div className="border-2 border-white rounded-xl w-fit   mx-auto select-none ">
      <div
        onClick={() => setVisibility(x => !x)}
        className={`flex px-3 py-2 gap-2 cursor-pointer hover:bg-slate-500 duration-200 ${
          visibility ? "rounded-t-lg " : "rounded-lg"
        }`}
      >
        <h2 className="font-cursiveCustom text-center text-xl  ">Table of contents</h2>
        <div>
          <ChevronIcon
            height={15}
            width={15}
            fill={!visibility ? `#ff725e` : `white`}
            className={`${
              !visibility
                ? "rotate-[-90deg] translate-y-[4px]"
                : "rotate-90 translate-y-[7px]"
            }  ml-3  duration-300 `}
          />
        </div>
      </div>

      <hr
        className={`${visibility ? "block " : "hidden"}  duration-200  mx-2   ease-in`}
      />

      <nav
        className={`${
          visibility ? "scale-y-100 h-[" + height + "]  py-2 mb-4" : "scale-y-0  h-0 "
        }  duration-200 origin-top   ease-in`}
      >
        <ul>
          {tableOfContets.map((link, i) => (
            <a href={`#${link}`}>
              <li
                className="hover:bg-slate-100 hover:text-dark px-3  py-[2px] active:bg-slate-500  duration-200"
                key={i}
              >
                {link}
              </li>
            </a>
          ))}
        </ul>
      </nav>

      <a href={showButton ? `#` : ""}>
        <div
          className={`${
            showButton ? "opacity-100" : "opacity-0  cursor-default"
          }  fixed bottom-4 right-4 bg-slate-100 p-3  rounded-full cursor-pointer duration-300 shadow-[3px_3px_2px_0px_rgba(_255,_114,_94,0.40)] hover:translate-y-[-5px] active:bg-slate-500`}
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

export default TableOfContents
