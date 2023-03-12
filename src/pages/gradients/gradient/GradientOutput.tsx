/** @format */

import Output from "../../../components/wrappers/Output"
import { useAppSelector } from "../../../app/hooks"
import { OutputRenderArrayType } from "../../../components/wrappers/Output"
import { selectGradientStyle } from "./gradientSlice"
//@ts-ignore
import SyntaxHighlighter from "react-syntax-highlighter"
//@ts-ignore
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs"
//@ts-ignore
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs"

const DropShadowOutput = () => {
  const gradientStyle = useAppSelector(selectGradientStyle)

  const inlineStyle = gradientStyle.replace(/ /g, "_").replace(/^_/, "")

  const syntaxFunc = (string: string, style: string) => {
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
        {`${string}: ${style};`}
      </SyntaxHighlighter>
    )
  }

  const renderArray: OutputRenderArrayType[] = [
    {
      title: "Vanilla",
      copy: `background: ${gradientStyle};`,
      content: [syntaxFunc(`background`, gradientStyle)],
    },
    {
      title: "Tailwind inline",
      copy: `[background:${inlineStyle}]`,
      content: [
        <div className=" text-orange-300 ">
          <div>&#91;background:</div>
          <div className="ml-20">{inlineStyle}</div> <div>&#93;</div>
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
              <div className="mt-4 text-sm ">
                Tailwind inline doesn't currently support gradients with degrees.
                <br />
                To still add them inline refer to documentation or use custom JIT
              </div>
            ),
          },
        ]}
      />
    </div>
  )
}

export default DropShadowOutput
