import React, { useState } from "react";
import SideMenu from "../../../../components/wrappers/SideMenu";
import Input from "./Input";
import Output from "./Output";
import Tooltip from "../../../../components/Tooltip";

import { useAppDispatch, useAppSelector } from "../../../../app/hooks";

import HexToRGB from "../../../../utils/HexToRGB";
import RgbToHex from "../../../../utils/RGBToHex";

import {
  resetState,
  setIsColorValid,
  setError,
  handleInputBtn,
  handleOutputBtn,
} from "../converterSlice";



export default function ConverterSidemenu() {
  const { inputType, outputType, inputText, outputText, isColorValid, error } =
    useAppSelector((store) => store.converter);
  const dispatch = useAppDispatch();


  // const handleColorValidation = () => {
  //   const HEXRegex = /^#[0-9A-F]{6}$/i;
  //   const RGBRegex = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i;

  //   const expression = inputText.trim();

  //   switch (inputType.name) {
  //     case `HEX`:
  //       let hexColor;
  //       if (!expression.startsWith("#")) {
  //         hexColor = "#" + expression;
  //       } else hexColor = expression;

  //       if (HEXRegex.test(hexColor)) {
  //         setIsValid(() => true);
  //       } else {
  //         setIsValid(() => false);
  //       }
  //       break;
  //     case `RGB`:
  //       const match = expression.trim().match(RGBRegex);
  //       if (!match) {
  //         console.log(false);
  //       }

  //     case `HSL`:
  //     case `CMYK`:
  //     case `HSV`:
  //     default:
  //       return;
  //   }
  // };

  // const handleConversion = () => {
  //   const expression = inputType.name + "to" + outputType.name;

  //   switch (expression) {
  //     case `CMYKtoHEX`:
  //     case `CMYKtoHSV`:
  //     case `CMYKtoRGB`:
  //     case `CMYKtoHSL`:
  //     case `HEXtoCMYK`:
  //     case `HEXtoHSL`:
  //     case `HEXtoHSV`:
  //     case `HEXtoRGB`:
  //       return setOutputText(() => HexToRGB(inputText));
  //     case `HSLtoCMYK`:
  //     case `HSLtoHEX`:
  //     case `HSLtoHSV`:
  //     case `HSLtoRGB`:
  //     case `HSVtoCMYK`:
  //     case `HSVtoHEX`:
  //     case `HSVtoHSL`:
  //     case `HSVtoRGB`:
  //     case `RGBtoCMYK`:
  //     case `RGBtoHEX`:
  //     case `RGBtoHSL`:
  //     case `RGBtoHSV`:

  //     default:
  //       return;
  //   }
  // };



  return (
    <div className="mx-auto w-fit ">
      <SideMenu title={`Color Converter`}>
        <Input />
        <Output />
      </SideMenu>
    </div>
  );
}
