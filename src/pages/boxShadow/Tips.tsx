/** @format */

import React from "react"
// @ts-ignore
import { ReactComponent as ArrowIcon } from "../../assets/misc/arrow.svg"
const Tips = () => {
  return (
    <div>
      <h2 className="font-cursiveCustom text-2xl text-center ">
        The aforementioned <span className="text-secondary">tips & tricks</span>
      </h2>
      <section>
        <h3 className="font-cursiveCustom text-xl mt-8">For a quick refresher:</h3>
        <div className="bg-slate-700 px-8 py-6 rounded-xl w-fit mx-auto my-8 border-2 border-slate-600 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
          <p>
            <span className="text-blue-200">
              box-shadow<span className="text-white px-[4px]">:</span>
            </span>
            <span className="text-green-300">
              inset <span className="text-secondary">(boolean)</span> , offset-x
              <span className="text-secondary">(&#177;px)</span>, offset-y
              <span className="text-secondary">(&#177;px)</span>, blur
              <span className="text-secondary">(&#177;px)</span>, spread
              <span className="text-secondary">(&#43;px)</span>, color
              <span className="text-white pl-[4px] ">;</span>
            </span>
          </p>
          <div className=" hidden md:flex mt-2">
            <div className="w-fit  translate-x-[96px]">
              <div>
                <ArrowIcon
                  height={26}
                  width={26}
                  stroke="#ff725e"
                  className={`rotate-[19deg] mx-auto`}
                />
              </div>
              <p className=" font-bold text-sm font-cursiveCustom rotate-[-5deg]">
                optional
              </p>
            </div>
            <div className="w-fit translate-x-[370px]">
              <div>
                <ArrowIcon
                  height={26}
                  width={26}
                  stroke="#ff725e"
                  className={`rotate-[-19deg] mx-auto scale-x-[-1]`}
                />
              </div>
              <p className=" font-bold text-sm font-cursiveCustom rotate-[5deg]">
                optional
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3 className="font-cursiveCustom text-xl mt-8">For a quick refresher:</h3>
      </section>
      <section>
        <h3 className="font-cursiveCustom text-xl mt-8">For a quick refresher:</h3>
      </section>
      <section>
        <h3 className="font-cursiveCustom text-xl mt-8">For a quick refresher:</h3>
      </section>
      <section>
        <h3 className="font-cursiveCustom text-xl mt-8">For a quick refresher:</h3>
      </section>
      <section>
        <h3 className="font-cursiveCustom text-xl mt-8">For a quick refresher:</h3>
      </section>
    </div>
  )
}

export default Tips
