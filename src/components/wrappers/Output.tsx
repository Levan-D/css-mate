/** @format */

import { ReactNode, useState } from "react"
import type { OutputRenderArrayType } from "./WrapperTypes"
import Tooltip from "../Tooltip"

type OutputProps = {
  renderArray: OutputRenderArrayType[]
  comments?: { onActive: number; comment: ReactNode }[]
}

const Output = ({ renderArray, comments }: OutputProps) => {
  const [selectedBtn, setSelectedBtn] = useState(0)
  return (
    <div className=" mx-auto h-fit rounded-xl border-2 border-white sm:w-[500px] md:w-[600px]  ">
      <div>
        <div className="menuHeader flex justify-center gap-4 ">
          {renderArray.map((item, index) => (
            <div key={index}>
              <div
                className={` ${
                  selectedBtn !== index && `btnSecondaryDisabled `
                } btnSecondary my-2 !box-border  `}
                onClick={() => setSelectedBtn(() => index)}
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
        {comments &&
          comments.map((comment, index) => (
            <h3 key={index} className="mx-4 py-2 text-center text-slate-300">
              {comment.onActive === selectedBtn ? comment.comment : ""}
            </h3>
          ))}
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
