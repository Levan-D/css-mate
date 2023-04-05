/** @format */

import SideMenu from "../../../../components/SideMenu";
import Input from "./Input";
import Output from "./Output";

export default function ConverterSidemenu() {
  const toolInfo = (
    <div className="w-[200px]">
      <h4 className="menuHeader px-4  py-1">How to use:</h4>
      <ul className="my-2 ml-4 list-decimal  px-4 py-1 text-sm text-slate-200 [&>*]:my-1">
        <li>Pick input color type.</li>
        <li>Input color value.</li>
        <li>Pick output color type</li>
      </ul>
    </div>
  );

  return (
    <div className="mx-auto w-fit ">
      <SideMenu title={`Color converter`} toolInfo={toolInfo}>
        <Input />
        <Output />
      </SideMenu>
    </div>
  );
}
