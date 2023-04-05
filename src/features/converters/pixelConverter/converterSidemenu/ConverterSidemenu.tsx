/** @format */

import React from "react";
import SideMenu from "../../../../components/SideMenu";
import Selector from "./Selector";
import Input from "./Input";
import Output from "./Output";

export default function ConverterSidemenu() {
    const toolInfo = (
      <div className="w-[200px]">
        <h4 className="menuHeader px-4  py-1">How to use:</h4>
        <ul className="my-2 ml-4 list-decimal  px-4 py-1 text-sm text-slate-200 [&>*]:my-1">
          <li>Pick input value.</li>
          <li>Input px.</li>
          <li>
            Click
            <span className="inline-block   -translate-y-1 translate-x-2">
              &#8630;
            </span>
            <span className="inline-block -translate-x-1 translate-y-1 rotate-[180deg]">
              &#8630;
            </span>{" "}
            to reverse inputs.
          </li>
        </ul>
      </div>
    );

  
  return (
    <div className="mx-auto w-fit ">
      <SideMenu title={`Pixel converter`} toolInfo={toolInfo}>
        <Selector />
        <Input />
        <Output />
      </SideMenu>
    </div>
  );
}
