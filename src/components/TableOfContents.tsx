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

  // need to manually set the line height to allow the table to generate automatically

  const height = 28 * TOCData.length + "px"

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

      <hr className={`${visibility ? "block " : "hidden"}  mx-2  duration-200   `} />

      <nav
        className={`${
          visibility ? "h-[ scale-y-100" + height + "]  py-2 " : "h-0  scale-y-0 "
        }    origin-top duration-500   `}
      >
        <ul
          className={`${visibility ? "scale-y-100 " : "scale-y-0  "}     origin-top   `}
        >
          {TOCData.map((link, i) => (
            <a href={`#${link}`} key={i}>
              <li className="px-3 py-[2px] duration-200  active:bg-slate-500 sm:hover:bg-slate-100  sm:hover:text-slate-900">
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
