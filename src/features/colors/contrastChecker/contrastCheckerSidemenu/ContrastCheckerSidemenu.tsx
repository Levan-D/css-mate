import React from "react";
import SideMenu from "../../../../components/SideMenu";
import InputBg from "./InputBg";
import InputText from "./InputText";
import InputShadow from "./InputShadow";

export default function ContrastCheckerSidemenu() {
  return (
    <div className="mx-auto w-fit ">
      <SideMenu title={`Contrast Checker`}>
        <InputBg />
        <InputText />
        <InputShadow />
      </SideMenu>
    </div>
  );
}
