/** @format */

import React from "react"
import Basics from "./Basics"
import MultipleShadows from "./MultipleShadows"
import NeonGlow from "./NeonGlow"
import TDEffects from "./TDEffects"
import Cheese from "./Cheese"

const Tips = () => {
  return (
    <div className="mx-auto mt-56 max-w-3xl ">
      <h2 id="Tips & tricks" className="text-center font-cursiveCustom text-2xl ">
        The aforementioned <span className="text-secondary-300">tips & tricks</span>
      </h2>

      <Basics />
      <MultipleShadows />
      <NeonGlow />
      <TDEffects />
      <Cheese />
    </div>
  )
}

export default Tips
