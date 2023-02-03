/** @format */

import React from "react"

const MultipleShadows = () => {
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
            creating a cumulative effect. This can result in a visually striking and
            unique drop shadow effect, especially when you apply multiple filters with
            different parameters such as different offsets, blurs, and colors.
          </span>
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
          </div>{" "}
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

      {/* <div>
        <h4 className="my-8 font-cursiveCustom font-bold">Rule used below:</h4>
        <div className="mx-auto my-8 w-fit rounded-xl border-2 border-slate-600 bg-slate-700 px-8 py-6 shadow-[0px_0px_20px_0px_rgba(94,_161,_255,0.8)]">
          <div className="flex gap-4 ">
            <div className="text-blue-300">
              box-shadow<span className="px-[4px] text-white">:</span> <br />
            </div>
            <div className="text-green-300">
              inset -14px -15px 22px -2px rgba(0, 0, 0,0.35),
              <br /> 0px 0px 0px 4px rgba( 150, 150, 150,1), <br />
              8px 12px 4px 0px rgba(255, 255, 255,0.29)
              <span className="pl-[4px] text-white ">;</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className="my-8 font-cursiveCustom font-bold">Result:</h4>
        <div className="mx-auto my-8 w-fit rounded-xl bg-slate-200 px-8 py-5 text-slate-900   shadow-[inset_-8px_-8px_8px_0px_rgba(0,0,0,0.25),0px_0px_0px_2px_rgba(100,100,100,1),8px_12px_4px_0px_rgba(255,255,_255,0.30)] ">
          <blockquote>
            <q>
              Do you think God stays in heaven because he, too,
              <br />
              lives in fear of what he's created here on earth?
            </q>
            <p className="mt-4 text-right font-bold  text-slate-900   ">
              &mdash; Dr. Romero
            </p>
          </blockquote>
        </div>
      </div> */}
    </section>
  )
}

export default MultipleShadows
