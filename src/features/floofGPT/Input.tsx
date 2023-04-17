/** @format */

import React, { useState, useRef, useEffect } from "react"
import SendIcon from "../../assets/icons/send.png"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { askFloofGPT, pushUserResponse } from "./floofGPTSlice"

const Input = () => {
  const { isOpen, askFloofGPTStatus } = useAppSelector(state => state.floof)
  const dispatch = useAppDispatch()
  const [inputText, setInputText] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
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
    <div className={` bg-primary p-2   shadow-primaryBr sm:rounded-b-xl`}>
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
            className={`mr-4 w-full rounded-md bg-blue-200 px-2 py-1 text-slate-900 outline  outline-transparent duration-200 `}
          />

          <button type="submit" value="Rename" className=" h-8">
            <img
              className="h-7 px-1 duration-200 active:brightness-75 sm:hover:brightness-90 "
              src={SendIcon}
              alt="send icon"
            />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Input
