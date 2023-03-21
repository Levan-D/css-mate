/** @format */

import { useAppDispatch } from "../../../../app/hooks"
import { setReverse } from "../paletteSlice"

export default function ReverseBtn() {
  const dispatch = useAppDispatch()

  return (
    <div className="my-4 mx-2">
      <div
        className="btnSecondary  w-full text-center font-semibold"
        onClick={() => dispatch(setReverse())}
      >
        Reverse
      </div>
    </div>
  )
}
