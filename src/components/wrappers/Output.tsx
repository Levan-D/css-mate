/** @format */

import React, { useState } from "react"
import type { OutputRenderArrayType } from "./WrapperTypes"
import Tooltip from "../Tooltip"

type OutputProps = { renderArray: OutputRenderArrayType[] }

const Output = ({ renderArray }: OutputProps) => {
  const [selectedBtn, setSelectedBtn] = useState(0)
  return (
    <div className=" border-white border-2 rounded-xl h-fit md:w-[600px] sm:w-[500px] mx-auto ">
      <div>
        <div className="menuHeader flex gap-4 justify-center ">
          {renderArray.map((item, index) => (
            <div key={index}>
              <div
                className={` ${
                  selectedBtn !== index && `btnSecondaryFalse`
                } btnSecondary my-2 py-2  `}
                onClick={() => setSelectedBtn(() => index)}
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <div className="menuContainer m-4">
          <div className="border-l-2 border-primary m-4 pt-3 pb-4 pl-4 rounded-lg">
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
      </div>

      <div className=" flex justify-center  my-4">
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
