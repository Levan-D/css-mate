/** @format */

// input rgb string  like: #a24949

function componentToHex(c: number) {
  let hex = c.toString(16)

  return hex.length == 1 ? "0" + hex : hex
}

export default function RgbToHex(color: string) {
  let colorArray = color.split(",")

  return (
    "#" +
    componentToHex(Number(colorArray[0])) +
    componentToHex(Number(colorArray[1])) +
    componentToHex(Number(colorArray[2]))
  )
}
