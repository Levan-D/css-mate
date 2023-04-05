/** @format */

import React from "react";
import SideMenu from "../../../../components/SideMenu";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import ColorPicker from "../../../../components/ColorPicker";

import {
  setColor,
  resetState as resetStateAction,
  setTabPage,
  deleteTabPage,
  selectTextShadowTabs,
  addTextShadow,
} from "../textShadowSlice";
import Sliders from "./Sliders";
import TabsNConditions from "../../../../components/TabsNConditions";

const TextShadowSidemenu = () => {
  const dispatch = useAppDispatch();
  const { currentTab } = useAppSelector((state) => state.textShadow);
  const tabs = useAppSelector(selectTextShadowTabs);

  const resetState = (): void => {
    dispatch(resetStateAction());
  };

  const handleColorPick = (color: string) => {
    dispatch(setColor(color));
  };

  const handleSetTabPage = (i: number) => {
    dispatch(setTabPage(i));
  };
  const handleTabDelete = (id: string) => {
    dispatch(deleteTabPage(id));
  };
  const handleAddTextShadow = (id: string) => {
    dispatch(addTextShadow());
  };

  const toolInfo = (
    <div className="w-[340px]">
      <h4 className="menuHeader px-4  py-1">How to use:</h4>
      <ul className="my-2 ml-4 list-decimal  px-4 py-1 text-sm text-slate-200 [&>*]:my-1">
        <li>Move sliders to adjust the shadow.</li>
        <li>Click "+" button to add an additional shadow.</li>
        <li>
          Choose shadow color from predefined colors or customize it yourself
          with "cust" button.
        </li>
        <li>Scroll below and copy the CSS rule.</li>
      </ul>
    </div>
  );

  return (
    <div>
      <SideMenu
        title={`Text shadow config`}
        resetState={resetState}
        toolInfo={toolInfo}
      >
        <div className="menuContainer m-4  pb-4  ">
          {tabs && (
            <TabsNConditions
              tabs={tabs}
              currentTab={currentTab}
              handleSetTabPage={handleSetTabPage}
              handleOnDoubleClick={handleTabDelete}
              handleAddIconClick={handleAddTextShadow}
            >
              <Sliders />
            </TabsNConditions>
          )}

          <div className="mx-auto mt-4 w-fit ">
            <ColorPicker handleColorPick={handleColorPick} />
          </div>
        </div>
      </SideMenu>
    </div>
  );
};

export default TextShadowSidemenu;
