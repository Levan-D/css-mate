import React, { useState } from "react";

import RgbToHex from "../../../utils/colors/RGBToHex";
import ColorInverter from "../../../utils/colors/ColorInverter";
import ReactSlider from "react-slider";
import { gradientSwatches } from "../../../data/GradientData";

type Props = {
  swatch: gradientSwatches;
  setGradient: React.Dispatch<React.SetStateAction<string>>;
};
type kind = "linear" | "conic" | "radial";

export default function BottomMenu({ swatch, setGradient }: Props) {
  const [typeVis, setTypeVis] = useState(false);
  const [type, setType] = useState(swatch.type);
  const [kind, setKind] = useState("Const");
  const [stopsData, setStopsData] = useState(swatch.stops);
  const stopArray = stopsData.map((stop) => stop.percent);

  const typeBtns: kind[] = ["linear", "radial", "conic"];

  const [linearParams, setLinearParams] = useState({
    degree: 135,
  });
  const [radialParams, setRadialParams] = useState({
    shape: "circle",
    coords: {
      x: 50,
      y: 50,
    },
  });
  const [conicParams, setConicParams] = useState({
    degree: 0,
    coords: {
      x: 50,
      y: 50,
    },
  });

  const handleTypeClick = (type: kind) => {
    setType(() => type);
    triggerGradChange();
    console.log("type:", type);
  };

  const handleStopsChange = (value: number[], i: number) => {
    const copyArray = [...stopsData];
    copyArray[i] = { ...copyArray[i], percent: value[i] };
    setStopsData(() => copyArray);

    triggerGradChange();
  };

  const triggerGradChange = () => {
    const kindTemp = kind !== "Const" ? "repeating-" : "";

    const typeTemp = type;

    const paramsTemp =
      type === "linear"
        ? linearParams.degree + `deg`
        : type === "radial"
        ? `${radialParams.shape} at ${radialParams.coords.x}% ${radialParams.coords.y}%`
        : `from ${conicParams.degree}deg at ${conicParams.coords.x}% ${conicParams.coords.y}%`;

    const styleTemp = stopsData
      .map(
        (stop) => `rgba(${stop.color}, ${stop.opacity / 100}) ${stop.percent}%`
      )
      .join(",");

    setGradient(
      () => `${kindTemp}${typeTemp}-gradient(${paramsTemp}, ${styleTemp})`
    );
  };

  return (
    <div className="flex justify-around gap-2">
      {/* types */}
      <div
        onClick={() => setTypeVis((x) => !x)}
        className="btnSecondary ml-2 py-1 px-2 text-sm"
      >
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </div>
      {typeVis && (
        <div
          onMouseLeave={() => setTypeVis(() => false)}
          className="menuContainer absolute z-50 flex -translate-x-6 translate-y-2 gap-2  border-2 border-white py-4 px-4"
        >
          {typeBtns.map((btn, i) => (
            <div
              key={i}
              onClick={() => handleTypeClick(btn)}
              className="btnSecondary  py-1 px-2 text-sm"
            >
              {btn.charAt(0).toUpperCase() + btn.slice(1)}
            </div>
          ))}
        </div>
      )}
      {/* types */}
      <div className="btnSecondary py-1 px-2 text-sm ">{kind}</div>
      <div className="btnSecondary py-1 px-2 text-sm ">Params</div>
      <div className="mr-2 w-20 pt-1">
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
          onChange={handleStopsChange}
          value={stopArray}
        />
      </div>
    </div>
  );
}
