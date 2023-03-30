/** @format */

export default function RandomColorGenerator() {
  const [h, s, l] = getRandomHSLColor()
  return hslToRGB(h, s / 100, l / 100)
}

function getRandomHSLColor() {
  const hue = Math.floor(Math.random() * 361)
  const saturation = Math.floor(Math.random() * 61) + 40
  const lightness = Math.floor(Math.random() * 41) + 30

  return [hue, saturation, lightness]
}

function hslToRGB(h: number, s: number, l: number) {
  const a = s * Math.min(l, 1 - l)
  const f = (n: number) => {
    const k = (n + h / 30) % 12
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
  }
  const [r, g, b] = [f(0), f(8), f(4)]
  return `${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}`
}
