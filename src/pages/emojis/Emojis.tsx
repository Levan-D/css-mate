/** @format */

import CatDisplay from "../../components/wrappers/CatDisplay"
import { EmojisData } from "./Data"

const Emojis = () => {
  return (
    <div className="my-16 mx-4">
      <h1 className="mb-2 text-center font-cursiveCustom   text-2xl">
        Did you know html had <span className="text-secondary-300">Emojis</span>?
      </h1>
      <div className="mb-2 text-center font-cursiveCustom text-base">
        they work as normal html entities
      </div>
      <div className="mb-4 text-center font-cursiveCustom text-base">
        click on hex code to copy!
      </div>
      <div className="mb-2 text-center font-cursiveCustom text-base">
        What is an HTML entity you ask?
      </div>
      <div className="mb-16 text-center text-base">
        It's a string that starts with <span className="text-secondary-300">&</span> and
        ends with <span className="text-secondary-300">;</span> <br />
        It represents a character that is either reserved, <br />
        not on your keyboard at all or kinda hard to type.
      </div>
      <div className="flex flex-wrap justify-center gap-20 ">
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
