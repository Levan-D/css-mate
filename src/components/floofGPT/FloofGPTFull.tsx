/** @format */

import React from "react"
import Nav from "./Nav"
import Input from "./Input"
import Body from "./Body"
import { useLocation } from "react-router-dom"

const FloofGPTFull = () => {
  return (
    <div className=" flex  flex-col h-[calc(100vh-192px)] p-10 ">
      <Nav />
      <Body />
      <Input />
    </div>
  )
}

export default FloofGPTFull
