/** @format */

import React from "react"
import Card from "../../components/Card"
import tailwindIcon from ".././../assets/icons/tailwind.png"
import cssIcon from ".././../assets/icons/css.png"
import { cursorData } from "./Data"
import TableOfContents from "../../components/TableOfContents"
import BackToTopBtn from "../../components/BackToTopBtn"
import Tooltip from "../../components/Tooltip"

const Cursors = () => {
  let tableOfContets: string[] = []
  return (
    <div className="my-16 mx-4">
      <BackToTopBtn />
      <h1 className="font-cursiveCustom text-center text-2xl   mb-2">
        Almost every CSS <span className="text-secondary">cursor</span> type presented
        below
      </h1>
      <div className="font-cursiveCustom text-center text-base mb-8">
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
        <span className="text-secondary">
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
                className="font-cursiveCustom text-center text-2xl  mt-8 mb-6"
              >
                {cursor.category}
              </h2>
              <div className="flex justify-center flex-wrap gap-8 mb-1">
                {cursor.contents.map((content, i) => (
                  <Card title={content.name} key={i} CSS={content.tailwind}>
                    <div className="text-dark text-center ">{content.description}</div>
                    <div className="text-secondary font-semibold text-center mb-4">
                      {content.vanilla}
                    </div>
                    <div className={`flex gap-2 justify-center  `}>
                      <Tooltip text="Copied" onClick={true}>
                        <div
                          className={`flex gap-1 btnPrimary`}
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
                      <Tooltip text="Copied" onClick={true}>
                        <div
                          className={`flex gap-1 btnPrimary`}
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
