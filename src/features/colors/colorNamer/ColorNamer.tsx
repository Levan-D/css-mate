/** @format */

import ColorNamerSidemenu from "./colorNamerSidemenu/ColorNamerSidemenu"

export default function ColorNamer() {
  return (
    <main className="mx-4  my-8   ">
      <h1 className="mb-8 text-center font-cursiveCustom   text-2xl">
        Name
        <span className="text-secondary-300">&#32;colors&#32;</span>
        below
      </h1>

      <ColorNamerSidemenu />
    </main>
  )
}
