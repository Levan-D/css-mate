/** @format */

import React from "react"
// @ts-ignore
import { ReactComponent as RestartIcon } from "../../assets/icons/restart.svg"

type SideMenuProps = {
  title: string
  tabs?: { name: string; index: number }[]
  resetState?: Function
  children: React.ReactNode
}

const SideMenu = ({ title, tabs, children, resetState }: SideMenuProps) => {
  return (
    <div className="border-2 rounded-xl  z-50 w-96 h-fit mx-auto md:mx-0 ">
      <div className="flex p-4 pb-2 bg-primary rounded-t-xl justify-between">
        <h1 className="font-bold  select-none ">{title}</h1>
        {resetState && (
          <div>
            <RestartIcon
              height={30}
              className="hover:border-white  border-2 border-transparent rounded-full p-[3px] cursor-pointer translate-y-[-4px] "
              width={30}
              onClick={() => {
                if (resetState !== undefined) {
                  resetState()
                }
              }}
            />
          </div>
        )}
      </div>
      {tabs && (
        <div className="flex gap-2 bg-white text-dark py-1  px-3 font-semibold">
          {tabs.map((tab, i) => (
            <div className="cursor-pointer px-1 py-1" key={i}>
              {tab.name}
            </div>
          ))}
        </div>
      )}
      {children}
    </div>
  )
}

export default SideMenu
