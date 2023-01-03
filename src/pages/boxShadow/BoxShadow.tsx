/** @format */

import React, { useState } from "react"
import SideMenu from "../../components/wrappers/SideMenu"
import ReactSlider from "react-slider"
import styles from "./BoxShadow.module.css"
import Shape from "./Shape"
import type { currentValueType } from "./BoxShadowTypes"

const BoxShadow = () => {
  const [currentValue, setCurrentValue] = useState<currentValueType>({
    horizontal: 12,
    vertical: 12,
    blur: 4,
    spread: 0,
    shadowColor: "0,0,0",
    shadowOpacity: 20,
  })

  return (
    <div>
      <SideMenu title={`Box Shadow Config`}>
        <div className="p-4 mb-4">
          <div className="h-8 w-full mb-8 ">
            <div className="flex justify-between">
              <h2>Horizontal offset</h2>
              <h2>{currentValue.horizontal}px</h2>
            </div>
            <div className=" w-full h-[20px] mb-4">
              <ReactSlider
                className={styles.customSlider}
                trackClassName={styles["customSlider-track"]}
                thumbClassName={styles["customSlider-thumb"]}
                min={-150}
                max={150}
                defaultValue={currentValue.horizontal}
                value={currentValue.horizontal}
                onChange={value =>
                  setCurrentValue(() => ({
                    ...currentValue,
                    horizontal: value as number,
                  }))
                }
              />
            </div>
          </div>

          <div className="h-8 w-full mb-8 ">
            <div className="flex justify-between">
              <h2>Vertical offset</h2>
              <h2>{currentValue.vertical}px</h2>
            </div>
            <div className=" w-full h-[20px] mb-4">
              <ReactSlider
                className={styles.customSlider}
                trackClassName={styles["customSlider-track"]}
                thumbClassName={styles["customSlider-thumb"]}
                min={-150}
                max={150}
                defaultValue={currentValue.vertical}
                value={currentValue.vertical}
                onChange={value =>
                  setCurrentValue(() => ({
                    ...currentValue,
                    vertical: value as number,
                  }))
                }
              />
            </div>
          </div>

          <div className="h-8 w-full mb-8 ">
            <div className="flex justify-between">
              <h2>Blur radius</h2>
              <h2>{currentValue.blur}px</h2>
            </div>
            <div className=" w-full h-[20px] mb-4">
              <ReactSlider
                className={styles.customSlider}
                trackClassName={styles["customSlider-track"]}
                thumbClassName={styles["customSlider-thumb"]}
                min={4}
                max={150}
                defaultValue={currentValue.blur}
                value={currentValue.blur}
                onChange={value =>
                  setCurrentValue(() => ({
                    ...currentValue,
                    blur: value as number,
                  }))
                }
              />
            </div>
          </div>

          <div className="h-8 w-full mb-8 ">
            <div className="flex justify-between">
              <h2>Spread radius</h2>
              <h2>{currentValue.spread}px</h2>
            </div>
            <div className=" w-full h-[20px] mb-4">
              <ReactSlider
                className={styles.customSlider}
                trackClassName={styles["customSlider-track"]}
                thumbClassName={styles["customSlider-thumb"]}
                min={0}
                max={150}
                defaultValue={currentValue.spread}
                value={currentValue.spread}
                onChange={value =>
                  setCurrentValue(() => ({
                    ...currentValue,
                    spread: value as number,
                  }))
                }
              />
            </div>
          </div>

          <div className="h-8 w-full mb-8 ">
            <div className="flex justify-between">
              <h2>Shadow opacity</h2>
              <h2>{currentValue.shadowOpacity / 100}</h2>
            </div>
            <div className=" w-full h-[20px] mb-4">
              <ReactSlider
                className={styles.customSlider}
                trackClassName={styles["customSlider-track"]}
                thumbClassName={styles["customSlider-thumb"]}
                min={0}
                max={100}
                defaultValue={currentValue.shadowOpacity}
                value={currentValue.shadowOpacity}
                onChange={value =>
                  setCurrentValue(() => ({
                    ...currentValue,
                    shadowOpacity: value as number,
                  }))
                }
              />
            </div>
          </div>
        </div>
      </SideMenu>
      <Shape currentValue={currentValue} />
    </div>
  )
}

export default BoxShadow
