/** @format */

// page icons
import boxShadow from "../assets/pageIcons/boxShadow.png";
import dropShadow from "../assets/pageIcons/dropShadow.png";
import textShadow from "../assets/pageIcons/textShadow.png";
import gradient from "../assets/pageIcons/gradient.png";
import colorConverter from "../assets/pageIcons/colorConverter.png";
import cursor from "../assets/pageIcons/cursor.png";
import emoji from "../assets/pageIcons/emoji.png";
import entities from "../assets/pageIcons/entities.png";
import paletteMixer from "../assets/pageIcons/paletteMixer.png";
import colorNamer from "../assets/pageIcons/colorNamer.png";

// pages
import BoxShadow from "../features/shadows/boxShadow/BoxShadow";
import DropShadow from "../features/shadows/dropShadow/DropShadow";
import TextShadow from "../features/shadows/textShadow/TextShadow";
import ColorConverter from "../features/converters/colorConverter/ColorConverter";
import Cursors from "../features/misc/cursors/Cursors";
import Emojis from "../features/misc/emojis/Emojis";
import Entities from "../features/misc/entities/Entities";
import Gradient from "../features/colors/gradientMaker/Gradient";
import PaletteMixer from "../features/colors/paletteMixer/PaletteMixer";
import ColorNamer from "../features/colors/colorNamer/ColorNamer";
import ContrastChecker from "../features/colors/contrastChecker/ContrastChecker";

export type pageButtonsType = {
  catName: string;
  catPath: string;
  catCon: {
    name: string;
    path: string;
    element: React.ComponentType<any>;
    description: string;
    icon: string;
  }[];
};

export const pageButtons: pageButtonsType[] = [
  {
    catName: "Shadows",
    catPath: "shadows",
    catCon: [
      {
        name: "Box Shadow",
        path: "box-shadow",
        element: BoxShadow,
        description:
          "Easily create and customize box shadows with real-time previews and CSS code generation.",
        icon: boxShadow,
      },
      {
        name: "Drop Shadow",
        path: "drop-shadow",
        element: DropShadow,
        description:
          "Generate unique drop shadows for your elements by adjusting angle, distance, size, and color.",
        icon: dropShadow,
      },
      {
        name: "Text Shadow",
        path: "text-shadow",
        element: TextShadow,
        description:
          "Enhance your text with custom shadows, offering a range of offset, blur, and color options.",
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
        description:
          "Design beautiful linear, radial, and conic gradients with full control over colors and angles.",
        icon: gradient,
      },
      {
        name: "Color namer ",
        path: "color-namer",
        element: ColorNamer,
        description:
          "Identify the name of any color by inputting its HEX, RGB, HSL, HSV, or CMYK values.",
        icon: colorNamer,
      },
      {
        name: "Contrast checker ",
        path: "contrast-checker",
        element: ContrastChecker,
        description:
          "Check if your background and text have sufficient contrast for readability.",
        icon: colorNamer,
      },
      {
        name: "Palette mixer ",
        path: "palette-mixer",
        element: PaletteMixer,
        description:
          "Combine and create new color palettes by mixing existing ones or generating fresh schemes.",
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
        description:
          "Easily convert color codes between HEX, RGB, HSL, HSV, and CMYK formats.",
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
        description:
          "Explore a comprehensive list of CSS cursor types with visual examples and descriptions.",
        icon: cursor,
      },
      {
        name: "Emojis",
        path: "emojis",
        element: Emojis,
        description:
          "Find the perfect emoji hex code with a detailed glossary and examples.",
        icon: emoji,
      },
      {
        name: "Entities",
        path: "entities",
        element: Entities,
        description: "look through HTML entities with a handy reference guide.",
        icon: entities,
      },
    ],
  },
];
