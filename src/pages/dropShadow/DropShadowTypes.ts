/** @format */

export type CurrentValueType = {
  horizontal: number
  vertical: number
  blur: number
  opacity: number
}

export type dropShadowPresetsType = {
  name: string
  presets: {
    titile: string
    settings: {
      horizontal: number
      vertical: number
      blur: number
      opacity: number
      inset: boolean
      shadowColor: string
    }
  }[]
}
