/** @format */

import React from "react"

const WhenToUse = () => {
  return (
    <section id="When to use">
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

      <h3 className="my-8  font-cursiveCustom">When to use drop-shadow:</h3>

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
            drop-shadow(...) can create more complex shaped shadows.
          </span>
          <ul className="mx-auto mt-4 max-w-xl pl-8">
            <li className="mb-4 list-disc font-bold">
              SVGs:&#32;
              <span className="font-normal ">
                using drop shadow on SVGs will create a shadow that is the exact shape of
                it unlike box shadow output which can only support rectangular shapes.
              </span>
            </li>
            <li className="mb-4 list-disc font-bold">
              Clip-path or mask-image:&#32;
              <span className="font-normal ">
                for clipped or masked elements any box-shadow added to that element will
                also be clipped and won't be visible if it falls outside of the clipped
                area. However, you can still create a drop shadow on the clipped element
                by applying the filter: drop-shadow(...) to the parent of the clipped
                element.
              </span>
            </li>
            <li className="mb-4 list-disc font-bold">
              Grouped elements:&#32;
              <span className="font-normal ">
                If we want to create a complex shape with overlapping divs and then give
                them a shadow we have two options with box shadows: either give every
                child div a shadow and watch as they overlap each other or give the parent
                div a shadow which will give empty spaces shadows too. To avoid dealing
                with such issues we can apply a drop shadow to the parent and avoid all
                the complexity.
              </span>
            </li>
          </ul>
        </li>
      </ol>
    </section>
  )
}

export default WhenToUse
