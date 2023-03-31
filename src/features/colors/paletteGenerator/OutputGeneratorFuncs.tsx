/** @format */
import HSLToHex from "../../../utils/colors/HSLToHex"
import HexToHSL from "../../../utils/colors/HexToHSL"

function adjustHue(h: number, degrees: number) {
  return h + degrees > 360 ? h + degrees - 360 : h + degrees
}

function complementary(hex: string) {
  if (hex) {
    const array = HexToHSL(hex).split(",")
    const h = parseFloat(array[0])
    const s = parseFloat(array[1])
    const l = parseFloat(array[2])

    const newHue = adjustHue(h, 180)

    return [hex, HSLToHex([newHue, s, l].join())]
  } else return ["error"]
}

function analogous(hex: string) {
  const array = HexToHSL(hex).split(",")
  const h = parseFloat(array[0])
  const s = parseFloat(array[1])
  const l = parseFloat(array[2])

  const colors = [
    hex,
    HSLToHex([adjustHue(h, 30), s, l].join()),
    HSLToHex([adjustHue(h, -30), s, l].join()),
  ]

  return colors
}

function triadic(hex: string) {
  const array = HexToHSL(hex).split(",")
  const h = parseFloat(array[0])
  const s = parseFloat(array[1])
  const l = parseFloat(array[2])

  const colors = [
    hex,
    HSLToHex([adjustHue(h, 120), s, l].join()),
    HSLToHex([adjustHue(h, 240), s, l].join()),
  ]

  return colors
}

function splitComplementary(hex: string) {
  const array = HexToHSL(hex).split(",")
  const h = parseFloat(array[0])
  const s = parseFloat(array[1])
  const l = parseFloat(array[2])

  const colors = [
    hex,
    HSLToHex([adjustHue(h, 150), s, l].join()),
    HSLToHex([adjustHue(h, 210), s, l].join()),
  ]

  return colors
}

function tetradic(hex: string) {
  const array = HexToHSL(hex).split(",")
  const h = parseFloat(array[0])
  const s = parseFloat(array[1])
  const l = parseFloat(array[2])

  const colors = [
    hex,
    HSLToHex([adjustHue(h, 90), s, l].join()),
    HSLToHex([adjustHue(h, 180), s, l].join()),
    HSLToHex([adjustHue(h, 270), s, l].join()),
  ]

  return colors
}

function monochromatic(hex: string) {
  const array = HexToHSL(hex).split(",")
  const h = parseFloat(array[0])
  const s = parseFloat(array[1])
  const l = parseFloat(array[2])

  const ratio = 0.1 // Adjust this value to control how much the lightness changes
  const newL = Math.max(0, l * (1 + ratio))

  const colors = [hex, HSLToHex([h, s, newL].join())]

  return colors
}

function shadesTintsTones(hex: string, count = 4) {
  const array = HexToHSL(hex).split(",")
  const h = parseFloat(array[0])
  const s = parseFloat(array[1])
  const l = parseFloat(array[2])

  const step = 1 / (count + 1)
  const colors = []

  for (let i = 1; i <= count; i++) {
    const newL = Math.round(((l + i * step) % 1) * 100)
    const newS = s * (1 - 0.5 * i * step)
    colors.push(HSLToHex([h, newS, newL].join()))
  }

  return colors
}

function compoundColors(hex: string, angle = 30) {
  const array = HexToHSL(hex).split(",")
  const h = parseFloat(array[0])
  const s = parseFloat(array[1])
  const l = parseFloat(array[2])

  const colors = [
    hex,
    HSLToHex([adjustHue(h, angle), s, l].join()),
    HSLToHex([adjustHue(h, -angle), s, l].join()),
  ]

  return colors
}

function gradientPalette(hex: string, count = 4) {
  const array = HexToHSL(hex).split(",")
  const h1 = parseFloat(array[0])
  const s1 = parseFloat(array[1])
  const l1 = parseFloat(array[2])

  const h2 = adjustHue(h1, 30)
  const s2 = s1
  const l2 = l1

  const colors = []

  for (let i = 0; i <= count; i++) {
    const t = i / count
    const h = h1 + t * (h2 - h1)
    const s = s1 + t * (s2 - s1)
    const l = l1 + t * (l2 - l1)

    colors.push(HSLToHex([h, s, l].join()))
  }

  return colors
}

function mutedPalette(hex: string, count = 4) {
  const array = HexToHSL(hex).split(",")
  const h = parseFloat(array[0])
  const s = parseFloat(array[1])
  const l = parseFloat(array[2])

  const colors = []

  for (let i = 0; i < count; i++) {
    const newH = adjustHue(h, i * (360 / count))
    const newS = Math.max(s * 0.6, 0)
    const newL = Math.max(l * 1, 0)

    colors.push(HSLToHex([newH, newS, newL].join()))
  }

  return colors
}

export default function calculatePalette(type: string, color: string) {
  switch (type) {
    case "complementary":
      return complementary(color)
    case "analogous":
      return analogous(color)
    case "triadic":
      return triadic(color)
    case "splitComplementary":
      return splitComplementary(color)
    case "tetradic":
      return tetradic(color)
    case "monochromatic":
      return monochromatic(color)
    case "shadesTintsTones":
      return shadesTintsTones(color)
    case "compoundColors":
      return compoundColors(color)
    case "gradientPalette":
      return gradientPalette(color)
    case "mutedPalette":
      return mutedPalette(color)

    default:
      return []
  }
}
