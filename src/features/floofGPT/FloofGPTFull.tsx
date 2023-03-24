/** @format */

import Nav from "./Nav"
import Input from "./Input"
import Body from "./Body"

const FloofGPTFull = () => {
  return (
    <div className="   flex h-[calc(100vh-226px)] min-h-[300px]  min-w-[310px]  basis-full  flex-col overflow-auto sm:m-4 sm:resize sm:rounded-2xl sm:bg-[linear-gradient(-45deg,#ff725e_30px,transparent_20px)] sm:p-2  ">
      <Nav />

      <Body />

      <Input />
    </div>
  )
}

export default FloofGPTFull
