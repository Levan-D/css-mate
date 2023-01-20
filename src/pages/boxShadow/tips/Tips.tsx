/** @format */

import React from "react"
import ForAQuickRefresher from "./ForAQuickRefresher"
import MultipleShadows from "./MultipleShadows"
import NeonGlow from "./NeonGlow"
import TDEffects from "./TDEffects"
import Cheese from "./Cheese"

const Tips = () => {
  return (
    <div>
      <h2 id="Tips & tricks" className="font-cursiveCustom text-2xl text-center ">
        The aforementioned <span className="text-secondary">tips & tricks</span>
      </h2>
      
      <ForAQuickRefresher/>
      <MultipleShadows/>
      <NeonGlow/>
      <TDEffects/>
      <Cheese/>
      
    </div>
  )
}

export default Tips
