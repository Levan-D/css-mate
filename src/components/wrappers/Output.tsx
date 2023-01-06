/** @format */

import React, { useState } from "react"
import type { OutputRenderArrayType } from "./WrapperTypes"

type OutputProps = { title: string; renderArray: OutputRenderArrayType[] }

const Output = ({ title, renderArray }: OutputProps) => {
  const [selectedBtn, setSelectedBtn] = useState(0)
  return (
    <div className="py-8 px-6 border-white border-2 rounded-xl h-fit w-fit mx-auto">
      <h1 className="select-none font-bold">{title}</h1>

      <div>
        <div className="flex gap-4 justify-center ">
          {renderArray.map((item, index) => (
            <div key={index}>
              <div
                className={` ${
                  selectedBtn === index && `border-secondary`
                } border-transparent border-2 btnPrimary mt-4  mb-8`}
                onClick={() => setSelectedBtn(() => index)}
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
        {renderArray.map((item, index) => (
          <div key={index}>
            {selectedBtn === index &&
              item.content.map((contentItem, contentIndex) => (
                <div key={contentIndex} className="text-sm md:text-base">
                  {contentItem}
                </div>
              ))}
          </div>
        ))}
      </div>

      <div
        onClick={() => {
          navigator.clipboard.writeText(renderArray[selectedBtn].copy)
        }}
        className="btnPrimary  shadow-custom mx-auto mt-8"
      >
        Copy
      </div>
    </div>
  )
}

export default Output
