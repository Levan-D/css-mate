/** @format */

import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import "./animations.css"
import { store } from "./app/store"
import { Provider } from "react-redux"

const rootElement = document.getElementById("root")

if (rootElement) {
  if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
      rootElement
    )
  } else {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
      rootElement
    )
  }
} else {
  console.error("Root element not found.")
}
