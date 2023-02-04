/** @format */

import React, { useState } from "react"
import type { OutputRenderArrayType } from "./WrapperTypes"
import Tooltip from "../Tooltip"
import { comment } from "postcss"

type OutputProps = {
  renderArray: OutputRenderArrayType[]
  comments?: { onActive: number; comment: string }
}

const Output = ({ renderArray, comments }: OutputProps) => {
  const [selectedBtn, setSelectedBtn] = useState(0)
  return (
    <div className=" mx-auto h-fit rounded-xl border-2 border-white sm:w-[500px] md:w-[600px] ">
      <div>
        <div className="menuHeader flex justify-center gap-4 ">
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
        <h3 className="py-2 text-center text-slate-300">
          {comments && comments.onActive === selectedBtn ? (
            comments.comment
          ) : (
            <span>&#160;</span>
          )}
        </h3>
        <div className="menuContainer m-4">
          <div className="m-4 rounded-lg border-l-2 border-primary pt-3 pb-4 pl-4">
            {renderArray.map((item, index) => (
              <div key={index}>
                {selectedBtn === index &&
                  item.content.map((contentItem, contentIndex) => (
                    <div key={contentIndex} className="break-words text-sm md:text-base">
                      {contentItem}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" my-4 flex  justify-center">
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
