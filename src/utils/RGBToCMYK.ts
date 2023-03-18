/** @format */

export default function RGBToCMYK(rgbString: string) {
  const rgbValues = rgbString.split(",").map(Number)
  const r = rgbValues[0] / 255
  const g = rgbValues[1] / 255
  const b = rgbValues[2] / 255

  const k = 1 - Math.max(r, g, b)
  const c = Math.round(((1 - r - k) / (1 - k)) * 100)
  const m = Math.round(((1 - g - k) / (1 - k)) * 100)
  const y = Math.round(((1 - b - k) / (1 - k)) * 100)

  return `${c}%, ${m}%, ${y}%, ${Math.round(k * 100)}%`
}
