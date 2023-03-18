/** @format */

export default function RGBToHSL(rgbString: string) {
  const rgbValues = rgbString.split(",").map(Number)
  const r = rgbValues[0] / 255
  const g = rgbValues[1] / 255
  const b = rgbValues[2] / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const delta = max - min

  let h = 0
  let s = 0
  let l = (max + min) / 2

  if (delta !== 0) {
    s = delta / (1 - Math.abs(2 * l - 1))

    switch (max) {
      case r:
        h = ((g - b) / delta) % 6
        break
      case g:
        h = (b - r) / delta + 2
        break
      case b:
        h = (r - g) / delta + 4
        break
    }
  }

  h = Math.round(h * 60)
  s = Math.round(s * 100)
  l = Math.round(l * 100)

  return `${h}, ${s}%, ${l}%`
}
