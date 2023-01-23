/** @format */

import axios from "axios"

type RequestType = {
  method: string
  url: string
  headers: any
  body: any
  upload: boolean
}

const Request = async ({ method, url, headers, body, upload }: RequestType) => {
  const API_KEY = `AIzaSyA0p5lHhtitYsDTLG7Jm2BxuV9BpSqPG44`

  try {
    const res = await axios({
      method: method,
      url: upload ? `${url}` : `${url}${API_KEY}`,
      data: body,
      headers: headers,
      validateStatus: function (status) {
        return status >= 200 && status < 500
      },
    })

    if (res.status >= 200 && res.status < 300) {
      return res.data
    } else {
      throw res.data
    }
  } catch (error) {
    throw error
  }
}

export default Request
