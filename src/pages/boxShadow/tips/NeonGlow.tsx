/** @format */

import React from "react"

const NeonGlow = () => {
  return (
    <section id="Glow effects">
      <h3 className="font-cursiveCustom text-xl mb-4 mt-24">Neon glow effects</h3>
      <p>
        By layering multiple inner and outer shadows with varying color gradients,
        intensities, and blurs <br /> you can create a neon glow effect.{" "}
      </p>
      <div className="lg:flex gap-8 justify-center ">
        <div>
          <h4 className="font-bold my-8">Rule used below:</h4>
          <div className="bg-slate-700 px-8 py-6 rounded-xl w-fit mx-auto my-8 border-2 border-slate-600 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
            <div className="flex gap-4 ">
              <div className="text-blue-300">
                box-shadow<span className="text-white px-[4px]">:</span> <br />
              </div>
              <div className="text-green-300">
                0px 0px 4px 0px rgba(255, 255, 255,1), <br /> 0px 0px 4px 0px rgba( 255,
                255, 255,1), <br /> 0px 0px 36px 0px rgba( 188, 19, 254,0.7), <br /> 0px
                0px 16px 0px rgba( 188, 19, 254,1), <br /> 0px 0px 50px 0px rgba( 188, 19,
                254,0.8), <br /> inset 0px 0px 24px 0px rgba( 188, 19, 254,1)
                <span className="text-white pl-[4px] ">;</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-bold  my-8">Result:</h4>
          <div className="bg-transparent text-white px-12 py-14 rounded-xl w-fit mx-auto   shadow-[0px_0px_4px_0px_rgba(255,_255,_255,1),0px_0px_4px_0px_rgba(_255,_255,_255,1),0px_0px_36px_0px_rgba(_188,_19,_254,0.7),0px_0px_16px_0px_rgba(_188,_19,_254,1),0px_0px_50px_0px_rgba(_188,_19,_254,0.8),inset_0px_0px_24px_0px_rgba(_188,_19,_254,1)] ">
            <blockquote>
              <q className="   drop-shadow-neonPurple text-2xl font-handWrittenT ">
                There's no place like home.
              </q>
              <p className="text-right font-bold mt-6 font-handWrittenT  drop-shadow-neonPurple text-2xl">
                &mdash; Dorothy
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NeonGlow
