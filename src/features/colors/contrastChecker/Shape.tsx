/** @format */

import { useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import HexToRGB from "../../../utils/colors/HexToRGB";
import TextShadow from "../../shadows/textShadow/TextShadow";

export default function Shape() {
  const {
    backgroundColor,
    textColor,
    shadowColor,
    bold,
    shadow,
    shadowOpacity,
    textSize,
  } = useAppSelector((store) => store.contrastChecker);

  const getContrastRating = (bgColor: string, textColor: string) => {
    const bgLuminance = getRelativeLuminance(bgColor);
    const textLuminance = getRelativeLuminance(textColor);
    const contrastRatio =
      (Math.max(bgLuminance, textLuminance) + 0.05) /
      (Math.min(bgLuminance, textLuminance) + 0.05);

    if (contrastRatio >= 7) {
      return { rating: "Great", ratio: "7 : 1" };
    } else if (contrastRatio >= 4.5) {
      return { rating: "Ok", ratio: "4.5 : 1" };
    } else if (contrastRatio >= 2.9) {
      return { rating: "Poor", ratio: "3 : 1" };
    } else {
      return { rating: "Fail", ratio: `${contrastRatio.toFixed(1)} : 1` };
    }
  };

  const getRelativeLuminance = (color: string) => {
    const rgb = HexToRGB(color).split(",");
    const r = getRelativeLuminanceChannel(Number(rgb[0]));
    const g = getRelativeLuminanceChannel(Number(rgb[1]));
    const b = getRelativeLuminanceChannel(Number(rgb[2]));
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const getRelativeLuminanceChannel = (channelValue: number) => {
    const srgbChannelValue = channelValue / 255;
    if (srgbChannelValue <= 0.03928) {
      return srgbChannelValue / 12.92;
    } else {
      return Math.pow((srgbChannelValue + 0.055) / 1.055, 2.4);
    }
  };

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
      }}
      className={`   mx-auto  flex  h-64 w-[344px] flex-col justify-around rounded-xl border-2  `}
    >
      <div className="mt-2 flex justify-center gap-8 text-black">
        <div
          className={`  ${textSize ? "text-[18px]" : "text-[14px]"} ${
            bold && "font-bold"
          }  py-1`}
          style={{
            textShadow: shadow
              ? `3px 2px 1px rgb(${shadowColor},${shadowOpacity})`
              : "",
          }}
        >
          Black
        </div>
        <div className=" rounded-md bg-slate-200 bg-opacity-60 px-4 py-1">
          <span>{getContrastRating(backgroundColor, "#000000").ratio}</span>
          &#32;
          <span>{getContrastRating(backgroundColor, "#000000").rating}</span>
        </div>
      </div>

      <div className=" flex justify-center gap-4 text-black">
        <div
          style={{
            color: textColor,
            textShadow: shadow
              ? `3px 2px 1px rgb(${shadowColor},${shadowOpacity})`
              : "",
          }}
          className={`  ${textSize ? "text-[18px]" : "text-[14px]"} ${
            bold && "font-bold"
          } py-1`}
        >
          Custom
        </div>
        <div className=" rounded-md bg-slate-200 bg-opacity-60 px-4 py-1">
          <span>{getContrastRating(backgroundColor, textColor).ratio}</span>
          &#32;
          <span>{getContrastRating(backgroundColor, textColor).rating}</span>
        </div>
      </div>

      <div className="mb-2 flex justify-center gap-8">
        <div
          className={`  ${textSize ? "text-[18px]" : "text-[14px]"} ${
            bold && "font-bold"
          } py-1`}
          style={{
            textShadow: shadow
              ? `3px 2px 1px rgb(${shadowColor},${shadowOpacity})`
              : "",
          }}
        >
          white
        </div>
        <div className=" rounded-md bg-slate-200 bg-opacity-60 px-4 py-1 text-black">
          <span>{getContrastRating(backgroundColor, "#ffffff").ratio}</span>
          &#32;
          <span>{getContrastRating(backgroundColor, "#ffffff").rating}</span>
        </div>
      </div>
    </div>
  );
}
