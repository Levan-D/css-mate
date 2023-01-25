/** @format */

import React from "react"
import Nav from "./Nav"
import Input from "./Input"
import Body from "./Body"
import { useLocation } from "react-router-dom"

const FloofGPTFull = () => {
  return (
    <div className=" flex  flex-col sn:h-[calc(100vh-226px)] h-[calc(100vh-192px)] sm:m-4  sm:p-2 sm:resize overflow-auto min-w-[310px] min-h-[300px] sm:bg-[linear-gradient(-45deg,#ff725e_30px,transparent_20px)] sm:rounded-2xl  ">
      <Nav />
      <Body />
      <Input />
    </div>
  )
}

export default FloofGPTFull
