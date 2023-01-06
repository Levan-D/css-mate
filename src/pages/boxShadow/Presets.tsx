/** @format */

import React from "react"
import type { CurrentValueType } from "./BoxShadowTypes"
import { boxShadowPresets } from "./Data"
import { glowEffectPresets } from "./Data"

type PresetsProps = {
  setCurrentValue: React.Dispatch<React.SetStateAction<CurrentValueType>>
  setShadowColor: React.Dispatch<React.SetStateAction<string>>
  setInset: React.Dispatch<React.SetStateAction<boolean>>
  shadowColor: string
}

const Presets = ({
  setCurrentValue,
  setShadowColor,
  setInset,
  shadowColor,
}: PresetsProps) => {
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
              }px ${preset.settings.spread}px rgba(${shadowColor},${
                preset.settings.opacity / 100
              })`,
            }}
            onClick={() => {
              setInset(false)
              setCurrentValue(preset.settings)
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
              }px ${preset.settings.spread}px rgba(${shadowColor},${
                preset.settings.opacity / 100
              })`,
            }}
            onClick={() => {
              setInset(false)
              setCurrentValue(preset.settings)
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
