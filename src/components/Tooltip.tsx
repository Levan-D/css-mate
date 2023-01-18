/** @format */

import React, { memo } from "react"

export type TooltipProps = {
  children: React.ReactNode
  text: string
}

const Tooltip = memo(({ text, children }: TooltipProps) => {
  return (
    <span className="group relative">
      <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-dark border-[1px] border-white px-2 py-1 text-white text-sm opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-90">
        {text}
      </span>

      {children}
    </span>
  )
})

Tooltip.displayName = "Tooltip"

export default Tooltip
