/** @format */

import { Link } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"

type Props = {
  category: PageButtonsType
  subMenuVis: string
  windowWidth: number
  handleSubMenuClick: (path: string) => void
}

const DropDown = ({ category, subMenuVis, windowWidth, handleSubMenuClick }: Props) => {
  const { pathArray } = useAppSelector(store => store.navbar)

  const dropDownVisibility =
    windowWidth < 768 && subMenuVis === category.catPath
      ? "!block !opacity-100 !visible !scale-y-100  cursor-default  "
      : ""

  return (
    <div
      className={`${
        subMenuVis === category.catPath && `bg-slate-500`
      }   mx-8 rounded-b-lg sm:mx-16   md:mx-0`}
    >
      <ul
        className={` ${dropDownVisibility} dropdown-transition collapse hidden origin-top translate-x-[0] rounded-lg  border-0  bg-none from-[#151f36] to-slate-900 px-4 py-2 opacity-0 ease-in-out  md:absolute md:block md:translate-x-[-40px] md:scale-y-0  md:border-2 md:bg-gradient-to-r md:shadow-[2px_4px_8px_0px_rgba(94,_161,_255,0.7)] md:group-hover:visible md:group-hover:scale-y-100 md:group-hover:opacity-100`}
      >
        {category.catCon.map((btn, index) => (
          <li
            key={index}
            onClick={() => handleSubMenuClick(category.catPath)}
            className={`   ${pathArray[1] === btn.path ? " !bg-secondary-300" : ""} 
            mx-8 shrink-0  select-none  rounded-2xl font-cursiveCustom text-base  font-bold duration-300  hover:bg-secondary-200 active:brightness-75 sm:mx-16 md:mx-0 md:text-lg `}
          >
            <Link
              className="inline-block w-full cursor-pointer px-4 pt-2 pb-1 md:pt-1 md:pb-0"
              to={category.catPath + "/" + btn.path}
            >
              {btn.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DropDown
