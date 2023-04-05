import React from "react";
import SideMenu from "../../../../components/SideMenu";
import InputBg from "./InputBg";
import InputText from "./InputText";
import InputShadow from "./InputShadow";

export default function ContrastCheckerSidemenu() {

    const toolInfo = (
      <div className="w-[300px]">
        <h4 className="menuHeader px-4  py-1">How to use:</h4>
        <ul className="my-2 ml-4 list-decimal  px-4 py-1 text-sm text-slate-200 [&>*]:my-1">
          <li>Pick background color.</li>
          <li>pick text color.</li>
          <li>Optionally customize the shadow.</li>
          <li>Different font boldness and font size will produce different ratings even though the contrast will be unchanged.</li>
        </ul>
      </div>
  );
  
  return (
    <div className="mx-auto w-fit ">
      <SideMenu title={`Contrast checker`} toolInfo={toolInfo}>
        <InputBg />
        <InputText />
        <InputShadow />
      </SideMenu>
    </div>
  );
}
