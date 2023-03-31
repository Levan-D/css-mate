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

  const compoundRef = useRef(null)
  const isCompoundInView = useIntersectionObserver(compoundRef, {}, baseColor)

  const gradientRef = useRef(null)
  const isGradientInView = useIntersectionObserver(gradientRef, {}, baseColor)

  const mutedRef = useRef(null)
  const isMutedInView = useIntersectionObserver(mutedRef, {}, baseColor)

  const borderRef = useRef(null)
  const isBorderInView = useIntersectionObserver(borderRef, {}, baseColor)

  const vetoRef = useRef(null)
  const isVetoInView = useIntersectionObserver(vetoRef, {}, baseColor)

  const smokeyRef = useRef(null)
  const isSmokeyInView = useIntersectionObserver(smokeyRef, {}, baseColor)

  const bobRef = useRef(null)
  const isBobInView = useIntersectionObserver(bobRef, {}, baseColor)

  const fawnRef = useRef(null)
  const isFawnInView = useIntersectionObserver(fawnRef, {}, baseColor)

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
        compRef={compoundRef}
        conditional={isCompoundInView}
        colorInput={baseColor}
        amount={3}
        title={`Compound `}
        type={`compound`}
        descr={`Mix and match! Choose colors that aren't direct neighbors on
        the color wheel for a diverse yet slightly less harmonious look.`}
      />

      <PaletteContainer
        compRef={gradientRef}
        conditional={isGradientInView}
        colorInput={baseColor}
        amount={5}
        title={`Gradient`}
        type={`gradient`}
        descr={`Smooth transitions! Generate a cohesive palette by blending colors
        seamlessly for backgrounds, illustrations, or visual elements.`}
      />

      <PaletteContainer
        compRef={mutedRef}
        conditional={isMutedInView}
        colorInput={baseColor}
        amount={4}
        title={`Muted`}
        type={`muted`}
        descr={`Soft and subtle! Reduce saturation for a soothing, muted,
         or pastel palette that complements the main color.`}
      />

      <PaletteContainer
        compRef={borderRef}
        conditional={isBorderInView}
        colorInput={baseColor}
        amount={6}
        title={`Border`}
        type={`border`}
        descr={`Soft and subtle! Reduce saturation for a soothing, muted,
         or pastel palette that complements the main color.`}
      />

      <PaletteContainer
        compRef={vetoRef}
        conditional={isVetoInView}
        colorInput={baseColor}
        amount={6}
        title={`Veto`}
        type={`veto`}
        descr={`Soft and subtle! Reduce saturation for a soothing, muted,
         or pastel palette that complements the main color.`}
      />

      <PaletteContainer
        compRef={smokeyRef}
        conditional={isSmokeyInView}
        colorInput={baseColor}
        amount={6}
        title={`Smokey`}
        type={`smokey`}
        descr={`Soft and subtle! Reduce saturation for a soothing, muted,
         or pastel palette that complements the main color.`}
      />

      <PaletteContainer
        compRef={bobRef}
        conditional={isBobInView}
        colorInput={baseColor}
        amount={4}
        title={`Bob`}
        type={`bob`}
        descr={`Soft and subtle! Reduce saturation for a soothing, muted,
         or pastel palette that complements the main color.`}
      />

      <PaletteContainer
        compRef={fawnRef}
        conditional={isFawnInView}
        colorInput={baseColor}
        amount={4}
        title={`Fawn`}
        type={`fawn`}
        descr={`Soft and subtle! Reduce saturation for a soothing, muted,
         or pastel palette that complements the main color.`}
      />
    </div>
  )
}
