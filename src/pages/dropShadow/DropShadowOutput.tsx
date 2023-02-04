/** @format */

import React from "react"
import Output from "../../components/wrappers/Output"
import { useAppSelector } from "../../app/hooks"
import { OutputRenderArrayType } from "../../components/wrappers/WrapperTypes"
import { selectDropShadowStyle } from "./dropShadowSlice"

const DropShadowOutput = () => {
  const dropShadowRender = useAppSelector(selectDropShadowStyle)

  function transfromInline(string: string) {
    const array = string.split(") ")
    let newString
    if (array.length === 1) {
      newString = array[0]
    } else newString = array[0] + ")"
    newString = newString.replace(/drop-shadow/, "drop-shadow-")
    newString = newString.replace(/\s+/g, "_")
    newString = newString.replace(/\(/, "[").replace(/\)(?!.*\))/, "]")

    return newString
  }

  function transformExtend(string: string) {
    const array = string.split(") ")

    const newArray = array
      .map((x, i) => {
        let newString
        if (array.length === i + 1) {
          newString = x
        } else newString = x + ")"
        return `"${newString
          .replace(/drop-shadow/, "")
          .replace(/\(/, "")
          .replace(/\)(?!.*\))/, "")}"`
      })
      .join(", ")

    return array.length === 1 ? newArray : `[${newArray}]`
  }

  const renderArray: OutputRenderArrayType[] = [
    {
      title: "Vanilla",
      copy: `filter: ${dropShadowRender};
    `,
      content: [
        <>
          <span className="text-blue-300">
            filter<span className="px-[4px] text-white">:</span>
          </span>
          <span className="text-green-300">
            {dropShadowRender}
            <span className="pl-[4px] text-white ">;</span>
          </span>
        </>,
      ],
    },
    {
      title: "Tailwind inline",
      copy: `filter ${transfromInline(dropShadowRender)}`,
      content: [
        <span className="text-orange-300">
          filter &#32;
          {transfromInline(dropShadowRender)}
        </span>,
      ],
    },
    {
      title: "Tailwind extend",
      copy: ` ${transformExtend(dropShadowRender)}`,
      content: [
        <span className="select-none text-slate-400">
          module.exports = &#x2774; <br /> &nbsp;&nbsp;&nbsp;theme: &#x2774; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;extend: &#x2774; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dropShadow: &#x2774;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className=" select-text   ">
            <span className="text-blue-300">
              "custom"<span className="px-[4px] text-white">:</span>&nbsp;
            </span>
            <span className="text-orange-300">
              {transformExtend(dropShadowRender)}
              <span className="pl-[4px] text-white">,</span>
            </span>
          </span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x2775; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x2775; , <br />
          &nbsp;&nbsp;&nbsp; &#x2775; , <br /> &#x2775;
        </span>,
      ],
    },
  ]
  return (
    <div>
      <Output
        renderArray={renderArray}
        comments={[{
          onActive: 1,
          comment: <span>Tailwind inline only supports a single drop shadow rule. <br /> If you want to add more use tailwind extend.</span>,
           
        }]}
      />
    </div>
  )
}

export default DropShadowOutput
