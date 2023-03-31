/** @format */
import HSLToHex from "../../../utils/colors/HSLToHex"
import HexToHSL from "../../../utils/colors/HexToHSL"
import RgbToHex from "../../../utils/colors/RGBToHex"
import HSLToRGB from "../../../utils/colors/HSLToRGB"
import HexToRGB from "../../../utils/colors/HexToRGB"
import RGBToHSL from "../../../utils/colors/RGBToHSL"

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
    case "borderGradient":
      return borderGradient(color)
    case "vetoGradient":
      return vetoGradient(color)
    case "bobGradient":
      return bobGradient(color)
    case "fawnGradient":
      return fawnGradient(color)

    default:
      return []
  }
}

function adjustHue(h: number, degrees: number) {
  return h + degrees > 360 ? h + degrees - 360 : h + degrees
}

function hexDestructure(hex: string) {
  const array = HexToHSL(hex).split(",")
  const h = parseFloat(array[0])
  const s = parseFloat(array[1])
  const l = parseFloat(array[2])

  return [h, s, l]
}

function complementary(hex: string) {
  if (hex) {
    const [h, s, l] = hexDestructure(hex)

    const newHue = adjustHue(h, 180)

    return [hex, HSLToHex([newHue, s, l].join())]
  } else return ["error"]
}

function analogous(hex: string) {
  const [h, s, l] = hexDestructure(hex)

  const colors = [
    hex,
    HSLToHex([adjustHue(h, 30), s, l].join()),
    HSLToHex([adjustHue(h, -30), s, l].join()),
  ]

  return colors
}

function triadic(hex: string) {
  const [h, s, l] = hexDestructure(hex)

  const colors = [
    hex,
    HSLToHex([adjustHue(h, 120), s, l].join()),
    HSLToHex([adjustHue(h, 240), s, l].join()),
  ]

  return colors
}

function splitComplementary(hex: string) {
  const [h, s, l] = hexDestructure(hex)

  const colors = [
    hex,
    HSLToHex([adjustHue(h, 150), s, l].join()),
    HSLToHex([adjustHue(h, 210), s, l].join()),
  ]

  return colors
}

function tetradic(hex: string) {
  const [h, s, l] = hexDestructure(hex)

  const colors = [
    hex,
    HSLToHex([adjustHue(h, 90), s, l].join()),
    HSLToHex([adjustHue(h, 180), s, l].join()),
    HSLToHex([adjustHue(h, 270), s, l].join()),
  ]

  return colors
}

function monochromatic(hex: string) {
  const [h, s, l] = hexDestructure(hex)

  const ratio = 0.1 // Adjust this value to control how much the lightness changes
  const newL = Math.max(0, l * (1 + ratio))

  const colors = [hex, HSLToHex([h, s, newL].join())]

  return colors
}

function shadesTintsTones(hex: string, count = 4) {
  const [h, s, l] = hexDestructure(hex)

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
  const [h, s, l] = hexDestructure(hex)

  const colors = [
    hex,
    HSLToHex([adjustHue(h, angle), s, l].join()),
    HSLToHex([adjustHue(h, -angle), s, l].join()),
  ]

  return colors
}

function gradientPalette(hex: string, count = 4) {
  const [h1, s1, l1] = hexDestructure(hex)

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
  const [h, s, l] = hexDestructure(hex)

  const colors = []

  for (let i = 0; i < count; i++) {
    const newH = adjustHue(h, i * (360 / count))
    const newS = Math.max(s * 0.6, 0)
    const newL = Math.max(l * 1, 0)

    colors.push(HSLToHex([newH, newS, newL].join()))
  }

  return colors
}

function borderGradient(
  hex: string,
  count = 6,
  saturationFactor = 1,
  lightnessFactor = 0.9
) {
  const [h, s, l] = hexDestructure(hex)

  function adjustValue(input: number, factor: number, maxValue: number) {
    const output = input * factor
    if (output <= maxValue) {
      return output
    } else {
      return maxValue
    }
  }

  const colorStart = HexToRGB(hex)
    .split(",")
    .map(str => Number(str))
  const colorEnd = HSLToRGB(
    [adjustHue(h, 90), adjustValue(s, saturationFactor, 100), l].join()
  )
    .split(",")
    .map(str => Number(str))

  const rDiff = (colorEnd[0] - colorStart[0]) / (count - 1)
  const gDiff = (colorEnd[1] - colorStart[1]) / (count - 1)
  const bDiff = (colorEnd[2] - colorStart[2]) / (count - 1)

  const colors = []

  for (let i = 0; i < count; i++) {
    const r = Math.round(colorStart[0] + rDiff * i)
    const g = Math.round(colorStart[1] + gDiff * i)
    const b = Math.round(colorStart[2] + bDiff * i)
    const rgbColor = `${r}, ${g}, ${b}`
    const hslColor = RGBToHSL(rgbColor)
    const [stepH, stepS, stepL] = hslColor.split(",").map(str => parseFloat(str))

    const vibrantHSLColor = [
      stepH,
      adjustValue(stepS, saturationFactor, 100),
      adjustValue(stepL, lightnessFactor, 100),
    ].join()

    colors.push(HSLToHex(vibrantHSLColor))
  }
  colors.shift()
  colors.pop()

  colors.unshift(hex)
  colors.push(RgbToHex(colorEnd.join()))

  return colors
}

function vetoGradient(hex: string, count = 6) {
  const [h, s, l] = hexDestructure(hex)

  const colorStart = HexToRGB(hex)
    .split(",")
    .map(str => Number(str))
  const colorEnd = HSLToRGB([adjustHue(h, -90), s, l].join())
    .split(",")
    .map(str => Number(str))

  const rDiff = (colorEnd[0] - colorStart[0]) / (count - 1)
  const gDiff = (colorEnd[1] - colorStart[1]) / (count - 1)
  const bDiff = (colorEnd[2] - colorStart[2]) / (count - 1)

  const colors = []

  for (let i = 0; i < count; i++) {
    const r = Math.round(colorStart[0] + rDiff * i)
    const g = Math.round(colorStart[1] + gDiff * i)
    const b = Math.round(colorStart[2] + bDiff * i)

    colors.push(RgbToHex(`${r}, ${g}, ${b}`))
  }

  return colors
}

function bobGradient(hex: string, count = 4) {
  const [h, s, l] = hexDestructure(hex)

  function adjustValue(input: number, factor: number, maxValue: number) {
    const output = input * factor
    if (output <= maxValue) {
      return output
    } else {
      return maxValue
    }
  }

  const colorStart = HSLToRGB(
    [adjustHue(h, 90), adjustValue(s, 1, 100), adjustValue(l, 1.5, 100)].join()
  )
    .split(",")
    .map(str => Number(str))

  const colorEnd = HSLToRGB([adjustHue(h, 90), adjustValue(s, 1, 100), l].join())
    .split(",")
    .map(str => Number(str))

  const rDiff = (colorEnd[0] - colorStart[0]) / (count - 1)
  const gDiff = (colorEnd[1] - colorStart[1]) / (count - 1)
  const bDiff = (colorEnd[2] - colorStart[2]) / (count - 1)

  const colors = []

  for (let i = 0; i < count; i++) {
    const r = Math.round(colorStart[0] + rDiff * i)
    const g = Math.round(colorStart[1] + gDiff * i)
    const b = Math.round(colorStart[2] + bDiff * i)
    const rgbColor = `${r}, ${g}, ${b}`

    colors.push(RgbToHex(rgbColor))
  }

  colors.shift()
  colors.unshift(hex)

  return colors
}

function fawnGradient(hex: string, count = 4) {
  const [h, s, l] = hexDestructure(hex)

  const minLightness = 72
  const lightnessStep = 5

  const colors = []

  for (let i = 0; i < count; i++) {
    const newHue = -20 + (h / 12) * i // Add an offset of 30 to shift the hue towards beige

    const newSaturation = s
    const newLightness = minLightness + i * lightnessStep

    const hex = HSLToHex([newHue, newSaturation, newLightness].join())

    colors.push(hex)
  }

  colors.shift()
  colors.unshift(hex)

  return colors

  return colors
}
