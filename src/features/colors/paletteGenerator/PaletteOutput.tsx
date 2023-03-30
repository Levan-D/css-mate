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
  console.log(monochromatic(mainColor))
  return <div>{square(mainColor)}</div>
}
