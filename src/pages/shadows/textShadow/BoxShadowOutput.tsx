/** @format */

import React from "react"
import Output from "../../../components/wrappers/Output"
import { selectBoxShadowStyle } from "./boxShadowSlice"
import { useAppSelector } from "../../../app/hooks"
import { OutputRenderArrayType } from "../../../components/wrappers/WrapperTypes"

const BoxShadowOutput = () => {
  const boxShadowStyle = useAppSelector(selectBoxShadowStyle)

  const renderArray: OutputRenderArrayType[] = [
    {
      title: "Vanilla",
      copy: `box-shadow: ${boxShadowStyle};
      -webkit-box-shadow: ${boxShadowStyle};
      -moz-box-shadow: ${boxShadowStyle};`,
      content: [
        <>
          <span className="text-blue-300">
            box-shadow<span className="px-[4px] text-white">:</span>
          </span>
          <span className="text-green-300">
            {boxShadowStyle}
            <span className="pl-[4px] text-white ">;</span>
          </span>
        </>,
        <>
          <span className="text-blue-300">
            -webkit-box-shadow<span className="px-[4px] text-white">:</span>
          </span>
          <span className="text-green-300">
            {boxShadowStyle}
            <span className="pl-[4px] text-white ">;</span>
          </span>
        </>,
        <>
          <span className="text-blue-300">
            -moz-box-shadow<span className="px-[4px] text-white">:</span>
          </span>
          <span className="text-green-300">
            {boxShadowStyle}
            <span className="pl-[4px] text-white ">;</span>
          </span>
        </>,
      ],
    },
    {
      title: "Tailwind inline",
      copy: `shadow-[${boxShadowStyle.replace(/ /g, "_")}]`,
      content: [
        <span className="text-orange-300">
          shadow-&#91;{boxShadowStyle.replace(/ /g, "_")}&#93;
        </span>,
      ],
    },
    {
      title: "Tailwind extend",
      copy: ` "${boxShadowStyle}"`,
      content: [
        <span className="select-none text-slate-400">
          module.exports = &#x2774; <br /> &nbsp;&nbsp;&nbsp;theme: &#x2774; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;extend: &#x2774; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;boxShadow: &#x2774;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className=" select-text   ">
            <span className="text-blue-300">
              "custom"<span className="px-[4px] text-white">:</span>&nbsp;
            </span>
            <span className="text-orange-300">
              &#34;{boxShadowStyle}&#34;<span className="pl-[4px] text-white">,</span>
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
      <Output renderArray={renderArray} />
    </div>
  )
}

export default BoxShadowOutput
