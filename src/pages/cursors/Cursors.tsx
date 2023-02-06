/** @format */

import React from "react"
import Card from "../../components/Card"
import tailwindIcon from ".././../assets/icons/tailwind.png"
import cssIcon from ".././../assets/icons/css.png"
import { cursorData } from "./Data"
import TableOfContents from "../../components/TableOfContents"
import Tooltip from "../../components/Tooltip"

const Cursors = () => {
  let tableOfContets: string[] = []
  return (
    <div className="my-16 mx-4">
      <h1 className="mb-2 text-center font-cursiveCustom   text-2xl">
        Almost every CSS <span className="text-secondary-300">cursor</span> type presented
        below
      </h1>
      <div className="mb-8 text-center font-cursiveCustom text-base">
        Hover over to demo and click to copy!
      </div>
      <div className="mb-8">
        <TableOfContents tableOfContets={tableOfContets} />
      </div>
      <div className="text-center">
        The exact looks of the cursor is based on the browser defaults.
      </div>
      <div className=" text-center">
        You can also set custom cursors using the
        <span className="text-secondary-300">
          &#32; cursor: url&#x28; image link&#x29;, x y, fallback cursor type;&#32;
        </span>
        property.
      </div>
      <div className="mb-8 text-center">
        &#x28; Although... custom cursors don't work half the time&#x29;
      </div>

      <div>
        {cursorData.map((cursor, i) => {
          tableOfContets.push(cursor.category)
          return (
            <div key={i}>
              <h2
                id={`${cursor.category}`}
                className="mt-8 mb-6 text-center  font-cursiveCustom text-2xl"
              >
                {cursor.category}
              </h2>
              <div className="mb-1 flex flex-wrap justify-center gap-8">
                {cursor.contents.map((content, i) => (
                  <Card title={content.name} key={i} CSS={content.tailwind}>
                    <div className="text-center text-slate-900 ">
                      {content.description}
                    </div>
                    <div className="mb-4 text-center font-semibold text-secondary-300">
                      {content.cssRule}
                    </div>
                    <div className={`flex justify-center gap-2  `}>
                      <Tooltip text="Copied" onClick={true} dArrow={true}>
                        <div
                          className={`btnPrimary flex gap-1 shadow-primaryBr`}
                          onClick={() => {
                            navigator.clipboard.writeText(content.vanilla)
                          }}
                        >
                          <div>
                            <img src={cssIcon} className="w-6" alt="" />
                          </div>

                          <div className="text-sm leading-6">Copy</div>
                        </div>
                      </Tooltip>
                      <Tooltip text="Copied" onClick={true} dArrow={true}>
                        <div
                          className={`btnPrimary flex gap-1 shadow-primaryBr`}
                          onClick={() => {
                            navigator.clipboard.writeText(content.tailwind)
                          }}
                        >
                          <div>
                            <img src={tailwindIcon} className="w-6" alt="" />
                          </div>
                          <div className="text-sm leading-6">Copy</div>
                        </div>
                      </Tooltip>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cursors
