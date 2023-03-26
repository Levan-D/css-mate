/** @format */

import { pageButtons } from "../data/PageButtons"
import { Outlet } from "react-router-dom"
import Card from "../components/Card"
import { useAppSelector } from "../app/hooks"
import { Link } from "react-router-dom"

const CategoryLayout = () => {
  const { categoryIndex, pathArray, windowWidth } = useAppSelector(store => store.navbar)

  return (
    <div>
      {!pathArray[1] ? (
        <div className="m  mt-[10vh]  ">
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
                    <img src={button.icon} alt="tool icons" className="h-[175px] pl-4" />
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className=" mx-auto mt-4  flex  w-fit flex-wrap justify-center">
          {windowWidth > 540 &&
            pageButtons[categoryIndex].catCon.length > 1 &&
            pageButtons[categoryIndex].catCon.map((button, i) => (
              <div
                key={i}
                className={`              
              ${
                pathArray[1] === button.path ? " !bg-secondary-300" : ""
              }   rounded-full  py-2 px-4 font-cursiveCustom duration-200  hover:bg-secondary-200`}
              >
                <Link to={button.path}>
                  <div> {button.name}</div>
                </Link>
              </div>
            ))}
        </div>
      )}

      <Outlet />
    </div>
  )
}

export default CategoryLayout
