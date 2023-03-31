/** @format */
import HexToRGB from "./HexToRGB"

export default function ContrastChecker(
  bgColor: string,
  textColor: string,
  fontLarge: boolean,
  fontBold: boolean
) {
  const bgLuminance = getRelativeLuminance(bgColor)
  const textLuminance = getRelativeLuminance(textColor)
  const contrastRatio =
    (Math.max(bgLuminance, textLuminance) + 0.05) /
    (Math.min(bgLuminance, textLuminance) + 0.05)

  const isLargeText = fontLarge ? true : fontBold ? true : false
  const isGigaLargeText = fontLarge && fontBold

  if (contrastRatio >= 7) {
    return { rating: "Great", ratio: "7 : 1" }
  } else if (contrastRatio >= 4.5 && isGigaLargeText) {
    return { rating: "Good", ratio: "4.5 : 1" }
  } else if (contrastRatio >= 4.5) {
    return { rating: "Ok", ratio: "4.5 : 1" }
  } else if (contrastRatio >= 2.9 && isLargeText) {
    return { rating: "Ok", ratio: "3 : 1" }
  } else if (contrastRatio >= 2.9) {
    return { rating: "Poor", ratio: "3 : 1" }
  } else {
    return { rating: "Fail", ratio: `${contrastRatio.toFixed(1)} : 1` }
  }
}

function getRelativeLuminance(color: string) {
  const rgb = HexToRGB(color).split(",")
  const r = getRelativeLuminanceChannel(Number(rgb[0]))
  const g = getRelativeLuminanceChannel(Number(rgb[1]))
  const b = getRelativeLuminanceChannel(Number(rgb[2]))
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function getRelativeLuminanceChannel(channelValue: number) {
  const srgbChannelValue = channelValue / 255
  if (srgbChannelValue <= 0.03928) {
    return srgbChannelValue / 12.92
  } else {
    return Math.pow((srgbChannelValue + 0.055) / 1.055, 2.4)
  }
}
