/** @format */

import SideMenu from "../../../../components/wrappers/SideMenu"
import Input from "./Input"
import Output from "./Output"

export default function ColorNamerSidemenu() {
  return (
    <div className="mx-auto w-fit ">
      <SideMenu title={`Color Namer`}>
        <Input />
        <Output />
      </SideMenu>
    </div>
  )
}
