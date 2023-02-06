/** @format */

import React from "react"
import Output from "../../../components/wrappers/Output"
import { selectBoxShadowStyle } from "./boxShadowSlice"
import { useAppSelector } from "../../../app/hooks"
import { OutputRenderArrayType } from "../../../components/wrappers/WrapperTypes"

const BoxShadowOutput = () => {
  const boxShadowStyle = useAppSelector(selectBoxShadowStyle)
  console.log(boxShadowStyle)

  const vanillaStyle = (
    <div>
      {boxShadowStyle.map((x, i) => (
        <div key={i} className="text-[#afcdb2]">
          {x}
          {boxShadowStyle.length === i + 1 ? (
            <span className="pl-[4px] text-white ">;</span>
          ) : (
            <span className="pl-[4px] text-white ">,</span>
          )}
        </div>
      ))}
    </div>
  )
  const vanillaStyleCopy = boxShadowStyle.join()

  const inlineStyle = (
    <div className="sm:ml-20">
      {boxShadowStyle.map((x, i) => (
        <div key={i} className="text-orange-300">
          {x.replace(/ /g, "_").replace(/^_/, "")}
          {boxShadowStyle.length === i + 1 ? (
            <span className="pl-[4px]  "></span>
          ) : (
            <span className="pl-[4px]  ">,</span>
          )}
        </div>
      ))}
    </div>
  )

  const inlineStyleCopy = boxShadowStyle
    .map(x => x.replace(/ /g, "_").replace(/^_/, ""))
    .join()

  const customStyle = (
    <div>
      {boxShadowStyle.map((x, i) => (
        <div key={i} className="text-orange-300">
          {x}
          {boxShadowStyle.length === i + 1 ? (
            <span className="pl-[4px]  "></span>
          ) : (
            <span className="pl-[4px]  ">,</span>
          )}
          {boxShadowStyle.length === i + 1 && (
            <span>
              &#34;<span className="text-white">,</span>
            </span>
          )}
        </div>
      ))}
    </div>
  )
  const customStyleCopy = boxShadowStyle.join()

  const renderArray: OutputRenderArrayType[] = [
    {
      title: "Vanilla",
      copy: `box-shadow: ${vanillaStyleCopy};
      -webkit-box-shadow: ${vanillaStyleCopy};
      -moz-box-shadow: ${vanillaStyleCopy};`,
      content: [
        <div className="mb-4 flex">
          <div className="basis-1/3 text-[#9cdcfe]">
            box-shadow<span className="px-[4px] text-white">:</span>
          </div>
          <div>{vanillaStyle}</div>
        </div>,
        <div className="mb-4  flex">
          <div className="basis-1/3 text-[#9cdcfe]">
            -webkit-box-shadow<span className="px-[4px] text-white">:</span>
          </div>
          <div>{vanillaStyle}</div>
        </div>,
        <div className="mb-4 flex">
          <div className="basis-1/3 text-[#9cdcfe]">
            -moz-box-shadow<span className="px-[4px] text-white">:</span>
          </div>
          <div>{vanillaStyle}</div>
        </div>,
      ],
    },
    {
      title: "Tailwind inline",
      copy: `shadow-[${inlineStyleCopy}]`,
      content: [<span className="text-orange-300">shadow-&#91;{inlineStyle}&#93;</span>],
    },
    {
      title: "Tailwind extend",
      copy: ` "${customStyleCopy}"`,
      content: [
        <div className="select-none text-slate-400">
          <div className="select-none text-slate-400">module.exports =&#x2774;</div>
          <div className="ml-4">theme: &#x2774;</div>
          <div className="ml-8">extend: &#x2774;</div>
          <div className="ml-12">boxShadow: &#x2774;</div>
          <div className="ml-16 flex select-text ">
            <div className="text-[#9cdcfe]">
              "custom"<span className="px-[4px] text-white">:</span>&nbsp;
            </div>
            <div className="text-orange-300">&#34;</div>
            <div>{customStyle}</div>
          </div>
          <div className="ml-16">&#x2775;,</div>
          <div className="ml-12">&#x2775;,</div>
          <div className="ml-8">&#x2775;,</div>
          <div className="ml-4">&#x2775;</div>
        </div>,
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
