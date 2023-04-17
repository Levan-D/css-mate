/** @format */

import React from "react"
import Shape from "./Shape"
import TextShadowSidemenu from "./textShadowSidemenu/TextShadowSidemenu"
import TextShadowOutput from "./TextShadowOutput"
import TableOfContents from "../../../components/TableOfContents"
import { blogData } from "./Data"
import BlogGenerator from "../../../components/BlogGenerator"
//@ts-ignore
import { Helmet } from "react-helmet"

const TextShadow = () => {
  const TOCData = blogData.sections.map(section => section.id)
  TOCData.unshift(blogData.id)
  TOCData.unshift(`Tool`)
  return (
    <main className=" my-16 mx-4">
      <Helmet>
        <title>Text Shadow - CSS Mate</title>
        <meta
          name="description"
          content="Create unique text effects for your website with our CSS text shadow generator app. Our app lets you customize your text shadows with a wide range of options, including color, blur, and position, making it easy to create stunning typography designs. Use our app to streamline your text shadow design process and make your website stand out."
        />

        <meta
          name="keywords"
          content="text shadow generator, CSS text shadows, web design, graphic design, design tools, shadow customization, text shadow color, text shadow blur, text shadow position, CSS properties, typography, responsive design, user interface design"
        />
      </Helmet>
      <h1 className="mb-2 text-center font-cursiveCustom   text-2xl ">
        Generate <span className="text-secondary-300">text shadows</span> for your project
        with ease
      </h1>
      <p className="mb-8 text-center font-cursiveCustom text-base">
        Scroll below for tips & tricks
      </p>
      <TableOfContents TOCData={TOCData} />
      <div
        id="Tool"
        className="mt-16 mb-16 flex flex-col justify-between gap-16 md:flex-row md:justify-center md:gap-2 lg:gap-36 "
      >
        <TextShadowSidemenu />
        <div>
          <Shape />
        </div>
      </div>
      <TextShadowOutput />
      <div className="mx-auto mt-56 max-w-3xl ">
        <BlogGenerator data={blogData} />
      </div>
    </main>
  )
}

export default TextShadow
