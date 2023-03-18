/** @format */

export default function HSVToCMYK(hsv_str: string) {
  // convert input string to array of integers
  const hsv = hsv_str.split(",").map(x => parseFloat(x))

  // convert hsl values to range [0, 1]
  const h = hsv[0]
  const s = hsv[1] / 100
  const v = hsv[2] / 100

  // Calculate the RGB values
  let c = v * s
  let x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  let m = v - c

  let r, g, b
  if (h >= 0 && h < 60) {
    r = c
    g = x
    b = 0
  } else if (h >= 60 && h < 120) {
    r = x
    g = c
    b = 0
  } else if (h >= 120 && h < 180) {
    r = 0
    g = c
    b = x
  } else if (h >= 180 && h < 240) {
    r = 0
    g = x
    b = c
  } else if (h >= 240 && h < 300) {
    r = x
    g = 0
    b = c
  } else {
    r = c
    g = 0
    b = x
  }

  r = Math.round((r + m) * 255)
  g = Math.round((g + m) * 255)
  b = Math.round((b + m) * 255)

  // Convert the RGB values to hexadecimal format
  const kz = 1 - Math.max(r, g, b) / 255
  const cmy = [
    (1 - r / 255 - kz) / (1 - kz),
    (1 - g / 255 - kz) / (1 - kz),
    (1 - b / 255 - kz) / (1 - kz),
  ]
  const cz = Math.round(cmy[0] * 100)
  const mz = Math.round(cmy[1] * 100)
  const yz = Math.round(cmy[2] * 100)

  return `${cz}%, ${mz}%, ${yz}%, ${Math.round(kz * 100)}%`
}
