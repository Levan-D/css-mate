/** @format */

import React from "react"

const MultipleShadows = () => {
  return (
    <section id="Multiple shadows">
      <h3 className="mb-4 mt-24 font-cursiveCustom text-xl">
        Multiple shadows
      </h3>
      <p>
        Adding depth and dimension to web designs can be achieved by utilizing
        multiple text shadows. This can be accomplished by applying multiple
        shadows to an element using the CSS 'text-shadow' property. By
        comma-separating different values, you can create unique and visually
        interesting effects that can add depth and dimension to your designs.
      </p>

      <h4
        id="90's word"
        className="mt-8 text-center font-cursiveCustom text-xl"
      >
        90's word
      </h4>

      <div
        style={{
          textShadow: `1px 1px rgba(247, 135, 119, 1), 0px 0px rgba(247, 135, 119, 1), 1px 1px rgba(247, 135, 119, 1), 2px 2px rgba(247, 135, 119, 1), 3px 3px rgba(247, 135, 119, 1), 4px 4px rgba(247, 135, 119, 1), 5px 5px rgba(247, 135, 119, 1), 6px 6px rgba(247, 135, 119, 1), 7px 7px rgba(247, 135, 119, 1), 8px 8px rgba(247, 135, 119, 1), 9px 9px rgba(247, 135, 119, 1), 10px 10px rgba(247, 135, 119, 1), 11px 11px rgba(247, 135, 119, 1), 12px 12px rgba(247, 135, 119, 1), 13px 13px rgba(247, 135, 119, 1), 14px 14px rgba(247, 135, 119, 1), 15px 15px rgba(247, 135, 119, 1)`,
        }}
        className="mx-auto mt-4 mb-16 max-w-[600px] px-8 py-5  font-cursiveCustom text-6xl  font-bold text-orange-800 "
      >
        <blockquote>
          <q>This is how I win.</q>
          <p className="mt-4 text-right text-5xl ">&mdash; Howard Ratner</p>
        </blockquote>
      </div>
      <div className="mx-auto   w-fit rounded-xl border-2 border-slate-600 bg-slate-700 px-8 py-6 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
        <div className="flex gap-4 ">
          <div className="text-blue-300">
            text-shadow<span className="px-[4px] text-white">:</span> <br />
          </div>
          <div className="text-green-300">
            1px 1px rgba(247, 135, 119, 1), <br /> 0px 0px rgba(247, 135, 119,
            1), <br /> 1px 1px rgba(247, 135, 119, 1), <br /> 2px 2px rgba(247,
            135, 119, 1), <br /> 3px 3px rgba(247, 135, 119, 1), <br /> 4px 4px
            rgba(247, 135, 119, 1), <br /> 5px 5px rgba(247, 135, 119, 1),{" "}
            <br /> 6px 6px rgba(247, 135, 119, 1), <br /> 7px 7px rgba(247, 135,
            119, 1), <br /> 8px 8px rgba(247, 135, 119, 1), <br /> 9px 9px
            rgba(247, 135, 119, 1), <br /> 10px 10px rgba(247, 135, 119, 1),{" "}
            <br /> 11px 11px rgba(247, 135, 119, 1), <br /> 12px 12px rgba(247,
            135, 119, 1), <br /> 13px 13px rgba(247, 135, 119, 1), <br /> 14px
            14px rgba(247, 135, 119, 1), <br /> 15px 15px rgba(247, 135, 119,
            1);
            <span className="pl-[4px] text-white ">;</span>
          </div>
        </div>
      </div>

      <h4
        id="Fiery glow"
        className="mt-20 text-center font-cursiveCustom text-xl"
      >
        Fiery glow
      </h4>

      <div
        style={{
          textShadow: `  0 0 10px rgba(251, 191, 36, 1),
          0 0 20px rgba(153, 27, 27, 1),
          0 0 40px rgba(248, 113, 113, 1),
          0 0 80px rgba(185, 28, 28, 1)`,
        }}
        className="mx-auto mt-4 mb-16 max-w-[600px] px-8 py-5   text-6xl  font-extrabold text-slate-900 "
      >
        <blockquote>
          <q>Go ahead: Make my day.</q>
          <p className="mt-4 text-right text-5xl ">&mdash; Dirty Harry</p>
        </blockquote>
      </div>
      <div className="mx-auto   w-fit rounded-xl border-2 border-slate-600 bg-slate-700 px-8 py-6 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
        <div className="flex gap-4 ">
          <div className="text-blue-300">
            text-shadow<span className="px-[4px] text-white">:</span> <br />
          </div>
          <div className="text-green-300">
            0 0 10px rgba(251, 191, 36, 1), <br />
            0 0 20px rgba(153, 27, 27, 1), <br />
            0 0 40px rgba(248, 113, 113, 1), <br />0 0 80px rgba(185, 28, 28, 1)
            <span className="pl-[4px] text-white ">;</span>
          </div>
        </div>
      </div>

      <h4
        id="Beep Beep Delivery"
        className="mt-20 text-center font-cursiveCustom text-xl"
      >
        Beep Beep Delivery
      </h4>

      <div
        style={{
          textShadow: ` 1px 1px rgba(255, 148, 41, 0.5),
          2px 2px rgba(255, 153, 44, 0.51),
          3px 3px rgba(255, 159, 47, 0.52),
          4px 4px rgba(255, 164, 50, 0.53),
          5px 5px rgba(255, 168, 52, 0.54),
          6px 6px rgba(255, 173, 55, 0.55),
          7px 7px rgba(255, 177, 57, 0.56),
          8px 8px rgba(255, 181, 59, 0.57),
          9px 9px rgba(255, 185, 61, 0.58),
          10px 10px rgba(255, 188, 63, 0.59),
          11px 11px rgba(255, 191, 65, 0.6),
          12px 12px rgba(255, 194, 67, 0.61),
          13px 13px rgba(255, 196, 68, 0.62),
          14px 14px rgba(255, 199, 70, 0.63),
          15px 15px rgba(255, 201, 71, 0.64),
          16px 16px rgba(255, 203, 73, 0.65),
          17px 17px rgba(255, 205, 74, 0.66),
          18px 18px rgba(255, 208, 76, 0.67),
          19px 19px rgba(255, 210, 77, 0.68),
          20px 20px rgba(255, 212, 78, 0.69),
          21px 21px rgba(255, 214, 80, 0.7),
          22px 22px rgba(255, 216, 81, 0.71),
          23px 23px rgba(255, 218, 82, 0.72),
          24px 24px rgba(255, 220, 83, 0.73),
          25px 25px rgba(255, 221, 84, 0.74),
          26px 26px rgba(255, 223, 85, 0.75),
          27px 27px rgba(255, 225, 86, 0.76),
          28px 28px rgba(255, 227, 87, 0.77),
          29px 29px rgba(255, 229, 88, 0.78)`,
        }}
        className=" mx-auto mt-4 mb-16 max-w-[600px] rounded-xl bg-[rgba(255,_229,_88,_1)] px-8 py-5  text-6xl  font-extrabold text-red-600 "
      >
        <blockquote>
          <q>Just keep swimming!</q>
          <p className="mt-4 translate-y-[-30px] text-right text-5xl">
            &mdash; Dory
          </p>
        </blockquote>
      </div>
      <div className="mx-auto   w-fit rounded-xl border-2 border-slate-600 bg-slate-700 px-8 py-6 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
        <div className="flex gap-4 ">
          <div className="text-blue-300  ">
            text-shadow<span className="px-[4px] text-white">:</span> <br />
          </div>
          <div className="text-green-300">
            1px 1px rgba(255, 148, 41, 0.5), <br />
            2px 2px rgba(255, 153, 44, 0.51),
            <br />
            3px 3px rgba(255, 159, 47, 0.52),
            <br />
            4px 4px rgba(255, 164, 50, 0.53),
            <br />
            5px 5px rgba(255, 168, 52, 0.54),
            <br />
            6px 6px rgba(255, 173, 55, 0.55),
            <br />
            7px 7px rgba(255, 177, 57, 0.56),
            <br />
            8px 8px rgba(255, 181, 59, 0.57),
            <br />
            9px 9px rgba(255, 185, 61, 0.58),
            <br />
            10px 10px rgba(255, 188, 63, 0.59),
            <br />
            11px 11px rgba(255, 191, 65, 0.6),
            <br />
            12px 12px rgba(255, 194, 67, 0.61),
            <br />
            13px 13px rgba(255, 196, 68, 0.62),
            <br />
            14px 14px rgba(255, 199, 70, 0.63),
            <br />
            15px 15px rgba(255, 201, 71, 0.64),
            <br />
            16px 16px rgba(255, 203, 73, 0.65),
            <br />
            17px 17px rgba(255, 205, 74, 0.66),
            <br />
            18px 18px rgba(255, 208, 76, 0.67),
            <br />
            19px 19px rgba(255, 210, 77, 0.68),
            <br />
            20px 20px rgba(255, 212, 78, 0.69),
            <br />
            21px 21px rgba(255, 214, 80, 0.7),
            <br />
            22px 22px rgba(255, 216, 81, 0.71),
            <br />
            23px 23px rgba(255, 218, 82, 0.72),
            <br />
            24px 24px rgba(255, 220, 83, 0.73),
            <br />
            25px 25px rgba(255, 221, 84, 0.74),
            <br />
            26px 26px rgba(255, 223, 85, 0.75),
            <br />
            27px 27px rgba(255, 225, 86, 0.76),
            <br />
            28px 28px rgba(255, 227, 87, 0.77),
            <br />
            29px 29px rgba(255, 229, 88, 0.78)
            <span className="pl-[4px] text-white ">;</span>
          </div>
        </div>
      </div>

      <h4 id="Indent" className="mt-20 text-center font-cursiveCustom text-xl">
        Can you see the indent?
      </h4>

      <div
        style={{
          textShadow: ` 2px 2px 0px rgba(255,255,255,0.1)`,
        }}
        className="mx-auto   mb-16 max-w-[600px] px-8 py-5   text-6xl  font-extrabold text-black "
      >
        <blockquote>
          <q>Gentlemen, you can’t fight in here! This is the War Room!</q>
          <p className="mt-4 text-right text-5xl ">&mdash; Merkin Muffley</p>
        </blockquote>
      </div>
      <div className="mx-auto   w-fit rounded-xl border-2 border-slate-600 bg-slate-700 px-8 py-6 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
        <div className="flex gap-4 ">
          <div className="text-blue-300">
            text-shadow<span className="px-[4px] text-white">:</span> <br />
          </div>
          <div className="text-green-300">
            2px 2px 0px rgba(255,255,255,0.1)
            <span className="pl-[4px] text-white ">;</span>
          </div>
        </div>
      </div>

      <h4
        id="3D glow effect"
        className="mt-20 text-center font-cursiveCustom text-xl"
      >
        3D glow effect
      </h4>

      <div
        style={{
          textShadow: ` 0 1px 0 rgba(204, 204, 204, 1), 
          0 2px 0 rgba(201, 201, 201, 1),
          0 3px 0 rgba(187, 187, 187, 1),
          0 4px 0 rgba(185, 185, 185, 1),
          0 5px 0 rgba(170, 170, 170, 1),
          0 6px 1px rgba(255,255,255,.2),
          0 0 5px rgba(255,255,255,.2),
          0 1px 3px rgba(255,255,255,.6),
          0 3px 5px rgba(255,255,255,.4),
          0 5px 10px rgba(255,255,255,.5),
          0 10px 10px rgba(255,255,255,.2),
          0 20px 20px rgba(255,255,255,.15)`,
        }}
        className="mx-auto  mb-16 max-w-[600px] px-8 py-5   text-6xl  font-extrabold text-slate-100 "
      >
        <blockquote>
          <q>I’ll have what she’s having.</q>
          <p className="mt-4 text-right text-5xl ">&mdash; Harry</p>
        </blockquote>
      </div>
      <div className="mx-auto   w-fit rounded-xl border-2 border-slate-600 bg-slate-700 px-8 py-6 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
        <div className="flex gap-4 ">
          <div className="text-blue-300">
            text-shadow<span className="px-[4px] text-white">:</span> <br />
          </div>
          <div className="text-green-300">
            0 1px 0 rgba(204, 204, 204, 1), <br />
            0 2px 0 rgba(201, 201, 201, 1), <br />
            0 3px 0 rgba(187, 187, 187, 1), <br />
            0 4px 0 rgba(185, 185, 185, 1), <br />
            0 5px 0 rgba(170, 170, 170, 1), <br />
            0 6px 1px rgba(255, 255, 255, 0.2), <br />
            0 0 5px rgba(255, 255, 255, 0.2), <br />
            0 1px 3px rgba(255, 255, 255, 0.6), <br />
            0 3px 5px rgba(255, 255, 255, 0.4), <br />
            0 5px 10px rgba(255, 255, 255, 0.5), <br />
            0 10px 10px rgba(255, 255, 255, 0.2), <br />0 20px 20px rgba(255,
            255, 255, 0.15)
            <span className="pl-[4px] text-white ">;</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MultipleShadows
