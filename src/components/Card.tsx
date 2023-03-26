/** @format */

import React from "react"
import { Link } from "react-router-dom"

type CardProps = {
  title: string
  children: React.ReactNode
  description: string
  path: string
}

const Card = ({ title, children, path, description }: CardProps) => {
  return (
    <Link to={path}>
      <div className="group h-[270px] w-[240px] duration-200 [perspective:1000px] sm:hover:translate-y-[-10px]">
        <div
          className={`cardShadow relative h-full w-full  cursor-pointer  select-none rounded-xl border-2    border-transparent bg-slate-100   p-4 shadow-[6px_6px_4px_0px_rgba(_255,_114,_94,0.60)]  transition-all delay-100 duration-500 ease-in-out [transform-style:preserve-3d]   hover:shadow-none active:border-secondary-200 sm:hover:border-secondary-300 sm:group-hover:[transform:rotateY(180deg)]`}
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
