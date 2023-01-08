/** @format */

import React from "react"
import { pageButtons } from "../../data/PageButtons"
import Card from "../../components/Card"

const Home = () => {
  return (
    <div>
      <div className="text-center  mt-16 font-cursiveCustom">
        <div className="text-6xl ">Hello,</div>
        <div className="text-xl mt-6 ">
          CSS Mate is here to offer you many
          <span className="text-secondary"> useful tools</span> for css rule creation and
          demonstration .
        </div>
        <div className="text-xl ">Pick one below to start!</div>
      </div>
      <div className="flex flex-wrap  mx-auto  w-fit gap-8 my-12 justify-center">
        {pageButtons.map((button, index) => (
          <div key={index}>
            <Card
              title={button.name}
              path={button.path}
              CSS={`hover:translate-y-[-10px]`}
            >
              <div>
                <img src={button.icon} alt="tool icons" className="pl-4" />
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
