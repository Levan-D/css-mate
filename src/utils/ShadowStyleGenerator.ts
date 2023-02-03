/** @format */

type settings = {
  horizontal: number
  vertical: number
  blur: number
  spread?: number
  opacity: number
  inset?: boolean
  shadowColor: string
}

export default function ShadowStyleGenerator(settings: settings, color: string) {
  if (settings.spread !== undefined) {
    return `${settings.inset ? "inset" : ""} ${settings.horizontal}px ${
      settings.vertical
    }px ${settings.blur}px ${settings.spread}px rgba(${color},${settings.opacity / 100})`
  } else {
    return `drop-shadow(${settings.horizontal}px ${settings.vertical}px ${
      settings.blur
    }px  rgba(${settings.shadowColor},${settings.opacity / 100}))`
  }
}
