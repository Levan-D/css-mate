/** @format */

import SideMenu from "../../../../components/SideMenu"
import Input from "./Input"
import Output from "./Output"

export default function ConverterSidemenu() {
  return (
    <div className="mx-auto w-fit ">
      <SideMenu title={`Color Converter`}>
        <Input />
        <Output />
      </SideMenu>
    </div>
  )
}
