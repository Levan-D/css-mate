/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"

export const askFloofGPT = createAsyncThunk(
  "floof/ask",
  async ({ prompt }: { prompt: string }, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "GET",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        url: "https://api.levandolidze.me/floof",
        params: { prompt: prompt },
      })

      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

interface responseTextState {
  user: string
  timeStamp: string
  message: string
}

interface floofState {
  isOpen: boolean
  isExpanded: boolean
  askFloofGPTStatus: {
    error: boolean | string
    loading: boolean
    success: boolean
  }
  responseChain: responseTextState[]
}

const initialState: floofState = {
  isOpen: false,
  isExpanded: false,
  askFloofGPTStatus: {
    error: false,
    loading: false,
    success: false,
  },
  responseChain: [
    {
      user: "floofGPT",
      timeStamp: new Date().toLocaleString(),
      message:
        "Hello,  I'm Floof-GPT. I'm your personal assistant that uses OpenAI's GPT-3 API. I'm still in development, so I'm not the best in the biz yet.",
    },
    {
      user: "floofGPT",
      timeStamp: new Date().toLocaleString(),
      message:
        "You can expand the chat by left clicking the arrow on top right... anyways, what can I help you with?",
    },
  ],
}

const floofSlice = createSlice({
  name: "floofGPT",
  initialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },
    setIsExpanded: (state, action: PayloadAction<boolean | undefined>) => {
      if (action.payload === undefined) {
        state.isExpanded = !state.isExpanded
      } else state.isExpanded = action.payload
    },
    pushUserResponse: (state, action: PayloadAction<{ prompt: string }>) => {
      if (state.responseChain.length > 20) {
        state.responseChain.shift()
      }

      state.responseChain.push({
        user: "user",
        timeStamp: new Date().toLocaleString(),
        message: action.payload.prompt,
      })
    },
  },

  extraReducers: builder => {
    builder
      .addCase(askFloofGPT.pending, state => {
        state.askFloofGPTStatus.loading = true
        state.askFloofGPTStatus.success = false
        state.askFloofGPTStatus.error = false
      })
      .addCase(askFloofGPT.fulfilled, (state, action: PayloadAction<any>) => {
        state.askFloofGPTStatus.loading = false
        state.askFloofGPTStatus.success = true

        if (state.responseChain.length > 20) {
          state.responseChain.shift()
        }

        state.responseChain.push({
          user: "floofGPT",
          timeStamp: new Date().toLocaleString(),
          message: action.payload.data.response,
        })
      })
      .addCase(askFloofGPT.rejected, (state, action: PayloadAction<any>) => {
        state.askFloofGPTStatus.loading = false

        state.askFloofGPTStatus.error = action.payload.message

        state.responseChain.push({
          user: "floofGPT",
          timeStamp: new Date().toLocaleString(),
          message:
            "Error:" + " " + action.payload.message + "." + " Please, refresh the page or try again later.",
        })
      })
  },
})

export const { setIsOpen, setIsExpanded, pushUserResponse } = floofSlice.actions
export default floofSlice.reducer
