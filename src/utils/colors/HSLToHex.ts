/** @format */

export default function HSLToHex(hsl_str: string) {
  // convert input string to array of integers
  const hsl = hsl_str.split(",").map(x => parseFloat(x))

  // convert hsl values to range [0, 1]
  const h = hsl[0] / 360
  const s = hsl[1] / 100
  const l = hsl[2] / 100

  // Calculate the RGB values
  let r, g, b

  if (s === 0) {
    r = g = b = l // achromatic
  } else {
    let hue2rgb = function hue2rgb(p: number, q: number, t: number) {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    let q = l < 0.5 ? l * (1 + s) : l + s - l * s
    let p = 2 * l - q
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }

  // Convert the RGB values to hexadecimal format
  let componentToHex = function componentToHex(c: number) {
    let hex = c.toString(16)
    return hex.length === 1 ? "0" + hex : hex
  }

  let hex =
    "#" +
    componentToHex(Math.round(r * 255)) +
    componentToHex(Math.round(g * 255)) +
    componentToHex(Math.round(b * 255))

  return hex
}
