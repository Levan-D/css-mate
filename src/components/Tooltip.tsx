/** @format */

import React, { memo, useState } from "react"

export type TooltipProps = {
  text: string
  onClick?: boolean
  dArrow?: boolean
  children: React.ReactNode
}

const Tooltip = memo(({ text, children, onClick, dArrow }: TooltipProps) => {
  const [style, setStyle] = useState(onClick ? false : true)
  return (
    <span
      className="group relative"
      onClick={() => onClick && setStyle(() => true)}
      onMouseLeave={() => onClick && setStyle(() => false)}
    >
      {style && (
        <span
          className={` ${
            dArrow ? "before:border-t-slate-900" : "before:border-t-white"
          } pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl border-[1px] border-white bg-slate-900 px-2 py-1 text-sm text-white opacity-0  duration-200 before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4  before:border-transparent before:content-['']  sm:group-hover:opacity-100`}
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
