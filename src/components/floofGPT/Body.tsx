/** @format */

import React, { useRef, useEffect } from "react"
import { useAppSelector } from "../../app/hooks"
import FlooFGPTIcon from "../../assets/icons/floofGPT.png"
import UserIcon from "../../assets/icons/user.png"

const Body = () => {
  const { responseChain, askFloofGPTStatus } = useAppSelector(state => state.floof)

  const recogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (recogRef.current != null) {
      recogRef.current.scrollIntoView({
        behavior: "smooth",
      })
    }
  }, [responseChain, askFloofGPTStatus.loading])

  return (
    <div className="grow overflow-x-hidden overflow-y-scroll bg-gradient-to-br from-slate-200 to-blue-200 px-2   ">
      {responseChain.map((response, index) => (
        <div key={index} className={`mb-4 break-normal `}>
          <div
            className={`flex gap-2 ${
              response.user === "floofGPT" ? "" : "flex-row-reverse"
            } text-slate-900   `}
          >
            <div className="rounded-full border shadow-md">
              <img
                className="w-6 rounded-full bg-primary "
                src={response.user === "floofGPT" ? FlooFGPTIcon : UserIcon}
                alt=""
              />
            </div>
            <div className="text-sm leading-6  "> {response.timeStamp.split(",")[1]}</div>
          </div>
          <div
            className={` ${
              response.user === "floofGPT" ? " justify-start" : " justify-end"
            }  flex`}
          >
            <div
              className={`${
                response.user === "floofGPT" ? " bg-secondary" : "  bg-primary"
              } my-1 w-fit  max-w-[90%] rounded-xl px-2 py-1  shadow-primaryBr `}
            >
              {response.message}
            </div>
          </div>
        </div>
      ))}
      <div ref={recogRef}></div>
      {askFloofGPTStatus.loading && (
        <div className="flex">
          <div>
            <img className="w-6 rounded-full bg-primary " src={FlooFGPTIcon} alt="" />
          </div>
          <div className="lds-ripple translate-x-2">
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Body
