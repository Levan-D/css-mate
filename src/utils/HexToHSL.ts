/** @format */

export default function HexToHSL(hex: string): string {
  let r = 0,
    g = 0,
    b = 0
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16)
    g = parseInt(hex[2] + hex[2], 16)
    b = parseInt(hex[3] + hex[3], 16)
  } else if (hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16)
    g = parseInt(hex.slice(3, 5), 16)
    b = parseInt(hex.slice(5, 7), 16)
  } else {
    return ""
  }

  const rr = r / 255
  const gg = g / 255
  const bb = b / 255

  const cmin = Math.min(rr, gg, bb)
  const cmax = Math.max(rr, gg, bb)
  const delta = cmax - cmin

  let h = 0,
    s = 0,
    l = 0

  if (delta === 0) {
    h = 0
  } else if (cmax === rr) {
    h = ((gg - bb) / delta) % 6
  } else if (cmax === gg) {
    h = (bb - rr) / delta + 2
  } else {
    h = (rr - gg) / delta + 4
  }

  h = Math.round(h * 60)
  if (h < 0) h += 360

  l = (cmax + cmin) / 2

  if (delta === 0) {
    s = 0
  } else {
    s = delta / (1 - Math.abs(2 * l - 1))
  }

  s = +(s * 100).toFixed(0)
  l = +(l * 100).toFixed(0)

  return `${h}, ${s}%, ${l}%`
}
