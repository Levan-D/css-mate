/** @format */

import boxShadow from "../assets/pageIcons/boxShadow.png"
import dropShadow from "../assets/pageIcons/dropShadow.png"
import gradient from "../assets/pageIcons/gradient.png"
import cursor from "../assets/pageIcons/cursor.png"
import emoji from "../assets/pageIcons/emoji.png"
import entities from "../assets/pageIcons/entities.png"

export type pageButtonsType = {
  catName: string
  catPath: string
  catCon: {
    name: string
    path: string
    icon: string
  }[]
}

export const pageButtons: pageButtonsType[] = [
  {
    catName: "Shadows",
    catPath: "shadows",
    catCon: [
      {
        name: "Box Shadow",
        path: "box-shadow",
        icon: boxShadow,
      },
      {
        name: "Drop Shadow",
        path: "drop-shadow",
        icon: dropShadow,
      },
    ],
  },
  {
    catName: "Gradients",
    catPath: "gradients",
    catCon: [
      {
        name: "Gradient",
        path: "gradient",
        icon: gradient,
      },
    ],
  },
  {
    catName: "Misc",
    catPath: "misc",
    catCon: [
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
    ],
  },
]
