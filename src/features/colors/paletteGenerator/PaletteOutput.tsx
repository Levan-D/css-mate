/** @format */

import React from "react"
import ColorCard from "../../../components/ColorCard"
import HexToHSL from "../../../utils/colors/HexToHSL"
import HSLToHex from "../../../utils/colors/HSLToHex"

type props = {
  mainColor: string
}

export default function PaletteOutput({ mainColor }: props) {
  function adjustHue(h: number, degrees: number) {
    return h + degrees > 360 ? h + degrees - 360 : h + degrees
  }

  function complementary(hex: string) {
    const array = HexToHSL(hex).split(",")
    const h = parseFloat(array[0])
    const s = parseFloat(array[1])
    const l = parseFloat(array[2])

    const newHue = adjustHue(h, 180)

    return [hex, HSLToHex([newHue, s, l].join())]
  }

  function analogous(hex, count = 2, angle = 30) {
    const [h, s, l] = RGBToHSL(...hexToRGB(hex))
    const colors = []

    for (let i = 1; i <= count; i++) {
      const newHue = adjustHue(h, angle * i)
      colors.push(RGBToHex(...HSLToRGB(newHue, s, l)))
    }

    return colors
  }

  function triadic(hex) {
    const [h, s, l] = RGBToHSL(...hexToRGB(hex))
    const colors = [
      RGBToHex(...HSLToRGB(adjustHue(h, 1 / 3), s, l)),
      RGBToHex(...HSLToRGB(adjustHue(h, 2 / 3), s, l)),
    ]

    return colors
  }

  function splitComplementary(hex, angle = 150) {
    const [h, s, l] = RGBToHSL(...hexToRGB(hex))
    const colors = [
      RGBToHex(...HSLToRGB(adjustHue(h, (360 - angle) / 360), s, l)),
      RGBToHex(...HSLToRGB(adjustHue(h, (360 + angle) / 360), s, l)),
    ]

    return colors
  }

  function tetradic(hex, angle = 90) {
    const [h, s, l] = RGBToHSL(...hexToRGB(hex))
    const colors = [
      RGBToHex(...HSLToRGB(adjustHue(h, 0.5), s, l)),
      RGBToHex(...HSLToRGB(adjustHue(h, 0.5 + angle / 360), s, l)),
      RGBToHex(...HSLToRGB(adjustHue(h, 1 - angle / 360), s, l)),
    ]

    return colors
  }

  function square(hex: string, angle = 90) {
    const array = HexToHSL(hex).split(",")
    const h = parseFloat(array[0])
    const s = parseFloat(array[1])
    const l = parseFloat(array[2])

    const colors = [
      hex,
      HSLToHex([adjustHue(h, angle), s, l].join()),
      HSLToHex([adjustHue(h, angle * 2), s, l].join()),
      HSLToHex([adjustHue(h, angle * 3), s, l].join()),
    ]

    return colors
  }

  function monochromatic(hex, count = 3) {
    const [h, s, l] = RGBToHSL(...hexToRGB(hex))
    const colors = []

    for (let i = 1; i <= count; i++) {
      const newL = (l + i * (1 / (count + 1))) % 1
      colors.push(RGBToHex(...HSLToRGB(h, s, newL)))
    }

    return colors
  }

  console.log(square(mainColor))
  return <div>{square(mainColor)}</div>
}
