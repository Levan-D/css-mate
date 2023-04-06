/** @format */

export type gradientSwatches = {
  name: string;
  type: "linear" | "conic" | "radial";
  stops: { percent: number; color: string; opacity: number }[];
};

export const gradientSwatches: gradientSwatches[] = [
  {
    name: "Strawberry Lemon",
    type: "linear",
    stops: [
      { percent: 20, color: "22,178,211", opacity: 100 },
      { percent: 80, color: "254,65,108", opacity: 100 },
    ],
  },
  {
    name: "Purple Haze",
    type: "linear",
    stops: [
      { percent: 20, color: "252,70,107", opacity: 100 },
      { percent: 80, color: "63,94,251", opacity: 100 },
    ],
  },
  {
    name: "Emerald Dive",
    type: "linear",
    stops: [
      { percent: 20, color: "38,208,124", opacity: 100 },
      { percent: 80, color: "6,147,227", opacity: 100 },
    ],
  },
  {
    name: "Serene Waters",
    type: "linear",
    stops: [
      { percent: 20, color: "0,238,251", opacity: 100 },
      { percent: 80, color: "18,216,250", opacity: 100 },
    ],
  },
  {
    name: "Midnight Blaze",
    type: "linear",
    stops: [
      { percent: 20, color: "242,241,241", opacity: 100 },
      { percent: 80, color: "194,21,0", opacity: 100 },
    ],
  },
  {
    name: "Solar Flare",
    type: "linear",
    stops: [
      { percent: 20, color: "255,200,55", opacity: 100 },
      { percent: 80, color: "255,0,0", opacity: 100 },
    ],
  },
  {
    name: "Dusky Lavender",
    type: "linear",
    stops: [
      { percent: 20, color: "90,9,121", opacity: 100 },
      { percent: 80, color: "238,9,121", opacity: 100 },
    ],
  },
  {
    name: "Aqua Dreams",
    type: "linear",
    stops: [
      { percent: 20, color: "0,216,254", opacity: 100 },
      { percent: 80, color: "150,47,191", opacity: 100 },
    ],
  },
  {
    name: "Coral Sunrise",
    type: "linear",
    stops: [
      { percent: 20, color: "230,30,120", opacity: 100 },
      { percent: 80, color: "245,200,120", opacity: 100 },
    ],
  },
  {
    name: "Icy Pastels",
    type: "linear",
    stops: [
      { percent: 20, color: "168,237,234", opacity: 100 },
      { percent: 80, color: "254,214,227", opacity: 100 },
    ],
  },
  {
    name: "Warm Sunshine",
    type: "linear",
    stops: [
      { percent: 20, color: "246,211,101", opacity: 100 },
      { percent: 80, color: "253,160,133", opacity: 100 },
    ],
  },
  {
    name: "Spring Meadow",
    type: "linear",
    stops: [
      { percent: 20, color: "150,230,166", opacity: 100 },
      { percent: 80, color: "212,252,121", opacity: 100 },
    ],
  },
  {
    name: "Nebula",
    type: "linear",
    stops: [
      { percent: 20, color: "106,17,203", opacity: 100 },
      { percent: 80, color: "37,117,252", opacity: 100 },
    ],
  },
  {
    name: "Twilight Shadows",
    type: "linear",
    stops: [
      { percent: 20, color: "43,88,118", opacity: 100 },
      { percent: 80, color: "78,67,118", opacity: 100 },
    ],
  },
  {
    name: "Autumn Hues",
    type: "linear",
    stops: [
      { percent: 20, color: "178,96,168", opacity: 100 },
      { percent: 80, color: "191,113,96", opacity: 100 },
    ],
  },
  {
    name: "Enchanted Sky",
    type: "linear",
    stops: [
      { percent: 20, color: "217,128,250", opacity: 100 },
      { percent: 80, color: "127,212,250", opacity: 100 },
    ],
  },
  {
    name: "Forest Whispers",
    type: "linear",
    stops: [
      { percent: 20, color: "71,153,148", opacity: 100 },
      { percent: 80, color: "167,191,148", opacity: 100 },
    ],
  },
  {
    name: "Mystic Twilight",
    type: "linear",
    stops: [
      { percent: 20, color: "137,106,194", opacity: 100 },
      { percent: 80, color: "231,166,185", opacity: 100 },
    ],
  },
  {
    name: "Gentle Dawn",
    type: "linear",
    stops: [
      { percent: 20, color: "221,216,242", opacity: 100 },
      { percent: 80, color: "159,172,230", opacity: 100 },
    ],
  },
  {
    name: "Ocean Breeze",
    type: "linear",
    stops: [
      { percent: 20, color: "107,185,240", opacity: 100 },
      { percent: 80, color: "181,215,243", opacity: 100 },
    ],
  },
  {
    name: "Blue Lagoon",
    type: "linear",
    stops: [
      { percent: 20, color: "135,193,203", opacity: 100 },
      { percent: 80, color: "83,169,186", opacity: 100 },
    ],
  },
  {
    name: "Golden Sands",
    type: "linear",
    stops: [
      { percent: 20, color: "252,234,187", opacity: 100 },
      { percent: 80, color: "252,227,138", opacity: 100 },
    ],
  },
  {
    name: "Skyline",
    type: "linear",
    stops: [
      { percent: 20, color: "94,161,255", opacity: 100 },
      { percent: 80, color: "255,114,94", opacity: 100 },
    ],
  },
  {
    name: "Pink Blush",
    type: "linear",
    stops: [
      { percent: 20, color: "247,119,154", opacity: 100 },
      { percent: 80, color: "251,215,134", opacity: 100 },
    ],
  },

  {
    name: "Noon Flows",
    type: "linear",
    stops: [
      { percent: 20, color: "68,36,164", opacity: 100 },
      { percent: 80, color: "84,212,228", opacity: 100 },
    ],
  },
  {
    name: "Orange Pop",
    type: "linear",
    stops: [
      { percent: 20, color: "255,209,67", opacity: 100 },
      { percent: 80, color: "255,145,83", opacity: 100 },
    ],
  },
  {
    name: "Shamrock Lush",
    type: "linear",
    stops: [
      { percent: 20, color: "14,174,87", opacity: 100 },
      { percent: 80, color: "12,116,117", opacity: 100 },
    ],
  },
  {
    name: "Into the Deep",
    type: "linear",
    stops: [
      { percent: 20, color: "48,207,208", opacity: 100 },
      { percent: 80, color: "51,8,103", opacity: 100 },
    ],
  },
  {
    name: "Good Omens",
    type: "linear",
    stops: [
      { percent: 20, color: "255,94,247", opacity: 100 },
      { percent: 80, color: "2,245,255", opacity: 100 },
    ],
  },
  {
    name: "Mono Slate",
    type: "linear",
    stops: [
      { percent: 20, color: "32,45,58", opacity: 100 },
      { percent: 80, color: "90,92,106", opacity: 100 },
    ],
  },
  {
    name: "Pastel Vibes",
    type: "linear",
    stops: [
      { percent: 20, color: "209,247,241", opacity: 100 },
      { percent: 80, color: "249,213,213", opacity: 100 },
    ],
  },
  {
    name: "Frost Freeze",
    type: "linear",
    stops: [
      { percent: 20, color: "239,249,249", opacity: 100 },
      { percent: 80, color: "182,199,226", opacity: 100 },
    ],
  },
  {
    name: "Pink Lemonade",
    type: "linear",
    stops: [
      { percent: 20, color: "252,225,208", opacity: 100 },
      { percent: 50, color: "255,173,214", opacity: 100 },
      { percent: 80, color: "162,186,245", opacity: 100 },
    ],
  },
  {
    name: "Sunset Gold",
    type: "linear",
    stops: [
      { percent: 20, color: "255,200,124", opacity: 100 },
      { percent: 80, color: "252,251,121", opacity: 100 },
    ],
  },
  {
    name: "Apple Warm",
    type: "linear",
    stops: [
      { percent: 20, color: "252,37,103", opacity: 100 },
      { percent: 50, color: "186,8,181", opacity: 100 },
      { percent: 80, color: "250,38,151", opacity: 100 },
    ],
  },
  {
    name: "Raw Lush",
    type: "linear",
    stops: [
      { percent: 20, color: "34,126,34", opacity: 100 },
      { percent: 80, color: "168,251,60", opacity: 100 },
    ],
  },
];
