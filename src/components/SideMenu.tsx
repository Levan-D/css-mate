/** @format */

import React, { useState } from "react";
// @ts-ignore
import { ReactComponent as RestartIcon } from "../assets/icons/restart.svg";

type SideMenuProps = {
  title: string;
  resetState?: Function;

  children: React.ReactNode;
};

const SideMenu = ({ title, children, resetState }: SideMenuProps) => {
  const [visi, setVisi] = useState(true);

  const handleVisi = () => {
    setVisi((x) => !x);
  };

  if (!visi) {
    return (
      <div
        className="h-10 cursor-pointer text-6xl leading-8"
        onClick={handleVisi}
      >
        &#128065;
      </div>
    );
  }

  return (
    <div
      className={` ${
        visi ? "" : "hidden"
      }  z-40 mx-auto  h-fit w-96 rounded-xl border-2 bg-darkJungle-900 md:mx-0`}
    >
      <div className="menuHeader flex justify-between gap-4 !bg-primary  p-4  pb-2  ">
        <h2 className=" mb-1 grow select-none font-cursiveCustom">{title}</h2>

        {resetState && (
          <div>
            <RestartIcon
              height={30}
              className="translate-y-[-4px]  cursor-pointer rounded-full border-2 border-transparent p-[3px] sm:hover:border-white "
              width={30}
              onClick={() => {
                if (resetState !== undefined) {
                  resetState();
                }
              }}
            />
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default SideMenu;
