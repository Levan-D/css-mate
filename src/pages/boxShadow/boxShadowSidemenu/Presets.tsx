/** @format */

import React, { useState, memo } from "react"
import { boxShadowPresets } from "../Data"
//@ts-ignore
import { v4 as uuidv4 } from "uuid"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import TabsNConditions from "../../../components/wrappers/TabsNConditions"
import { setPreset, resetState } from "../boxShadowSlice"

const Presets = memo(() => {
  const dispatch = useAppDispatch()
  const [tabPage, setTabPage] = useState(0)
  const { boxShadowData } = useAppSelector(state => state.boxShadow)

  const tabs = boxShadowPresets.map((x, i) => {
    return { name: x.name, id: uuidv4() }
  })

  const handleSetTabPage = (i: number) => {
    setTabPage(() => i)
  }

  return (
    <div className="menuContainer mx-4 mb-4">
      <TabsNConditions
        tabs={tabs}
        currentTab={tabPage}
        handleSetTabPage={handleSetTabPage}
      >
        {boxShadowPresets.map((category, i) => (
          <div key={i} className="flex justify-center gap-6  ">
            {tabPage === i &&
              category.presets.map((preset, index) => (
                <div
                  key={index}
                  style={{
                    boxShadow: `${preset.settings.inset ? "inset" : ""} ${
                      preset.settings.horizontal
                    }px ${preset.settings.vertical}px ${preset.settings.blur}px ${
                      preset.settings.spread
                    }px rgba(${boxShadowData[0].settings.shadowColor},${
                      preset.settings.opacity / 100
                    })`,
                  }}
                  onClick={() => {
                    dispatch(resetState())
                    dispatch(setPreset(preset.settings))
                  }}
                  className="btnPrimary  mt-4 mb-6  h-10  w-10 p-0 text-center text-sm leading-[40px]"
                >
                  {preset.titile}
                </div>
              ))}
          </div>
        ))}
      </TabsNConditions>
    </div>
  )
})

export default Presets
