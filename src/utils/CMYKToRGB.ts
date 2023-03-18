/** @format */

export default function CMYKToRGB(cmyk_str: string) {
  // convert input string to array of integers
  const cmyk = cmyk_str.split(",").map(x => parseFloat(x))

  // convert cmyk values to range [0, 1]
  const c = cmyk[0] / 100
  const m = cmyk[1] / 100
  const y = cmyk[2] / 100
  const k = cmyk[3] / 100

  // calculate rgb values
  const r = Math.round(255 * (1 - c) * (1 - k))
  const g = Math.round(255 * (1 - m) * (1 - k))
  const b = Math.round(255 * (1 - y) * (1 - k))

  // return rgb values as a string
  return `${r},${g},${b}`
}
