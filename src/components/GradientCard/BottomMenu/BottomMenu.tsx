import React, { useState, useEffect } from "react";
import RgbToHex from "../../../utils/colors/RGBToHex";
import ColorInverter from "../../../utils/colors/ColorInverter";
import ReactSlider from "react-slider";
import { gradientSwatches } from "../../../data/GradientData";
//@ts-ignore
import { v4 as uuidv4 } from "uuid";

type Props = {
  swatch: gradientSwatches;
  setGradient: React.Dispatch<
    React.SetStateAction<{
      string: string;
      data: {
        type: string;
        kind: string;
        linearParams: {
          degree: number;
        };
        radialParams: {
          shape: string;
          coords: {
            x: number;
            y: number;
          };
        };
        conicParams: {
          degree: number;
          coords: {
            x: number;
            y: number;
          };
        };
        stops: {
          percent: number;
          color: string;
          opacity: number;
        }[];
      };
    }>
  >;
};

type type = "linear" | "conic" | "radial";
type kind = "const" | "repeat";

export default function BottomMenu({ swatch, setGradient }: Props) {
  const [typeVis, setTypeVis] = useState(false);
  const [kindVis, setKindVis] = useState(false);
  const [paramsVis, setParamsVis] = useState(false);

  const [radialVis, setRadialVis] = useState(false);
  const [conicVis, setConicVis] = useState(false);

  const [type, setType] = useState(swatch.type);
  const [kind, setKind] = useState("const");

  const [tempLinearDeg, setTempLinearDeg] = useState<number | string>("");
  const [tempConicDeg, setTempConicDeg] = useState<number | string>("");

  const [stopsData, setStopsData] = useState(swatch.stops);
  const stopArray = stopsData.map((stop) => stop.stop.percent);
  const [effect, setEffect] = useState(false);

  const typeBtns: type[] = ["linear", "radial", "conic"];
  const kindBtns: kind[] = ["const", "repeat"];

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

  const resetState = () => {
    setType(() => swatch.type);
    setKind(() => `const`);
    setStopsData(() => swatch.stops);
    setLinearParams({
      degree: 135,
    });
    setRadialParams({
      shape: "circle",
      coords: {
        x: 50,
        y: 50,
      },
    });
    setConicParams({
      degree: 0,
      coords: {
        x: 50,
        y: 50,
      },
    });
    setEffect(() => true);
  };

  const handleTypeClick = (type: type) => {
    setType(() => type);
    setEffect(() => true);
  };

  const handleKindClick = (kind: kind) => {
    setKind(() => kind);
    setEffect(() => true);
  };

  const handleStopsChange = (value: number[], i: number) => {
    const copyArray = [...stopsData];
    copyArray[i] = { ...copyArray[i], percent: value[i] };
    console.log("copyArray:", stopsData);
    setStopsData(() => copyArray);
    setEffect(() => true);
  };

  const triggerGradChange = () => {
    const kindTemp = kind !== "const" ? "repeating-" : "";

    const typeTemp = type;

    const paramsTemp =
      type === "linear"
        ? linearParams.degree + `deg`
        : type === "radial"
        ? `${radialParams.shape} at ${radialParams.coords.x}% ${radialParams.coords.y}%`
        : `from ${conicParams.degree}deg at ${conicParams.coords.x}% ${conicParams.coords.y}%`;

    const styleTemp = stopsData
      .map(
        (stop) =>
          `rgba(${stop.stop.color}, ${stop.stop.opacity / 100}) ${
            stop.stop.percent
          }%`
      )
      .join(",");

    setGradient({
      string: `${kindTemp}${typeTemp}-gradient(${paramsTemp}, ${styleTemp})`,
      data: {
        type: typeTemp,
        kind: kindTemp,
        linearParams: {
          degree: 135,
        },
        radialParams: radialParams,
        conicParams: conicParams,
        stops: stopsData,
      },
    });
  };

  const HandleStopPercentage = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.target.value);

    if (value > 360) {
      value = 360;
    } else if (value < 0) {
      value = 0;
    }

    setTempLinearDeg(value);
  };

  const handleOnBLurStop = () => {
    if (typeof tempLinearDeg === "number") {
      setLinearParams({
        degree: tempLinearDeg,
      });
      setEffect(() => true);

      setTempLinearDeg("");
    }
  };

  const handleOnKeyDownStop = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleOnBLurStop();
      setTempLinearDeg("");
      e.currentTarget.blur();
    }
  };

  const handleShapeChange = () => {
    if (radialParams.shape === "circle") {
      setRadialParams({ ...radialParams, shape: "ellipse" });
      setEffect(() => true);
    } else if (radialParams.shape === "ellipse") {
      setRadialParams({ ...radialParams, shape: "circle" });
      setEffect(() => true);
    }
  };

  const HandleStopPercentageConic = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = Number(e.target.value);

    if (value > 360) {
      value = 360;
    } else if (value < 0) {
      value = 0;
    }

    setTempConicDeg(value);
  };

  const handleOnBLurStopConic = () => {
    if (typeof tempConicDeg === "number") {
      setConicParams({
        ...conicParams,
        degree: tempConicDeg,
      });
      setEffect(() => true);

      setTempConicDeg("");
    }
  };

  const handleOnKeyDownStopConic = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      handleOnBLurStop();
      setTempConicDeg("");
      e.currentTarget.blur();
    }
  };

  useEffect(() => {
    if (effect) {
      triggerGradChange();
      setEffect(() => false);
    }
  }, [effect]);

  return (
    <div className="flex justify-around gap-2">
      {/* reset */}
      <div onClick={resetState} className="btnSecondary ml-2 py-1 px-2 text-sm">
        &#8634;
      </div>

      {/* reset */}
      {/* types */}
      <div
        onClick={() => {
          setTypeVis((x) => !x);
          setKindVis(() => false);
          setParamsVis(() => false);
        }}
        className="btnSecondary  py-1 px-2 text-sm"
      >
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </div>
      {typeVis && (
        <div
          onMouseLeave={() => setTypeVis(() => false)}
          className="menuContainer absolute z-50 flex -translate-x-10 gap-2  border-2 border-white py-4 px-4"
        >
          {typeBtns.map((btn) => (
            <div
              key={uuidv4()}
              onClick={() => handleTypeClick(btn)}
              className="btnSecondary  py-1 px-2 text-sm"
            >
              {btn.charAt(0).toUpperCase() + btn.slice(1)}
            </div>
          ))}
        </div>
      )}
      {/* types */}
      {/* kinds */}
      <div
        onClick={() => {
          setTypeVis(() => false);
          setKindVis((x) => !x);
          setParamsVis(() => false);
        }}
        className="btnSecondary py-1 px-2 text-sm "
      >
        {kind.charAt(0).toUpperCase() + kind.slice(1)}
      </div>
      {kindVis && (
        <div
          onMouseLeave={() => setKindVis(() => false)}
          className="menuContainer absolute z-50 flex  gap-2  border-2 border-white py-4 px-4"
        >
          {kindBtns.map((btn) => (
            <div
              key={uuidv4()}
              onClick={() => handleKindClick(btn)}
              className="btnSecondary  py-1 px-2 text-sm"
            >
              {btn.charAt(0).toUpperCase() + btn.slice(1)}
            </div>
          ))}
        </div>
      )}
      {/* kinds */}
      {/* params */}
      <div
        onClick={() => {
          setTypeVis(() => false);
          setKindVis(() => false);
          setParamsVis((x) => !x);
        }}
        className="btnSecondary py-0 px-2 text-lg "
      >
        &#9881;
      </div>
      {paramsVis && type === "linear" && (
        <div
          onMouseLeave={() => {
            setParamsVis(() => false);
            setRadialVis(() => false);
          }}
          className="menuContainer absolute z-50 flex translate-x-[40px] gap-2  border-2 border-white py-4 px-4"
        >
          <input
            type="number"
            id="stopInput"
            value={tempLinearDeg}
            placeholder={linearParams.degree.toString()}
            onBlur={() => handleOnBLurStop()}
            onFocus={() => setTempLinearDeg(Number(linearParams.degree))}
            onChange={(e) => HandleStopPercentage(e)}
            onKeyDown={(e) => handleOnKeyDownStop(e)}
            className="  removeArrow block h-8 w-10 appearance-none rounded-md  border-2 border-darkJungle-400 bg-darkJungle-600 text-center  text-white placeholder-white duration-200 sm:hover:border-slate-300  "
          ></input>
          <div className="  grow  select-none text-center italic leading-7 text-slate-300  ">
            deg
          </div>
        </div>
      )}
      {paramsVis && type === "radial" && (
        <div
          onMouseLeave={() => {
            setParamsVis(() => false);
            setRadialVis(() => false);
          }}
          className="menuContainer absolute z-50 flex translate-x-[48px]  gap-2  border-2 border-white py-4 px-4"
        >
          <div
            onClick={handleShapeChange}
            className={`  btnSecondary  h-8 px-2 text-sm leading-4`}
          >
            <div
              className={` ${
                radialParams.shape === "circle" ? "mx-1 h-5 w-5" : "h-5 w-7"
              }  mt-[2px] translate-y-[-4px]  rounded-full border-2 border-slate-900`}
            ></div>
          </div>
          <div
            onClick={() => setRadialVis((x) => !x)}
            className="duration-2000 grow cursor-pointer select-none text-center italic leading-7 text-slate-300 sm:hover:text-white "
          >
            Cords
          </div>

          {radialVis && (
            <div className="-translate-x-[33px] -translate-y-24">
              <div className="absolute top-0 left-0 z-40 h-screen w-screen "></div>
              <div className="menuBlock absolute z-50 w-32 translate-y-8 translate-x-[-80px] gap-4 border-slate-500 bg-darkJungle-400 px-1  ">
                <div className="flex justify-end ">
                  <div
                    className="z-50 my-1  h-6 w-6 cursor-pointer rounded-full  border-2 border-transparent text-center leading-5 text-slate-300 sm:hover:border-slate-300"
                    onClick={() =>
                      setRadialParams({
                        ...radialParams,
                        coords: { x: 50, y: 50 },
                      })
                    }
                  >
                    &#8634;
                  </div>
                  <div
                    className="z-50 my-1  h-6 w-6 cursor-pointer rounded-full border-2  border-transparent text-center text-xl leading-4 text-slate-300 sm:hover:border-slate-300"
                    onClick={() => {
                      setRadialVis(() => false);
                      setParamsVis(() => false);
                    }}
                  >
                    &#215;
                  </div>
                </div>

                <div className="translate-y-[-12px] px-2">
                  {Object.entries(radialParams.coords).map((coord, i) => (
                    <div key={i} className="mb-6">
                      <div className="text-xs italic text-slate-300">
                        {coord[0]}
                      </div>
                      <ReactSlider
                        className="customSlider group"
                        trackClassName="customSlider-track"
                        thumbClassName="customSlider-thumb"
                        min={0}
                        max={100}
                        defaultValue={coord[1]}
                        renderThumb={(props, state) => (
                          <div style={{ background: "black" }} {...props}>
                            <div className="w-10 translate-y-[-30px] translate-x-[-10px] select-none rounded-lg border-2 bg-darkJungle-700  text-center  sm:hidden sm:group-hover:block">
                              {state.valueNow}
                            </div>
                          </div>
                        )}
                        value={coord[1]}
                        onChange={(value) => {
                          setRadialParams({
                            ...radialParams,
                            coords: {
                              ...radialParams.coords,
                              [coord[0]]: value,
                            },
                          });
                          setEffect(() => true);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {paramsVis && type === "conic" && (
        <div
          onMouseLeave={() => {
            setParamsVis(() => false);
            setConicVis(() => false);
          }}
          className="menuContainer absolute z-50 flex translate-x-[42px]  gap-2  border-2 border-white py-4 px-4"
        >
          <input
            type="number"
            id="stopInput"
            value={tempConicDeg}
            placeholder={conicParams.degree.toString()}
            onBlur={() => handleOnBLurStopConic()}
            onFocus={() => setTempConicDeg(Number(conicParams.degree))}
            onChange={(e) => HandleStopPercentageConic(e)}
            onKeyDown={(e) => handleOnKeyDownStopConic(e)}
            className="  removeArrow block h-8 w-10 appearance-none rounded-md  border-2 border-darkJungle-400 bg-darkJungle-600 text-center  text-white placeholder-white duration-200 sm:hover:border-slate-300  "
          ></input>
          <div
            onClick={() => setConicVis((x) => !x)}
            className="duration-2000 grow cursor-pointer select-none text-center italic leading-7 text-slate-300 sm:hover:text-white "
          >
            Cords
          </div>

          {conicVis && (
            <div className="-translate-x-[33px] -translate-y-24">
              <div className="absolute top-0 left-0 z-40 h-screen w-screen "></div>
              <div className="menuBlock absolute z-50 w-32 translate-y-8 translate-x-[-80px] gap-4 border-slate-500 bg-darkJungle-400 px-1  ">
                <div className="flex justify-end ">
                  <div
                    className="z-50 my-1  h-6 w-6 cursor-pointer rounded-full  border-2 border-transparent text-center leading-5 text-slate-300 sm:hover:border-slate-300"
                    onClick={() =>
                      setConicParams({
                        ...conicParams,
                        coords: { x: 50, y: 50 },
                      })
                    }
                  >
                    &#8634;
                  </div>
                  <div
                    className="z-50 my-1  h-6 w-6 cursor-pointer rounded-full border-2  border-transparent text-center text-xl leading-4 text-slate-300 sm:hover:border-slate-300"
                    onClick={() => {
                      setConicVis(() => false);
                      setParamsVis(() => false);
                    }}
                  >
                    &#215;
                  </div>
                </div>

                <div className="translate-y-[-12px] px-2">
                  {Object.entries(conicParams.coords).map((coord, i) => (
                    <div key={i} className="mb-6">
                      <div className="text-xs italic text-slate-300">
                        {coord[0]}
                      </div>
                      <ReactSlider
                        className="customSlider group"
                        trackClassName="customSlider-track"
                        thumbClassName="customSlider-thumb"
                        min={0}
                        max={100}
                        defaultValue={coord[1]}
                        renderThumb={(props, state) => (
                          <div style={{ background: "black" }} {...props}>
                            <div className="w-10 translate-y-[-30px] translate-x-[-10px] select-none rounded-lg border-2 bg-darkJungle-700  text-center  sm:hidden sm:group-hover:block">
                              {state.valueNow}
                            </div>
                          </div>
                        )}
                        value={coord[1]}
                        onChange={(value) => {
                          setConicParams({
                            ...conicParams,
                            coords: {
                              ...conicParams.coords,
                              [coord[0]]: value,
                            },
                          });
                          setEffect(() => true);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {/* params */}
      {/* slider */}
      <div className="mr-2 w-[76px] pt-1">
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
                  backgroundColor: RgbToHex(stopsData[state.index].stop.color),
                  color: ColorInverter(
                    RgbToHex(stopsData[state.index].stop.color),
                    "bw"
                  ),
                  borderColor: ColorInverter(
                    RgbToHex(stopsData[state.index].stop.color),
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
      {/* slider */}
    </div>
  );
}
