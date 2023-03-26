/** @format */
import HexToRGB from "./HexToRGB"
import HexToHSL from "./HexToHSL"
import HexToCMYK from "./HexToCMYK"
import HexToHSV from "./HexToHSV"

import RGBToCMYK from "./RGBToCMYK"
import RgbToHex from "./RGBToHex"
import RGBToHSL from "./RGBToHSL"
import RGBToHSV from "./RGBToHSV"

import CMYKToHSV from "./CMYKToHSV"
import CMYKToRGB from "./CMYKToRGB"
import CMYKToHSL from "./CMYKToHSL"
import CMYKToHex from "./CMYKToHex"

import HSLToCMYK from "./HSLToCMYK"
import HSLToRGB from "./HSLToRGB"
import HSLToHex from "./HSLToHex"
import HSLToHSV from "./HSLToHSV"

import HSVSToHSLS from "./HSVToHSL"
import HSVToCMYK from "./HSVToCMYK"
import HSVToHex from "./HSVToHEX"
import HSVToRGB from "./HSVToRGB"

export default function ColorConverter(colString: string, conType: string) {
  let output
  switch (conType) {
    case `HEXtoCMYK`:
      output = HexToCMYK(colString)
      break
    case `HEXtoHSL`:
      output = HexToHSL(colString)
      break
    case `HEXtoHSV`:
      output = HexToHSV(colString)
      break
    case `HEXtoRGB`:
      output = HexToRGB(colString)
      break

    case `RGBtoCMYK`:
      output = RGBToCMYK(colString)
      break
    case `RGBtoHEX`:
      output = RgbToHex(colString)
      break
    case `RGBtoHSL`:
      output = RGBToHSL(colString)
      break
    case `RGBtoHSV`:
      output = RGBToHSV(colString)
      break

    case `HSLtoCMYK`:
      output = HSLToCMYK(colString)
      break
    case `HSLtoHEX`:
      output = HSLToHex(colString)
      break
    case `HSLtoHSV`:
      output = HSLToHSV(colString)
      break
    case `HSLtoRGB`:
      output = HSLToRGB(colString)
      break

    case `CMYKtoHEX`:
      output = CMYKToHex(colString)
      break
    case `CMYKtoHSV`:
      output = CMYKToHSV(colString)
      break
    case `CMYKtoRGB`:
      output = CMYKToRGB(colString)
      break
    case `CMYKtoHSL`:
      output = CMYKToHSL(colString)
      break

    case `HSVtoCMYK`:
      output = HSVToCMYK(colString)
      break
    case `HSVtoHEX`:
      output = HSVToHex(colString)
      break
    case `HSVtoHSL`:
      output = HSVSToHSLS(colString)
      break
    case `HSVtoRGB`:
      output = HSVToRGB(colString)
      break

    default:
      return colString
  }

  return output
}
