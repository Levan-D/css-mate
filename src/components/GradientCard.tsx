/** @format */

import React, { useState } from "react";
import { gradientSwatches } from "../data/GradientData";
import Tooltip from "./Tooltip";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import ReactSlider from "react-slider";
import { setNewStops } from "../features/colors/gradientMaker/gradientSlice";
//@ts-ignore
import { ReactComponent as CopyIcon } from "../assets/icons/copy.svg";
//@ts-ignore
import { ReactComponent as SubmitIcon } from "../assets/icons/submit.svg";
// @ts-ignore
import { ReactComponent as ChevronIcon } from "../assets/icons/chevron.svg";
import RgbToHex from "../utils/colors/RGBToHex";
import ColorInverter from "../utils/colors/ColorInverter";

type Props = { swatch: gradientSwatches; apply?: boolean };

export default function GradientCard({ swatch, apply = false }: Props) {
  const dispatch = useAppDispatch();
  const [menuVis, setMenuVis] = useState(false);
  const [stopsData, setStopsData] = useState(swatch.stops);

  const stopArray = stopsData.map((stop) => stop.percent);

  //   const kind = Gradient.kind === "repeating" ? "repeating-" : ""
  const type = swatch.type;
  //   const params =
  //     Gradient.type === "linear"
  //       ? Gradient.linearParams.degree + `deg`
  //       : Gradient.type === "radial"
  //       ? `${Gradient.radialParams.shape} at ${Gradient.radialParams.coords.x}% ${Gradient.radialParams.coords.y}%`
  //       : `from ${Gradient.conicParams.degree}deg at ${Gradient.conicParams.coords.x}% ${Gradient.conicParams.coords.y}%`
  const style = stopsData
    .map(
      (stop) => `rgba(${stop.color}, ${stop.opacity / 100}) ${stop.percent}%`
    )
    .join(",");

  const gradient = `${``}${type}-gradient(${135}deg, ${style})`;
  return (
    <div className="h-fit rounded-lg bg-slate-500 p-2 duration-300 hover:shadow-[0px_0px_12px_6px_rgba(255,_255,_255,0.7)]">
      <div
        style={{
          background: gradient,
        }}
        className={`group h-36 w-72 rounded-lg `}
      >
        <div className="flex h-36 w-72 items-center justify-center opacity-0 transition delay-100 duration-300 group-hover:opacity-100">
          <div className="mx-4 w-fit break-words rounded-lg bg-slate-500 bg-opacity-50 p-2 text-center">
            {`background: ${gradient};`.length > 110
              ? `background: ${gradient};`.slice(0, 110) + "..."
              : `background: ${gradient};`}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-1 pt-2">
        <div>{swatch.name}</div>
        <div className="flex  gap-2">
          <Tooltip text="Copied" onClick={true}>
            <div
              onClick={() => {
                navigator.clipboard.writeText(`background: ${gradient};`);
              }}
              className="btnSecondary shadow-custom  py-1 px-2 text-sm"
            >
              <CopyIcon height={20} width={20} />
            </div>
          </Tooltip>

          {apply && (
            <Tooltip text="Applied" onClick={true}>
              <div
                onClick={() => dispatch(setNewStops(stopsData))}
                className="btnSecondary shadow-custom  py-0 pr-0 pl-[5px] text-sm"
              >
                <SubmitIcon
                  height={28}
                  width={30}
                  stroke={"white"}
                  fill={"white"}
                />
              </div>
            </Tooltip>
          )}
          <div
            onClick={() => setMenuVis((x) => !x)}
            className="btnSecondary shadow-custom  py-0 px-0  text-sm"
          >
            <ChevronIcon
              height={26}
              width={26}
              fill={!menuVis ? "white" : "#ff725e"}
              className={`${
                menuVis ? " !rotate-[270deg]" : ""
              } mr-2 translate-x-1 translate-y-0.5 rotate-[90deg] cursor-pointer px-2 py-1 duration-300`}
            />
          </div>
        </div>
      </div>
      <div
        className={`${
          menuVis
            ? "visible my-2 h-auto scale-y-100  py-2 opacity-100"
            : " collapse  h-0  scale-y-0 overflow-hidden opacity-0"
        }  flex origin-top justify-around gap-2	rounded-lg  bg-slate-600	duration-300 ease-out`}
      >
        <div className="btnSecondary ml-2 py-1 px-2 text-sm">Linear</div>
        <div className="btnSecondary py-1 px-2 text-sm ">Const</div>
        <div className="btnSecondary py-1 px-2 text-sm ">Params</div>
        <div className="mr-2 w-20 pt-1">
          {" "}
          <ReactSlider
            className="customSlider"
            trackClassName="customSlider-track"
            thumbClassName="customSlider-thumb"
            min={0}
            max={100}
            snapDragDisabled
            minDistance={1}
            defaultValue={stopArray}
            renderThumb={(props, state) => (
              <div style={{ background: "black" }} {...props}>
                <div
                  style={{
                    backgroundColor: RgbToHex(stopsData[state.index].color),
                    color: ColorInverter(
                      RgbToHex(stopsData[state.index].color),
                      "bw"
                    ),
                    borderColor: ColorInverter(
                      RgbToHex(stopsData[state.index].color),
                      "bw"
                    ),
                  }}
                  className="w-7 translate-y-[-20px] translate-x-[-5px] select-none rounded-lg border-2 bg-slate-300 text-center text-xs"
                >
                  {state.valueNow}
                </div>
              </div>
            )}
            onChange={(value, i) => {
              const copyArray = [...stopsData];
              copyArray[i] = { ...copyArray[i], percent: value[i] };
              console.log("copyArray:", copyArray);
              setStopsData(() => copyArray);
            }}
            value={stopArray}
          />
        </div>
      </div>
    </div>
  );
}
