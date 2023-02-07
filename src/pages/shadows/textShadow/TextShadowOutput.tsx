/** @format */

import React from "react"
import Output from "../../../components/wrappers/Output"
import { selectTextShadowStyle } from "./textShadowSlice"
import { useAppSelector } from "../../../app/hooks"
import { OutputRenderArrayType } from "../../../components/wrappers/WrapperTypes"

const TextShadowOutput = () => {
  const textShadowStyle = useAppSelector(selectTextShadowStyle)
  console.log(textShadowStyle)
  const vanillaStyle = (
    <div>
      {textShadowStyle.map((x, i) => (
        <div key={i} className="text-[#afcdb2]">
          {x}
          {textShadowStyle.length === i + 1 ? (
            <span className="pl-[4px] text-white ">;</span>
          ) : (
            <span className="pl-[4px] text-white ">,</span>
          )}
        </div>
      ))}
    </div>
  )
  const vanillaStyleCopy = textShadowStyle.join()

  const inlineStyle = (
    <div className="sm:ml-20">
      {textShadowStyle.map((x, i) => (
        <div key={i} className="text-orange-300">
          {x.replace(/ /g, "_").replace(/^_/, "")}
          {textShadowStyle.length === i + 1 ? (
            <span className="pl-[4px]  "></span>
          ) : (
            <span className="pl-[4px]  ">,</span>
          )}
        </div>
      ))}
    </div>
  )

  const inlineStyleCopy = textShadowStyle
    .map((x) => x.replace(/ /g, "_").replace(/^_/, ""))
    .join()

  const customStyle = (
    <div>
      {textShadowStyle.map((x, i) => (
        <div key={i} className="text-orange-300">
          {x}
          {textShadowStyle.length === i + 1 ? (
            <span className="pl-[4px]  "></span>
          ) : (
            <span className="pl-[4px]  ">,</span>
          )}
          {textShadowStyle.length === i + 1 && (
            <span>
              &#34;<span className="text-white">,</span>
            </span>
          )}
        </div>
      ))}
    </div>
  )
  const customStyleCopy = textShadowStyle.join()
  // [text-shadow:_0_12px_0_rgb(255_255_255_/_1)]
  // [text-shadow:_0_12px_0_rgb(255_255_255_/_1),_0_-12px_0_rgb(255_255_255_/_1)]
  const renderArray: OutputRenderArrayType[] = [
    {
      title: "Vanilla",
      copy: `text-shadow: ${vanillaStyleCopy};`,
      content: [
        <div className="mb-4 flex">
          <div className="basis-1/3 text-[#9cdcfe]">
            text-shadow<span className="px-[4px] text-white">:</span>
          </div>
          <div>{vanillaStyle}</div>
        </div>,
      ],
    },
    {
      title: "Tailwind inline",
      copy: `[text-shadow:${inlineStyleCopy}]`,
      content: [
        <span className="text-orange-300">
          &#91;text-shadow:{inlineStyle}&#93;
        </span>,
      ],
    },
    {
      title: "Tailwind extend",
      copy: ` "${customStyleCopy}"`,
      content: [
        <div className="select-none text-slate-400">
          <div className="select-none text-slate-400">
            module.exports =&#x2774;
          </div>
          <div className="ml-4">theme: &#x2774;</div>
          <div className="ml-8">extend: &#x2774;</div>
          <div className="ml-12">textShadow: &#x2774;</div>
          <div className="ml-16 flex select-text ">
            <div className="text-[#9cdcfe]">
              "sm"<span className="px-[4px] text-white">:</span>&nbsp;
            </div>
            <div className="text-orange-300">
              &#34;0px 1px 2px var(--tw-shadow-color)&#34;
              <span className="text-white">,</span>
            </div>
          </div>
          <div className="ml-16 flex select-text ">
            <div className="text-[#9cdcfe]">
              "DEFAULT"<span className="px-[4px] text-white">:</span>&nbsp;
            </div>
            <div className="text-orange-300">
              &#34;0px 2px 4px var(--tw-shadow-color)&#34;
              <span className="text-white">,</span>
            </div>
          </div>
          <div className="ml-16 flex select-text ">
            <div className="text-[#9cdcfe]">
              "lg"<span className="px-[4px] text-white">:</span>&nbsp;
            </div>
            <div className="text-orange-300">
              &#34;0px 8px 16px var(--tw-shadow-color)&#34;
              <span className="text-white">,</span>
            </div>
          </div>
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
      <Output
        renderArray={renderArray}
        comments={[
          {
            onActive: 1,
            comment: (
              <div className="mt-4 text-sm ">
                Tailwind inline doesn't currently support text shadows.
                <br />
                To still add them inline use custom JIT or <br /> add custom
                classes through confing.
              </div>
            ),
          },
          {
            onActive: 2,
            comment: (
              <div className="text-sm">
                Tailwind inline doesn't currently support text shadows.
                <br />
                So... what do? Just add the following to your
                tailwind.config.js:
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
                          plugin&#40;function &#40; &#123; matchUtilities, theme
                          &#125; &#41; &#123;
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
                  For custom classes we've used var(--tw-shadow-color). This
                  allows us to use Tailwind CSS shadow-[color] classes with the
                  text-shadow classes we've added.
                </div>
                <div className="mt-2">
                  Thats pretty much it. Now we can use text shadows like other
                  tailwind classes text-shadow-[sm] shadow-slate-300 .
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
