/** @format */

import React from "react"
import Card from "../../components/Card"
import tailwindIcon from ".././../assets/icons/tailwind.png"
import cssIcon from ".././../assets/icons/css.png"
import { cursorData } from "./Data"

const Cursors = () => {
  return (
    <div className="my-16">
      <h1 className="font-cursiveCustom text-center text-2xl   mb-2">
        Almost every CSS <span className="text-secondary">cursor</span> type presented
        below
      </h1>
      <div className="font-cursiveCustom text-center text-base mb-16">Click to copy!</div>
      <div className=" ">
        {cursorData.map((cursor, i) => (
          <div>
            <h2 className="font-cursiveCustom text-center text-2xl   mb-6">
              {cursor.category}
            </h2>
            <div className="flex justify-center flex-wrap gap-8 mb-12">
              {cursor.contents.map((content, i) => (
                <Card title={content.name} key={i} CSS={content.tailwind}>
                  <div className="text-dark text-center mb-4">{content.vanilla}</div>
                  <div className={`flex gap-2`}>
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
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cursors
