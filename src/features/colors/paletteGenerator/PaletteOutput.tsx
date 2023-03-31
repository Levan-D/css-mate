/** @format */

import React, { useRef, useState } from "react"

import PaletteContainer from "./PaletteContainer"

import useIntersectionObserver from "../../../hooks/useIntersectionObserver"

type props = {
  mainColor: string
}

export default function PaletteOutput({ mainColor }: props) {
  const [baseColor, setBaseColor] = useState(mainColor)

  const complementaryRef = useRef(null)
  const isComplementaryInView = true

  const analogousRef = useRef(null)
  const isAnalogousInView = useIntersectionObserver(analogousRef, {}, baseColor)

  const triadicRef = useRef(null)
  const isTriadicInView = useIntersectionObserver(triadicRef, {}, baseColor)

  const splitComplementaryRef = useRef(null)
  const isSplitComplementaryInView = useIntersectionObserver(
    splitComplementaryRef,
    {},
    baseColor
  )

  const tetradicRef = useRef(null)
  const isTetradicInView = useIntersectionObserver(tetradicRef, {}, baseColor)

  const monochromaticRef = useRef(null)
  const isMonochromaticInView = useIntersectionObserver(monochromaticRef, {}, baseColor)

  const shadesTintsTonesRef = useRef(null)
  const isShadesTintsTonesInView = useIntersectionObserver(
    shadesTintsTonesRef,
    {},
    baseColor
  )

  const compoundColorsRef = useRef(null)
  const isCompoundColorsInView = useIntersectionObserver(compoundColorsRef, {}, baseColor)

  const gradientPaletteRef = useRef(null)
  const isGradientPaletteInView = useIntersectionObserver(
    gradientPaletteRef,
    {},
    baseColor
  )

  const mutedPaletteRef = useRef(null)
  const isMutedPaletteInView = useIntersectionObserver(mutedPaletteRef, {}, baseColor)

  const borderGradientRef = useRef(null)
  const isBorderGradientInView = useIntersectionObserver(borderGradientRef, {}, baseColor)

  const vetoGradientRef = useRef(null)
  const isVetoGradientInView = useIntersectionObserver(vetoGradientRef, {}, baseColor)

  const smokeyGradientRef = useRef(null)
  const isSmokeyGradientInView = useIntersectionObserver(smokeyGradientRef, {}, baseColor)

  const bobGradientRef = useRef(null)
  const isBobGradientInView = useIntersectionObserver(bobGradientRef, {}, baseColor)

  const fawnGradientRef = useRef(null)
  const isFawnGradientInView = useIntersectionObserver(fawnGradientRef, {}, baseColor)

  const handleGenerate = () => {
    if (baseColor !== mainColor) {
      setBaseColor(mainColor)
      if (window.scrollY <= 150) {
        window.scrollTo({
          top: window.scrollY + 200,
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <div>
      <div
        onClick={handleGenerate}
        className="btnPrimary mx-auto  mb-40 mt-8 h-16 w-56 text-center text-xl leading-[48px]"
      >
        Generate
      </div>

      <PaletteContainer
        compRef={complementaryRef}
        conditional={isComplementaryInView}
        colorInput={baseColor}
        amount={2}
        title={`Complementary`}
        type={`complementary`}
        descr={`Opposites attract! Create striking contrast with 
              colors on opposite sides of the color wheel.`}
      />

      <PaletteContainer
        compRef={analogousRef}
        conditional={isAnalogousInView}
        colorInput={baseColor}
        amount={3}
        title={`Analogous`}
        type={`analogous`}
        descr={`Friendly neighbors unite! Build a harmonious and cohesive look
        using adjacent colors on the wheel.`}
      />

      <PaletteContainer
        compRef={triadicRef}
        conditional={isTriadicInView}
        colorInput={baseColor}
        amount={3}
        title={`Triadic`}
        type={`triadic`}
        descr={`Three's company! Achieve a balanced and vibrant palette with colors
        evenly spaced on the color wheel.`}
      />

      <PaletteContainer
        compRef={splitComplementaryRef}
        conditional={isSplitComplementaryInView}
        colorInput={baseColor}
        amount={3}
        title={`Split Complementary`}
        type={`splitComplementary`}
        descr={`A harmonious twist! Combine the base color with its complement's
        neighbors for less contrast but great visual.`}
      />

      <PaletteContainer
        compRef={tetradicRef}
        conditional={isTetradicInView}
        colorInput={baseColor}
        amount={4}
        title={`Tetradic`}
        type={`tetradic`}
        descr={`Double the fun! Create a rich and diverse palette with two
        complementary color pairs - just watch the balance!`}
      />

      <PaletteContainer
        compRef={monochromaticRef}
        conditional={isMonochromaticInView}
        colorInput={baseColor}
        amount={2}
        title={`Monochromatic`}
        type={`monochromatic`}
        descr={`One is all you need! Craft a cohesive look with different
        shades, tints, and tones of a single color.`}
      />

      <PaletteContainer
        compRef={shadesTintsTonesRef}
        conditional={isShadesTintsTonesInView}
        colorInput={baseColor}
        amount={4}
        title={`Shades, Tints, & Tones`}
        type={`shadesTintsTones`}
        descr={`Dive into the depths of a color by adjusting its lightness, darkness, or
        grayness for a harmonious yet contrasted palette.`}
      />

      <PaletteContainer
        compRef={compoundColorsRef}
        conditional={isCompoundColorsInView}
        colorInput={baseColor}
        amount={3}
        title={`Compound Colors`}
        type={`compoundColors`}
        descr={`Mix and match! Choose colors that aren't direct neighbors on
        the color wheel for a diverse yet slightly less harmonious look.`}
      />

      <PaletteContainer
        compRef={gradientPaletteRef}
        conditional={isGradientPaletteInView}
        colorInput={baseColor}
        amount={5}
        title={`Gradient Palette`}
        type={`gradientPalette`}
        descr={`        Smooth transitions! Generate a cohesive palette by blending colors
        seamlessly for backgrounds, illustrations, or visual elements.`}
      />

      <PaletteContainer
        compRef={mutedPaletteRef}
        conditional={isMutedPaletteInView}
        colorInput={baseColor}
        amount={4}
        title={`Muted Palette`}
        type={`mutedPalette`}
        descr={`Soft and subtle! Reduce saturation for a soothing, muted,
         or pastel palette that complements the main color.`}
      />

      <PaletteContainer
        compRef={borderGradientRef}
        conditional={isBorderGradientInView}
        colorInput={baseColor}
        amount={6}
        title={`Border Gradient`}
        type={`borderGradient`}
        descr={`Soft and subtle! Reduce saturation for a soothing, muted,
         or pastel palette that complements the main color.`}
      />

      <PaletteContainer
        compRef={vetoGradientRef}
        conditional={isVetoGradientInView}
        colorInput={baseColor}
        amount={6}
        title={`Veto Gradient`}
        type={`vetoGradient`}
        descr={`Soft and subtle! Reduce saturation for a soothing, muted,
         or pastel palette that complements the main color.`}
      />

      <PaletteContainer
        compRef={smokeyGradientRef}
        conditional={isSmokeyGradientInView}
        colorInput={baseColor}
        amount={6}
        title={`Smokey Gradient`}
        type={`smokeyGradient`}
        descr={`Soft and subtle! Reduce saturation for a soothing, muted,
         or pastel palette that complements the main color.`}
      />

      <PaletteContainer
        compRef={bobGradientRef}
        conditional={isBobGradientInView}
        colorInput={baseColor}
        amount={4}
        title={`Bob Gradient`}
        type={`bobGradient`}
        descr={`Soft and subtle! Reduce saturation for a soothing, muted,
         or pastel palette that complements the main color.`}
      />

      <PaletteContainer
        compRef={fawnGradientRef}
        conditional={isFawnGradientInView}
        colorInput={baseColor}
        amount={4}
        title={`Fawn Gradient`}
        type={`fawnGradient`}
        descr={`Soft and subtle! Reduce saturation for a soothing, muted,
         or pastel palette that complements the main color.`}
      />
    </div>
  )
}
