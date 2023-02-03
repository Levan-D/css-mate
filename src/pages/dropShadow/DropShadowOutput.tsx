/** @format */

import React from "react"
import Output from "../../components/wrappers/Output"
import { useAppSelector } from "../../app/hooks"
import { OutputRenderArrayType } from "../../components/wrappers/WrapperTypes"
import { selectDropShadowStyle } from "./dropShadowSlice"

const DropShadowOutput = () => {
  const dropShadowRender = useAppSelector(selectDropShadowStyle)

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
      copy: `shadow-[${dropShadowRender.replace(/ /g, "_")}]`,
      content: [
        <span className="text-orange-300">
          shadow-&#91;{dropShadowRender.replace(/ /g, "_")}&#93;
        </span>,
      ],
    },
    {
      title: "Tailwind extend",
      copy: `"custom": "${dropShadowRender}"`,
      content: [
        <span className="select-none text-slate-400">
          module.exports = &#x2774; <br /> &nbsp;&nbsp;&nbsp;theme: &#x2774; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;extend: &#x2774; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;filter: &#x2774;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className=" select-text   ">
            <span className="text-blue-300">
              "custom"<span className="px-[4px] text-white">:</span>&nbsp;
            </span>
            <span className="text-orange-300">
              &#34;{dropShadowRender}&#34;<span className="pl-[4px] text-white">,</span>
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

export default DropShadowOutput
