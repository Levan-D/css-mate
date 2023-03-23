/** @format */

import React from "react"
import Output from "../../../components/wrappers/Output"
import { useAppSelector } from "../../../app/hooks"
import { selectInbetweenColors } from "./paletteSlice"
import { OutputRenderArrayType } from "../../../components/wrappers/Output"
import RgbToHex from "../../../utils/RGBToHex"
//@ts-ignore
import SyntaxHighlighter from "react-syntax-highlighter"
//@ts-ignore
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs"

export default function PaletteOutput() {
  const stops = useAppSelector(selectInbetweenColors)
  console.log(stops)
  const syntaxFunc = (style: string) => {
    return (
      <SyntaxHighlighter
        language="css"
        style={nightOwl}
        wrapLongLines={true}
        customStyle={{
          backgroundColor: "transparent",
          overflowX: "hidden",
          color: "#ecc48d",
        }}
      >
        {` ${style},`}
      </SyntaxHighlighter>
    )
  }
  const hexCopy = stops
    .map((stop, i) => {
      if (typeof stop === "object" && stop.color !== undefined) {
        return RgbToHex(stop.color)
      }
    })
    .join(` \n`)

  const rgbCopy = stops
    .map((stop, i) => {
      if (typeof stop === "object" && stop.color !== undefined) {
        return `rgb(${stop.color})`
      }
    })
    .join(` \n`)

  const hex = (
    <div className="ml-4 rounded-lg  py-4 ">
      {stops.map((stop, i) => {
        if (typeof stop === "object" && stop.color !== undefined) {
          return <div key={i}>{RgbToHex(stop.color)}</div>
        }
      })}
    </div>
  )
  const rgb = (
    <div className="ml-4 rounded-lg  py-4 ">
      {stops.map((stop, i) => {
        if (typeof stop === "object" && stop.color !== undefined) {
          return <div key={i}>rgb({stop.color})</div>
        }
      })}
    </div>
  )

  const custom = stops
    .map((stop, i) => {
      if (typeof stop === "object" && stop.color !== undefined) {
        return `${i === 0 ? 50 : 100 * i}: "${RgbToHex(stop.color)}"`
      }
    })
    .join(`,\n`)

  const renderArray: OutputRenderArrayType[] = [
    {
      title: "HEX",
      copy: hexCopy,
      content: [hex],
    },
    {
      title: "RGB",
      copy: rgbCopy,
      content: [rgb],
    },
    {
      title: "Tailwind extend",
      copy: custom,
      content: [
        <div className="select-none text-slate-400">
          <div className="select-none text-slate-400">module.exports =&#x2774;</div>
          <div className="ml-4">theme: &#x2774;</div>
          <div className="ml-8">extend: &#x2774;</div>
          <div className="ml-12">colors: &#x2774;</div>
          <div className="ml-16">customColorName: &#x2774;</div>
          <div className="ml-20 flex select-text ">{syntaxFunc(custom)}</div>
          <div className="ml-20">&#x2775;,</div>
          <div className="ml-16">&#x2775;,</div>
          <div className="ml-12">&#x2775;,</div>
          <div className="ml-8">&#x2775;,</div>
          <div className="ml-4">&#x2775;</div>
        </div>,
      ],
    },
  ]

  return (
    <div className="  drop-shadow-primaryDark filter ">
      <Output renderArray={renderArray} />
    </div>
  )
}
