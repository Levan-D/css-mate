/** @format */

import ConverterSidemenu from "./converterSidemenu/ConverterSidemenu"
import Shape from "./Shape"

export default function ColorConverter() {
  return (
    <main className="mx-4  my-8   ">
      <h1 className="mb-8 text-center font-cursiveCustom   text-2xl">
        Convert
        <span className="text-secondary-300">&#32;colors&#32;</span>
        below
      </h1>

      <ConverterSidemenu />
      <Shape />
    </main>
  );
}
