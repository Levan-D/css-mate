/** @format */

import React, { useState, useEffect } from "react"
// @ts-ignore
import { ReactComponent as ChevronIcon } from "../assets/icons/chevron.svg"

type tableOfContetsType = {
  tableOfContets: string[]
}

const TableOfContents = ({ tableOfContets }: tableOfContetsType) => {
  const [visibility, setVisibility] = useState(true)

  const height = 28 * tableOfContets.length + "px"

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
            }  ml-3  duration-200 `}
          />
        </div>
      </div>

      <hr className={`${visibility ? "block " : "hidden"}  duration-200  mx-2   `} />

      <nav
        className={`${
          visibility ? "scale-y-100 h-[" + height + "]  py-2 " : "scale-y-0  h-0 "
        }    duration-500 origin-top   `}
      >
        <ul
          className={`${visibility ? "scale-y-100 " : "scale-y-0  "}     origin-top   `}
        >
          {tableOfContets.map((link, i) => (
            <a href={`#${link}`} key={i}>
              <li className="hover:bg-slate-100 hover:text-slate-900 px-3  py-[2px] active:bg-slate-500  duration-200">
                {link}
              </li>
            </a>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default TableOfContents
