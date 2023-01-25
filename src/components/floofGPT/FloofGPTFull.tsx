/** @format */

import React from "react"
import Nav from "./Nav"
import Input from "./Input"
import Body from "./Body"
import { useLocation } from "react-router-dom"

const FloofGPTFull = () => {
  return (
    <div className=" flex  flex-col h-[calc(100vh-226px)] m-4  p-2 resize overflow-auto min-w-[300px] min-h-[300px] bg-[linear-gradient(-45deg,#ff725e_30px,transparent_20px)] rounded-2xl  ">
      <Nav />
      <Body />
      <Input />
    </div>
  )
}

export default FloofGPTFull
