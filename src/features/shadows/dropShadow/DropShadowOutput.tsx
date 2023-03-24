/** @format */

import Output from "../../../components/Output"
import { useAppSelector } from "../../../app/hooks"
import { OutputRenderArrayType } from "../../../components/Output"
import { selectDropShadowStyle } from "./dropShadowSlice"
//@ts-ignore
import SyntaxHighlighter from "react-syntax-highlighter"
//@ts-ignore
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs"
//@ts-ignore
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs"

const DropShadowOutput = () => {
  const dropShadowStyle = useAppSelector(selectDropShadowStyle)

  const vanillaStyle = dropShadowStyle.map(x => `drop-shadow(${x})`).join(" ")

  const inlineStyle = dropShadowStyle[0].replace(/ /g, "_").replace(/^_/, "")

  const extendStyle = dropShadowStyle.map(x => `"${x}"`)
  dropShadowStyle.length !== 1 && extendStyle.push("]")
  dropShadowStyle.length !== 1 && extendStyle.unshift("[")

  const syntaxFunc = (string: string, style: string[], numSpaces = 0) => {
    const spaces = " ".repeat(numSpaces)

    let syntaxStyle

    if (Array.isArray(style)) {
      if (string === `"custom"`) {
        if (style.length > 1) {
          syntaxStyle = style.map(
            (x, i) =>
              `${x}${
                i > 0 && i !== style.length - 2 && i !== style.length - 1 ? "," : ""
              }`
          )
          syntaxStyle = syntaxStyle.join(`\n${spaces}`)
        } else syntaxStyle = style.join(``)
      } else {
        syntaxStyle = style.map(x => `drop-shadow(${x})`).join(` \n${spaces}`) + ";"
      }
    } else {
      syntaxStyle = style
    }

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
      copy: `filter: ${vanillaStyle};`,
      content: [syntaxFunc(`filter`, dropShadowStyle, 8)],
    },
    {
      title: "Tailwind inline",
      copy: `filter drop-shadow-[${inlineStyle}]`,
      content: [
        <div className="max-w-[345px] text-orange-300 md:max-w-[380px]">
          <div>filter drop-shadow-&#91;</div>
          <div className="ml-20">{inlineStyle}</div> <div>&#93;</div>
        </div>,
      ],
    },
    {
      title: "Tailwind extend",
      copy: `${
        extendStyle.length === 1
          ? extendStyle.join(",")
          : extendStyle.join(",").slice(0, 1) +
            extendStyle.join(",").slice(2, -2) +
            extendStyle.join(",").slice(-1)
      }`,
      content: [
        <div className="select-none text-slate-400">
          <div className="select-none text-slate-400">module.exports =&#x2774;</div>
          <div className="ml-4">theme: &#x2774;</div>
          <div className="ml-8">extend: &#x2774;</div>
          <div className="ml-12">dropShadow: &#x2774;</div>
          <div className="ml-16 flex select-text ">
            <div></div>
            {syntaxFunc(`"custom"`, extendStyle, 10)}
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
