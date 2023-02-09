/** @format */

import { createRoutesFromElements, RouterProvider } from "react-router-dom"
import { Route, createBrowserRouter } from "react-router-dom"

// pages
import Home from "./pages/home/Home"
import BoxShadow from "./pages/shadows/boxShadow/BoxShadow"
import DropShadow from "./pages/shadows/dropShadow/DropShadow"
import TextShadow from "./pages/shadows/textShadow/TextShadow"
import Error from "./pages/error/Error"
import Cursors from "./pages/cursors/Cursors"
import Emojis from "./pages/emojis/Emojis"
import Entities from "./pages/entities/Entities"
import Gradient from "./pages/gradients/linearGradient/Gradient"
import FloofGPTFull from "./components/floofGPT/FloofGPTFull"

// layouts
import RootLayout from "./layouts/RootLayout"
import CategoryLayout from "./layouts/CategoryLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="shadows" element={<CategoryLayout />}>
        <Route path="box-shadow" element={<BoxShadow />} />
        <Route path="drop-shadow" element={<DropShadow />} />
        <Route path="text-shadow" element={<TextShadow />} />
      </Route>

      <Route path="gradients" element={<CategoryLayout />}>
        <Route path="gradient" element={<Gradient />} />
      </Route>

      <Route path="misc" element={<CategoryLayout />}>
        <Route path="cursors" element={<Cursors />} />
        <Route path="emojis" element={<Emojis />} />
        <Route path="entities" element={<Entities />} />
      </Route>

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
