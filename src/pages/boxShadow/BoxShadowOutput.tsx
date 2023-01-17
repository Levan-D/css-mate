/** @format */

import React from "react"
import Output from "../../components/wrappers/Output"
import { useAppSelector } from "../../app/hooks"
import { OutputRenderArrayType } from "../../components/wrappers/WrapperTypes"

const BoxShadowOutput = () => {
  const { boxShadowData } = useAppSelector(state => state.boxShadow)

  let boxShadowRender = boxShadowData
    .map(data => {
      return `${data.settings.inset ? "inset" : ""} ${data.settings.horizontal}px ${
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
        `box-shadow: ${boxShadowRender};`,
        `-webkit-box-shadow: ${boxShadowRender};`,
        `-moz-box-shadow: ${boxShadowRender};`,
      ],
    },
    {
      title: "Tailwind inline",
      copy: `shadow-[${boxShadowRender.replace(/ /g, "_")}]`,
      content: [`shadow-[${boxShadowRender.replace(/ /g, "_")}]`],
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
          <span className=" select-text text-white ">
            &#34;custom &#34;: &#34;{boxShadowRender}&#34;
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
      <Output title="CSS Rules" renderArray={renderArray} />
    </div>
  )
}

export default BoxShadowOutput
