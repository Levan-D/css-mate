/** @format */

import React from "react"
import SideMenu from "../../components/wrappers/SideMenu"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import ReactSlider from "react-slider"
import ColorPicker from "../../components/ColorPicker"
import Presets from "./Presets"
import {
  setColor,
  resetState as resetStateAction,
  toggleInset,
  updateBoxShadow,
} from "./boxShadowSlice"
import { getBoxShadowTabs } from "./boxShadowSlice"

const BoxShadowSidemenu = () => {
  const dispatch = useAppDispatch()
  const { boxShadowData, currentTab } = useAppSelector(state => state.boxShadow)
  const tabs = useAppSelector(getBoxShadowTabs)

  const resetState = (): void => {
    dispatch(resetStateAction())
  }

  const HandleColorPick = (color: string) => {
    dispatch(setColor(color))
  }

  return (
    <div>
      <SideMenu title={`Box shadow config`} resetState={resetState} tabs={tabs}>
        <div className="p-4 ">
          {boxShadowData.map((boxShadow, index) => (
            <div key={index}>
              {currentTab === index &&
                Object.entries(boxShadow.settings).map((property, i) => {
                  if (property[0] !== "shadowColor" && property[0] !== "inset") {
                    return (
                      <div key={i} className="h-8 w-full mb-8 ">
                        <div className="flex justify-between">
                          <h2>
                            {property[0].charAt(0).toUpperCase() + property[0].slice(1)}
                          </h2>
                          <h2>
                            {property[0] === "opacity"
                              ? property[1] / 100
                              : `${property[1]}px`}
                          </h2>
                        </div>
                        <div className=" w-full h-[20px] mb-4">
                          <ReactSlider
                            className="customSlider"
                            trackClassName="customSlider-track"
                            thumbClassName="customSlider-thumb"
                            min={
                              property[0] === "horizontal" || property[0] === "vertical"
                                ? -150
                                : 0
                            }
                            max={property[0] === "opacity" ? 100 : 150}
                            defaultValue={property[1]}
                            value={property[1]}
                            onChange={value =>
                              dispatch(
                                updateBoxShadow({ value: value, name: property[0] })
                              )
                            }
                          />
                        </div>
                      </div>
                    )
                  }
                })}
            </div>
          ))}

          <hr className="mt-8 mb-4" />
          <div className="flex justify-between">
            <div
              onClick={() => dispatch(toggleInset())}
              className={`${
                !boxShadowData[0].settings.inset && `!bg-slate-400 text-slate-800`
              } btnPrimary text-sm`}
            >
              Inner
            </div>
            <ColorPicker HandleColorPick={HandleColorPick} />
          </div>

          <hr className="my-4" />

          <Presets />
        </div>
      </SideMenu>
    </div>
  )
}

export default BoxShadowSidemenu
