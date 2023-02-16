/** @format */

import LinearGradientSidemenu from "./linearGradientSidemenu/LinearGradientSidemenu";

const LinearGradient = () => {
  return (
    <div className="mx-4 mb-16 mt-8   ">
      <h1 className="mb-8 text-center font-cursiveCustom   text-2xl">
        Generate
        <span className="text-secondary-300">
          &#32;CSS linear gradient&#32;
        </span>
        backgrounds here
      </h1>

      <LinearGradientSidemenu />
    </div>
  );
};

export default LinearGradient;
