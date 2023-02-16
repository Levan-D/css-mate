/** @format */

import React from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { setRadialShape } from "../linearGradientSlice"

const ConicOps = () => {
  const dispatch = useAppDispatch()
  const { radialParams:{shape} } = useAppSelector(store => store.linearGradient)

  return (
    <div className="menuBlock m-2 flex grow justify-around px-2 py-1">

      
    </div>
  )
}

export default ConicOps
