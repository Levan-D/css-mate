/** @format */

import React from "react"
// @ts-ignore
import { ReactComponent as RestartIcon } from "../../assets/icons/restart.svg"

type SideMenuProps = {
  title: string
  resetState?: Function
  children: React.ReactNode
}

const SideMenu = ({ title, children, resetState }: SideMenuProps) => {
  return (
    <div className="border-2 rounded-xl  z-50 w-96 h-fit mx-auto md:mx-0  ">
      <div className="flex p-4 pb-2 bg-primary rounded-t-xl justify-between  ">
        <h2 className="font-bold  select-none ">{title}</h2>
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

      {children}
    </div>
  )
}

export default SideMenu
