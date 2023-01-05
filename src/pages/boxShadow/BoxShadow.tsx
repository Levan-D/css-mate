/** @format */

import React, { useState } from "react"
import SideMenu from "../../components/wrappers/SideMenu"
import ReactSlider from "react-slider"
import styles from "./BoxShadow.module.css"
import Shape from "./Shape"
import Output from "../../components/wrappers/Output"
import type { CurrentValueType } from "./BoxShadowTypes"
import ColorPicker from "../../components/ColorPicker"
import { OutputRenderArrayType } from "../../components/wrappers/WrapperTypes"

const BoxShadow = () => {
  const [shadowColor, setShadowColor] = useState<string>("255,255,255")
  const [inset, setInset] = useState<boolean>(false)
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

  const resetState = (): void => {
    setShadowColor("256,256,256")
    setInset(false)
    setCurrentValue({
      horizontal: 12,
      vertical: 12,
      blur: 4,
      spread: 0,
      opacity: 20,
    })
  }

  const HandleColorPick = (color: string) => {
    setShadowColor(() => color)
  }

  const renderArray: OutputRenderArrayType[] = [
    {
      title: "Vanilla",
      copy: `box-shadow: ${boxShadowRender};
      -webkit-box-shadow: ${boxShadowRender};
      -moz-box-shadow: ${boxShadowRender};`,
      content: [
        `box-shadow: ${boxShadowRender};`,
        `-webkit-box-shadow: ${boxShadowRender};`,
        `-moz-box-shadow: ${boxShadowRender};`,
      ],
    },
    {
      title: "Tailwind inline",
      copy: `shadow-[${boxShadowRender.replace(/ /g, "_")}]`,
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

  const boxShadowPresets = [
    {
      titile: "S",
      settings: {
        horizontal: 2,
        vertical: 2,
        blur: 1,
        spread: 0,
        opacity: 20,
      },
    },
    {
      titile: "M",
      settings: {
        horizontal: 4,
        vertical: 4,
        blur: 2,
        spread: 0,
        opacity: 16,
      },
    },
    {
      titile: "L",
      settings: {
        horizontal: 8,
        vertical: 8,
        blur: 4,
        spread: 0,
        opacity: 16,
      },
    },
    {
      titile: "XL",
      settings: {
        horizontal: 12,
        vertical: 12,
        blur: 6,
        spread: 0,
        opacity: 24,
      },
    },
    {
      titile: "2XL",
      settings: {
        horizontal: 16,
        vertical: 16,
        blur: 8,
        spread: 0,
        opacity: 28,
      },
    },
  ]

  return (
    <div className=" max-w-6xl  mx-auto mt-10  mb-20 ">
      <div className="md:flex-row flex flex-col md:justify-center justify-between md:gap-8 gap-16 lg:gap-36 mb-16 ">
        <SideMenu title={`Box shadow config`} resetState={resetState}>
          <div className="p-4 ">
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
            <hr className="mt-12 mb-8" />
            <div className="flex justify-between">
              <div
                onClick={() => setInset(x => !x)}
                className={`${!inset && `!bg-slate-400 text-slate-800`} btnPrimary`}
              >
                Inner
              </div>
              <ColorPicker HandleColorPick={HandleColorPick} />
            </div>
            <hr className="my-8" />

            <div className="flex justify-center gap-4 mb-4">
              {boxShadowPresets.map((preset, i) => (
                <div
                  key={i}
                  style={{
                    boxShadow: `${preset.settings.horizontal}px ${
                      preset.settings.vertical
                    }px ${preset.settings.blur}px ${
                      preset.settings.spread
                    }px rgba(${shadowColor},${preset.settings.opacity / 100})`,
                  }}
                  onClick={() => setCurrentValue(preset.settings)}
                  className={`btnPrimary   p-0  w-14 h-14 leading-[56px]  text-center`}
                >
                  {preset.titile}
                </div>
              ))}
            </div>
          </div>
        </SideMenu>
        <div>
          <Shape currentValue={currentValue} shadowColor={shadowColor} inset={inset} />
        </div>
      </div>
      <Output title="CSS rules" renderArray={renderArray} />
    </div>
  )
}

export default BoxShadow
