/** @format */

export default function HSLToCMYK(hsl_str: string) {
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

  // Convert the RGB values to cmyk format
  const k = 1 - Math.max(r, g, b)
  const c = Math.round(((1 - r - k) / (1 - k)) * 100)
  const m = Math.round(((1 - g - k) / (1 - k)) * 100)
  const y = Math.round(((1 - b - k) / (1 - k)) * 100)

  return `${c}%, ${m}%, ${y}%, ${Math.round(k * 100)}%`
}
