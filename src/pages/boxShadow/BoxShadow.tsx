/** @format */

import React, { useState } from "react"
import SideMenu from "../../components/wrappers/SideMenu"
import ReactSlider from "react-slider"
import styles from "./BoxShadow.module.css"
import Shape from "./Shape"
import Output from "../../components/wrappers/Output"
import type { CurrentValueType } from "./BoxShadowTypes"

const BoxShadow = () => {
  const [shadowColor, setShadowColor] = useState("256,256,256")
  const [currentValue, setCurrentValue] = useState<CurrentValueType>({
    horizontal: 12,
    vertical: 12,
    blur: 4,
    spread: 0,
    opacity: 20,
  })
  let boxShadowRender = `${currentValue.horizontal}px ${currentValue.vertical}px ${
    currentValue.blur
  }px ${currentValue.spread}px rgba(${shadowColor},${currentValue.opacity / 100})`

  const resetState = () => {
    setShadowColor("256,256,256")
    setCurrentValue({
      horizontal: 12,
      vertical: 12,
      blur: 4,
      spread: 0,
      opacity: 20,
    })
  }

  const renderArray = [
    {
      title: "Vanilla",
      copy: `box-shadow: ${boxShadowRender};
      -webkit-box-shadow: ${boxShadowRender};
      -moz-box-shadow: ${boxShadowRender};`,
      content: [
        `box-shadow: ${boxShadowRender}`,
        `-webkit-box-shadow: ${boxShadowRender}`,
        `-moz-box-shadow: ${boxShadowRender}`,
      ],
    },
    {
      title: "Tailwind custom",
      copy: [`shadow-[${boxShadowRender.replace(/ /g, "_")}]`],
      content: [`shadow-[${boxShadowRender.replace(/ /g, "_")}]`],
    },
    {
      title: "Tailwind extend",
      copy: `"custom": "${boxShadowRender}"`,
      content: [
        <span className="select-none text-slate-400">
          module.exports = &#x2774; <br /> &nbsp;&nbsp;&nbsp;theme: &#x2774; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;extend: &#x2774; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;boxShadow: &#x2774;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className=" select-text text-white ">
            &#34;custom &#34;: &#34;{boxShadowRender}&#34;
          </span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x2775; <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x2775; , <br />
          &nbsp;&nbsp;&nbsp; &#x2775; , <br /> &#x2775;
        </span>,
      ],
    },
  ]

  return (
    <div className=" max-w-4xl  mx-auto pt-16 ">
      <div className="md:flex-row flex flex-col justify-between md:gap-8 gap-16 mb-16">
        <SideMenu title={`Box shadow config`} resetState={resetState}>
          <div className="p-4 mb-4">
            {Object.keys(currentValue).map((key, i) => (
              <div key={i} className="h-8 w-full mb-8 ">
                <div className="flex justify-between">
                  <h2>{key.charAt(0).toUpperCase() + key.slice(1)}</h2>
                  <h2>
                    {key === "opacity"
                      ? currentValue[key as keyof CurrentValueType] / 100
                      : `${currentValue[key as keyof CurrentValueType]}px`}
                  </h2>
                </div>
                <div className=" w-full h-[20px] mb-4">
                  <ReactSlider
                    className={styles.customSlider}
                    trackClassName={styles["customSlider-track"]}
                    thumbClassName={styles["customSlider-thumb"]}
                    min={key === "horizontal" || key === "vertical" ? -150 : 0}
                    max={key === "opacity" ? 100 : 150}
                    defaultValue={currentValue[key as keyof CurrentValueType]}
                    value={currentValue[key as keyof CurrentValueType]}
                    onChange={value =>
                      setCurrentValue(() => ({
                        ...currentValue,
                        [key as string]: value as number,
                      }))
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </SideMenu>
        <div>
          <Shape currentValue={currentValue} shadowColor={shadowColor} />
        </div>
      </div>
      <div className="mb-16">
        <Output title="CSS rules" renderArray={renderArray} />
      </div>
    </div>
  )
}

// boxShadow: `${horizontal}px ${vertical}px ${blur}px ${spread}px rgba(${shadowColor},${

export default BoxShadow
