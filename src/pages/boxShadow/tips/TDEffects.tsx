/** @format */

import React from "react"

const TDEffects = () => {
  return (
    <section id="3D effects">
      <h3 className="mb-4 mt-24 font-cursiveCustom text-xl">3D effects</h3>
      <p>
        Creating 3D effects with box shadows can be achieved by using multiple box shadows
        with different colors, offsets, and blur values. Here are the steps you can
        follow:
      </p>

      <ol className="mx-auto mt-8 max-w-xl">
        <li className="mb-4 list-decimal font-bold">
          <span className="font-normal ">
            First, create a base shadow by setting a single box shadow with a large blur
            radius and a color that you want to use for the 3D effect. This will create
            the base shadow.
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
            example, you can add a darker color shadow to the bottom and left sides of the
            element to create the illusion of depth and a light color shadow to the top
            and right sides to create the illusion of highlights.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          <span className="font-normal ">
            You can also experiment with different offsets and blur values to create a
            more natural, 3D effect.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          <span className="font-normal ">
            To finish, you can adjust the opacity of the element to give it a more
            realistic 3D look.
          </span>
        </li>
      </ol>

      <div className="mt-8 mb-16 justify-center gap-8 lg:flex ">
        <div className="mx-auto w-fit rounded-xl bg-transparent px-12 py-16 text-white shadow-[inset_-5px_-5px_16px_-10px_rgba(220,_220,_220,0.6),inset_5px_5px_16px_2px_rgba(0,_0,_0,1),inset_12px_12px_4px_150px_rgba(0,_0,_0,0.05)] ">
          <blockquote>
            <q className="    text-lg text-slate-500 ">
              Roads? Where we're going we don't need roads.
            </q>
            <p className="mt-4 text-right text-lg  font-bold text-slate-500">
              &mdash; Doc Brown
            </p>
          </blockquote>
        </div>
        <div className="mx-auto  mt-6 h-[200px] w-[200px] rounded-full bg-black px-12 py-16  text-gray-500 shadow-[inset_-30px_-30px_30px_-10px_rgba(_0,_0,_0,1),inset_-15px_-18px_53px_20px_rgba(_31,_31,_31,0.7),inset_-40px_-60px_52px_81px_rgba(_64,_64,_64,1),inset_12px_12px_20px_150px_rgba(255,_255,_255,1),12px_12px_12px_0px_rgba(0,0,0,1)] lg:mt-0 ">
          <blockquote>
            <q className="    text-lg text-gray-400  ">Yo Adrian!</q>
            <p className="mt-4 text-right text-lg   font-bold">- Rocky</p>
          </blockquote>
        </div>
      </div>

      <div className="mx-auto my-8 w-fit rounded-xl border-2 border-slate-600 bg-slate-700 px-8 py-6 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
        <div className=" flex gap-4 ">
          <div className="text-blue-300">
            1&#41; box-shadow<span className="px-[4px] text-white">:</span> <br />
          </div>
          <div className="text-green-300">
            inset -5px -5px 16px -10px rgba(220, 220, 220,0.6), <br />
            inset 5px 5px 16px 2px rgba(0, 0, 0,1), <br />
            inset 12px 12px 4px 150px rgba(0, 0, 0,0.05)
            <span className="pl-[4px] text-white ">;</span>
          </div>
        </div>
        <div className="mt-4 flex  gap-4 ">
          <div className="text-blue-300">
            2&#41; box-shadow<span className="px-[4px] text-white">:</span> <br />
          </div>
          <div className="text-green-300">
            inset -30px -30px 30px -10px rgba( 0, 0, 0,1), <br /> inset -15px -18px 53px
            20px rgba( 31, 31, 31,0.7),
            <br /> inset -40px -60px 52px 81px rgba( 64, 64, 64,1),
            <br /> inset 12px 12px 20px 150px rgba(255, 255, 255,1),
            <br /> 12px 12px 4px 0px rgba(255,255,255,0.2);
            <span className="pl-[4px] text-white ">;</span>
          </div>
        </div>
      </div>

      <p className="mt-8">
        It's worth noting that the above example is just one way to create a 3D effect
        with box shadows, there are many other ways to achieve this effect and it depends
        on the design you want to achieve, you can adjust the values and colors to achieve
        a different look.
      </p>
    </section>
  )
}

export default TDEffects
