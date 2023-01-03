/** @format */

import React from "react"

type SideMenuProps = { title: string; children: React.ReactNode }

const SideMenu = ({ title, children, }: SideMenuProps) => {
  return (
    <div className="border-2 rounded-xl max-w-xl z-50">
      <h1 className="font-bold p-4 bg-primary rounded-t-xl">{title}</h1>
      {children}
    </div>
  )
}

export default SideMenu
