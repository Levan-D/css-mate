/** @format */

import { useState } from "react"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import { Routes, Route } from "react-router-dom"
import BoxShadow from "./pages/boxShadow/BoxShadow"
import Error from "./pages/error/Error"

function App() {
  return (
    <div className="flex flex-col  min-h-screen	  ">
      <Navbar />
      <div className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="box-shadow" element={<BoxShadow />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
