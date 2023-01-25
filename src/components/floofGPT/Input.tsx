/** @format */

import React, { useState, useRef, useEffect } from "react"
import SendIcon from "../../assets/icons/send.png"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { askFloofGPT, pushUserResponse } from "./floofGPTSlice"
import { useLocation } from "react-router-dom"

const Input = () => {
  const { isOpen, askFloofGPTStatus } = useAppSelector(state => state.floof)
  const dispatch = useAppDispatch()
  const [inputText, setInputText] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const location = useLocation()
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!askFloofGPTStatus.loading) {
      dispatch(pushUserResponse({ prompt: inputText }))
      dispatch(askFloofGPT({ prompt: inputText }))
      setInputText(() => "")
    }
  }

  useEffect(() => {
    if (inputRef.current != null) {
      setInputText(() => "")
      inputRef.current.focus()
    }
  }, [isOpen])

  return (
    <div
      className={`${
        location.pathname === "/floof-gpt" ? "" : "rounded-b-xl"
      } bg-primary  p-2 shadow-primaryBr`}
    >
      <form onSubmit={handleFormSubmit}>
        <div className="flex justify-between">
          <input
            type="text"
            required
            ref={inputRef}
            value={inputText}
            onChange={e => {
              setInputText(e.target.value)
            }}
            autoComplete="off"
            name="name"
            className={`w-full mr-4 rounded-md text-slate-900 px-2 py-1 outline duration-200  outline-transparent bg-blue-200 `}
          />

          <button type="submit" value="Rename" className=" h-8">
            <img
              className="h-7 px-1 sm:hover:brightness-90 active:brightness-75 duration-200 "
              src={SendIcon}
              alt=""
            />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Input
