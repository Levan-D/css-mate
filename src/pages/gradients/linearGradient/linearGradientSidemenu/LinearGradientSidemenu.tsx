import React from "react";
import SideMenu from "../../../../components/wrappers/SideMenu";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  resetState as resetStateAction,
  setType,
  setKind,
} from "../linearGradientSlice";

const LinearGradientSidemenu = () => {
  const dispatch = useAppDispatch();
  const { type, kind } = useAppSelector((store) => store.linearGradient);
  console.log("kind:", type.toLowerCase());
  const btnTypes = ["Linear", "Radial", "Conic"];

  const resetState = (): void => {
    dispatch(resetStateAction());
  };

  return (
    <div className="mx-auto w-fit">
      <SideMenu title={`Gradient config`} resetState={resetState}>
        <div className="menuContainer m-4  pb-4  ">
          <div className="menuBlock m-2 flex justify-around p-2">
            {btnTypes.map((btn, i) => (
              <div
                key={i}
                onClick={() => {
                  dispatch(setType(btn));
                }}
                className={`${
                  type === btn ? "btnPrimary" : "btnPrimaryDisabled"
                } mt-1 mb-2 text-sm`}
              >
                {btn}
              </div>
            ))}
          </div>
          <div className="menuBlock m-2 flex justify-around p-2">
            <div
              onClick={() => {
                dispatch(setKind("constant"));
              }}
              className={`${
                kind === "constant" ? "btnPrimary" : "btnPrimaryDisabled"
              } mt-1 mb-2 text-sm`}
            >
              Regular
            </div>
            <div
              onClick={() => {
                dispatch(setKind("repeating"));
              }}
              className={`${
                kind === "repeating" ? "btnPrimary" : "btnPrimaryDisabled"
              } mt-1 mb-2 text-sm`}
            >
              Repeating
            </div>
          </div>
        </div>
      </SideMenu>
    </div>
  );
};

export default LinearGradientSidemenu;
