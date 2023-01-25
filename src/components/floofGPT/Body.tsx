/** @format */

import React, { useRef, useEffect } from "react"
import { useAppSelector } from "../../app/hooks"
import FlooFGPTIcon from "../../assets/icons/floofGPT.png"
import UserIcon from "../../assets/icons/user.png"

const Body = () => {
  const { responseChain, askFloofGPTStatus } = useAppSelector(state => state.floof)

  const recogRef = useRef<any>()

  useEffect(() => {
    recogRef.current.scrollIntoView({
      behavior: "smooth",
    })
  }, [responseChain, askFloofGPTStatus.loading])

  return (
    <div className="grow bg-gradient-to-br from-slate-200 to-blue-200 px-2 overflow-y-scroll overflow-x-hidden   ">
      {responseChain.map((response, index) => (
        <div key={index} className={`break-normal mb-4 `}>
          <div
            className={`flex gap-2 ${
              response.user === "floofGPT" ? "" : "flex-row-reverse"
            } text-slate-900   `}
          >
            <div className="border shadow-md rounded-full">
              <img
                className="w-6 bg-primary rounded-full "
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
              } px-2 w-fit  py-1 my-1 rounded-xl shadow-primaryBr  max-w-[90%] `}
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
            <img className="w-6 bg-primary rounded-full " src={FlooFGPTIcon} alt="" />
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
