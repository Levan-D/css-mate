/** @format */

import Shape from "./Shape"
import BoxShadowOutput from "./BoxShadowOutput"
import BoxShadowSidemenu from "./boxShadowSidemenu/BoxShadowSidemenu"
import TableOfContents from "../../../components/TableOfContents"
import { blogData } from "./Data"
import BlogGenerator from "../../../components/BlogGenerator"
//@ts-ignore
import { Helmet } from "react-helmet"

const BoxShadow = () => {
  const TOCData = blogData.sections.map(section => section.id)
  TOCData.unshift(blogData.id)
  TOCData.unshift(`Tool`)
  return (
    <main className=" my-16 mx-4">
      <Helmet>
        <title>Box Shadow - CSS Mate</title>
        <meta
          name="description"
          content="Create stunning box shadows for your website with our CSS and Tailwind CSS box shadow generator app. Our app lets you customize your box shadows with a wide range of options, including color, blur, spread, and position, and provides CSS rule output for easy integration into your website or Tailwind CSS project. With our box shadow generator, you can create unique and eye-catching designs that will make your website stand out."
        />

        <meta
          name="keywords"
          content="box shadow generator, CSS box shadows, Tailwind CSS, web design, web development, design tools, shadow customization, box shadow color, box shadow blur, box shadow spread, box shadow position, CSS properties, CSS rule output, Tailwind CSS integration, responsive design, user interface design"
        />

        <meta property="og:title" content="Box Shadow" />
        <meta
          property="og:description"
          content="Create stunning box shadows for your website with our CSS and Tailwind CSS box shadow generator app. Our app lets you customize your box shadows with a wide range of options, including color, blur, spread, and position, and provides CSS rule output for easy integration into your website or Tailwind CSS project. With our box shadow generator, you can create unique and eye-catching designs that will make your website stand out."
        />
        <meta
          property="og:image"
          content="https://cssmate.online/openGraphTags/boxShadows.png"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cssmate.online/shadows/box-shadow" />
      </Helmet>
      <h1 className="mb-2 text-center font-cursiveCustom   text-2xl">
        Generate <span className="text-secondary-300">box shadows</span> for your project
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
        <BoxShadowSidemenu />
        <div>
          <Shape />
        </div>
      </div>
      <BoxShadowOutput />
      <div className="mx-auto mt-56 max-w-3xl ">
        <BlogGenerator data={blogData} />
      </div>
    </main>
  )
}

export default BoxShadow
