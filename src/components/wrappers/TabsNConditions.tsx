/** @format */

import React from "react"
import Tooltip from "../Tooltip"
//@ts-ignore
import { ReactComponent as AddIcon } from "../../assets/icons/add.svg"

type TabsNConditionsType = {
  tabs: { name: string; id: string }[]
  currentTab: number
  children: React.ReactNode
  handleSetTabPage?: Function
  handleOnDoubleClick?: Function
  handleAddIconClick?: Function
}

const TabsNConditions = ({
  tabs,
  currentTab,
  handleSetTabPage,
  handleOnDoubleClick,
  handleAddIconClick,
  children,
}: TabsNConditionsType) => {
  return (
    <div>
      <div className="flex bg-blue-300 text-slate-900 gap-2  py-2  px-3 font-semibold  justify-between  select-none">
        <div className="flex flex-wrap ">
          {tabs.map((tab, i) => {
            const tooltipChild = (
              <div
                onClick={() => {
                  if (handleSetTabPage) {
                    handleSetTabPage(i)
                  }
                }}
                onDoubleClick={() => {
                  if (handleOnDoubleClick) {
                    handleOnDoubleClick(tab.id)
                  }
                }}
                className={` ${
                  i === currentTab && `bg-blue-400  text-white !opacity-100  shadow-primaryBr `
                }  cursor-pointer px-4 py-1 sm:hover:bg-blue-400 sm:hover:opacity-60  rounded-lg duration-200`}
              >
                {tab.name}
              </div>
            )
            return (
              <div key={i}>
                {handleOnDoubleClick && tabs.length > 1 ? (
                  <Tooltip text="Double click to delete">{tooltipChild}</Tooltip>
                ) : (
                  tooltipChild
                )}
              </div>
            )
          })}
        </div>
        {handleAddIconClick && (
          <AddIcon
            onClick={() => {
              if (handleAddIconClick) {
                handleAddIconClick()
              }
            }}
            height={32}
            width={32}
            stroke="#0f172a"
            className="sm:hover:bg-blue-400 sm:hover:opacity-90 p-2  rounded-full cursor-pointer duration-200"
          />
        )}
      </div>
      {children}
    </div>
  )
}

export default TabsNConditions
