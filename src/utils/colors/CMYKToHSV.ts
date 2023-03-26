/** @format */

export default function CMYKToHSV(cmyk_str: string) {
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

  // calculate hsv values
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const delta = max - min

  let h, s, v

  if (delta === 0) {
    h = 0
  } else if (max === r) {
    h = 60 * (((g - b) / delta) % 6)
  } else if (max === g) {
    h = 60 * ((b - r) / delta + 2)
  } else {
    h = 60 * ((r - g) / delta + 4)
  }

  if (max === 0) {
    s = 0
  } else {
    s = delta / max
  }

  v = max / 255

  // return hsv values as a string
  return `${Math.round(h)},${Math.round(s * 100)}%,${Math.round(v * 100)}%`
}
