/** @format */

// input rgb string  like: 94,161,255

function componentToHex(c: number) {
  const hex = c.toString(16)

  return hex.length == 1 ? "0" + hex : hex
}

export default function RgbToHex(color: string) {
  const colorArray = color.split(",")

  return (
    "#" +
    componentToHex(Number(colorArray[0])) +
    componentToHex(Number(colorArray[1])) +
    componentToHex(Number(colorArray[2]))
  )
}
