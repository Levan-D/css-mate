/** @format */

import { useAppSelector } from "../../../app/hooks"
import ContrastChecker from "../../../utils/colors/ContrastChecker"

export default function Shape() {
  const {
    backgroundColor,
    textColor,
    shadowColor,
    bold,
    shadow,
    shadowOpacity,
    textSize,
  } = useAppSelector(store => store.contrastChecker)

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
      }}
      className={`   mx-auto  flex h-64 w-[344px] flex-col justify-around rounded-xl border-2 md:h-[444px]  `}
    >
      <div className="mt-2 flex justify-center gap-8 text-black">
        <div
          className={`  ${textSize ? "text-[18px]" : "text-[14px]"} ${
            bold && "font-bold"
          }  py-1`}
          style={{
            textShadow: shadow ? `3px 2px 1px rgb(${shadowColor},${shadowOpacity})` : "",
          }}
        >
          Black
        </div>
        <div className=" rounded-md bg-slate-200 bg-opacity-60 px-4 py-1">
          <span>{ContrastChecker(backgroundColor, "#000000").ratio}</span>
          &#160;&#160;
          <span>{ContrastChecker(backgroundColor, "#000000").rating}</span>
        </div>
      </div>

      <div className=" flex justify-center gap-4 text-black">
        <div
          style={{
            color: textColor,
            textShadow: shadow ? `3px 2px 1px rgb(${shadowColor},${shadowOpacity})` : "",
          }}
          className={`  ${textSize ? "text-[18px]" : "text-[14px]"} ${
            bold && "font-bold"
          } py-1`}
        >
          Custom
        </div>
        <div className=" rounded-md bg-slate-200 bg-opacity-60 px-4 py-1">
          <span>{ContrastChecker(backgroundColor, textColor).ratio}</span>
          &#160;&#160;
          <span>{ContrastChecker(backgroundColor, textColor).rating}</span>
        </div>
      </div>

      <div className="mb-2 flex justify-center gap-8">
        <div
          className={`  ${textSize ? "text-[18px]" : "text-[14px]"} ${
            bold && "font-bold"
          } py-1`}
          style={{
            textShadow: shadow ? `3px 2px 1px rgb(${shadowColor},${shadowOpacity})` : "",
          }}
        >
          white
        </div>
        <div className=" rounded-md bg-slate-200 bg-opacity-60 px-4 py-1 text-black">
          <span>{ContrastChecker(backgroundColor, "#ffffff").ratio}</span>
          &#160; &#160;
          <span>{ContrastChecker(backgroundColor, "#ffffff").rating}</span>
        </div>
      </div>
    </div>
  )
}
