/** @format */

//@ts-ignore
import { v4 as uuidv4 } from "uuid"

type Props = {
  handleTypeClick: (type: GradientBtnType) => void
  linType: GradientBtnType
}

export default function TypeBtns({ handleTypeClick, linType }: Props) {
  const typeBtns: GradientBtnType[] = ["linear", "radial", "conic"]
  return (
    <div className=" m-2  flex  justify-center  gap-2  ">
      {typeBtns.map(btn => (
        <div
          key={uuidv4()}
          onClick={() => handleTypeClick(btn)}
          className={`${
            linType === btn ? "btnSecondary" : "btnSecondaryDisabled"
          }  py-1  px-2  text-sm`}
        >
          {btn.charAt(0).toUpperCase() + btn.slice(1)}
        </div>
      ))}
    </div>
  )
}
