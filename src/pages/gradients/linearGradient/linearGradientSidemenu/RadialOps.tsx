/** @format */

import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { setRadialShape } from "../linearGradientSlice";

const RadialOps = () => {
  const dispatch = useAppDispatch();
  const {
    radialParams: { shape },
  } = useAppSelector((store) => store.linearGradient);

  return (
    <div className="menuBlock m-2 flex grow justify-around px-2 py-1">
      <div
        onClick={() => {
          dispatch(setRadialShape("circle"));
        }}
        className={`${
          shape === "circle" ? "btnSecondary" : "btnSecondaryDisabled"
        }   h-8  px-2 text-sm leading-4`}
      >
        <div
          className={` ${
            shape === "circle" ? "border-slate-900" : ""
          }   mt-[2px] h-5 w-5 translate-y-[-4px] rounded-full border-[3px]`}
        ></div>
      </div>
      <div
        onClick={() => {
          dispatch(setRadialShape("ellipse"));
        }}
        className={`${
          shape === "ellipse" ? "btnSecondary" : "btnSecondaryDisabled"
        }   h-8 px-2   text-sm leading-4`}
      >
        <div
          className={` ${
            shape === "ellipse" ? "border-slate-900" : ""
          }   mt-[2px] h-5 w-7 translate-y-[-4px] rounded-full border-[3px]`}
        ></div>
      </div>
    </div>
  );
};

export default RadialOps;
