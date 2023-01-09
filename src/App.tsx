/** @format */

import { useState } from "react"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import { Routes, Route } from "react-router-dom"
import BoxShadow from "./pages/boxShadow/BoxShadow"
import Error from "./pages/error/Error"
import Cursors from "./pages/cursors/Cursors"
import Emojis from "./pages/emojis/Emojis"

function App() {
  return (
    <div className="flex flex-col  min-h-screen	 ">
      <Navbar />
      <div className="grow max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="box-shadow" element={<BoxShadow />} />
          <Route path="cursors" element={<Cursors />} />
          <Route path="emojis" element={<Emojis />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
