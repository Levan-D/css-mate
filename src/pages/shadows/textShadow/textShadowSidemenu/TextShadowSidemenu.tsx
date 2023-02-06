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
  selectTextShadowTabs,
  addTextShadow,
} from "../textShadowSlice"
import Sliders from "./Sliders"
import TabsNConditions from "../../../../components/wrappers/TabsNConditions"

const TextShadowSidemenu = () => {
  const dispatch = useAppDispatch()
  const { currentTab } = useAppSelector(state => state.textShadow)
  const tabs = useAppSelector(selectTextShadowTabs)

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
  const handleAddTextShadow = (id: string) => {
    dispatch(addTextShadow())
  }

  return (
    <div>
      <SideMenu title={`Text shadow config`} resetState={resetState}>
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
  )
}

export default TextShadowSidemenu
