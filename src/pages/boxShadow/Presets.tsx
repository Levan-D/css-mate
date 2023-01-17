/** @format */

import React from "react"
import { boxShadowPresets } from "./Data"
import { glowEffectPresets } from "./Data"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setPreset, resetState } from "./boxShadowSlice"

const Presets = () => {
  const dispatch = useAppDispatch()
  const { boxShadowData } = useAppSelector(state => state.boxShadow)
  return (
    <div>
      <h3 className=" mb-2">Box presets</h3>
      <div className="flex justify-center gap-8 mb-4">
        {boxShadowPresets.map((preset, i) => (
          <div
            key={i}
            style={{
              boxShadow: `${preset.settings.horizontal}px ${preset.settings.vertical}px ${
                preset.settings.blur
              }px ${preset.settings.spread}px rgba(${
                boxShadowData[0].settings.shadowColor
              },${preset.settings.opacity / 100})`,
            }}
            onClick={() => {
              dispatch(resetState())
              dispatch(setPreset(preset.settings))
            }}
            className={`btnPrimary   p-0  w-10 h-10 leading-[40px] text-sm text-center`}
          >
            {preset.titile}
          </div>
        ))}
      </div>

      <h3 className=" mb-2">Glow Presets</h3>
      <div className="flex justify-center gap-8 mb-4">
        {glowEffectPresets.map((preset, i) => (
          <div
            key={i}
            style={{
              boxShadow: `${preset.settings.horizontal}px ${preset.settings.vertical}px ${
                preset.settings.blur
              }px ${preset.settings.spread}px rgba(${
                boxShadowData[0].settings.shadowColor
              },${preset.settings.opacity / 100})`,
            }}
            onClick={() => {
              dispatch(resetState())
              dispatch(setPreset(preset.settings))
            }}
            className={`btnPrimary   p-0  w-10 h-10 leading-[40px] text-sm text-center`}
          >
            {preset.titile}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Presets
