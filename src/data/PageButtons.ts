/** @format */

// page icons
import boxShadow from "../assets/pageIcons/boxShadow.png"
import dropShadow from "../assets/pageIcons/dropShadow.png"
import textShadow from "../assets/pageIcons/textShadow.png"
import gradient from "../assets/pageIcons/gradient.png"
import colorConverter from "../assets/pageIcons/colorConverter.png"
import cursor from "../assets/pageIcons/cursor.png"
import emoji from "../assets/pageIcons/emoji.png"
import entities from "../assets/pageIcons/entities.png"
import paletteMixer from "../assets/pageIcons/paletteMixer.png"
import colorNamer from "../assets/pageIcons/colorNamer.png"

// pages
import BoxShadow from "../features/shadows/boxShadow/BoxShadow"
import DropShadow from "../features/shadows/dropShadow/DropShadow"
import TextShadow from "../features/shadows/textShadow/TextShadow"
import ColorConverter from "../features/converters/colorConverter/ColorConverter"
import Cursors from "../features/misc/cursors/Cursors"
import Emojis from "../features/misc/emojis/Emojis"
import Entities from "../features/misc/entities/Entities"
import Gradient from "../features/colors/gradientMaker/Gradient"
import PaletteMixer from "../features/colors/paletteMixer/PaletteMixer"
import ColorNamer from "../features/colors/colorNamer/ColorNamer"

export type pageButtonsType = {
  catName: string
  catPath: string
  catCon: {
    name: string
    path: string
    element: React.ComponentType<any>
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
        element: BoxShadow,
        icon: boxShadow,
      },
      {
        name: "Drop Shadow",
        path: "drop-shadow",
        element: DropShadow,
        icon: dropShadow,
      },
      {
        name: "Text Shadow",
        path: "text-shadow",
        element: TextShadow,
        icon: textShadow,
      },
    ],
  },
  {
    catName: "Colors",
    catPath: "colors",
    catCon: [
      {
        name: "Gradient maker",
        path: "gradient-maker",
        element: Gradient,
        icon: gradient,
      },
      {
        name: "Color namer ",
        path: "color-namer",
        element: ColorNamer,
        icon: colorNamer,
      },
      {
        name: "Palette mixer ",
        path: "palette-mixer",
        element: PaletteMixer,
        icon: paletteMixer,
      },
    ],
  },
  {
    catName: "Converters",
    catPath: "converters",
    catCon: [
      {
        name: "Color converter",
        path: "color-converter",
        element: ColorConverter,
        icon: colorConverter,
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
        element: Cursors,
        icon: cursor,
      },
      {
        name: "Emojis",
        path: "emojis",
        element: Emojis,
        icon: emoji,
      },
      {
        name: "Entities",
        path: "entities",
        element: Entities,
        icon: entities,
      },
    ],
  },
]
