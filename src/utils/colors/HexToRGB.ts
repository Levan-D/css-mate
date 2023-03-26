/** @format */

// input hex string  like: #a24949

export default function HexToRGB(hex: string): string {
  let hexColor;
  if (!hex.startsWith("#")) {
    hexColor = "#" + hex;
  } else hexColor = hex;

  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  return `${r}, ${g}, ${b}`;
}
