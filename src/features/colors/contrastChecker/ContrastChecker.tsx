/** @format */

import React from "react"
import ContrastCheckerSidemenu from "./contrastCheckerSidemenu/ContrastCheckerSidemenu"
import Shape from "./Shape"
//@ts-ignore
import { Helmet } from "react-helmet"

export default function ContrastChecker() {
  return (
    <main className="mx-4  my-8">
      <Helmet>
        <title>Contrast Checker - CSS Mate</title>
        <meta
          name="description"
          content="Ensure your website meets accessibility standards with our WCAG-compliant contrast checker app. Our app uses WCAG recommendations to help you check the contrast between text and background, ensuring that your website is accessible to all users, including those with visual impairments. Improve your website's accessibility today with our easy-to-use contrast checker app."
        />

        <meta
          name="keywords"
          content="contrast checker, accessibility tool, WCAG-compliant, web accessibility, visual impairments, text contrast, background contrast, color contrast, accessibility standards, accessibility guidelines, web design, accessibility best practices"
        />

        <meta property="og:title" content="Contrast Checker" />
        <meta
          property="og:description"
          content="Ensure your website meets accessibility standards with our WCAG-compliant contrast checker app. Our app uses WCAG recommendations to help you check the contrast between text and background, ensuring that your website is accessible to all users, including those with visual impairments. Improve your website's accessibility today with our easy-to-use contrast checker app."
        />
        <meta
          property="og:image"
          content="https://cssmate.online/openGraphTags/contrastChecker.png"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://cssmate.online/colors/contrast-checker"
        />
      </Helmet>

      <h1 className="mb-8 text-center font-cursiveCustom   text-2xl">
        Check
        <span className="text-secondary-300">&#32;contrast&#32;</span>
        below
      </h1>
      <p className="mx-auto mb-8 max-w-2xl text-center font-cursiveCustom text-base">
        WCAG recommends a contrast ratio of 4.5:1 or greater for normal text (14px or
        smaller) and 3:1 or greater for large text (18px or larger).
      </p>

      <div className="mt-16 mb-16 flex flex-col justify-between gap-16 md:flex-row md:justify-center md:gap-2 lg:gap-36 ">
        <ContrastCheckerSidemenu />
        <Shape />
      </div>
    </main>
  )
}
