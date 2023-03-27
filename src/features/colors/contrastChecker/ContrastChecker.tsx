import React from "react";
import ContrastCheckerSidemenu from "./contrastCheckerSidemenu/ContrastCheckerSidemenu";
import Shape from "./Shape";

export default function ContrastChecker() {
  return (
    <div className="mx-4  my-8">
      <h1 className="mb-8 text-center font-cursiveCustom   text-2xl">
        Check
        <span className="text-secondary-300">&#32;contrast&#32;</span>
        below
      </h1>
      <p className="mx-auto mb-8 max-w-2xl text-center font-cursiveCustom text-base">
        WCAG recommends a contrast ratio of 4.5:1 or greater for normal text
        (14px or smaller) and 3:1 or greater for large text (18px or larger).
        (text below is 14px).
      </p>

      <div className="mt-16 mb-16 flex flex-col justify-between gap-16 md:flex-row md:justify-center md:gap-2 lg:gap-36 ">
        <ContrastCheckerSidemenu />
        <Shape />
      </div>
    </div>
  );
}
