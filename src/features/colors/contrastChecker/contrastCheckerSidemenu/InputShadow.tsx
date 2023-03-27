/** @format */

import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  setShadowColor,
  toggleShadow,
  setShadowOpacity,
} from "../contrastCheckerSlice";
//@ts-ignore
import { ChromePicker, SwatchesPicker } from "react-color";
import { color } from "../../../../components/ColorPicker";
import RgbToHex from "../../../../utils/colors/RGBToHex";
import ReactSlider from "react-slider";

export default function InputShadow() {
  const { shadowColor, shadow, shadowOpacity } = useAppSelector(
    (store) => store.contrastChecker
  );
  const dispatch = useAppDispatch();
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [displaySwatchesOne, setDisplaySwatchesOne] = useState(false);
  const [color, setColor] = useState("");

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleChange = (color: color) => {
    dispatch(setShadowColor(`${color.rgb.r},${color.rgb.g},${color.rgb.b}`));
    setColor("");
  };

  const handleOnBlur = () => {
    const colorRegex = /^#[0-9A-F]{6}$/i;
    let newHex = color;
    newHex.replace(/\s+/g, "");

    if (!newHex.startsWith("#")) {
      newHex = "#" + newHex;
    }

    if (colorRegex.test(newHex)) {
      dispatch(setShadowColor(newHex));
    }
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleOnBlur();
      setColor("");
    }
  };

  return (
    <div className="menuContainer m-4    ">
      <div className="menuHeader     bg-slate-500 bg-opacity-10 px-4 pb-1">
        <div className="basis-[15%] text-center text-xs italic  text-slate-300 ">
          Shadow
        </div>
      </div>

      <div className="menuBlock m-2   pb-6 pt-2">
        <div className="mx-2 flex justify-between">
          <div className=" text-sm leading-[24px]">
            Opacity &#32;
            <span className="italic text-slate-400">&#40;&#32;N&#32;&#41;</span>
          </div>
          <input
            type="number"
            value={shadowOpacity}
            step={0.01}
            onChange={(e) => dispatch(setShadowOpacity(Number(e.target.value)))}
            className=" w-14 rounded-md bg-darkJungle-300 text-center md:text-right"
          />
        </div>
        <div className="m-2 basis-5/6">
          <ReactSlider
            className="customSlider"
            trackClassName="customSlider-track"
            thumbClassName="customSlider-thumb"
            min={0}
            max={100}
            value={shadowOpacity * 100}
            onChange={(value) => dispatch(setShadowOpacity(value / 100))}
          />
        </div>
      </div>

      <div className="m-2 flex gap-2">
        {/* color picker */}
        <div>
          <div
            onClick={handleClick}
            style={{
              background: RgbToHex(shadowColor),
            }}
            className={`h-10 w-10 cursor-pointer select-none rounded-lg border-2 border-transparent  leading-[18px] duration-200 sm:hover:border-white`}
          ></div>
          {displayColorPicker ? (
            <div className="absolute z-10 select-none">
              <div
                className="fixed top-0 right-0 bottom-0  left-0  "
                onMouseDown={() => setDisplayColorPicker(false)}
              />
              <div className="translate-x-10   ">
                <ChromePicker
                  disableAlpha={true}
                  color={RgbToHex(shadowColor)}
                  onChange={handleChange}
                />
              </div>
            </div>
          ) : null}
        </div>
        {/* color picker */}
        {/* hex color input */}

        <input
          type="text"
          id="hexText"
          value={color}
          placeholder={shadowColor}
          onChange={(e) => setColor(e.target.value)}
          onKeyDown={handleOnKeyDown}
          onBlur={handleOnBlur}
          className=" block h-10 w-28   rounded-md border-2 border-darkJungle-400 bg-darkJungle-600 text-center  text-white placeholder-slate-300  duration-200 sm:hover:border-slate-300  "
        ></input>
        <div
          onClick={() => dispatch(toggleShadow())}
          className={`${shadow ? "btnSecondary" : "btnSecondaryDisabled"} `}
        >
          S
        </div>
        <div
          onClick={() => setDisplaySwatchesOne(true)}
          className="btnSecondary w-full text-center"
        >
          Swatches
        </div>

        {displaySwatchesOne ? (
          <div className="absolute z-10 select-none">
            <div
              className="fixed top-0 right-0 bottom-0  left-0  "
              onMouseDown={() => setDisplaySwatchesOne(false)}
            />
            <div className="translate-x-4 translate-y-10 rounded-md border-2">
              <SwatchesPicker
                width={280}
                height={280}
                onChange={handleChange}
              />
            </div>
          </div>
        ) : null}
      </div>
      {/* hex color input */}
    </div>
  );
}
