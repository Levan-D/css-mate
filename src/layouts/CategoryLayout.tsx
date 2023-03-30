/** @format */

import { pageButtons } from "../data/PageButtons"
import { Outlet } from "react-router-dom"
import Card from "../components/Card"
import { useAppSelector } from "../app/hooks"
import { Link } from "react-router-dom"
//@ts-ignore
import { v4 as uuidv4 } from "uuid"
import styles from "./categoryLayout.module.css"

const CategoryLayout = () => {
  const { categoryIndex, pathArray, windowWidth } = useAppSelector(store => store.navbar)

  const pageBLength =
    pageButtons[categoryIndex].catCon.length > 4
      ? 4
      : pageButtons[categoryIndex].catCon.length

  const pageBHeight = Math.ceil(pageButtons[categoryIndex].catCon.length / 4)

  const translate = (270 * (pageBLength - 1)) / 2

  return (
    <div>
      {!pathArray[1] ? (
        <div className=" mt-[10vh]  ">
          <h2 className=" mx-auto my-12 flex w-fit max-w-3xl  select-none text-center  !font-cursiveCustom text-4xl ">
            {pageButtons[categoryIndex].catName.split("").map((letter, i) => (
              <div
                key={uuidv4()}
                style={{ animationDelay: `${0.1 * i}s` }}
                className={styles.waveText}
              >
                {letter}
              </div>
            ))}
          </h2>
          <div
            key={uuidv4()}
            style={{
              transform:
                pageBLength > 1 && window.innerWidth > 1060
                  ? `translate(-${translate}px, 0px) `
                  : "",
              height:
                pageBLength > 1 && window.innerWidth > 1060
                  ? `${pageBHeight * 300}px `
                  : "",
            }}
            className={`grid-container  mx-auto  mb-20 flex w-fit flex-wrap justify-center  gap-8`}
          >
            {pageButtons[categoryIndex].catCon.map((button, i) => (
              <div
                key={i}
                style={
                  {
                    "--card-index": i % 4,
                    "--card-row": Math.floor(i / 4),
                  } as React.CSSProperties
                }
                className={`${
                  pageBLength > 1 && window.innerWidth > 1060 && styles.cardAnimation
                } ${window.innerWidth > 1060 && styles.card}  w-fit `}
              >
                <Card
                  title={button.name}
                  path={button.path}
                  description={button.description}
                >
                  <div>
                    <img src={button.icon} alt="tool icons" className="h-[195px] pl-4" />
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className=" mx-auto mt-4  flex  w-fit flex-wrap justify-center">
          {windowWidth > 540 &&
            pageBLength > 1 &&
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
