/** @format */

import React from "react"
import SideMenu from "../../../../components/SideMenu"
import Selector from "./Selector"
import Input from "./Input"
import Output from "./Output"

export default function ConverterSidemenu() {
  return (
    <div className="mx-auto w-fit ">
      <SideMenu title={`Pixel Converter`}>
        <Selector />
        <Input />
        <Output />
      </SideMenu>
    </div>
  )
}
