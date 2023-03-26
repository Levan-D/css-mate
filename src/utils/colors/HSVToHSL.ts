/** @format */

export default function HSVToHSL(hsv_str: string) {
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

  const rz = r / 255
  const gz = g / 255
  const bz = b / 255

  const max = Math.max(rz, gz, bz)
  const min = Math.min(rz, gz, bz)
  const delta = max - min

  let hz = 0
  let sz = 0
  let lz = (max + min) / 2

  if (delta !== 0) {
    sz = delta / (1 - Math.abs(2 * lz - 1))

    switch (max) {
      case rz:
        hz = ((gz - bz) / delta) % 6
        break
      case gz:
        hz = (bz - rz) / delta + 2
        break
      case bz:
        hz = (rz - gz) / delta + 4
        break
    }
  }

  hz = Math.round(hz * 60)
  sz = Math.round(sz * 100)
  lz = Math.round(lz * 100)

  return `${hz}, ${sz}%, ${lz}%`
}
