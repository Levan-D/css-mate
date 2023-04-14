/** @format */

// @ts-ignore
import { ReactComponent as Star } from "../../../assets/misc/star.svg"

export const btnResponse: string[] = [
  "Don't touch me!",
  "Don't do it!",
  "Seriously, don't!",
  "Alright, you win",
  "lalalalalalalalalalalalalalalalalalalalalalalalalalalalalala I'll ruin your UI lalalalalalalalalalalalalalalalalalalalalalalalalalalalalala",
  "Can't you just stop?!",
  "I need to speak with your supervisor",
  "Look at me, wasting time clicking a button instead of living my life",
  "I can keep doing this forever",
  "Can you?",
  "Don't!",
  "STOP!",
  "I'll bring down this website",
  "I swear on my life",
  "This is your final warning",
  "3",
  "2",
  "1",
]

export const blogData: BlogDataType = {
  title: (
    <span>
      The aforementioned <span className="text-secondary-300">tips & tricks</span>
    </span>
  ),
  id: "Tips & tricks",
  sections: [
    {
      title: "Basics",
      id: "Basics",
      content: [
        {
          type: "paragraph",
          data: [
            `CSS filters are a powerful tool that allow you to apply visual effects to elements on a web page. One of the most commonly used filters is the drop shadow, which adds a shadow to an element to give it a three-dimensional look.`,

            `It's worth noting that the filter property is widely supported across modern browsers, but it may not be supported by older browsers. In such cases, you may want to use the box-shadow property as a fallback.`,
          ],
        },
        {
          type: "code",
          language: "css",
          data: `filter: drop-shadow(offset-x(±px), offset-y(±px), blur(±px), color);`,
        },
        {
          type: "list",
          kind: "ol",
          data: [
            "Horizontal offset: This value sets the distance the shadow should be offset from the left of the element. A positive value will move the shadow to the right, and a negative value will move it to the left.",

            "Vertical offset: This value sets the distance the shadow should be offset from the top of the element. A positive value will move the shadow down, and a negative value will move it up.",

            "Blur radius: This value sets the amount of blur applied to the shadow. A higher value will create a more diffuse shadow, while a lower value will create a sharper shadow.",

            "Shadow color: This value sets the color of the shadow. This can be any valid CSS color value, such as a hex code or a color name.",
          ],
        },
      ],
    },
    {
      title: "Difference between box & drop shadow",
      id: "Difference between box & drop",
      content: [
        {
          type: "paragraph",
          data: [
            `Both the filter: drop-shadow(...) and box-shadow properties in CSS are used to add a drop shadow effect to an element. However, there are some key differences between the two that you should be aware of when choosing which one to use in your designs.`,
          ],
        },
        {
          type: "demo",
          element: (
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
          ),
        },
        {
          type: "list",
          kind: "ol",
          data: [
            "Syntax: The syntax for the two properties is different. The filter: drop-shadow(...) property uses a function-based syntax, while the box-shadow property uses a shorthand property syntax.",

            "Complex shapes: box shadow applies to a div so the shape of the shadow can either be rectangular or circular. However, drop shadow can apply directly to an elements shape and in turn create a more complex shadow.",

            "Browser support: The filter property is supported by modern browsers, but may not be supported by older browsers. The box-shadow property is more widely supported and is considered to be a more reliable option.",

            "Performance: The filter property can have a performance impact, especially when applied to large elements or multiple elements on a page. The box-shadow property is generally faster and more efficient.",

            "Compatibility: The filter: drop-shadow(...) property is not compatible with all CSS styles and effects. The box-shadow property is more compatible with other CSS properties and can be combined with other visual effects.",

            "Comma Separated: Comma Separated: The filter: drop-shadow(...) property is not comma separated, unlike box-shadow. This means that you can only apply one filter per property, and if you need multiple filters you must use multiple filter properties.",
            <li className="mb-4 list-decimal font-bold">
              Stack Order:&#32;
              <span className="font-normal ">
                When you apply multiple filter: drop-shadow(...) properties to an element,
                each subsequent filter takes the previous filter's output as its input.
                This means that each subsequent drop shadow is built on top of the
                previous one, creating a cumulative effect. When you apply 2 drop shadows
                you end up applying 3. When you apply 4 you end up applying 15. This is
                due to the aforementioned cumulative effect which has a formula of x&#178;
                - 1. So 4&#178; - 1 = 15 and you get 15 drop shadows.
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
                especially when you apply multiple filters with different parameters such
                as different offsets, blurs, and colors.
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
              <p className="mt-2 font-normal">
                For example, if you apply two filter: drop-shadow(...) properties to an
                element, the first drop shadow will be applied to the original content of
                the element, and the second drop shadow will be applied to the output of
                the first drop shadow. This creates a layered effect, where the second
                drop shadow is positioned on top of the first one.
              </p>
              <p className="mt-2 font-normal">
                This cumulative effect can be useful for creating complex and intricate
                drop shadow effects, but it can also make it more challenging to control
                the appearance of the drop shadow. Additionally, applying multiple drop
                shadows can have a performance impact, especially when applied to large
                elements or many elements on a page.
              </p>
              <p className="mt-2 font-normal">
                In contrast, box-shadow and text-shadow do not have this cumulative
                effect. When applying multiple box-shadow or text-shadow properties, each
                shadow is applied individually to the original content, without taking the
                previous shadow's output into account. This makes it easier to control the
                appearance of the shadow, but also limits the types of drop shadow effects
                you can create.
              </p>
            </li>,
          ],
        },
      ],
    },
    {
      title: "When to use box & drop shadow",
      id: "When to use",
      content: [
        {
          type: "paragraph",
          data: [
            `  Both box-shadow and filter: drop-shadow(...) can be used to create drop shadow
            effects, but they each have their own advantages and disadvantages. Understanding
            when to use box-shadow and when to use filter: drop-shadow(...) can help you make
            the right choice for your design needs.`,
          ],
        },
        {
          type: "subHeader",
          subHeader: `When to use box-shadow:`,
        },
        {
          type: "list",
          kind: "ol",
          data: [
            "Browser support: box-shadow is a well-established CSS property and is widely supported by modern browsers. If you need to support older browsers, box-shadow is a more reliable option than filter: drop-shadow(...).",

            "Performance: box-shadow is generally faster and more efficient than filter: drop-shadow(...), especially when applied to large elements or many elements on a page. If performance is a concern for your design, box-shadow may be the better choice.",

            "Simple drop shadows: box-shadow is easier to use and control than filter: drop-shadow(...) for simple drop shadow effects. The syntax is straightforward and can be used to add a single shadow or multiple shadows to an element with a simple comma-separated list.",

            "Consistent behavior: box-shadow applies a consistent drop shadow to the entire element, including the element's padding and content. This makes it a good choice for adding a simple and consistent drop shadow effect to elements such as buttons, cards, and panels.",
          ],
        },
        {
          type: "subHeader",
          subHeader: `When to use drop-shadow:`,
        },
        {
          type: "list",
          kind: "ol",
          data: [
            "Complex drop shadows: filter: drop-shadow(...) is more flexible and powerful than box-shadow for creating complex and intricate drop shadow effects. The cumulative effect of multiple drop shadow filters can be used to create unique and visually striking drop shadow effects.",
            "Image manipulation: filter: drop-shadow(...) is part of the CSS Filter Effects module, which includes a range of filter functions for image manipulation. If you need to add a drop shadow effect to an image, you can use filter: drop-shadow(...) in conjunction with other filter functions to achieve the desired result.",
            "Complex shapes: box-shadow can only create square and circular drop shadows, while filter: drop-shadow(...) can create more complex shaped shadows.",
            "SVGs: using drop shadow on SVGs will create a shadow that is the exact shape of it unlike box shadow output which can only support rectangular shapes.",
            "Clip-path or mask-image: for clipped or masked elements any box-shadow added to that element will also be clipped and won't be visible if it falls outside of the clipped area. However, you can still create a drop shadow on the clipped element by applying the filter: drop-shadow(...) to the parent of the clipped element.",
            "Grouped elements: If we want to create a complex shape with overlapping divs and then give them a shadow we have two options with box shadows: either give every child div a shadow and watch as they overlap each other or give the parent div a shadow which will give empty spaces shadows too. To avoid dealing with such issues we can apply a drop shadow to the parent and avoid all the complexity.",
          ],
        },
      ],
    },
  ],
}
