/** @format */

import React, { memo, useState } from "react"

export type TooltipProps = {
  text: string
  onClick?: boolean
  children: React.ReactNode
}

const Tooltip = memo(({ text, children, onClick }: TooltipProps) => {
  const [style, setStyle] = useState(onClick ? false : true)
  return (
    <span
      className="group relative"
      onClick={() => onClick && setStyle(() => true)}
      onMouseLeave={() => onClick && setStyle(() => false)}
    >
      {style && (
        <span
          className={`pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-slate-900 border-[1px] border-white px-2 py-1 text-white text-sm opacity-0  before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-white before:content-[''] group-hover:opacity-100  duration-200`}
        >
          {text}
        </span>
      )}

      {children}
    </span>
  )
})

Tooltip.displayName = "Tooltip"

export default Tooltip
