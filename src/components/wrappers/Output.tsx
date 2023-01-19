/** @format */

import React, { useState } from "react"
import type { OutputRenderArrayType } from "./WrapperTypes"
import Tooltip from "../Tooltip"

type OutputProps = { title: string; renderArray: OutputRenderArrayType[] }

const Output = ({ title, renderArray }: OutputProps) => {
  const [selectedBtn, setSelectedBtn] = useState(0)
  return (
    <div className="py-8 px-6 border-white border-2 rounded-xl h-fit w-fit mx-auto max-w-xl md:max-w-3xl lg:max-w-4xl">
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
        <div className="border-l-2 border-orange-400 pl-4 pb-2 pt-1 rounded-lg">
          {renderArray.map((item, index) => (
            <div key={index}>
              {selectedBtn === index &&
                item.content.map((contentItem, contentIndex) => (
                  <div key={contentIndex} className="text-sm md:text-base break-words">
                    {contentItem}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      <div className=" flex justify-center  mt-8">
        <Tooltip text="Copied" onClick={true}>
          <div
            onClick={() => {
              navigator.clipboard.writeText(renderArray[selectedBtn].copy)
            }}
            className="btnPrimary  shadow-custom "
          >
            Copy
          </div>
        </Tooltip>
      </div>
    </div>
  )
}

export default Output
