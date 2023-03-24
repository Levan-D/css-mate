/** @format */

import Output from "../../../components/Output"
import { selectBoxShadowStyle } from "./boxShadowSlice"
import { useAppSelector } from "../../../app/hooks"
import { OutputRenderArrayType } from "../../../components/Output"
//@ts-ignore
import SyntaxHighlighter from "react-syntax-highlighter"
//@ts-ignore
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs"
//@ts-ignore
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs"

const BoxShadowOutput = () => {
  const boxShadowStyle = useAppSelector(selectBoxShadowStyle)

  const vanillaStyle = boxShadowStyle.join(",")

  const inlineStyle = vanillaStyle.replace(/ /g, "_").replace(/^_/, "")

  const syntaxFunc = (string: string, style: string[], numSpaces = 0) => {
    const spaces = " ".repeat(numSpaces)

    let syntaxStyle

    if (Array.isArray(style)) {
      if (string === `"custom"`) {
        syntaxStyle = `"${style.join(`,\n${spaces}`)}",`
      } else {
        syntaxStyle = style.join(`,\n${spaces}`) + ";"
      }
    } else syntaxStyle = style

    return (
      <SyntaxHighlighter
        language="css"
        style={string === `"custom"` ? nightOwl : vs2015}
        wrapLongLines={true}
        customStyle={{
          backgroundColor: "transparent",
          overflowX: "hidden",
          color: string === `"custom"` && "#ecc48d",
        }}
      >
        {`${string}: ${syntaxStyle}`}
      </SyntaxHighlighter>
    )
  }

  const renderArray: OutputRenderArrayType[] = [
    {
      title: "Vanilla",
      copy: `box-shadow: ${vanillaStyle};
      -webkit-box-shadow: ${vanillaStyle};
      -moz-box-shadow: ${vanillaStyle};`,
      content: [
        syntaxFunc(`box-shadow`, boxShadowStyle, 12),
        syntaxFunc(`-webkit-box-shadow`, boxShadowStyle, 20),
        syntaxFunc(`-moz-box-shadow`, boxShadowStyle, 17),
      ],
    },
    {
      title: "Tailwind inline",
      copy: `shadow-[${inlineStyle}]`,
      content: [
        <div className="max-w-[345px] text-orange-300 md:max-w-[380px]">
          <div>shadow-&#91;</div>
          <div className="ml-20">{inlineStyle}</div> <div>&#93;</div>
        </div>,
      ],
    },
    {
      title: "Tailwind extend",
      copy: `"${vanillaStyle}"`,
      content: [
        <div className="select-none text-slate-400">
          <div className="select-none text-slate-400">module.exports =&#x2774;</div>
          <div className="ml-4">theme: &#x2774;</div>
          <div className="ml-8">extend: &#x2774;</div>
          <div className="ml-12">boxShadow: &#x2774;</div>
          <div className="ml-16 flex select-text ">
            {syntaxFunc(`"custom"`, boxShadowStyle, 11)}
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
