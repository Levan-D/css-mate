/** @format */

import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit"
import { Configuration, OpenAIApi } from "openai"
import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
//@ts-ignore
import { v4 as uuidv4 } from "uuid"

export const askFloofGPT = createAsyncThunk(
  "floof/ask",
  async ({ prompt }: { prompt: string }, { rejectWithValue }) => {
    const configuration = new Configuration({
      apiKey: import.meta.env.VITE_Open_AI_Key,
    })
    const openai = new OpenAIApi(configuration)

    const options = {
      model: "text-davinci-003",
      temperature: 0.3,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    }

    let body = {
      ...options,
      prompt,
    }
    console.log(body)
    try {
      const response = await openai.createCompletion(body)
      console.log(response)

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
        console.log("pending")
        state.askFloofGPTStatus.loading = true
        state.askFloofGPTStatus.success = false
        state.askFloofGPTStatus.error = false
      })
      .addCase(askFloofGPT.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("fulfilled")
        state.askFloofGPTStatus.loading = false
        state.askFloofGPTStatus.success = true

        if (state.responseChain.length > 20) {
          state.responseChain.shift()
        }

        state.responseChain.push({
          user: "floofGPT",
          timeStamp: new Date().toLocaleString(),
          message: action.payload.data.choices[0].text,
        })
        
      })
      .addCase(askFloofGPT.rejected, (state, action: PayloadAction<any>) => {
        state.askFloofGPTStatus.loading = false
        state.askFloofGPTStatus.error = action.payload
        console.log("rejected")
      })
  },
})

export const { setIsOpen, setIsExpanded, pushUserResponse } = floofSlice.actions
export default floofSlice.reducer
