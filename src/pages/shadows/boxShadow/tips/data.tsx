/** @format */

import { BlogData } from "../../../../components/BlogGenerator"

export const data: BlogData = {
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
            "Box shadows are a powerful design tool that can add depth and dimension to any website or application. Whether you're creating a subtle drop shadow or a more dramatic effect, the ability to control the position, size, and color of a shadow can help you create visually appealing layouts and user interfaces. In this article, we will explore the various ways in which you can use box shadows to enhance your designs, including tips and tricks for creating custom effects.",
          ],
        },
        {
          type: "code",
          language: "css",
          data: `box-shadow:inset (boolean) , offset-x(±px), offset-y(±px), blur(±px), spread(+px), color`,
        },
        {
          type: "list",
          kind: "ol",
          data: [
            " Inset: This value is optional, and it makes the shadow inside the element rather than outside.",
            "Horizontal offset: This value sets the distance the shadow should be offset from the left of the element. A positive value will move the shadow to the right, and a negative value will move it to the left.",
            "Vertical offset: This value sets the distance the shadow should be offset from the top of the element. A positive value will move the shadow down, and a negative value will move it up.",
            "Blur radius: This value sets the amount of blur applied to the shadow. A higher value will create a more diffuse shadow, while a lower value will create a sharper shadow.",
            "Spread radius: This value sets the size of the shadow. A positive value will increase the size of the shadow, while a negative value will decrease it.",
            "Shadow color: This value sets the color of the shadow. This can be any valid CSS color value, such as a hex code or a color name.",
          ],
        },
        {
          type: "demo",
          styleQ:
            "mx-auto mt-8 mb-16 max-w-md rounded-xl bg-slate-200 px-8 py-5 text-slate-900   shadow-[inset_-8px_-8px_8px_0px_rgba(0,0,0,0.25),0px_0px_0px_2px_rgba(100,100,100,1),8px_12px_4px_0px_rgba(255,255,_255,0.30)]",
          quote:
            "Do you think God stays in heaven because he, too, lives in fear of what he's created here on earth?",
          styleA: "mt-4 text-right font-bold  text-slate-900",
          author: "Dr. Romero",
        },
      ],
    },
  ],
}
