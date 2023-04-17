/** @format */

import CatDisplay from "../../../components/CatDisplay"
import { EmojisData } from "./Data"
//@ts-ignore
import { Helmet } from "react-helmet"

const Emojis = () => {
  return (
    <main className="my-16 mx-4">
      <Helmet>
        <title>Emojis - CSS Mate</title>
        <meta
          name="description"
          content="Enhance your website with fun and expressive emojis using our HTML emoji cheat sheet app. Our app provides a comprehensive guide to all commonly used HTML emojis,  making it easy to add personality and emotion to your website. Use our app to streamline your HTML coding process and save time on your web development projects."
        />

        <meta
          name="keywords"
          content="HTML emojis, emoji cheat sheet, web development, design tools, character references, web design, graphic design, user interface design, user experience design, expressive web design, web typography"
        />
      </Helmet>
      <h1 className="mb-2 text-center font-cursiveCustom   text-2xl">
        Did you know html had <span className="text-secondary-300">Emojis</span>?
      </h1>
      <p className="mb-2 text-center font-cursiveCustom text-base">
        they work as normal html entities
      </p>
      <p className="mb-4 text-center font-cursiveCustom text-base">
        click on hex code to copy!
      </p>
      <p className="mb-2 text-center font-cursiveCustom text-base">
        What is an HTML entity you ask?
      </p>
      <p className="mb-16 text-center text-base">
        It's a string that starts with <span className="text-secondary-300">&</span> and
        ends with <span className="text-secondary-300">;</span> <br />
        It represents a character that is either reserved, <br />
        not on your keyboard at all or kinda hard to type.
      </p>
      <div className="flex flex-wrap justify-center gap-20 ">
        <CatDisplay
          Data={EmojisData}
          flexBasis={"basis-1/2"}
          Headers={["Character", "Hexadecimal"]}
        />
      </div>
    </main>
  )
}

export default Emojis
