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
  setTabPage,
  deleteTabPage,
} from "./boxShadowSlice"
import { getBoxShadowTabs, addBoxShadow } from "./boxShadowSlice"
//@ts-ignore
import { ReactComponent as AddIcon } from "../../assets/icons/add.svg"
import Tooltip from "../../components/Tooltip"

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

  const handlePropertyChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    let value = Number(e.target.value)

    if (name === "opacity") {
      value = value * 100
    }

    if (name === "vertical" || name === "horizontal") {
      if (value > 150) {
        value = 150
      } else if (value < -150) {
        value = -150
      }
    } else if (name === "blur" || name === "spread") {
      if (value > 150) {
        value = 150
      } else if (value < 0) {
        value = 0
      }
    } else if (name === "opacity") {
      if (value > 100) {
        value = 100
      } else if (value < 0) {
        value = 0
      }
    }

    dispatch(
      updateBoxShadow({
        value: value,
        name: name,
      })
    )
  }

  return (
    <div>
      <SideMenu title={`Box shadow config`} resetState={resetState}>
        <div>
          {/* tab navbar */}
          {tabs && (
            <div className="flex bg-slate-400 text-white gap-2  py-1  px-3 font-semibold  justify-between  select-none">
              <div className="flex flex-wrap ">
                {tabs.map((tab, i) => (
                  <div key={i}>
                    <Tooltip text="Double click to delete">
                      <div
                        onClick={() => dispatch(setTabPage(i))}
                        onDoubleClick={() => dispatch(deleteTabPage(tab.id))}
                        className={` ${
                          i === currentTab && `bg-slate-500   !opacity-90 `
                        }  cursor-pointer px-4 py-1 hover:bg-slate-500 hover:opacity-60  rounded-lg duration-200`}
                      >
                        {tab.name}
                      </div>
                    </Tooltip>
                  </div>
                ))}
              </div>
              <AddIcon
                onClick={() => dispatch(addBoxShadow())}
                height={32}
                width={32}
                stroke="white"
                className="hover:bg-slate-500 hover:opacity-90 p-2  rounded-full cursor-pointer duration-200"
              />
            </div>
          )}
          {/* tab navbar */}

          <div className="p-4">
            {/* sliders */}
            {boxShadowData.map((boxShadow, index) => (
              <div key={index}>
                {currentTab === index &&
                  Object.entries(boxShadow.settings).map((property, i) => {
                    if (property[0] !== "shadowColor" && property[0] !== "inset") {
                      return (
                        <div key={i} className="h-8 w-full mb-8 ">
                          <div className="flex justify-between">
                            <h2>
                              {property[0].charAt(0).toUpperCase() + property[0].slice(1)}{" "}
                              &#160;
                              {property[0] !== "opacity" ? (
                                <span className="text-slate-400 text-sm ">
                                  &#40;&#32;px&#32;&#41;
                                </span>
                              ) : (
                                <span className="text-slate-400 text-sm">
                                  &#40;&#32;I&#32;&#41;
                                </span>
                              )}
                            </h2>

                            <h2>
                              {property[0] === "opacity" ? (
                                <input
                                  type="number"
                                  value={property[1] / 100}
                                  step={0.01}
                                  onChange={e => handlePropertyChange(e, property[0])}
                                  className="w-14 text-right bg-slate-700 rounded-md"
                                />
                              ) : (
                                <input
                                  type="number"
                                  value={property[1]}
                                  onChange={e => handlePropertyChange(e, property[0])}
                                  className="w-14  text-right bg-slate-700  rounded-md"
                                />
                              )}
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
            {/* sliders */}

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
        </div>
      </SideMenu>
    </div>
  )
}

export default BoxShadowSidemenu
