/** @format */
import React, { ReactNode } from "react"

export type OutputRenderArrayType = {
  title: string
  copy: string
  content: JSX.Element[] | string[]
}

export type CatDisplayDataType = {
  category: string
  content: {
    character: ReactNode | string
    hexadecimal: string
    description?: string
  }[]
}
