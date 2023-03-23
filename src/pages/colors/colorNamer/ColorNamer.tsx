/** @format */

import ColorNamerSidemenu from "./colorNamerSidemenu/ColorNamerSidemenu"

export default function ColorNamer() {
  return (
    <div className="mx-4  mt-8   ">
      <h1 className="mb-8 text-center font-cursiveCustom   text-2xl">
        Input
        <span className="text-secondary-300">&#32;color&#32;</span>
        value below to name it
      </h1>

      <ColorNamerSidemenu />
    </div>
  )
}
