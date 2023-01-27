/** @format */

import React from "react"
import Output from "../../components/wrappers/Output"
import { useAppSelector } from "../../app/hooks"
import { OutputRenderArrayType } from "../../components/wrappers/WrapperTypes"

const BoxShadowOutput = () => {
  const { boxShadowData } = useAppSelector(state => state.boxShadow)

  let boxShadowRender = boxShadowData
    .map(data => {
      return `${data.settings.inset ? "inset " : ""}${data.settings.horizontal}px ${
        data.settings.vertical
      }px ${data.settings.blur}px ${data.settings.spread}px rgba(${
        data.settings.shadowColor
      },${data.settings.opacity / 100})`
    })
    .toString()

  const renderArray: OutputRenderArrayType[] = [
    {
      title: "Vanilla",
      copy: `box-shadow: ${boxShadowRender};
      -webkit-box-shadow: ${boxShadowRender};
      -moz-box-shadow: ${boxShadowRender};`,
      content: [
        <>
          <span className="text-blue-300">
            box-shadow<span className="text-white px-[4px]">:</span>
          </span>
          <span className="text-green-300">
            {boxShadowRender}
            <span className="text-white pl-[4px] ">;</span>
          </span>
        </>,
        <>
          <span className="text-blue-300">
            -webkit-box-shadow<span className="text-white px-[4px]">:</span>
          </span>
          <span className="text-green-300">
            {boxShadowRender}
            <span className="text-white pl-[4px] ">;</span>
          </span>
        </>,
        <>
          <span className="text-blue-300">
            -moz-box-shadow<span className="text-white px-[4px]">:</span>
          </span>
          <span className="text-green-300">
            {boxShadowRender}
            <span className="text-white pl-[4px] ">;</span>
          </span>
        </>,
      ],
    },
    {
      title: "Tailwind inline",
      copy: `shadow-[${boxShadowRender.replace(/ /g, "_")}]`,
      content: [
        <span className="text-orange-300">
          shadow-&#91;{boxShadowRender.replace(/ /g, "_")}&#93;
        </span>,
      ],
    },
    {
      title: "Tailwind extend",
      copy: `"custom": "${boxShadowRender}"`,
      content: [
        <span className="select-none text-slate-400">
          module.exports = &#x2774; <br /> &nbsp;&nbsp;&nbsp;theme: &#x2774; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;extend: &#x2774; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;boxShadow: &#x2774;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className=" select-text   ">
            <span className="text-blue-300">
              "custom"<span className="text-white px-[4px]">:</span>&nbsp;
            </span>
            <span className="text-orange-300">
              &#34;{boxShadowRender}&#34;<span className="text-white pl-[4px]">,</span>
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
