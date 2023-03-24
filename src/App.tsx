/** @format */

import { createRoutesFromElements, RouterProvider } from "react-router-dom"
import { Route, createBrowserRouter } from "react-router-dom"

// pages
import Home from "./features/home/Home"
import Error from "./features/error/Error"
import FloofGPTFull from "./features/floofGPT/FloofGPTFull"

// layouts
import RootLayout from "./layouts/RootLayout"
import CategoryLayout from "./layouts/CategoryLayout"

// routes
import { pageButtons } from "./data/PageButtons"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      {pageButtons.map((routeMenu, index) => (
        <Route key={index} path={routeMenu.catPath} element={<CategoryLayout />}>
          {routeMenu.catCon.map((route, i) => (
            <Route key={i} path={route.path} element={<route.element />} />
          ))}
        </Route>
      ))}

      <Route path="floof-gpt" element={<FloofGPTFull />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
)

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
