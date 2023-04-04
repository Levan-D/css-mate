/** @format */

import { BlogData } from "../../../components/BlogGenerator"

export type boxShadowPresetsType = {
  name: string
  presets: {
    titile: string
    settings: {
      horizontal: number
      vertical: number
      blur: number
      spread: number
      opacity: number
      inset: boolean
      shadowColor: string
    }
  }[]
}

export const boxShadowPresets: boxShadowPresetsType[] = [
  {
    name: `Drop`,
    presets: [
      {
        titile: "S",
        settings: {
          horizontal: 2,
          vertical: 2,
          blur: 1,
          spread: 0,
          opacity: 20,
          inset: false,
          shadowColor: "255,255,255",
        },
      },
      {
        titile: "M",
        settings: {
          horizontal: 4,
          vertical: 4,
          blur: 2,
          spread: 0,
          opacity: 16,
          inset: false,
          shadowColor: "255,255,255",
        },
      },
      {
        titile: "L",
        settings: {
          horizontal: 8,
          vertical: 8,
          blur: 4,
          spread: 0,
          opacity: 16,
          inset: false,
          shadowColor: "255,255,255",
        },
      },
      {
        titile: "XL",
        settings: {
          horizontal: 12,
          vertical: 12,
          blur: 6,
          spread: 0,
          opacity: 24,
          inset: false,
          shadowColor: "255,255,255",
        },
      },
      {
        titile: "2XL",
        settings: {
          horizontal: 16,
          vertical: 16,
          blur: 8,
          spread: 0,
          opacity: 28,
          inset: false,
          shadowColor: "255,255,255",
        },
      },
    ],
  },
  {
    name: `Glow`,
    presets: [
      {
        titile: "S",
        settings: {
          horizontal: 0,
          vertical: 0,
          blur: 15,
          spread: 0,
          opacity: 60,
          inset: false,
          shadowColor: "255,255,255",
        },
      },
      {
        titile: "M",
        settings: {
          horizontal: 0,
          vertical: 0,
          blur: 20,
          spread: 0,
          opacity: 80,
          inset: false,
          shadowColor: "255,255,255",
        },
      },
      {
        titile: "L",
        settings: {
          horizontal: 0,
          vertical: 0,
          blur: 30,
          spread: 0,
          opacity: 80,
          inset: false,
          shadowColor: "255,255,255",
        },
      },
      {
        titile: "XL",
        settings: {
          horizontal: 0,
          vertical: 0,
          blur: 30,
          spread: 5,
          opacity: 80,
          inset: false,
          shadowColor: "255,255,255",
        },
      },
      {
        titile: "2XL",
        settings: {
          horizontal: 0,
          vertical: 0,
          blur: 30,
          spread: 10,
          opacity: 80,
          inset: false,
          shadowColor: "255,255,255",
        },
      },
    ],
  },
  {
    name: `Inner`,
    presets: [
      {
        titile: "S",
        settings: {
          horizontal: 0,
          vertical: 0,
          blur: 4,
          spread: 2,
          opacity: 60,
          inset: true,
          shadowColor: "255,255,255",
        },
      },
      {
        titile: "M",
        settings: {
          horizontal: 0,
          vertical: 0,
          blur: 5,
          spread: 3,
          opacity: 70,
          inset: true,
          shadowColor: "255,255,255",
        },
      },
      {
        titile: "L",
        settings: {
          horizontal: 0,
          vertical: 0,
          blur: 7,
          spread: 5,
          opacity: 70,
          inset: true,
          shadowColor: "255,255,255",
        },
      },
      {
        titile: "XL",
        settings: {
          horizontal: 0,
          vertical: 0,
          blur: 12,
          spread: 7,
          opacity: 70,
          inset: true,
          shadowColor: "255,255,255",
        },
      },
      {
        titile: "2XL",
        settings: {
          horizontal: 0,
          vertical: 0,
          blur: 14,
          spread: 9,
          opacity: 70,
          inset: true,
          shadowColor: "255,255,255",
        },
      },
    ],
  },
]

export const btnResponse: string[] = [
  "Dont click me!",
  "Stop!",
  "Srsly, stop!",
  "Ok, you win",
  "lalalalalalalalalalalalalalalalalalalalalalalalalalalalalala  I will break your UI lalalalalalalalalalalalalalalalalalalalalalalalalalalalalala",
  "Can you just stop?!",
  "I want to speak to your manager",
  "Oh LoOk At Me I aM WasTinG Time ClicKing A bUTton InsTead of LiViNg My LiFe",
  "I can do this all day",
  "can you?",
  "stop!",
  "STOP IT",
  "I  WILL CRASH THIS WEBSITE",
  "I SWEAR TO GOD",
  "Last Warning",
  "3",
  "2",
  "1",
]

export const blogData: BlogData = {
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
          data: `box-shadow: inset(boolean), offset-x(±px), offset-y(±px), blur(±px), spread(+px), color;`,
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
      ],
    },
    {
      title: "Multiple shadows",
      id: "Multiple shadows",
      content: [
        {
          type: "paragraph",
          data: [
            "Adding depth and dimension to web designs can be achieved by utilizing multiple box shadows. This can be accomplished by applying multiple shadows to an element using the CSS 'box-shadow' property. By comma-separating different values, you can create unique and visually interesting effects that can add depth and dimension to your designs.",
          ],
        },
        {
          type: "demo",
          styleC:
            "mx-auto mt-8 mb-16 max-w-md rounded-xl bg-slate-200 px-8 py-5 text-slate-900   shadow-[inset_-8px_-8px_8px_0px_rgba(0,0,0,0.25),0px_0px_0px_2px_rgba(100,100,100,1),8px_12px_4px_0px_rgba(255,255,_255,0.30)]",
          styleQ: "",
          quote:
            "Do you think God stays in heaven because he, too, lives in fear of what he's created here on earth?",
          styleA: "mt-4 text-right font-bold  text-slate-900",
          author: "Dr. Romero",
        },
        {
          type: "code",
          language: "css",
          data: `box-shadow: inset -14px -15px 22px -2px rgba(0, 0, 0, 0.35),
            0px 0px 0px 4px rgba(150, 150, 150, 1),
            8px 12px 4px 0px rgba(255, 255, 255, 0.29);`,
        },
      ],
    },
    {
      title: "Neon glow effects",
      id: "Glow effects",
      content: [
        {
          type: "paragraph",
          data: [
            "  To achieve a neon glow effect using box shadows, you can use multiple box shadows with different colors, offsets, and blur values. Here are the steps you can follow:",
          ],
        },
        {
          type: "list",
          kind: "ol",
          data: [
            "First, create a base shadow by setting a single box shadow with a large blur radius and a color that you want to use for the neon effect. This will create the base glow.",

            "Next, add multiple shadows with smaller blur radii and the same color as the base shadow. You can adjust the horizontal and vertical offsets to create a more dynamic effect.",

            "To add more depth, you can add additional shadows with different colors. For example, you can add a yellow or white shadow to the outermost part of the glow and a pink or purple shadow to the innermost part.",

            "You can also experiment with different offsets and blur values to create a more natural, organic glow effect.",

            "You can also add a text-shadow to the text inside the element to make it look like it's glowing as well.",

            "To finish, you can adjust the opacity of the element to give it a more realistic neon look.",
          ],
        },
        {
          type: "demo",
          styleC:
            "flickerBox mx-auto mt-8 mb-16 w-fit rounded-xl  px-12 py-14 text-white",
          styleQ: "flickerText flickerTextBefore  font-handWrittenT text-3xl",
          quote: "There's no place like home.",
          styleA:
            "flickerText flickerTextBefore mt-6 text-right font-handWrittenT  text-2xl font-bold",
          author: "Dorothy",
        },
        {
          type: "code",
          language: "css",
          data: `box-shadow: 0px 0px 4px 0px rgba(255, 255, 255, 1),
            0px 0px 4px 0px rgba(255, 255, 255, 1),
            0px 0px 36px 0px rgba(188, 19, 254, 0.7),
            0px 0px 16px 0px rgba(188, 19, 254, 1),
            0px 0px 50px 0px rgba(188, 19, 254, 0.8),
            inset 0px 0px 24px 0px rgba(188, 19, 254, 1);`,
        },
      ],
    },
    {
      title: "3D effects",
      id: "3D effects",
      content: [
        {
          type: "paragraph",
          data: [
            "Creating 3D effects with box shadows can be achieved by using multiple box shadows with different colors, offsets, and blur values. Here are the steps you can follow:",
          ],
        },
        {
          type: "list",
          kind: "ol",
          data: [
            "First, create a base shadow by setting a single box shadow with a large blur radius and a color that you want to use for the 3D effect. This will create the base shadow.",

            "Next, add multiple shadows with smaller blur radii and the same color as the base shadow. You can adjust the horizontal and vertical offsets to create a more dynamic effect.",

            "To add more depth, you can add additional shadows with different colors. For example, you can add a darker color shadow to the bottom and left sides of the element to create the illusion of depth and a light color shadow to the top and right sides to create the illusion of highlights.",

            "You can also experiment with different offsets and blur values to create a more natural, 3D effect.",

            "To finish, you can adjust the opacity of the element to give it a more realistic 3D look.",
          ],
        },
        {
          type: "demo",
          styleC:
            "mx-auto w-fit rounded-xl bg-transparent px-12 py-16 text-white shadow-[inset_-5px_-5px_16px_-10px_rgba(220,_220,_220,0.6),inset_5px_5px_16px_2px_rgba(0,_0,_0,1),inset_12px_12px_4px_150px_rgba(0,_0,_0,0.05)]",
          styleQ: "text-lg text-slate-500",
          quote: "Roads? Where we're going we don't need roads.",
          styleA: "mt-4 text-right text-lg  font-bold text-slate-500",
          author: "Doc Brown",
        },
        {
          type: "code",
          language: "css",
          data: `box-shadow: inset -5px -5px 16px -10px rgba(220, 220, 220, 0.6),
            inset 5px 5px 16px 2px rgba(0, 0, 0, 1),
            inset 12px 12px 4px 150px rgba(0, 0, 0, 0.05);`,
        },
        {
          type: "demo",
          styleC:
            "mx-auto  mt-6 h-[200px] w-[200px] rounded-full bg-black px-12 py-16  text-gray-500 shadow-[inset_-30px_-30px_30px_-10px_rgba(_0,_0,_0,1),inset_-15px_-18px_53px_20px_rgba(_31,_31,_31,0.7),inset_-40px_-60px_52px_81px_rgba(_64,_64,_64,1),inset_12px_12px_20px_150px_rgba(255,_255,_255,1),12px_12px_12px_0px_rgba(0,0,0,1)] lg:mt-0 ",
          styleQ: "text-lg text-gray-400",
          quote: "Yo Adrian",
          styleA: "mt-4 text-right text-lg   font-bold",
          author: "Rocky",
        },
        {
          type: "code",
          language: "css",
          data: `box-shadow: inset -30px -30px 30px -10px rgba(0, 0, 0, 1),
            inset -15px -18px 53px 20px rgba(31, 31, 31, 0.7),
            inset -40px -60px 52px 81px rgba(64, 64, 64, 1),
            inset 12px 12px 20px 150px rgba(255, 255, 255, 1),
            12px 12px 4px 0px rgba(255, 255, 255, 0.2);`,
        },
        {
          type: "paragraph",
          data: [
            "It's worth noting that the above example is just one way to create a 3D effect            with box shadows, there are many other ways to achieve this effect and it depends on the design you want to achieve, you can adjust the values and colorsto achieve a different look.",
          ],
        },
      ],
    },
    {
      title: "Let the cheese flow",
      id: "Cheese",
      content: [
        {
          type: "paragraph",
          data: [
            "You can use box shadow and rotate properties to create the cheesiest collage ever!",
          ],
        },
        {
          type: "demo",
          styleC:
            " -translate-x-[50px]   z-40 block !my-40 mx-auto md:mx-0 w-[300px]  rotate-[-7deg] rounded-sm bg-gradient-to-r from-orange-400 to-orange-500 px-6 py-16 text-white shadow-[0px_0px_0px_30px_rgba(230,230,230,1),0px_30px_0px_30px_rgba(230,230,230,1),-10px_60px_30px_5px_rgba(0,_0,_0,1),35px_60px_30px_0px_rgba(0,_0,_0,1),35px_-10px_30px_0px_rgba(0,_0,_0,1)] md:rotate-[-25deg] ",
          styleQ: "block translate-y-[20px] font-cursiveCustom text-lg",
          quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary..",
          styleA:
            "mt-4 translate-y-[105px] translate-x-4 text-right font-handWritten text-2xl font-bold text-slate-900",
          author: "John Keating",
        },
        {
          type: "demo",
          styleC:
            "z-20 mt-20 absolute hidden w-[300px]  translate-x-[250px] rotate-[30deg]  rotate-[30deg] rounded-sm  bg-gradient-to-r from-red-400  to-red-500 px-6 py-16 text-white shadow-[0px_0px_0px_30px_rgba(230,230,230,1),0px_30px_0px_30px_rgba(230,230,230,1),-10px_60px_30px_5px_rgba(0,_0,_0,1),35px_60px_30px_0px_rgba(0,_0,_0,1),35px_-10px_30px_0px_rgba(0,_0,_0,1)]  md:block md:translate-y-[-550px] lg:rotate-[4deg]",
          styleQ:
            "block translate-y-[20px] translate-x-[15px] font-cursiveCustom text-lg",
          quote: "They may take our lives, but they'll never take our freedom!",
          styleA:
            "mt-4 translate-y-[105px] translate-x-4 text-right font-handWritten  text-2xl font-bold text-slate-900",
          author: "William Wallace",
        },
        {
          type: "demo",
          styleC:
            " z-20 mt-20 absolute hidden w-[300px] translate-y-[-450px] translate-x-[500px]   rotate-[30deg] rounded-sm  bg-gradient-to-r from-purple-400 to-purple-500 px-6 py-16 text-white shadow-[0px_0px_0px_30px_rgba(230,230,230,1),0px_30px_0px_30px_rgba(230,230,230,1),-10px_60px_30px_5px_rgba(0,_0,_0,1),35px_60px_30px_0px_rgba(0,_0,_0,1),35px_-10px_30px_0px_rgba(0,_0,_0,1)]  lg:block",
          styleQ:
            "block  translate-y-[30px] translate-x-[15px] font-cursiveCustom text-lg",
          quote: "What we've got here is failure to communicate.",
          styleA:
            "mt-4 translate-y-[110px] translate-x-4 text-right font-handWritten text-2xl font-bold text-slate-900",
          author: "Captain",
        },
        {
          type: "code",
          language: "css",
          data: `box-shadow: 0px 0px 4px 0px rgba(255, 255, 255, 1),
            0px 0px 4px 0px rgba(255, 255, 255, 1),
            0px 0px 36px 0px rgba(188, 19, 254, 0.7),
            0px 0px 16px 0px rgba(188, 19, 254, 1),
            0px 0px 50px 0px rgba(188, 19, 254, 0.8),
            inset 0px 0px 24px 0px rgba(188, 19, 254, 1);`,
        },
      ],
    },
  ],
}
