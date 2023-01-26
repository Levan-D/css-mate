/** @format */

import React from "react"
import Nav from "./Nav"
import Input from "./Input"
import Body from "./Body"

const FloofGPTFull = () => {
  return (
    <div className="  flex flex-col h-[calc(100vh-226px)]   sm:m-4  basis-full  overflow-auto min-w-[310px] min-h-[300px] sm:p-2 sm:resize sm:bg-[linear-gradient(-45deg,#ff725e_30px,transparent_20px)] sm:rounded-2xl  ">
      <Nav />

      <Body />

      <Input />
    </div>
  )
}

export default FloofGPTFull
