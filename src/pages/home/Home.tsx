/** @format */

import React from "react"
import { pageButtons } from "../../data/PageButtons"
import Card from "../../components/Card"

const Home = () => {
  return (
    <div className="my-16 mx-4">
      <div className="text-center max-w-3xl mx-auto   font-cursiveCustom">
        <div className="text-6xl ">Hello,</div>
        <h1 className="text-xl mt-6 ">
          Welcome to our collection of
          <span className="text-secondary"> CSS and HTML tools! </span>
          Whether you're a seasoned web developer or just getting started, our tools are
          designed to make your life easier. Here, you'll find a wide range of tools to
          help you create beautiful and responsive websites with minimal effort.
        </h1>
        <br />
        <div className="text-xl ">Pick one below to start!</div>
      </div>
      <div className="flex flex-wrap  mx-auto  w-fit gap-8 my-12 justify-center">
        {pageButtons.map((button, index) => (
          <div key={index}>
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
  )
}

export default Home
