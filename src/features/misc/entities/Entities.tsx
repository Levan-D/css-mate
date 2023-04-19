/** @format */

import React from "react"
import { EntitiesData } from "./Data"
import CatDisplay from "../../../components/CatDisplay"
//@ts-ignore
import { Helmet } from "react-helmet"

const Entities = () => {
  return (
    <main className="my-16 mx-4">
      <Helmet>
        <title>Entities - CSS Mate</title>
        <meta
          name="description"
          content="Easily insert special characters and symbols into your HTML code with our comprehensive HTML entities cheat sheet. Our app provides a quick reference guide for all commonly used HTML entities, including character codes and descriptions, making it easy to enhance your website with special symbols and characters. Use our app to streamline your HTML coding process and save time on your web development projects."
        />

        <meta
          name="keywords"
          content="HTML entities, HTML character codes, special characters, symbols, web development, cheat sheet, design tools, character references, web design, graphic design, user interface design, user experience design"
        />

        <meta property="og:title" content="Entities" />
        <meta
          property="og:description"
          content="Easily insert special characters and symbols into your HTML code with our comprehensive HTML entities cheat sheet. Our app provides a quick reference guide for all commonly used HTML entities, including character codes and descriptions, making it easy to enhance your website with special symbols and characters. Use our app to streamline your HTML coding process and save time on your web development projects."
        />
        <meta
          property="og:image"
          content="https://cssmate.online/openGraphTags/entities.png"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cssmate.online/misc/entities" />
      </Helmet>
      <h1 className="mb-2 text-center font-cursiveCustom   text-2xl">
        You can find commonly used HTML
        <span className="text-secondary-300">&#32;entities&#32;</span>
        below
      </h1>
      <p className="mb-16 text-center font-cursiveCustom text-base">
        click on hexadecimal code to copy to clipboard
      </p>
      <div>
        <CatDisplay
          Data={EntitiesData}
          flexBasis={"basis-1/3"}
          Headers={["Character", "Hexadecimal", "Description"]}
        />
      </div>
    </main>
  )
}

export default Entities
