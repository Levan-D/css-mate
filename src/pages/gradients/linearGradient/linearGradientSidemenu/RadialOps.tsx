/** @format */

import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { setRadialShape, setRadialCoords } from "../linearGradientSlice";
import ReactSlider from "react-slider";

const RadialOps = () => {
  const dispatch = useAppDispatch();
  const {
    radialParams: { shape, x, y },
  } = useAppSelector((store) => store.linearGradient);

  const [visibility, setVisibility] = useState(false);

  const handleShapeChange = () => {
    if (shape === "circle") {
      dispatch(setRadialShape("ellipse"));
    } else if (shape === "ellipse") {
      dispatch(setRadialShape("circle"));
    }
  };

  return (
    <div className="menuBlock m-2 flex grow justify-around px-2 py-1">
      <div
        onClick={handleShapeChange}
        className={`  btnSecondary  h-8 px-2 text-sm leading-4`}
      >
        <div
          className={` ${
            shape === "circle" ? "mx-1 h-5 w-5" : "h-5 w-7"
          }  mt-[2px] translate-y-[-4px]  rounded-full border-[3px] border-slate-900`}
        ></div>
      </div>
      <div
        onClick={() => setVisibility((x) => !x)}
        className="duration-2000 cursor-pointer select-none italic leading-7 text-slate-300 sm:hover:text-white "
      >
        Cords
      </div>

      {visibility && (
        <div className="menuBlock absolute z-50 w-32 translate-y-8 translate-x-8 gap-4 border-slate-500 bg-darkJungle-400 px-4  pb-8">
          <div className="flex  justify-end">
            <div
              className="z-50 cursor-pointer p-1 text-slate-300"
              onClick={() => dispatch(setRadialCoords({ x: 50, y: 50 }))}
            >
              &#8634;
            </div>
          </div>
          <div className="translate-y-[-18px]">
            <div className="text-xs italic text-slate-300">x</div>
            <ReactSlider
              className="customSlider group"
              trackClassName="customSlider-track"
              thumbClassName="customSlider-thumb"
              min={0}
              max={100}
              defaultValue={x}
              renderThumb={(props, state) => (
                <div style={{ background: "black" }} {...props}>
                  <div className="w-10 translate-y-[-30px] translate-x-[-10px] select-none rounded-lg border-2 bg-darkJungle-700  text-center  sm:hidden sm:group-hover:block">
                    {state.valueNow}
                  </div>
                </div>
              )}
              value={x}
              onChange={(value) =>
                dispatch(setRadialCoords({ x: value, y: y }))
              }
            />
          </div>
          <div>
            <div className="text-xs italic text-slate-300">y</div>
            <ReactSlider
              className="customSlider group"
              trackClassName="customSlider-track"
              thumbClassName="customSlider-thumb"
              min={0}
              max={100}
              defaultValue={y}
              renderThumb={(props, state) => (
                <div style={{ background: "black" }} {...props}>
                  <div className="w-10 translate-y-[-30px] translate-x-[-10px] select-none rounded-lg border-2 bg-darkJungle-700  text-center  sm:hidden sm:group-hover:block">
                    {state.valueNow}
                  </div>
                </div>
              )}
              value={y}
              onChange={(value) =>
                dispatch(setRadialCoords({ x: x, y: value }))
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RadialOps;
