/** @format */

import React from "react";
import SideMenu from "../../../../components/wrappers/SideMenu";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import ColorPicker from "../../../../components/ColorPicker";
import Presets from "./Presets";
import {
  setColor,
  resetState as resetStateAction,
  toggleInset,
  setTabPage,
  deleteTabPage,
  selectBoxShadowTabs,
  addBoxShadow,
} from "../boxShadowSlice";
import Sliders from "./Sliders";
import TabsNConditions from "../../../../components/wrappers/TabsNConditions";

const BoxShadowSidemenu = () => {
  const dispatch = useAppDispatch();
  const { boxShadowData, currentTab } = useAppSelector(
    (state) => state.boxShadow
  );
  const tabs = useAppSelector(selectBoxShadowTabs);

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
  const handleAddBoxShadow = (id: string) => {
    dispatch(addBoxShadow());
  };

  return (
    <div>
      <SideMenu title={`Box shadow config`} resetState={resetState}>
        <div className="menuContainer m-4  pb-4  ">
          {tabs && (
            <TabsNConditions
              tabs={tabs}
              currentTab={currentTab}
              handleSetTabPage={handleSetTabPage}
              handleOnDoubleClick={handleTabDelete}
              handleAddIconClick={handleAddBoxShadow}
            >
              <Sliders />
            </TabsNConditions>
          )}

          <div className="mx-4 mt-4 flex justify-between ">
            <div
              onClick={() => dispatch(toggleInset())}
              className={`${
                !boxShadowData[0].settings.inset && `btnPrimaryDisabled`
              } btnPrimary text-sm`}
            >
              Inner
            </div>
            <ColorPicker handleColorPick={handleColorPick} />
          </div>
        </div>
        <hr className="mx-4 mb-4" />
        <Presets />
      </SideMenu>
    </div>
  );
};

export default BoxShadowSidemenu;
