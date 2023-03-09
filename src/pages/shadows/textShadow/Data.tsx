/** @format */

import { BlogData } from "../../../components/BlogGenerator"

export const quotes: string[] = [
  `May the Force be with you.`,
  `I'm the king of the world!`,
  `Elementary, my dear Watson.`,
  `It's alive! It's alive!`,
  `My mama always said life was like a box of chocolates. You never know what you're gonna get.`,
  `You're gonna need a bigger boat.`,
  `Life is a banquet, and most poor suckers are starving to death!`,
  `The stuff that dreams are made of.`,
  `Magic Mirror on the wall, who is the fairest one of all?`,
  `Keep your friends close, but your enemies closer.`,
  `Today, I consider myself the luckiest man on the face of the earth.`,
  `You is kind. You is smart. You is important.`,
  `What we've got here is failure to communicate.`,
  `I'm walking here! I'm walking here!`,
  `I'll have what she's having.`,
  `All right, Mr. DeMille, I'm ready for my close-up.`,
  `Fasten your seatbelts. It's going to be a bumpy night.`,
  `They may take our lives, but they'll never take our freedom!`,
  `Toto, I've a feeling we're not in Kansas anymore.`,
  `I love the smell of napalm in the morning.`,
  `Fasten your seatbelts. It's going to be a bumpy night.`,
  `All right, Mr. DeMille, I'm ready for my close-up.`,
  `I'm as mad as hell, and I'm not going to take this anymore!`,
  `A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.`,
  `Why don't you come up sometime and see me?`,
  `After all, tomorrow is another day!`,
  `You know how to whistle, don't you, Steve? You just put your lips together and blow.`,
  `Today, I consider myself the luckiest man on the face of the Earth.`,
  `Mama always said life was like a box of chocolates. You never know what you're gonna get.`,
  `Oh, Jerry, don't let's ask for the moon. We have the stars.`,
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
            `CSS text shadows are an important aspect of web design, as they help
            create a visually appealing and engaging text appearance on the web
            page. With the use of text shadows, you can add depth and dimension to
            your text, making it stand out from the background and providing a
            3D-like effect.`,

            `Text shadows can be added to any text element on a web page, such as
            headings, paragraphs, or even links. You can use CSS to control the
            color, size, and location of the text shadow, allowing you to create
            unique and eye-catching effects. The text shadow can also be used to
            enhance the legibility of text, making it easier to read against certain
            background colors or patterns.`,
            `It's important to note that different browsers may handle text shadows
            differently, so it's a good idea to test your text shadows in multiple
            browsers to ensure compatibility.`,
          ],
        },
        {
          type: "code",
          language: "css",
          data: `text-shadow: offset-x(±px), offset-y(±px), blur(±px), color;`,
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
      title: "Multiple shadows",
      id: "Multiple shadows",
      content: [
        {
          type: "paragraph",
          data: [
            `     Adding depth and dimension to web designs can be achieved by utilizing multiple
            text shadows. This can be accomplished by applying multiple shadows to an element
            using the CSS 'text-shadow' property. By comma-separating different values, you
            can create unique and visually interesting effects that can add depth and
            dimension to your designs.`,
          ],
        },
        {
          type: "subHeader",
          subHeader: `90's word`,
        },
        {
          type: "demo",
          inlineStyle: {
            textShadow: `1px 1px rgba(247, 135, 119, 1), 0px 0px rgba(247, 135, 119, 1), 1px 1px rgba(247, 135, 119, 1), 2px 2px rgba(247, 135, 119, 1), 3px 3px rgba(247, 135, 119, 1), 4px 4px rgba(247, 135, 119, 1), 5px 5px rgba(247, 135, 119, 1), 6px 6px rgba(247, 135, 119, 1), 7px 7px rgba(247, 135, 119, 1), 8px 8px rgba(247, 135, 119, 1), 9px 9px rgba(247, 135, 119, 1), 10px 10px rgba(247, 135, 119, 1), 11px 11px rgba(247, 135, 119, 1), 12px 12px rgba(247, 135, 119, 1), 13px 13px rgba(247, 135, 119, 1), 14px 14px rgba(247, 135, 119, 1), 15px 15px rgba(247, 135, 119, 1)`,
          },
          styleC:
            "mx-auto mt-4 mb-16 max-w-[600px] px-8 py-5  font-cursiveCustom text-4xl font-bold  text-orange-800 sm:text-6xl",
          styleQ: "",
          quote: "This is how I win.",
          styleA: "mt-4 text-right text-3xl sm:text-5xl",
          author: "Howard Ratner",
        },
        {
          type: "code",
          language: "css",
          data: `text-shadow: 1px 1px rgba(247, 135, 119, 1), 
             0px 0px rgba(247, 135, 119, 1), 
             1px 1px rgba(247, 135, 119, 1), 
             2px 2px rgba(247, 135, 119, 1), 
             3px 3px rgba(247, 135, 119, 1), 
             4px 4px rgba(247, 135, 119, 1), 
             5px 5px rgba(247, 135, 119, 1), 
             6px 6px rgba(247, 135, 119, 1), 
             7px 7px rgba(247, 135, 119, 1), 
             8px 8px rgba(247, 135, 119, 1), 
             9px 9px rgba(247, 135, 119, 1), 
             10px 10px rgba(247, 135, 119, 1),
             11px 11px rgba(247, 135, 119, 1), 
             12px 12px rgba(247, 135, 119, 1), 
             13px 13px rgba(247, 135, 119, 1), 
             14px 14px rgba(247, 135, 119, 1), 
             15px 15px rgba(247, 135, 119, 1);`,
        },
        {
          type: "subHeader",
          subHeader: `Fiery glow`,
        },
        {
          type: "demo",
          inlineStyle: {
            textShadow: `  0 0 10px rgba(251, 191, 36, 1),
            0 0 20px rgba(153, 27, 27, 1),
            0 0 40px rgba(248, 113, 113, 1),
            0 0 80px rgba(185, 28, 28, 1)`,
          },
          styleC:
            "mx-auto mt-4 mb-16 max-w-[600px] px-8 py-5   text-3xl sm:text-6xl  font-extrabold text-slate-900",
          styleQ: "",
          quote: "Go ahead: Make my day.",
          styleA: "mt-4 text-right text-3xl sm:text-5xl",
          author: "Dirty Harry",
        },
        {
          type: "code",
          language: "css",
          data: `text-shadow: 0 0 10px rgba(251, 191, 36, 1),
             0 0 20px rgba(153, 27, 27, 1),
             0 0 40px rgba(248, 113, 113, 1),
             0 0 80px rgba(185, 28, 28, 1);
`,
        },
        {
          type: "subHeader",
          subHeader: `Beep Beep Delivery`,
        },
        {
          type: "demo",
          inlineStyle: {
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
          },
          styleC:
            "text-4xl mx-auto mt-4 mb-16 max-w-[600px] rounded-xl bg-[rgba(255,_229,_88,_1)] px-8  py-5 font-extrabold  text-red-600 sm:text-6xl ",
          styleQ: "",
          quote: "Just keep swimming!",
          styleA: "mt-4 translate-y-[-30px] text-right text-3xl sm:text-5xl",
          author: "Dory",
        },
        {
          type: "code",
          language: "css",
          data: `text-shadow: 1px 1px rgba(255, 148, 41, 0.5),
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
             29px 29px rgba(255, 229, 88, 0.78);`,
        },
        {
          type: "subHeader",
          subHeader: `Can you see the indent?`,
        },
        {
          type: "demo",
          inlineStyle: {
            textShadow: ` 2px 2px 0px rgba(255,255,255,0.1)`,
          },
          styleC:
            "mx-auto   mb-16 max-w-[600px] px-8 py-5   text-4xl font-extrabold  text-black sm:text-6xl",
          styleQ: "",
          quote: "Gentlemen, you can’t fight in here! This is the War Room!",
          styleA: "mt-4 text-right text-3xl sm:text-5xl",
          author: "Merkin Muffley",
        },
        {
          type: "code",
          language: "css",
          data: `text-shadow: 2px 2px 0px rgba(255,255,255,0.1);`,
        },
        {
          type: "subHeader",
          subHeader: `3D glow effect`,
        },
        {
          type: "demo",
          inlineStyle: {
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
          },
          styleC:
            "mx-auto  mb-16 max-w-[600px] px-8 py-5   text-3xl sm:text-6xl  font-extrabold text-slate-100",
          styleQ: "",
          quote: "I’ll have what she’s having.",
          styleA: "mt-4 text-right text-3xl sm:text-5xl",
          author: "Harry",
        },
        {
          type: "code",
          language: "css",
          data: `text-shadow: 0 1px 0 rgba(204, 204, 204, 1),
             0 2px 0 rgba(201, 201, 201, 1),
             0 3px 0 rgba(187, 187, 187, 1),
             0 4px 0 rgba(185, 185, 185, 1),
             0 5px 0 rgba(170, 170, 170, 1),
             0 6px 1px rgba(255, 255, 255, 0.2),
             0 0 5px rgba(255, 255, 255, 0.2),
             0 1px 3px rgba(255, 255, 255, 0.6),
             0 3px 5px rgba(255, 255, 255, 0.4),
             0 5px 10px rgba(255, 255, 255, 0.5),
             0 10px 10px rgba(255, 255, 255, 0.2),
             0 20px 20px rgba(255, 255, 255, 0.15);`,
        },
      ],
    },
  ],
}
