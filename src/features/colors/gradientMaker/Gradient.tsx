/** @format */

import GradientSidemenu from "./GradientSidemenu/GradientSidemenu"
import GradientOutput from "./GradientOutput"
import { useState } from "react"
// @ts-ignore
import { ReactComponent as ChevronIcon } from "../../../assets/icons/chevron.svg"
//@ts-ignore
import { Helmet } from "react-helmet"

const Gradient = () => {
  const [visibility, setVisibility] = useState(true)

  return (
    <main className="mx-4 mb-16 mt-8   ">
      <Helmet>
        <title>Gradient Generator - CSS Mate</title>
        <meta
          name="description"
          content="Create stunning gradients for your website with our easy-to-use CSS gradient generator app. Our app lets you customize your gradients with a wide range of options, including direction, colors, and opacity, and provides CSS rule output for easy integration into your website. With our CSS gradient generator, you can create unique and eye-catching designs that will make your website stand out."
        />

        <meta
          name="keywords"
          content="CSS gradients, gradient generator, CSS rule output, web design, web development, color gradients, background gradients, linear gradients, radial gradients, gradient direction, gradient opacity, CSS properties, CSS customization, CSS code, web design tools"
        />
      </Helmet>
      <h1 className="mb-2 text-center font-cursiveCustom   text-2xl drop-shadow-[0px_0px_3px_rgba(0,_0,_0,0.7)] filter">
        Generate
        <span className="text-secondary-300">&#32;CSS linear gradient&#32;</span>
        backgrounds below
        <span
          onClick={() => setVisibility(x => !x)}
          className={`ml-2 inline-block h-7 w-7 translate-y-1 cursor-pointer rounded-full bg-white duration-300  ${
            !visibility
              ? ` hover:shadow-[inset_0px_0px_0px_2px_#ff725e] `
              : `hover:shadow-[inset_0px_0px_0px_2px_#5ea1ff] `
          }`}
        >
          <ChevronIcon
            height={15}
            width={15}
            fill={!visibility ? `#ff725e` : `#5ea1ff`}
            className={`${
              !visibility
                ? "translate-y-[-7px] rotate-[-90deg]"
                : "translate-y-[-6px]  rotate-90"
            }  ml-3  inline translate-x-[-6px] duration-200`}
          />
        </span>
      </h1>
      <p className="mb-8 text-center font-cursiveCustom text-base drop-shadow-[0px_0px_3px_rgba(0,_0,_0,0.7)] filter">
        Check out gradient swatches from the left slider menu
      </p>

      <div
        className={`${
          visibility ? "scale-y-100 py-2 opacity-100" : "scale-y-0 opacity-0"
        }    origin-top duration-300`}
      >
        <GradientSidemenu />
        <div className="mt-8">
          <GradientOutput />
        </div>
      </div>
    </main>
  )
}

export default Gradient
