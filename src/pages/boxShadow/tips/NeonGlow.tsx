/** @format */

import React from "react"

const NeonGlow = () => {
  return (
    <section id="Glow effects">
      <h3 className="font-cursiveCustom text-xl mb-4 mt-24">Neon glow effects</h3>
      <p>
        To achieve a neon glow effect using box shadows, you can use multiple box shadows
        with different colors, offsets, and blur values. Here are the steps you can
        follow:
      </p>

      <ol className="max-w-xl mx-auto mt-8">
        <li className="list-decimal font-bold mb-4">
          <span className="font-normal ">
            First, create a base shadow by setting a single box shadow with a large blur
            radius and a color that you want to use for the neon effect. This will create
            the base glow.
          </span>
        </li>
        <li className="list-decimal font-bold mb-4">
          <span className="font-normal ">
            Next, add multiple shadows with smaller blur radii and the same color as the
            base shadow. You can adjust the horizontal and vertical offsets to create a
            more dynamic effect.
          </span>
        </li>
        <li className="list-decimal font-bold mb-4">
          <span className="font-normal ">
            To add more depth, you can add additional shadows with different colors. For
            example, you can add a yellow or white shadow to the outermost part of the
            glow and a pink or purple shadow to the innermost part.
          </span>
        </li>
        <li className="list-decimal font-bold mb-4">
          <span className="font-normal ">
            You can also experiment with different offsets and blur values to create a
            more natural, organic glow effect.
          </span>
        </li>
        <li className="list-decimal font-bold mb-4">
          <span className="font-normal ">
            You can also add a text-shadow to the text inside the element to make it look
            like it's glowing as well.
          </span>
        </li>
        <li className="list-decimal font-bold mb-4">
          <span className="font-normal ">
            To finish, you can adjust the opacity of the element to give it a more
            realistic neon look.
          </span>
        </li>
      </ol>

      <div>
        <h4 className="font-bold my-8">Rule used below:</h4>
        <div className="bg-slate-700 flex gap-4 px-8 py-6 rounded-xl w-fit mx-auto my-8 border-2 border-slate-600 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
          <div className="text-blue-300 ">
            box-shadow<span className="text-white px-[4px]">:</span> <br />
          </div>
          <div className="text-green-300">
            0px 0px 4px 0px rgba(255, 255, 255,1), <br /> 0px 0px 4px 0px rgba( 255, 255,
            255,1), <br /> 0px 0px 36px 0px rgba( 188, 19, 254,0.7), <br /> 0px 0px 16px
            0px rgba( 188, 19, 254,1), <br /> 0px 0px 50px 0px rgba( 188, 19, 254,0.8),{" "}
            <br /> inset 0px 0px 24px 0px rgba( 188, 19, 254,1)
            <span className="text-white pl-[4px] ">;</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-bold  my-8">Result:</h4>
        <div className="bg-transparent text-white px-12 py-14 rounded-xl w-fit mx-auto   shadow-[0px_0px_4px_0px_rgba(255,_255,_255,1),0px_0px_4px_0px_rgba(_255,_255,_255,1),0px_0px_36px_0px_rgba(_188,_19,_254,0.7),0px_0px_16px_0px_rgba(_188,_19,_254,1),0px_0px_50px_0px_rgba(_188,_19,_254,0.8),inset_0px_0px_24px_0px_rgba(_188,_19,_254,1)] ">
          <blockquote>
            <q className="   drop-shadow-neonPurple text-3xl font-handWrittenT ">
              There's no place like home.
            </q>
            <p className="text-right font-bold mt-6 font-handWrittenT  drop-shadow-neonPurple text-2xl">
              &mdash; Dorothy
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default NeonGlow
