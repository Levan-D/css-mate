/** @format */

export default function CMYKToHSL(cmyk_str: string) {
  // convert input string to array of integers
  const cmyk = cmyk_str.split(",").map(x => parseFloat(x))

  // convert cmyk values to range [0, 1]
  const c = cmyk[0] / 100
  const m = cmyk[1] / 100
  const y = cmyk[2] / 100
  const k = cmyk[3] / 100

  // calculate rgb values
  const r = 255 * (1 - c) * (1 - k)
  const g = 255 * (1 - m) * (1 - k)
  const b = 255 * (1 - y) * (1 - k)

  // convert rgb values to range [0, 1]
  const R = r / 255
  const G = g / 255
  const B = b / 255

  // calculate HSL values
  const max = Math.max(R, G, B)
  const min = Math.min(R, G, B)
  const delta = max - min
  let h, s, l

  if (delta === 0) {
    h = 0
  } else if (max === R) {
    h = 60 * (((G - B) / delta) % 6)
  } else if (max === G) {
    h = 60 * ((B - R) / delta + 2)
  } else {
    h = 60 * ((R - G) / delta + 4)
  }

  l = (max + min) / 2

  if (delta === 0) {
    s = 0
  } else {
    s = delta / (1 - Math.abs(2 * l - 1))
  }

  // return hsl values as a string
  return `${Math.round(h)},${Math.round(s * 100)}%,${Math.round(l * 100)}%`
}
