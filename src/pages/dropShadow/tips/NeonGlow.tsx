/** @format */

import React from "react"

const NeonGlow = () => {
  return (
    <section id="When to use ">
      <h3 className="mb-4 mt-24 font-cursiveCustom text-xl">
        When to use box & drop shadow
      </h3>
      <p>
        Both box-shadow and filter: drop-shadow(...) can be used to create drop shadow
        effects, but they each have their own advantages and disadvantages. Understanding
        when to use box-shadow and when to use filter: drop-shadow(...) can help you make
        the right choice for your design needs.
      </p>

      <h3 className="my-8  font-cursiveCustom">When to use box-shadow:</h3>

      <ol className="mx-auto max-w-xl">
        <li className="mb-4 list-decimal font-bold">
          Browser support:&#32;
          <span className="font-normal ">
            box-shadow is a well-established CSS property and is widely supported by
            modern browsers. If you need to support older browsers, box-shadow is a more
            reliable option than filter: drop-shadow(...).
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          Performance:&#32;
          <span className="font-normal ">
            box-shadow is generally faster and more efficient than filter:
            drop-shadow(...), especially when applied to large elements or many elements
            on a page. If performance is a concern for your design, box-shadow may be the
            better choice.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          Simple drop shadows:&#32;
          <span className="font-normal ">
            box-shadow is easier to use and control than filter: drop-shadow(...) for
            simple drop shadow effects. The syntax is straightforward and can be used to
            add a single shadow or multiple shadows to an element with a simple
            comma-separated list.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          Consistent behavior:&#32;
          <span className="font-normal ">
            box-shadow applies a consistent drop shadow to the entire element, including
            the element's padding and content. This makes it a good choice for adding a
            simple and consistent drop shadow effect to elements such as buttons, cards,
            and panels.
          </span>
        </li>
      </ol>

      <h3 className="my-8  font-cursiveCustom">When to use filter: drop-shadow(...):</h3>

      <ol className="mx-auto max-w-xl">
        <li className="mb-4 list-decimal font-bold">
          Complex drop shadows:&#32;
          <span className="font-normal ">
            filter: drop-shadow(...) is more flexible and powerful than box-shadow for
            creating complex and intricate drop shadow effects. The cumulative effect of
            multiple drop shadow filters can be used to create unique and visually
            striking drop shadow effects.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          Image manipulation:&#32;
          <span className="font-normal ">
            filter: drop-shadow(...) is part of the CSS Filter Effects module, which
            includes a range of filter functions for image manipulation. If you need to
            add a drop shadow effect to an image, you can use filter: drop-shadow(...) in
            conjunction with other filter functions to achieve the desired result.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          Complex shapes:&#32;
          <span className="font-normal ">
            box-shadow can only create square and circular drop shadows, while filter:
            drop-shadow(...) can create more complex shaped shadows for elements like
            SVGs. If you need to add a drop shadow to a complex shape, filter:
            drop-shadow(...) may be the better choice.
          </span>
        </li>
      </ol>

      {/* <div>
        <h4 className="my-8 font-cursiveCustom font-bold">Rule used below:</h4>
        <div className="mx-auto my-8 flex w-fit gap-4 rounded-xl border-2 border-slate-600 bg-slate-700 px-8 py-6 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
          <div className="text-blue-300 ">
            box-shadow<span className="px-[4px] text-white">:</span> <br />
          </div>
          <div className="text-green-300">
            0px 0px 4px 0px rgba(255, 255, 255,1), <br /> 0px 0px 4px 0px rgba( 255, 255,
            255,1), <br /> 0px 0px 36px 0px rgba( 188, 19, 254,0.7), <br /> 0px 0px 16px
            0px rgba( 188, 19, 254,1), <br /> 0px 0px 50px 0px rgba( 188, 19, 254,0.8),{" "}
            <br /> inset 0px 0px 24px 0px rgba( 188, 19, 254,1)
            <span className="pl-[4px] text-white ">;</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="my-8  font-cursiveCustom font-bold">Result:</h4>
        <div className="mx-auto w-fit rounded-xl bg-transparent px-12 py-14 text-white   shadow-[0px_0px_4px_0px_rgba(255,_255,_255,1),0px_0px_4px_0px_rgba(_255,_255,_255,1),0px_0px_36px_0px_rgba(_188,_19,_254,0.7),0px_0px_16px_0px_rgba(_188,_19,_254,1),0px_0px_50px_0px_rgba(_188,_19,_254,0.8),inset_0px_0px_24px_0px_rgba(_188,_19,_254,1)] ">
          <blockquote>
            <q className="   font-handWrittenT text-3xl drop-shadow-neonPurple ">
              There's no place like home.
            </q>
            <p className="mt-6 text-right font-handWrittenT text-2xl  font-bold drop-shadow-neonPurple">
              &mdash; Dorothy
            </p>
          </blockquote>
        </div>
      </div> */}
    </section>
  )
}

export default NeonGlow
