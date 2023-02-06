/** @format */

import React from "react"
// @ts-ignore
import { ReactComponent as ArrowIcon } from "../../../assets/misc/arrow.svg"

const Basics = () => {
  return (
    <section id="Basics">
      <h3 className="mt-16 mb-4 font-cursiveCustom text-xl">Basics</h3>

      <p>
        Box shadows are a powerful design tool that can add depth and dimension to any
        website or application. Whether you're creating a subtle drop shadow or a more
        dramatic effect, the ability to control the position, size, and color of a shadow
        can help you create visually appealing layouts and user interfaces. In this
        article, we will explore the various ways in which you can use box shadows to
        enhance your designs, including tips and tricks for creating custom effects.
      </p>

      <div className="mx-auto my-12 w-fit rounded-xl border-2 border-slate-600 bg-slate-700 px-8 py-6 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
        <p>
          <span className="text-blue-200">
            box-shadow<span className="px-[4px] text-white">:</span>
          </span>
          <span className="text-green-300">
            inset <span className="text-secondary-300">(boolean)</span> , offset-x
            <span className="text-secondary-300">(&#177;px)</span>, offset-y
            <span className="text-secondary-300">(&#177;px)</span>, blur
            <span className="text-secondary-300">(&#177;px)</span>, spread
            <span className="text-secondary-300">(&#43;px)</span>, color
            <span className="pl-[4px] text-white ">;</span>
          </span>
        </p>
        <div className=" mt-2 hidden md:flex">
          <div className="w-fit  translate-x-[96px]">
            <div>
              <ArrowIcon
                height={26}
                width={26}
                stroke="#ff725e"
                className={`mx-auto rotate-[19deg]`}
              />
            </div>
            <p className=" rotate-[-5deg] font-cursiveCustom text-sm font-bold">
              optional
            </p>
          </div>
          <div className="w-fit translate-x-[370px]">
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
          Inset: :&#32;
          <span className="font-normal ">
            This value is optional, and it makes the shadow inside the element rather than
            outside.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          Horizontal offset:&#32;
          <span className="font-normal ">
            This value sets the distance the shadow should be offset from the left of the
            element. A positive value will move the shadow to the right, and a negative
            value will move it to the left.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          Vertical offset:&#32;
          <span className="font-normal ">
            This value sets the distance the shadow should be offset from the top of the
            element. A positive value will move the shadow down, and a negative value will
            move it up.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          Blur radius:&#32;
          <span className="font-normal ">
            This value sets the amount of blur applied to the shadow. A higher value will
            create a more diffuse shadow, while a lower value will create a sharper
            shadow.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          Spread radius:&#32;
          <span className="font-normal ">
            This value sets the size of the shadow. A positive value will increase the
            size of the shadow, while a negative value will decrease it.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          Shadow color:&#32;
          <span className="font-normal ">
            This value sets the color of the shadow. This can be any valid CSS color
            value, such as a hex code or a color name.
          </span>
        </li>
      </ol>
    </section>
  )
}

export default Basics
