/** @format */

import Shape from "./Shape"
import DropShadowOutput from "./DropShadowOutput"
import DropShadowSidemenu from "./dropShadowSidemenu/DropShadowSidemenu"
import TableOfContents from "../../../components/TableOfContents"
import { blogData } from "./Data"
import BlogGenerator from "../../../components/BlogGenerator"
//@ts-ignore
import { Helmet } from "react-helmet"

const DropShadow = () => {
  const TOCData = blogData.sections.map(section => section.id)
  TOCData.unshift(blogData.id)
  TOCData.unshift(`Tool`)

  return (
    <main className=" my-16 mx-4">
      <Helmet>
        <title>Drop Shadow - CSS Mate</title>
        <meta
          name="description"
          content="Create stunning drop shadows for your website with our CSS drop shadow generator app. Our app lets you customize your drop shadows with a wide range of options, including color, blur, spread, and position, making it easy to create unique and eye-catching designs. Use our app to streamline your drop shadow design process and add depth to your website."
        />

        <meta
          name="keywords"
          content="drop shadow generator, CSS drop shadows, web design, graphic design, design tools, shadow customization, drop shadow color, drop shadow blur, drop shadow spread, drop shadow position, CSS properties, responsive design, user interface design"
        />

        <meta property="og:title" content="Drop Shadow" />
        <meta
          property="og:description"
          content="Create stunning drop shadows for your website with our CSS drop shadow generator app. Our app lets you customize your drop shadows with a wide range of options, including color, blur, spread, and position, making it easy to create unique and eye-catching designs. Use our app to streamline your drop shadow design process and add depth to your website."
        />
        <meta
          property="og:image"
          content="https://cssmate.online/openGraphTags/dropShadow.png"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cssmate.online/shadows/drop-shadow" />
      </Helmet>
      <h1 className="mb-2 text-center font-cursiveCustom   text-2xl">
        Generate <span className="text-secondary-300">drop shadows</span> for your project
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
        <DropShadowSidemenu />
        <div>
          <Shape />
        </div>
      </div>
      <DropShadowOutput />
      <div className="mx-auto mt-56 max-w-3xl ">
        <BlogGenerator data={blogData} />
      </div>
    </main>
  )
}

export default DropShadow
