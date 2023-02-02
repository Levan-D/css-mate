/** @format */

import { pageButtons } from "../data/PageButtons"
import { Outlet } from "react-router-dom"
import Card from "../components/Card"
import { useAppSelector } from "../app/hooks"

const CategoryLayout = () => {
  const { categoryIndex, pathArray } = useAppSelector(store => store.navbar)

  return (
    <div>
      {!pathArray[1] && (
        <div>
          <h2 className="mx-auto my-12 max-w-3xl   text-center font-cursiveCustom  text-4xl  ">
            {pageButtons[categoryIndex].catName}
          </h2>
          <div className="mx-auto  flex  w-fit flex-wrap justify-center gap-8">
            {pageButtons[categoryIndex].catCon.map((button, i) => (
              <div key={i}>
                <Card
                  title={button.name}
                  path={button.path}
                  CSS={`sm:hover:translate-y-[-10px]`}
                >
                  <div>
                    <img src={button.icon} alt="tool icons" className="pl-4" />
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      )}
      <Outlet />
    </div>
  )
}

export default CategoryLayout
