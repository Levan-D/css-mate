/** @format */

import React from "react"
import CatDisplay from "../../components/wrappers/CatDisplay"
import { EmojisData } from "./Data"
import BackToTopBtn from "../../components/BackToTopBtn"

const Emojis = () => {
  return (
    <div className="my-16 mx-4">
      <BackToTopBtn />
      <h1 className="font-cursiveCustom text-center text-2xl   mb-2">
        Did you know html had <span className="text-secondary">Emojis</span>?
      </h1>
      <div className="font-cursiveCustom text-center mb-2 text-base">
        they work as normal html entities
      </div>
      <div className="font-cursiveCustom text-center mb-4 text-base">
        click on hex code to copy!
      </div>
      <div className="font-cursiveCustom text-center mb-2 text-base">
        What is an HTML entity you ask?
      </div>
      <div className="text-center text-base mb-16">
        It's a string that starts with <span className="text-secondary">&</span> and ends
        with <span className="text-secondary">;</span> <br />
        It represents a character that is either reserved, <br />
        not on your keyboard at all or kinda hard to type.
      </div>
      <div className="flex justify-center flex-wrap gap-20 ">
        <CatDisplay
          Data={EmojisData}
          flexBasis={"basis-1/2"}
          Headers={["Character", "Hexadecimal"]}
        />
      </div>
    </div>
  )
}

export default Emojis
