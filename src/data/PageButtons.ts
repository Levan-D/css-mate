/** @format */

import boxShadow from "../assets/pageIcons/boxshadow.png"
import gradient from "../assets/pageIcons/gradient.png"

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
  //   name: "Text Shadow",
  //   path: "text-shadow",
  // },
  {
    name: "Gradient",
    path: "gradient",
    icon: gradient,
  },
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
