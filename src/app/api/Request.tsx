/** @format */

import axios from "axios"

type RequestType = {
  method: string
  url: string
  headers?: any
  body?: any
}

const Request = async ({ method, url, headers, body }: RequestType) => {
  try {
    const res = await axios({
      method: method,
      url: url,
      data: body,
      headers: headers ? headers : "",
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
