/** @format */

import { useState, useEffect } from "react"
import { pageButtons } from "../data/PageButtons"
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
import Card from "../components/Card"

const CategoryLayout = () => {
  const location = useLocation()

  const findPath = location.pathname.split("/").filter(n => n)
  console.log(findPath[1])
  const [visibility, setVisibility] = useState(true)

  const index = pageButtons.findIndex(x => x.catPath === findPath[0])

  useEffect(() => {
    if (findPath[1]) {
      setVisibility(() => false)
    } else setVisibility(() => true)
  }, [location])

  return (
    <div>
      {visibility && (
        <div className="mx-auto my-12  flex  w-fit flex-wrap justify-center gap-8">
          {pageButtons[index].catCon.map((button, i) => (
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
      )}
      <Outlet />
    </div>
  )
}

export default CategoryLayout
