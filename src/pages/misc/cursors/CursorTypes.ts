/** @format */
import React, { ReactNode } from "react"

export type CursorType = {
  category: string
  contents: {
    name: string
    description?: string
    cssRule?: ReactNode
    vanilla: string
    tailwind: string
  }[]
}
