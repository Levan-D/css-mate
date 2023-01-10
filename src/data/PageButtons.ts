/** @format */

import boxShadow from "../assets/pageIcons/boxShadow.png"
import gradient from "../assets/pageIcons/gradient.png"
import cursor from "../assets/pageIcons/cursor.png"
import emoji from "../assets/pageIcons/emoji.png"
import entities from "../assets/pageIcons/entities.png"

export type pageButtonsType = {
  name: string
  path: string
  icon: string
}

export const pageButtons: pageButtonsType[] = [
  {
    name: "Box Shadow",
    path: "box-shadow",
    icon: boxShadow,
  },
  // {
  //   name: "Gradient",
  //   path: "gradient",
  //   icon: gradient,
  // },
  {
    name: "Cursors",
    path: "cursors",
    icon: cursor,
  },
  {
    name: "Emojis",
    path: "emojis",
    icon: emoji,
  },
  {
    name: "Entities",
    path: "entities",
    icon: entities,
  },
  // {
  //   name: "Text Shadow",
  //   path: "text-shadow",
  // },

  // {
  //   name: "Border",
  //   path: "border",
  // },
  // {
  //   name: "Transform",
  //   path: "transform",
  // },
  // {
  //   name: "Color Converter",
  //   path: "color-converter",
  // },
]
