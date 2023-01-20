/** @format */

export type CurrentValueType = {
  horizontal: number
  vertical: number
  blur: number
  spread: number
  opacity: number
}

export type boxShadowPresetsType = {
  name: string
  presets: {
    titile: string
    settings: {
      horizontal: number
      vertical: number
      blur: number
      spread: number
      opacity: number
      inset: boolean
      shadowColor: string
    }
  }[]
}
