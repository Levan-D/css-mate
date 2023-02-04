/** @format */

import React from "react"

const NeonGlow = () => {
  return (
    <section id="Glow effects">
      <h3 className="mb-4 mt-24 font-cursiveCustom text-xl">Neon glow effects</h3>
      <p>
        To achieve a neon glow effect using box shadows, you can use multiple box shadows
        with different colors, offsets, and blur values. Here are the steps you can
        follow:
      </p>

      <ol className="mx-auto mt-8 max-w-xl">
        <li className="mb-4 list-decimal font-bold">
          <span className="font-normal ">
            First, create a base shadow by setting a single box shadow with a large blur
            radius and a color that you want to use for the neon effect. This will create
            the base glow.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          <span className="font-normal ">
            Next, add multiple shadows with smaller blur radii and the same color as the
            base shadow. You can adjust the horizontal and vertical offsets to create a
            more dynamic effect.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          <span className="font-normal ">
            To add more depth, you can add additional shadows with different colors. For
            example, you can add a yellow or white shadow to the outermost part of the
            glow and a pink or purple shadow to the innermost part.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          <span className="font-normal ">
            You can also experiment with different offsets and blur values to create a
            more natural, organic glow effect.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          <span className="font-normal ">
            You can also add a text-shadow to the text inside the element to make it look
            like it's glowing as well.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          <span className="font-normal ">
            To finish, you can adjust the opacity of the element to give it a more
            realistic neon look.
          </span>
        </li>
      </ol>

      <div className="mx-auto mt-8 mb-16 w-fit rounded-xl bg-transparent px-12 py-14 text-white   shadow-[0px_0px_4px_0px_rgba(255,_255,_255,1),0px_0px_4px_0px_rgba(_255,_255,_255,1),0px_0px_36px_0px_rgba(_188,_19,_254,0.7),0px_0px_16px_0px_rgba(_188,_19,_254,1),0px_0px_50px_0px_rgba(_188,_19,_254,0.8),inset_0px_0px_24px_0px_rgba(_188,_19,_254,1)] ">
        <blockquote>
          <q className="   font-handWrittenT text-3xl drop-shadow-neonPurple ">
            There's no place like home.
          </q>
          <p className="mt-6 text-right font-handWrittenT text-2xl  font-bold drop-shadow-neonPurple">
            &mdash; Dorothy
          </p>
        </blockquote>
      </div>

      <div className="mx-auto my-8 flex w-fit gap-4 rounded-xl border-2 border-slate-600 bg-slate-700 px-8 py-6 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
        <div className="text-blue-300 ">
          box-shadow<span className="px-[4px] text-white">:</span> <br />
        </div>
        <div className="text-green-300">
          0px 0px 4px 0px rgba(255, 255, 255,1), <br /> 0px 0px 4px 0px rgba( 255, 255,
          255,1), <br /> 0px 0px 36px 0px rgba( 188, 19, 254,0.7), <br /> 0px 0px 16px 0px
          rgba( 188, 19, 254,1), <br /> 0px 0px 50px 0px rgba( 188, 19, 254,0.8), <br />{" "}
          inset 0px 0px 24px 0px rgba( 188, 19, 254,1)
          <span className="pl-[4px] text-white ">;</span>
        </div>
      </div>

      <div className="flicker">Hover over me</div>

    </section>
  )
}

export default NeonGlow
