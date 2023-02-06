/** @format */

import React from "react"
import SideMenu from "../../../../components/wrappers/SideMenu"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import ColorPicker from "../../../../components/ColorPicker"
import {
  setColor,
  resetState as resetStateAction,
  setTabPage,
  deleteTabPage,
  selectDropShadowTabs,
  addDropShadow,
} from "../dropShadowSlice"
import Sliders from "./Sliders"
import TabsNConditions from "../../../../components/wrappers/TabsNConditions"

const DropShadowSidemenu = () => {
  const dispatch = useAppDispatch()
  const { currentTab } = useAppSelector(state => state.dropShadow)
  const tabs = useAppSelector(selectDropShadowTabs)

  const resetState = (): void => {
    dispatch(resetStateAction())
  }

  const handleColorPick = (color: string) => {
    dispatch(setColor(color))
  }

  const handleSetTabPage = (i: number) => {
    dispatch(setTabPage(i))
  }
  const handleTabDelete = (id: string) => {
    dispatch(deleteTabPage(id))
  }
  const handleAddDropShadow = (id: string) => {
    dispatch(addDropShadow())
  }

  return (
    <div>
      <SideMenu title={`Drop shadow config`} resetState={resetState}>
        <div className="menuContainer m-4  pb-4  ">
          {tabs && (
            <TabsNConditions
              tabs={tabs}
              currentTab={currentTab}
              handleSetTabPage={handleSetTabPage}
              handleOnDoubleClick={handleTabDelete}
              handleAddIconClick={handleAddDropShadow}
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
  )
}

export default DropShadowSidemenu
