/** @format */

import { pageButtons } from "../data/PageButtons";
import { Outlet } from "react-router-dom";
import Card from "../components/Card";
import { useAppSelector } from "../app/hooks";
import { Link } from "react-router-dom";
//@ts-ignore
import { v4 as uuidv4 } from "uuid";

const CategoryLayout = () => {
  const { categoryIndex, pathArray, windowWidth } = useAppSelector(
    (store) => store.navbar
  );
  const pageB = pageButtons[categoryIndex].catCon;

  const math = (270 * (pageB.length - 1)) / 2 + (32 * (pageB.length - 1)) / 2;
  console.log("screen.width:", window.innerWidth);
  return (
    <div>
      {!pathArray[1] ? (
        <div className="m  mt-[10vh]  ">
          <h2 className="mx-auto my-12 max-w-3xl   text-center font-cursiveCustom  text-4xl  ">
            {pageButtons[categoryIndex].catName}
          </h2>
          <div
            key={uuidv4()}
            style={{
              transform:
                pageB.length < 5 && pageB.length > 1 && window.innerWidth > 1152
                  ? `translate(-${math}px, 0px)`
                  : "",
            }}
            className={` relative mx-auto flex  w-fit flex-wrap justify-center gap-8`}
          >
            {pageB.map((button, i) => (
              <div
                key={i}
                style={
                  {
                    "--card-index": i,
                  } as React.CSSProperties
                }
                className={`${
                  pageB.length < 5 &&
                  pageB.length > 1 &&
                  window.innerWidth > 1152 &&
                  `card-animation `
                } ${window.innerWidth > 1152 && "card"}  w-fit `}
              >
                <Card
                  title={button.name}
                  path={button.path}
                  description={button.description}
                >
                  <div>
                    <img
                      src={button.icon}
                      alt="tool icons"
                      className="h-[195px] pl-4"
                    />
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className=" mx-auto mt-4  flex  w-fit flex-wrap justify-center">
          {windowWidth > 540 &&
            pageB.length > 1 &&
            pageB.map((button, i) => (
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
  );
};

export default CategoryLayout;
