/** @format */

//@ts-ignore
import { v4 as uuidv4 } from "uuid"

type Props = { handleKindClick: (kind: kind) => void; kindType: kind }
type kind = "const" | "repeat"

export default function KindBtns({ handleKindClick, kindType }: Props) {
  const kindBtns: kind[] = ["const", "repeat"]

  return (
    <div className=" m-2  flex  justify-center   gap-2 ">
      {kindBtns.map(btn => (
        <div
          key={uuidv4()}
          onClick={() => handleKindClick(btn)}
          className={`${
            kindType === btn ? "btnSecondary" : "btnSecondaryDisabled"
          }  py-1  px-2  text-sm`}
        >
          {btn.charAt(0).toUpperCase() + btn.slice(1)}
        </div>
      ))}
    </div>
  )
}
