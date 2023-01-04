/** @format */

import React from "react"
// @ts-ignore
import { ReactComponent as RestartIcon } from "../../assets/icons/restart.svg"

type SideMenuProps = { title: string; resetState?: Function; children: React.ReactNode }

const SideMenu = ({ title, children, resetState }: SideMenuProps) => {
  return (
    <div className="border-2 rounded-xl  z-50 w-96 h-fit mx-auto md:mx-0   ">
      <div className="flex p-4 bg-primary rounded-t-xl justify-between">
        <h1 className="font-bold  select-none ">{title}</h1>
        {resetState && (
          <div>
            <RestartIcon
              height={20}
              className="hover:brightness-90 active:brightness-75 cursor-pointer"
              width={20}
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
