/** @format */

import LinearGradientSidemenu from "./linearGradientSidemenu/LinearGradientSidemenu";

const LinearGradient = () => {
  return (
    <div className="my-16 mx-4   ">
      <h1 className="mb-2 text-center font-cursiveCustom   text-2xl">
        Generate
        <span className="text-secondary-300">
          &#32;CSS linear gradient&#32;
        </span>
        backgrounds here
      </h1>
      <div className="mb-16 text-center font-cursiveCustom text-base">
        Good luck!
      </div>

      <LinearGradientSidemenu />
    </div>
  );
};

export default LinearGradient;
