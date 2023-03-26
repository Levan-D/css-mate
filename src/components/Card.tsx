/** @format */

import React from "react"
import { Link } from "react-router-dom"

type CardProps = {
  title: string
  children: React.ReactNode
  description: string
  path: string
  CSS?: string
}

const Card = ({ title, children, path, CSS, description }: CardProps) => {
  return (
    <Link to={path}>
      <div className="group h-[270px] w-[240px] [perspective:1000px]">
        <div
          className={`w-fit cursor-pointer select-none rounded-xl border-2  border-transparent  bg-slate-100 p-4 shadow-[6px_6px_4px_0px_rgba(_255,_114,_94,0.60)]        ease-in-out active:border-secondary-200  sm:hover:border-secondary-300 sm:hover:shadow-[0px_0px_37px_10px_rgba(_255,_114,_94,0.8)] ${CSS} relative h-full w-full   transition-all duration-500 [transform-style:preserve-3d] sm:group-hover:[transform:rotateY(180deg)]`}
        >
          <div>
            <h2 className="mb-2 text-center font-cursiveCustom text-xl text-slate-900 ">
              {title}
            </h2>
            {children}
          </div>

          <div className=" absolute inset-0 flex h-full w-full flex-col justify-between rounded-xl bg-darkJungle-800 p-4  text-center text-slate-100 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <h2 className="mb-2 text-center font-cursiveCustom text-xl  ">{title}</h2>
            <p className=" rounded-lg bg-darkJungle-600 p-4">{description}</p>

            <div className="btnSecondary mt-2 w-full font-bold">Open</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
