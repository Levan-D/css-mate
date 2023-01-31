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
      <div className="menuHeader flex  justify-between  gap-2  py-2   px-3  ">
        <div className="flex flex-wrap gap-2 ">
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
                  i !== currentTab && "btnSecondaryFalse"
                }  btnSecondary    `}
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
          <div className="mr-2 w-4">
            <AddIcon
              onClick={() => {
                if (handleAddIconClick) {
                  handleAddIconClick()
                }
              }}
              height={32}
              width={32}
              stroke="white"
              className="cursor-pointer  rounded-full  p-2 duration-200 sm:hover:bg-blue-300"
            />
          </div>
        )}
      </div>
      {children}
    </div>
  )
}

export default TabsNConditions
