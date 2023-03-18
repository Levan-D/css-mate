/** @format */

type props = {
  colorString: string
  type: "HEX" | "RGB" | "HSL" | "CMYK" | "HSV"
}

export default function ColorValidator({ colorString, type }: props) {
  const HEXRegex = /^#[0-9A-F]{6}$/i
  const RGBRegex =
    /^(?:\s*(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\s*,){2}\s*(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\s*$/
  const HSLRegex =
    /(?<!\()\b(?:\d|[1-9]\d|[1-2]\d{2}|3[0-5]\d|360),\s*((0|[1-9]\d?|100)%),\s*((0|[1-9]\d?|100)%)\s*$/i
  const CMYKRegex =
    /^\s*((100(\.0+)?|[1-9]?\d(\.\d+)?)%?\s*,\s*){3}(100(\.0+)?|[1-9]?\d(\.\d+)?)%?\s*$/i

  let expression = colorString.replace(/[^,%#\d\w\s]/g, "")

  if (type === "HEX" && !expression.startsWith("#")) {
    expression = "#" + expression
  }
  let error = false

  switch (type) {
    case `HEX`:
      if (!HEXRegex.test(expression)) {
        error = true
      }
      break

    case `RGB`:
      if (!RGBRegex.test(expression)) {
        error = true
      }
      break

    case `HSL`:
      if (!HSLRegex.test(expression)) {
        error = true
      }
      break

    case `CMYK`:
      if (!CMYKRegex.test(expression)) {
        error = true
      }
      break

    case `HSV`:
      if (!HSLRegex.test(expression)) {
        error = true
      }
      break

    default:
      return { expression: expression, error: error }
  }

  return { expression: expression, error: error }
}
