/** @format */

import BlogGenerator from "../../../../components/BlogGenerator"
import { data } from "./data"

const Tips = () => {
  return (
    <div className="mx-auto mt-56 max-w-3xl ">
      <BlogGenerator data={data} />
    </div>
  )
}

export default Tips
