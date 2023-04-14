/** @format */

type CatDisplayDataType = {
  category: string
  content: {
    character: ReactNode | string
    hexadecimal: string
    description?: string
  }[]
}

type OutputRenderArrayType = {
  title: string
  copy: string
  content: JSX.Element[] | string[]
}

type GradientBtnType = "linear" | "conic" | "radial"
type GradientBtnKind = "const" | "repeat"

type BlogDataType = {
  title: React.ReactNode
  id: string
  sections: {
    title: string
    id: string
    content: Content[]
  }[]
}

type PaletteSwatchesType = {
  name: string
  colors: string[]
}

type ChromePickerType = {
  hex: string
  rgb: {
    r: number
    g: number
    b: number
    a: number
  }
  hsl: {
    h: number
    s: number
    l: number
    a: number
  }
}

type PageButtonsType = {
  catName: string
  catPath: string
  catCon: {
    name: string
    path: string
    element: React.ComponentType<any>
    description: string
    icon: string
  }[]
}
interface initialGradientStateType {
  type: "linear" | "conic" | "radial"
  kind: "repeating" | "constant"

  linearParams: {
    degree: number
  }
  radialParams: {
    shape: string
    coords: { x: number; y: number }
  }
  conicParams: {
    degree: number
    coords: { x: number; y: number }
  }

  stops: {
    id: string
    stop: {
      percent: number
      color: string
      opacity: number
    }
  }[]
}

type GradientSwatchesType = {
  name: string
  type: GradientBtnType
  stops: {
    id: string
    stop: { percent: number; color: string; opacity: number }
  }[]
}
