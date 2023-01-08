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
        Almost every CSS cursor presented below
      </h1>
      <div className="font-cursiveCustom text-center text-base mb-16">Click to copy!</div>
      <div className="flex justify-center flex-wrap gap-20 ">
        {cursorData.map((cursor, i) => (
          <Card title={cursor.name} key={i} CSS={cursor.tailwind}>
            <div className={`flex gap-2`}>
              <div
                className={`flex gap-1 btnPrimary`}
                onClick={() => {
                  navigator.clipboard.writeText(cursor.vanilla)
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
                  navigator.clipboard.writeText(cursor.tailwind)
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
  )
}

export default Cursors
