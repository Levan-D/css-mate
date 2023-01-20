/** @format */

import React from "react"
// @ts-ignore
import { ReactComponent as ArrowIcon } from "../../assets/misc/arrow.svg"
const Tips = () => {
  return (
    <div>
      <h2 id="Tips & tricks" className="font-cursiveCustom text-2xl text-center ">
        The aforementioned <span className="text-secondary">tips & tricks</span>
      </h2>
      <section>
        <h3 className="font-cursiveCustom text-xl mt-16">For a quick refresher</h3>
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
      <section id="Multiple shadows">
        <h3 className="font-cursiveCustom text-xl mb-4 mt-24">
          Setting multiple shadows
        </h3>
        <p>You can chain multiple box shadows by seperating each rule with a comma.</p>
        <h4 className="font-bold my-8">Rule used below:</h4>
        <div className="bg-slate-700 px-8 py-6 rounded-xl w-fit mx-auto my-8 border-2 border-slate-600 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
          <div className="flex gap-4 ">
            <div className="text-blue-300">
              box-shadow<span className="text-white px-[4px]">:</span> <br />
            </div>
            <div className="text-green-300">
              inset -14px -15px 22px -2px rgba(0, 0, 0,0.35),
              <br /> 0px 0px 0px 4px rgba( 150, 150, 150,1), <br />
              8px 12px 4px 0px rgba(255, 255, 255,0.29)
              <span className="text-white pl-[4px] ">;</span>
            </div>
          </div>
        </div>
        <h4 className="font-bold my-8">Result:</h4>
        <div className="bg-slate-300 text-slate-700 px-8 py-6 rounded-xl w-fit mx-auto my-8   shadow-[inset_-14px_-15px_22px_-2px_rgba(0,_0,_0,0.35),0px_0px_0px_3px_rgba(_150,_150,_150,1),8px_12px_4px_0px_rgba(255,_255,_255,0.29)] ">
          <blockquote>
            <q>
              Do you think God stays in heaven because he, too,
              <br />
              lives in fear of what he's created here on earth?
            </q>
            <p className="text-right font-bold mt-4">&mdash; Dr. Romero</p>
          </blockquote>
        </div>
      </section>
      <section id="Glow effects">
        <h3 className="font-cursiveCustom text-xl mb-4 mt-24">Neon glow effects</h3>
        <p>
          By layering multiple inner and outer shadows with varying color gradients,
          intensities, and blurs <br /> you can create a neon glow effect.{" "}
        </p>
        <h4 className="font-bold my-8">Rule used below:</h4>
        <div className="bg-slate-700 px-8 py-6 rounded-xl w-fit mx-auto my-8 border-2 border-slate-600 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
          <div className="flex gap-4 ">
            <div className="text-blue-300">
              box-shadow<span className="text-white px-[4px]">:</span> <br />
            </div>
            <div className="text-green-300">
              0px 0px 4px 0px rgba(255, 255, 255,1), <br /> 0px 0px 4px 0px rgba( 255,
              255, 255,1), <br /> 0px 0px 36px 0px rgba( 188, 19, 254,0.7), <br /> 0px 0px
              16px 0px rgba( 188, 19, 254,1), <br /> 0px 0px 50px 0px rgba( 188, 19,
              254,0.8), <br /> inset 0px 0px 24px 0px rgba( 188, 19, 254,1)
              <span className="text-white pl-[4px] ">;</span>
            </div>
          </div>
        </div>
        <h4 className="font-bold  my-8">Result:</h4>
        <div className="bg-transparent text-white px-12 py-16 rounded-xl w-fit mx-auto   shadow-[0px_0px_4px_0px_rgba(255,_255,_255,1),0px_0px_4px_0px_rgba(_255,_255,_255,1),0px_0px_36px_0px_rgba(_188,_19,_254,0.7),0px_0px_16px_0px_rgba(_188,_19,_254,1),0px_0px_50px_0px_rgba(_188,_19,_254,0.8),inset_0px_0px_24px_0px_rgba(_188,_19,_254,1)] ">
          <blockquote>
            <q className="   drop-shadow-neonPurple text-lg  ">
              There's no place like home.
            </q>
            <p className="text-right font-bold mt-4 drop-shadow-neonPurple text-lg">
              &mdash; Dorothy
            </p>
          </blockquote>
        </div>
      </section>
      <section id="3D effects">
        <h3 className="font-cursiveCustom text-xl mb-4 mt-24">3D effects</h3>
        <p>
          If you layer inner and outer shadows you can create the perception of depth.
        </p>
        <h4 className="font-bold my-8">Rules used below:</h4>
        <div className="bg-slate-700 px-8 py-6 rounded-xl w-fit mx-auto my-8 border-2 border-slate-600 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
          <div className=" flex gap-4 ">
            <div className="text-blue-300">
              1&#41; box-shadow<span className="text-white px-[4px]">:</span> <br />
            </div>
            <div className="text-green-300">
              inset -5px -5px 16px -10px rgba(255, 255, 255,0.6), <br />
              inset 5px 5px 16px 2px rgba(0, 0, 0,1), <br />
              inset 12px 12px 4px 150px rgba(0, 0, 0,0.05)
              <span className="text-white pl-[4px] ">;</span>
            </div>
          </div>
          <div className="flex gap-4  mt-4 ">
            <div className="text-blue-300">
              2&#41; box-shadow<span className="text-white px-[4px]">:</span> <br />
            </div>
            <div className="text-green-300">
              0px 0px 0px 1px rgba(0, 0, 0,1), <br /> inset -15px -15px 50px 5px rgba(0,
              0, 0,0.86), <br /> inset -35px -45px 80px 50px rgba(94, 161, 255,1), <br />
              20px 20px 20px 0px rgba(0, 0, 0,1);
              <span className="text-white pl-[4px] ">;</span>
            </div>
          </div>
        </div>
        <h4 className="font-bold  my-8">Results:</h4>
        <div className="lg:flex justify-center gap-8 ">
          <div className="bg-transparent mx-auto text-white px-12 py-16 rounded-xl w-fit shadow-[inset_-5px_-5px_16px_-10px_rgba(255,_255,_255,0.6),inset_5px_5px_16px_2px_rgba(0,_0,_0,1),inset_12px_12px_4px_150px_rgba(0,_0,_0,0.05)] ">
            <blockquote>
              <q className="    text-lg  ">
                Roads? Where we're going we don't need roads.
              </q>
              <p className="text-right font-bold mt-4  text-lg">&mdash; Doc Brown</p>
            </blockquote>
          </div>
          <div className="bg-white  mx-auto mt-6 lg:mt-0 text-black px-12 py-16 rounded-full  w-[200px] h-[200px] shadow-[0px_0px_0px_1px_rgba(0,_0,_0,1),inset_-15px_-15px_50px_5px_rgba(0,_0,_0,0.86),inset_-35px_-45px_80px_50px_rgba(94,_161,_255,1),20px_20px_20px_0px_rgba(0,_0,_0,1)] ">
            <blockquote>
              <q className="    text-lg  opacity-75 ">Adrian!</q>
              <p className="text-right font-bold mt-4 opacity-75  text-lg">
                &mdash; Rocky
              </p>
            </blockquote>
          </div>
        </div>
      </section>
      <section id="Cheese">
        <h3 className="font-cursiveCustom text-xl mb-4 mt-24">Let the cheese flow</h3>
        <p>
          You can use box shadow and rotate properties to create the cheesiest collage
          ever!
        </p>
        <h4 className="font-bold my-8">Rule used below:</h4>
        <div className="bg-slate-700 px-8 py-6 rounded-xl w-fit mx-auto my-8 border-2 border-slate-600 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
          <div className="flex gap-4 ">
            <div className="text-blue-300">
              box-shadow<span className="text-white px-[4px]">:</span> <br />
            </div>
            <div className="text-green-300">
              0px 0px 0px 30px rgba(255,255,255,1), <br />
              0px 30px 0px 30px rgba(255,255,255,1), <br />
              -10px 60px 30px 5px rgba(0, 0, 0,1), <br />
              35px 60px 30px 0px rgba(0, 0, 0,1), <br />
              35px -10px 30px 0px rgba(0, 0, 0,1)
              <span className="text-white pl-[4px] ">;</span>
            </div>
          </div>
        </div>
        <h4 className="font-bold  my-8">Results:</h4>
        <div className="flex justify-center gap-8 w-fit mx-auto ">
          <div className="bg-orange-500 rotate-[-25deg] mt-20 z-40 text-white px-12 py-16 rounded-xl w-[300px] shadow-[0px_0px_0px_30px_rgba(230,230,230,1),0px_30px_0px_30px_rgba(230,230,230,1),-10px_60px_30px_5px_rgba(0,_0,_0,1),35px_60px_30px_0px_rgba(0,_0,_0,1),35px_-10px_30px_0px_rgba(0,_0,_0,1)] ">
            <blockquote>
              <q className="    text-lg  ">
                Carpe diem. Seize the day, boys. Make your lives extraordinary.
              </q>
              <p className="text-right font-bold mt-4  text-lg">&mdash; John Keating</p>
            </blockquote>
          </div>
          <div className=" hidden md:block bg-red-500  rotate-[30deg]  lg:rotate-[4deg] z-30  sm:translate-x-[-140px]  lg:translate-x-[-40px] translate-y-[-60px] mt-20 text-white px-12 py-16 rounded-md w-[300px]  shadow-[0px_0px_0px_30px_rgba(230,230,230,1),0px_30px_0px_30px_rgba(230,230,230,1),-10px_60px_30px_5px_rgba(0,_0,_0,1),35px_60px_30px_0px_rgba(0,_0,_0,1),35px_-10px_30px_0px_rgba(0,_0,_0,1)] ">
            <blockquote>
              <q className="    text-lg    ">
                They may take our lives, but they'll never take our freedom!
              </q>
              <p className="text-right font-bold mt-4    text-lg">
                &mdash; William Wallace
              </p>
            </blockquote>
          </div>
          <div className=" hidden lg:block bg-purple-500 rotate-[30deg] z-20 translate-x-[-90px]  translate-y-[40px] mt-20 text-white px-12 py-16 rounded-md w-[300px]  shadow-[0px_0px_0px_30px_rgba(230,230,230,1),0px_30px_0px_30px_rgba(230,230,230,1),-10px_60px_30px_5px_rgba(0,_0,_0,1),35px_60px_30px_0px_rgba(0,_0,_0,1),35px_-10px_30px_0px_rgba(0,_0,_0,1)] ">
            <blockquote>
              <q className="    text-lg    ">
                What we've got here is failure to communicate.
              </q>
              <br />
              <p className="text-right font-bold mt-4    text-lg">&mdash; Captain</p>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tips
