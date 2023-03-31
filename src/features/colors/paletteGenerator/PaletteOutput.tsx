/** @format */

import React from "react"
import ColorCard from "../../../components/ColorCard"
import HexToHSL from "../../../utils/colors/HexToHSL"
import HexToRGB from "../../../utils/colors/HexToRGB"
import HSLToHex from "../../../utils/colors/HSLToHex"
//@ts-ignore
import colorNamer from "color-namer"
import useIntersectionObserver from "../../../hooks/useIntersectionObserver"

type props = {
  mainColor: string
}

export default function PaletteOutput({ mainColor }: props) {
  function colorNamerFunc(hex: string) {
    try {
      return colorNamer(hex).ntc[0].name
    } catch (errz) {
      return `Unnamed`
    }
  }

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

  return (
    <div className="mt-32">
      <div className="my-16 mx-auto w-fit  rounded-xl border-2  border-slate-500 bg-darkJungle-900">
        <div className="menuHeader     px-4 py-2">
          <h3 className="  text-center font-cursiveCustom  text-lg text-slate-300 ">
            Complementary
          </h3>
        </div>

        <p className="m-4 text-center text-slate-200">
          Opposites attract! Create striking contrast with <br />
          colors on opposite sides of the color wheel.
        </p>
        <div className="mx-8 mb-8 flex flex-wrap justify-center gap-4">
          {complementary(mainColor).map((color, i) => (
            <div key={i}>
              <ColorCard
                colorName={colorNamerFunc(color)}
                bgColor={HexToRGB(color)}
                hex={color}
                rgb={HexToRGB(color)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="my-16 mx-auto w-fit  rounded-xl border-2  border-slate-500 bg-darkJungle-900">
        <div className="menuHeader     px-4 py-2">
          <h3 className="  text-center font-cursiveCustom  text-lg text-slate-300 ">
            Analogous
          </h3>
        </div>
        <p className="m-4  text-center text-slate-200">
          Friendly neighbors unite! Build a harmonious and cohesive look <br />
          using adjacent colors on the wheel.
        </p>
        <div className="mx-8 mb-8 flex flex-wrap justify-center gap-4">
          {analogous(mainColor).map((color, i) => (
            <div key={i}>
              <ColorCard
                colorName={colorNamerFunc(color)}
                bgColor={HexToRGB(color)}
                hex={color}
                rgb={HexToRGB(color)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="my-16 mx-auto w-fit  rounded-xl border-2  border-slate-500 bg-darkJungle-900">
        <div className="menuHeader     px-4 py-2">
          <h3 className="  text-center font-cursiveCustom  text-lg text-slate-300 ">
            Triadic
          </h3>
        </div>
        <p className="m-4  text-center text-slate-200">
          Three's company! Achieve a balanced and vibrant palette <br /> with
          colors evenly spaced on the color wheel.
        </p>
        <div className="mx-8 mb-8 flex flex-wrap justify-center gap-4">
          {triadic(mainColor).map((color, i) => (
            <div key={i}>
              <ColorCard
                colorName={colorNamerFunc(color)}
                bgColor={HexToRGB(color)}
                hex={color}
                rgb={HexToRGB(color)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="my-16 mx-auto w-fit  rounded-xl border-2  border-slate-500 bg-darkJungle-900">
        <div className="menuHeader     px-4 py-2">
          <h3 className="  text-center font-cursiveCustom  text-lg text-slate-300 ">
            Split Complementary
          </h3>
        </div>
        <p className="m-4  text-center text-slate-200">
          A harmonious twist! Combine the base color with its complement's <br />
          neighbors for less contrast but great visual appeal.
        </p>
        <div className="mx-8 mb-8 flex flex-wrap justify-center gap-4">
          {splitComplementary(mainColor).map((color, i) => (
            <div key={i}>
              <ColorCard
                colorName={colorNamerFunc(color)}
                bgColor={HexToRGB(color)}
                hex={color}
                rgb={HexToRGB(color)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="my-16 mx-auto w-fit  rounded-xl border-2  border-slate-500 bg-darkJungle-900">
        <div className="menuHeader     px-4 py-2">
          <h3 className="  text-center font-cursiveCustom  text-lg text-slate-300 ">
            Tetradic
          </h3>
        </div>
        <p className="m-4  text-center text-slate-200">
          Double the fun! Create a rich and diverse palette  with two<br />
          complementary color pairs - just watch the balance!
        </p>
        <div className="mx-8 mb-8 flex flex-wrap justify-center gap-4">
          {tetradic(mainColor).map((color, i) => (
            <div key={i}>
              <ColorCard
                colorName={colorNamerFunc(color)}
                bgColor={HexToRGB(color)}
                hex={color}
                rgb={HexToRGB(color)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="my-16 mx-auto w-fit  rounded-xl border-2  border-slate-500 bg-darkJungle-900">
        <div className="menuHeader     px-4 py-2">
          <h3 className="  text-center font-cursiveCustom  text-lg text-slate-300 ">
            Monochromatic
          </h3>
        </div>
        <p className="m-4  text-center text-slate-200">
          One is all you need! Craft a cohesive look with different <br />
          shades, tints, and tones of a single color.
        </p>
        <div className="mx-8 mb-8 flex flex-wrap justify-center gap-4">
          {monochromatic(mainColor).map((color, i) => (
            <div key={i}>
              <ColorCard
                colorName={colorNamerFunc(color)}
                bgColor={HexToRGB(color)}
                hex={color}
                rgb={HexToRGB(color)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="my-16 mx-auto w-fit  rounded-xl border-2  border-slate-500 bg-darkJungle-900">
        <div className="menuHeader     px-4 py-2">
          <h3 className="  text-center font-cursiveCustom  text-lg text-slate-300 ">
            Shades,Tints, & Tones
          </h3>
        </div>
        <p className="m-4  text-center text-slate-200">
          Dive into the depths of a color by adjusting its lightness,
         darkness,  <br /> or grayness for a harmonious yet contrasted palette.
        </p>
        <div className="mx-8 mb-8 flex flex-wrap justify-center gap-4">
          {shadesTintsTones(mainColor).map((color, i) => (
            <div key={i}>
              <ColorCard
                colorName={colorNamerFunc(color)}
                bgColor={HexToRGB(color)}
                hex={color}
                rgb={HexToRGB(color)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="my-16 mx-auto w-fit  rounded-xl border-2  border-slate-500 bg-darkJungle-900">
        <div className="menuHeader     px-4 py-2">
          <h3 className="  text-center font-cursiveCustom  text-lg text-slate-300 ">
            Compound
          </h3>
        </div>
        <p className="m-4  text-center text-slate-200">
          Mix and match! Choose colors that aren't direct neighbors
         on   <br />the color wheel for a diverse yet slightly less harmonious
          look.
        </p>
        <div className="mx-8 mb-8 flex flex-wrap justify-center gap-4">
          {compoundColors(mainColor).map((color, i) => (
            <div key={i}>
              <ColorCard
                colorName={colorNamerFunc(color)}
                bgColor={HexToRGB(color)}
                hex={color}
                rgb={HexToRGB(color)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="my-16 mx-auto w-fit  rounded-xl border-2  border-slate-500 bg-darkJungle-900">
        <div className="menuHeader     px-4 py-2">
          <h3 className="  text-center font-cursiveCustom  text-lg text-slate-300 ">
            Gradient
          </h3>
        </div>
        <p className="m-4  text-center text-slate-200">
          Smooth transitions! Generate a cohesive palette by blending colors
          <br />
          seamlessly for backgrounds, illustrations, or visual elements.
        </p>
        <div className="mx-8 mb-8 flex flex-wrap justify-center gap-4">
          {gradientPalette(mainColor).map((color, i) => (
            <div key={i}>
              <ColorCard
                colorName={colorNamerFunc(color)}
                bgColor={HexToRGB(color)}
                hex={color}
                rgb={HexToRGB(color)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="my-16 mx-auto w-fit  rounded-xl border-2  border-slate-500 bg-darkJungle-900">
        <div className="menuHeader     px-4 py-2">
          <h3 className="  text-center font-cursiveCustom  text-lg text-slate-300 ">
            Pastel
          </h3>
        </div>
        <p className="m-4  text-center text-slate-200">
          Soft and subtle! Reduce saturation for a soothing, muted,
          <br /> or pastel palette that complements the main color.
        </p>
        <div className="mx-8 mb-8 flex flex-wrap justify-center gap-4">
          {mutedPalette(mainColor).map((color, i) => (
            <div key={i}>
              <ColorCard
                colorName={colorNamerFunc(color)}
                bgColor={HexToRGB(color)}
                hex={color}
                rgb={HexToRGB(color)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
