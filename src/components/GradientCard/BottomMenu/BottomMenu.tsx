/** @format */

import React, { useState, useEffect } from "react"
import { gradientSwatches } from "../../../data/GradientData"
import TypeBtns from "./TypeBtns"
import KindBtns from "./KindBtns"
import LinearParams from "./LinearParams"
import RadialParams from "./RadialParams"
import ConicParams from "./ConicParams"
import StopSlider from "./StopSlider"
//@ts-ignore
import { v4 as uuidv4 } from "uuid"

type Props = {
  swatch: GradientSwatchesType
  setGradient: React.Dispatch<React.SetStateAction<string>>
  setGradientData: React.Dispatch<React.SetStateAction<initialGradientStateType>>
}
const buttonData = [
  {
    label: "Type",
    visibility: "type",
    width: "53px",
  },
  {
    label: "Kind",
    visibility: "kind",
    width: "52px",
  },
  {
    label: "Params",
    visibility: "params",
    width: "68px",
  },
  {
    label: "Stops",
    visibility: "stops",
    width: "58px",
  },
]

export default function BottomMenu({ swatch, setGradient, setGradientData }: Props) {
  const [typeVis, setTypeVis] = useState(true)
  const [kindVis, setKindVis] = useState(false)
  const [paramsVis, setParamsVis] = useState(false)
  const [stopsVis, setStopsVis] = useState(false)

  const [type, setType] = useState(swatch.type)
  const [kind, setKind] = useState<GradientBtnKind>("const")

  const [stopsData, setStopsData] = useState(swatch.stops)
  const [effect, setEffect] = useState(false)

  const [linearParams, setLinearParams] = useState({
    degree: 135,
  })
  const [radialParams, setRadialParams] = useState({
    shape: "circle",
    coords: {
      x: 50,
      y: 50,
    },
  })
  const [conicParams, setConicParams] = useState({
    degree: 0,
    coords: {
      x: 50,
      y: 50,
    },
  })

  const resetState = () => {
    setType(() => swatch.type)
    setKind(() => `const`)
    setStopsData(() => swatch.stops)
    setLinearParams({
      degree: 135,
    })
    setRadialParams({
      shape: "circle",
      coords: {
        x: 50,
        y: 50,
      },
    })
    setConicParams({
      degree: 0,
      coords: {
        x: 50,
        y: 50,
      },
    })
    setEffect(() => true)
  }

  const handleTypeClick = (type: GradientBtnType) => {
    setType(() => type)
    setEffect(() => true)
  }

  const handleKindClick = (kind: GradientBtnKind) => {
    setKind(() => kind)
    setEffect(() => true)
  }

  const handleStopsChange = (value: number[], i: number) => {
    const copyArray = [...stopsData]

    copyArray[i] = { ...copyArray[i], stop: { ...copyArray[i].stop, percent: value[i] } }
    setStopsData(() => copyArray)
    setEffect(() => true)
  }

  const triggerGradChange = () => {
    const kindTemp = kind !== "const" ? "repeating-" : ""

    const typeTemp = type

    const paramsTemp =
      type === "linear"
        ? linearParams.degree + `deg`
        : type === "radial"
        ? `${radialParams.shape} at ${radialParams.coords.x}% ${radialParams.coords.y}%`
        : `from ${conicParams.degree}deg at ${conicParams.coords.x}% ${conicParams.coords.y}%`

    const styleTemp = stopsData
      .map(
        stop =>
          `rgba(${stop.stop.color}, ${stop.stop.opacity / 100}) ${stop.stop.percent}%`
      )
      .join(",")

    setGradient(`${kindTemp}${typeTemp}-gradient(${paramsTemp}, ${styleTemp})`)

    const kindData = kind !== "const" ? "repeating" : "constant"

    setGradientData({
      type: type,
      kind: kindData,
      linearParams: linearParams,
      radialParams: radialParams,
      conicParams: conicParams,
      stops: stopsData,
    })
  }

  const handleShapeChange = () => {
    if (radialParams.shape === "circle") {
      setRadialParams({ ...radialParams, shape: "ellipse" })
      setEffect(() => true)
    } else if (radialParams.shape === "ellipse") {
      setRadialParams({ ...radialParams, shape: "circle" })
      setEffect(() => true)
    }
  }

  const handleButtonClick = (visibility: string) => {
    setTypeVis(visibility === "type")
    setKindVis(visibility === "kind")
    setParamsVis(visibility === "params")
    setStopsVis(visibility === "stops")
  }

  useEffect(() => {
    if (effect) {
      triggerGradChange()
      setEffect(() => false)
    }
  }, [effect])
  return (
    <div>
      <div className="mx-2 flex justify-between gap-1.5 ">
        <div onClick={resetState} className="btnSecondary py-1 px-2 text-sm">
          &#8634;
        </div>
        {buttonData.map(({ label, visibility, width }, index) => (
          <div key={index}>
            <div style={{ position: "relative", zIndex: 30 }}>
              <div
                onClick={() => handleButtonClick(visibility)}
                className={`btnSecondary py-1 px-2 text-sm`}
              >
                {label}
              </div>
            </div>
            <div
              style={{ width: width }}
              className={`${
                (visibility === "type" && typeVis) ||
                (visibility === "kind" && kindVis) ||
                (visibility === "params" && paramsVis) ||
                (visibility === "stops" && stopsVis)
                  ? "bg-slate-700"
                  : "bg-transparent"
              } absolute z-20 h-[48px]  -translate-y-[32px] -translate-x-[4px] rounded-t-md py-2 duration-300`}
            ></div>
          </div>
        ))}
      </div>

      <div className="menuBlock mx-[4px] mt-2  border-none py-0.5">
        {typeVis && <TypeBtns handleTypeClick={handleTypeClick} linType={type} />}
        {kindVis && <KindBtns handleKindClick={handleKindClick} kindType={kind} />}
        {paramsVis && type === "linear" && (
          <LinearParams
            linearParams={linearParams}
            setEffect={setEffect}
            setLinearParams={setLinearParams}
          />
        )}
        {paramsVis && type === "radial" && (
          <RadialParams
            handleShapeChange={handleShapeChange}
            radialParams={radialParams}
            setRadialParams={setRadialParams}
            setEffect={setEffect}
          />
        )}

        {paramsVis && type === "conic" && (
          <ConicParams
            conicParams={conicParams}
            setConicParams={setConicParams}
            setEffect={setEffect}
          />
        )}
        {stopsVis && (
          <StopSlider stopsData={stopsData} handleStopsChange={handleStopsChange} />
        )}
      </div>
    </div>
  )
}
