/** @format */

import errorKitty from "../../assets/error/error.png"
//@ts-ignore
import { Helmet } from "react-helmet"

const Error = () => {
  return (
    <div className="mx-auto my-16 w-fit">
      <Helmet>
        <title>Error - CSS Mate</title>
        <meta name="description" content="Error page" />
      </Helmet>
      <img src={errorKitty} alt="error cat" />
    </div>
  )
}

export default Error
