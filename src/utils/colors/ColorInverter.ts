/** @format */

//input either 3 or 6  digit hex with or without #
//input "bw" if u want black and white output instead of the actual inveterd color

export default function ColorInverter(hex: string, bw?: string) {
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1)
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  if (hex.length !== 6) {
    throw new Error("Invalid HEX color.")
  }
  let r: string | number = parseInt(hex.slice(0, 2), 16)
  let g: string | number = parseInt(hex.slice(2, 4), 16)
  let b: string | number = parseInt(hex.slice(4, 6), 16)
  if (bw) {
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#F0F0F0"
  }
  // invert color components
  r = (255 - r).toString(16)
  g = (255 - g).toString(16)
  b = (255 - b).toString(16)
  // pad each with zeros and return
  return "#" + padZero(r) + padZero(g) + padZero(b)
}
function padZero(str: string, len?: number) {
  len = len || 2
  let zeros = new Array(len).join("0")
  return (zeros + str).slice(-len)
}
