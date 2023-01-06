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
          CSS Mate is here to offer you many useful css creation and demonstration tools.
        </div>
        <div className="text-xl ">Pick one below to start.</div>
      </div>
      <div className="flex flex-wrap  mx-auto  w-fit gap-8 my-12 justify-center">
        {pageButtons.map((button, index) => (
          <div key={index}>
            <Card title={button.name} path={button.path}>
              <div>
                <img src={button.icon} alt="tool icons" />
              </div>
            </Card>
          </div>
        ))}
        {pageButtons.map((button, index) => (
          <div key={index}>
            <Card title={button.name} path={button.path}>
              <div>
                <img src={button.icon} alt="tool icons" />
              </div>
            </Card>
          </div>
        ))}
        {pageButtons.map((button, index) => (
          <div key={index}>
            <Card title={button.name} path={button.path}>
              <div>
                <img src={button.icon} alt="tool icons" />
              </div>
            </Card>
          </div>
        ))}
        {pageButtons.map((button, index) => (
          <div key={index}>
            <Card title={button.name} path={button.path}>
              <div>
                <img src={button.icon} alt="tool icons" />
              </div>
            </Card>
          </div>
        ))}
        {pageButtons.map((button, index) => (
          <div key={index}>
            <Card title={button.name} path={button.path}>
              <div>
                <img src={button.icon} alt="tool icons" />
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
