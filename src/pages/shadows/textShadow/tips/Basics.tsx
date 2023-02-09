/** @format */

import React from "react"
// @ts-ignore
import { ReactComponent as ArrowIcon } from "../../../../assets/misc/arrow.svg"

const Basics = () => {
  return (
    <section id="Basics">
      <h3 className="mt-16 mb-4 font-cursiveCustom text-xl">Basics</h3>

      <p>
        CSS text shadows are an important aspect of web design, as they help
        create a visually appealing and engaging text appearance on the web
        page. With the use of text shadows, you can add depth and dimension to
        your text, making it stand out from the background and providing a
        3D-like effect.
      </p>
      <p className="my-4">
        Text shadows can be added to any text element on a web page, such as
        headings, paragraphs, or even links. You can use CSS to control the
        color, size, and location of the text shadow, allowing you to create
        unique and eye-catching effects. The text shadow can also be used to
        enhance the legibility of text, making it easier to read against certain
        background colors or patterns.
      </p>
      <p>
        It's important to note that different browsers may handle text shadows
        differently, so it's a good idea to test your text shadows in multiple
        browsers to ensure compatibility.
      </p>

      <div className="mx-auto my-12 w-fit rounded-xl border-2 border-slate-600 bg-slate-700 px-8 py-6 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
        <p>
          <span className="text-blue-200">
            box-shadow<span className="px-[4px] text-white">:</span>
          </span>
          <span className="text-green-300">
            offset-x
            <span className="text-secondary-300">(&#177;px)</span>, offset-y
            <span className="text-secondary-300">(&#177;px)</span>, blur
            <span className="text-secondary-300">(&#177;px)</span>, color
            <span className="pl-[4px] text-white ">;</span>
          </span>
        </p>
        <div className=" mt-2 hidden md:flex">
          <div className="w-fit translate-x-[300px]">
            <div>
              <ArrowIcon
                height={26}
                width={26}
                stroke="#ff725e"
                className={`mx-auto rotate-[-19deg] scale-x-[-1]`}
              />
            </div>
            <p className=" rotate-[5deg] font-cursiveCustom text-sm font-bold">
              optional
            </p>
          </div>
        </div>
      </div>

      <ol className="mx-auto max-w-xl">
        <li className="mb-4 list-decimal font-bold">
          Horizontal offset:&#32;
          <span className="font-normal ">
            This value sets the distance the shadow should be offset from the
            left of the element. A positive value will move the shadow to the
            right, and a negative value will move it to the left.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          Vertical offset:&#32;
          <span className="font-normal ">
            This value sets the distance the shadow should be offset from the
            top of the element. A positive value will move the shadow down, and
            a negative value will move it up.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          Blur radius:&#32;
          <span className="font-normal ">
            This value sets the amount of blur applied to the shadow. A higher
            value will create a more diffuse shadow, while a lower value will
            create a sharper shadow.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          Shadow color:&#32;
          <span className="font-normal ">
            This value sets the color of the shadow. This can be any valid CSS
            color value, such as a hex code or a color name.
          </span>
        </li>
      </ol>
    </section>
  )
}

export default Basics
