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
        className={`w-fit cursor-pointer select-none rounded-xl border-2  border-transparent  bg-slate-200 p-4 shadow-[6px_6px_4px_0px_rgba(_255,_114,_94,0.60)]      duration-300  ease-in-out active:brightness-90  sm:hover:border-secondary sm:hover:shadow-[0px_0px_37px_10px_rgba(_255,_114,_94,0.8)] ${CSS}`}
      >
        <h2 className="mb-2 text-center font-cursiveCustom text-xl text-slate-900 ">
          {title}
        </h2>
        {children}
      </div>
    </Link>
  )
}

export default Card
