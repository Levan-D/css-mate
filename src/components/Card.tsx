/** @format */

import React from "react"
import { Link } from "react-router-dom"

type CardProps = {
  title: string
  children: React.ReactNode
  path?: string
  CSS?: string
}

const Card = ({ title, children, path, CSS }: CardProps) => {
  return (
    <Link to={path ? path : "#"}>
      <div
        className={`w-fit border-2 border-transparent sm:hover:shadow-[0px_0px_37px_10px_rgba(_255,_114,_94,0.8)] shadow-[6px_6px_4px_0px_rgba(_255,_114,_94,0.60)]  cursor-pointer  sm:hover:border-secondary rounded-xl p-4      bg-slate-200  duration-300 ease-in-out  active:brightness-90 select-none ${CSS}`}
      >
        <h2 className="text-center mb-2 font-cursiveCustom text-xl text-slate-900 ">
          {title}
        </h2>
        {children}
      </div>
    </Link>
  )
}

export default Card
