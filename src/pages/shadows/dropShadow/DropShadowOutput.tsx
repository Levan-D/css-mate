/** @format */

import Output from "../../../components/wrappers/Output"
import { useAppSelector } from "../../../app/hooks"
import { OutputRenderArrayType } from "../../../components/wrappers/WrapperTypes"
import { selectDropShadowStyle } from "./dropShadowSlice"

const DropShadowOutput = () => {
  const dropShadowStyle = useAppSelector(selectDropShadowStyle)

  const vanillaStyle = (
    <div>
      {dropShadowStyle.map((x, i) => (
        <div key={i} className="text-[#afcdb2]">
          drop-shadow({x})
          {dropShadowStyle.length === i + 1 ? (
            <span className="pl-[4px] text-white ">;</span>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  )
  const vanillaStyleCopy = dropShadowStyle.map(x => `drop-shadow(${x})`).join(" ")

  const inlineStyle = (
    <div className="sm:ml-20">
      <div className="text-orange-300">
        {dropShadowStyle[0].replace(/ /g, "_").replace(/^_/, "")}
      </div>
    </div>
  )
  const inlineStyleCopy = `filter drop-shadow-[${dropShadowStyle[0]
    .replace(/ /g, "_")
    .replace(/^_/, "")}]`

  const customStyle = (
    <div>
      {dropShadowStyle.length > 1 && <div>&#91;</div>}
      {dropShadowStyle.map((x, i) => (
        <div key={i} className="text-orange-300">
          &#39;{x}&#39;
          {dropShadowStyle.length === i + 1 ? (
            ""
          ) : (
            <span className="pl-[4px] text-slate-400 ">,</span>
          )}
        </div>
      ))}
      {dropShadowStyle.length > 1 && <div>&#93;</div>}
    </div>
  )
  const customStyleCopy = `${dropShadowStyle.length > 1 ? "[" : ""}${dropShadowStyle
    .map(x => `'${x}'`)
    .join()}${dropShadowStyle.length > 1 ? "]" : ""}`

  const renderArray: OutputRenderArrayType[] = [
    {
      title: "Vanilla",
      copy: `filter: ${vanillaStyleCopy};`,
      content: [
        <div className="mb-4 flex">
          <div className="basis-1/4 text-[#9cdcfe]">
            filter<span className="px-[4px] text-white">:</span>
          </div>
          <div>{vanillaStyle}</div>
        </div>,
      ],
    },
    {
      title: "Tailwind inline",
      copy: `${inlineStyleCopy}`,
      content: [
        <span className="text-orange-300">
          filter drop-shadow-&#91;{inlineStyle}&#93;
        </span>,
      ],
    },
    {
      title: "Tailwind extend",
      copy: `${customStyleCopy}`,
      content: [
        <div className="select-none text-slate-400">
          <div className="select-none text-slate-400">module.exports =&#x2774;</div>
          <div className="ml-4">theme: &#x2774;</div>
          <div className="ml-8">extend: &#x2774;</div>
          <div className="ml-12">dropShadow: &#x2774;</div>
          <div className="ml-16 flex select-text ">
            <div className="text-[#9cdcfe]">
              "custom"<span className="px-[4px] text-white">:</span>&nbsp;
            </div>

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
    <div className="  drop-shadow-primaryDark filter ">
      <Output
        renderArray={renderArray}
        comments={[
          {
            onActive: 1,
            comment: (
              <span>
                Tailwind inline only supports a single drop shadow rule. <br /> If you
                want to add more use tailwind extend.
              </span>
            ),
          },
        ]}
      />
    </div>
  )
}

export default DropShadowOutput
