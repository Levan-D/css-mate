/** @format */

import React from "react"
import Basics from "./Basics"
import Differences from "./Differences"
import WhenToUse from "./WhenToUse"


const Tips = () => {
  return (
    <div className="mx-auto mt-56 max-w-3xl ">
      <h2 id="Tips & tricks" className="text-center font-cursiveCustom text-2xl ">
        The aforementioned <span className="text-secondary">tips & tricks</span>
      </h2>

      <Basics />
      <Differences />
      <WhenToUse />
    
    </div>
  )
}

export default Tips
