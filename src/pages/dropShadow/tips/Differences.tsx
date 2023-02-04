/** @format */

import React from "react"
// @ts-ignore
import { ReactComponent as Star } from "../../../assets/misc/star.svg"

const Differences = () => {
  return (
    <section id="Difference between box & drop">
      <h3 className="mb-4 mt-24 font-cursiveCustom text-xl">
        Difference between box & drop shadow
      </h3>
      <p>
        Both the filter: drop-shadow(...) and box-shadow properties in CSS are used to add
        a drop shadow effect to an element. However, there are some key differences
        between the two that you should be aware of when choosing which one to use in your
        designs.
      </p>
      <div className="mx-auto  w-fit justify-center gap-12 md:flex">
        <div className="mt-12 w-[250px]">
          <div className="grid grid-cols-1">
            <Star
              className={`  gridChild    h-[250px]  w-[250px] rounded-[2rem]   shadow-[_0px_0px_20px_0px_rgba(255,255,255,1)] `}
            />

            <div className="gridChild   mx-auto mt-24 w-[160px]  text-center">
              <blockquote>
                <q className="      block font-cursiveCustom text-lg">
                  All you gotta do is trust me.
                </q>
                <br />
                <p className=" ml-4  font-handWritten text-lg font-bold ">
                  &mdash; Jackson Maine
                </p>
              </blockquote>
            </div>
          </div>
          <div className="mx-auto mt-8 w-fit rounded-xl border-2 border-slate-600 bg-slate-700 px-8 py-6 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
            <div className="text-blue-300">box-shadow</div>
          </div>
        </div>

        <div className="mt-12  w-[250px]">
          <div className="grid grid-cols-1">
            <Star
              className={`  gridChild    h-[250px]  w-[250px]  drop-shadow-[0px_0px_20px_rgba(255,255,255,1)] filter  `}
            />

            <div className="gridChild   mx-auto mt-24 w-[160px]  text-center">
              <blockquote>
                <q className="      block font-cursiveCustom text-lg">
                  Maybe she’s a way out.
                </q>
                <br />
                <p className=" ml-12  font-handWritten text-lg font-bold ">
                  &mdash; Noodles
                </p>
              </blockquote>
            </div>
          </div>
          <div className="mx-auto mt-8 w-fit rounded-xl border-2 border-slate-600 bg-slate-700 px-8 py-6 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
            <div className="text-blue-300"> drop-shadow</div>
          </div>
        </div>
      </div>
      <ol className="mx-auto mt-8  max-w-xl">
        <li className="mb-4 list-decimal font-bold">
          Syntax:&#32;
          <span className="font-normal ">
            The syntax for the two properties is different. The filter: drop-shadow(...)
            property uses a function-based syntax, while the box-shadow property uses a
            shorthand property syntax.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          Complex shapes:&#32;
          <span className="font-normal ">
            box shadow applies to a div so the shape of the shadow can either be
            rectangular or circular. However, drop shadow can apply directly to an
            elements shape and in turn create a more complex shadow.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          Browser support:&#32;
          <span className="font-normal ">
            The filter property is supported by modern browsers, but may not be supported
            by older browsers. The box-shadow property is more widely supported and is
            considered to be a more reliable option.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          Performance:&#32;
          <span className="font-normal ">
            The filter property can have a performance impact, especially when applied to
            large elements or multiple elements on a page. The box-shadow property is
            generally faster and more efficient.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          Compatibility:&#32;
          <span className="font-normal ">
            The filter: drop-shadow(...) property is not compatible with all CSS styles
            and effects. The box-shadow property is more compatible with other CSS
            properties and can be combined with other visual effects.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          Comma Separated:&#32;
          <span className="font-normal ">
            Comma Separated: The filter: drop-shadow(...) property is not comma separated,
            unlike box-shadow. This means that you can only apply one filter per property,
            and if you need multiple filters you must use multiple filter properties.
          </span>
        </li>
        <li className="mb-4 list-decimal font-bold">
          Stack Order:&#32;
          <span className="font-normal ">
            When you apply multiple filter: drop-shadow(...) properties to an element,
            each subsequent filter takes the previous filter's output as its input. This
            means that each subsequent drop shadow is built on top of the previous one,
            creating a cumulative effect. When you apply 2 drop shadows you end up
            applying 3. When you apply 4 you end up applying 15. This is due to the
            aforementioned cumulative effect which has a formula of x&#178; - 1. So
            4&#178; - 1 = 15 and you get 15 drop shadows.
            <div className="my-8">
              <div className="parentElement">
                <div className="childElement  text-center text-xs leading-[10px]">
                  <div className="pt-1">H</div>
                  <div>o</div>
                  <div>v</div>
                  <div>e</div>
                  <div>r</div>
                </div>
              </div>
            </div>
          </span>
          <div className="mt-2 font-normal">
            This can result in a visually striking and unique drop shadow effect,
            especially when you apply multiple filters with different parameters such as
            different offsets, blurs, and colors.
          </div>
          <div className="mx-auto mb-8  w-fit justify-center gap-12 md:flex">
            <div className="mt-12 w-[250px] ">
              <blockquote className=" mb-16 rounded-xl bg-slate-800 p-6 shadow-[_12px_12px_12px_0px_rgba(255,_114,_94,1),_24px_24px_12px_0px_rgba(94,_255,_94,1),_36px_36px_12px_0px_rgba(94,_161,_255,1)]">
                <q className="      block font-cursiveCustom text-lg">
                  Toto, I've a feeling we're not in Kansas anymore.
                </q>
                <br />
                <p className=" text-right  font-handWritten text-lg font-bold ">
                  &mdash; Dorothy
                </p>
              </blockquote>

              <div className="  mx-auto mt-8 rounded-xl border-2 border-slate-600 bg-slate-700 px-4 py-6 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
                <div className="text-blue-300">
                  box-shadow<span className="px-[4px] text-white">:</span> <br />
                </div>
                <div className="text-xs font-normal text-green-300">
                  12px 12px 12px 0px orange, <br />
                  24px 24px 24px 0px green, <br />
                  36px 36px 36px 0px blue
                  <span className="pl-[4px] text-white ">;</span>
                </div>
              </div>
            </div>

            <div className="mt-12 w-[250px]">
              <blockquote
                style={{
                  filter: `drop-shadow(12px 12px 12px rgba(255, 114, 94,1)) drop-shadow(24px 24px 12px rgba(94, 255, 94,1)) drop-shadow(36px 36px 12px rgba(94, 161, 255,1))`,
                }}
                className="mb-16 rounded-xl bg-slate-800  p-6  "
              >
                <q className="      block font-cursiveCustom text-lg">
                  Oh, Jerry, don't let's ask for the moon. We have the stars.
                </q>
                <br />
                <p className=" text-right  font-handWritten text-lg font-bold ">
                  &mdash; Charlotte Vale
                </p>
              </blockquote>

              <div className=" mx-auto mt-8  rounded-xl border-2 border-slate-600 bg-slate-700 px-4 py-6 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
                <div className="text-blue-300">
                  filter<span className="px-[4px] text-white">:</span> <br />
                </div>
                <div className="text-xs font-normal text-green-300 ">
                  drop-shadow(12px 12px 12px orange) <br />
                  drop-shadow(24px 24px 24px green) <br />
                  drop-shadow(36px 36px 36px blue)
                  <span className="pl-[4px] text-white ">;</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 font-normal">
            For example, if you apply two filter: drop-shadow(...) properties to an
            element, the first drop shadow will be applied to the original content of the
            element, and the second drop shadow will be applied to the output of the first
            drop shadow. This creates a layered effect, where the second drop shadow is
            positioned on top of the first one.
          </div>
          <div className="mt-2 font-normal">
            This cumulative effect can be useful for creating complex and intricate drop
            shadow effects, but it can also make it more challenging to control the
            appearance of the drop shadow. Additionally, applying multiple drop shadows
            can have a performance impact, especially when applied to large elements or
            many elements on a page.
          </div>
          <div className="mt-2 font-normal">
            In contrast, box-shadow and text-shadow do not have this cumulative effect.
            When applying multiple box-shadow or text-shadow properties, each shadow is
            applied individually to the original content, without taking the previous
            shadow's output into account. This makes it easier to control the appearance
            of the shadow, but also limits the types of drop shadow effects you can
            create.
          </div>
        </li>
      </ol>
    </section>
  )
}

export default Differences
