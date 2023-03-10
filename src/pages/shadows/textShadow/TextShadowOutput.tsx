/** @format */

import React from "react"
import Output from "../../../components/wrappers/Output"
import { selectTextShadowStyle } from "./textShadowSlice"
import { useAppSelector } from "../../../app/hooks"
import { OutputRenderArrayType } from "../../../components/wrappers/Output"
//@ts-ignore
import SyntaxHighlighter from "react-syntax-highlighter"
//@ts-ignore
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs"
//@ts-ignore
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs"

const TextShadowOutput = () => {
  const textShadowStyle = useAppSelector(selectTextShadowStyle)

  const vanillaStyle = textShadowStyle.join(",")

  const inlineStyle = vanillaStyle.replace(/ /g, "_").replace(/^_/, "")

  const customStyleCopy = textShadowStyle.join()

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
      copy: `text-shadow: ${vanillaStyle};`,
      content: [syntaxFunc(`text-shadow`, textShadowStyle, 13)],
    },
    {
      title: "Tailwind inline",
      copy: `[text-shadow:${inlineStyle}]`,
      content: [
        <div className="max-w-[305px] text-orange-300 md:max-w-[340px]">
          <div>&#91;text-shadow:</div>
          <div className="ml-20">{inlineStyle}</div> <div>&#93;</div>
        </div>,
      ],
    },
    {
      title: "Tailwind extend",
      copy: ` "${customStyleCopy}"`,
      content: [
        <div className="select-none text-sm text-slate-400">
          <div className="select-none text-slate-400">module.exports =&#x2774;</div>
          <div className="ml-4">theme: &#x2774;</div>
          <div className="ml-8">extend: &#x2774;</div>
          <div className="ml-12">textShadow: &#x2774;</div>
          <div className="ml-16 flex select-text ">
            <div className="basis-1/5 text-[#9cdcfe] ">
              "sm"<span className="px-[4px] text-white">:</span>&nbsp;
            </div>
            <div className="text-orange-300">
              &#34;0px 1px 2px var(--tw-shadow-color)&#34;
              <span className="text-white">,</span>
            </div>
          </div>
          <div className="ml-16 flex select-text ">
            <div className="basis-1/5 text-[#9cdcfe]">
              "DEFAULT"<span className="px-[4px] text-white">:</span>&nbsp;
            </div>
            <div className="text-orange-300">
              &#34;0px 2px 4px var(--tw-shadow-color)&#34;
              <span className="text-white">,</span>
            </div>
          </div>
          <div className="ml-16 flex select-text ">
            <div className="basis-1/5 text-[#9cdcfe]">
              "lg"<span className="px-[4px] text-white">:</span>&nbsp;
            </div>
            <div className="text-orange-300">
              &#34;0px 8px 16px var(--tw-shadow-color)&#34;
              <span className="text-white">,</span>
            </div>
          </div>
          <div className="ml-[58px]  select-text ">
            {syntaxFunc(`"custom"`, textShadowStyle, 11)}
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
      <Output
        renderArray={renderArray}
        comments={[
          {
            onActive: 1,
            comment: (
              <div className="mt-4 text-sm ">
                Tailwind inline doesn't currently support text shadows.
                <br />
                To still add them inline use custom JIT or <br /> add custom classes
                through confing.
              </div>
            ),
          },
          {
            onActive: 2,
            comment: (
              <div className="text-sm">
                Tailwind inline doesn't currently support text shadows.
                <br />
                So... what do? Just add the following to your tailwind.config.js:
                <div className="menuContainer mt-4 select-none text-left  text-slate-400">
                  <div className="m-4 rounded-lg border-l-2 border-primary pt-3 pb-4 pl-4">
                    <div className="select-text text-white">
                      const plugin = require('tailwindcss/plugin')
                    </div>
                    <br />
                    <div>module.exports =&#x2774;</div>
                    <div className="ml-4">theme: &#x2774;</div>
                    <div className="ml-8">extend: &#x2774;</div>
                    <div className="ml-16">&#x2775;,</div>
                    <div className="ml-12">&#x2775;,</div>
                    <div className="ml-8">&#x2775;,</div>
                    <div className="ml-4">
                      <div>plugins: &#91;</div>
                      <div className="select-text text-white">
                        <div className="ml-4">
                          plugin&#40;function &#40; &#123; matchUtilities, theme &#125;
                          &#41; &#123;
                        </div>
                        <div className="ml-8">matchUtilities&#40;</div>
                        <div className="ml-12">&#123;</div>
                        <div className="ml-16">
                          'text-shadow': &#40;value&#41; =&#62; &#40;&#123;
                        </div>
                        <div className="ml-20">textShadow: value,</div>
                        <div className="ml-16">&#125;&#41;,</div>
                        <div className="ml-12"> &#125;,</div>
                        <div className="ml-12">
                          &#123; values: theme&#40;'textShadow'&#41; &#125;
                        </div>
                        <div className="ml-10">&#41;</div>
                        <div className="ml-6"> &#125;&#41;,</div>
                      </div>
                      <div className="ml-4">&#93;,</div>
                    </div>
                    <div className="ml-4">&#x2775;</div>
                  </div>
                </div>
                <div className="mt-4">
                  For custom classes we've used var(--tw-shadow-color). This allows us to
                  use Tailwind CSS shadow-[color] classes with the text-shadow classes
                  we've added.
                </div>
                <div className="mt-2">
                  Thats pretty much it. Now we can use text shadows like other tailwind
                  classes text-shadow-[sm] shadow-slate-300 .
                  <br />
                  For DEFAULT option just write text-shadow without [size]
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  )
}

export default TextShadowOutput
