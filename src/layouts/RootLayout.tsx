/** @format */

import BackToTopBtn from "../components/BackToTopBtn"
import FloofGPT from "../features/floofGPT/FloofGPT"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/Footer"
import { Outlet, useLocation } from "react-router-dom"
import { useAppSelector } from "../app/hooks"
import { selectGradientStyle } from "../features/colors/gradientMaker/gradientSlice"

const RootLayout = () => {
  const location = useLocation()
  const linearGradient = useAppSelector(selectGradientStyle)

  return (
    <div
      className={`${
        location.pathname === "/floof-gpt" ? "bg-primary sm:bg-transparent" : ""
      } flex min-h-screen  flex-col overflow-x-hidden `}
      style={{
        background: location.pathname.includes("/gradient-maker") ? linearGradient : "",
      }}
    >
      <BackToTopBtn />
      <FloofGPT />
      <Navbar />

      <main className="mx-auto max-w-6xl grow">
        <Outlet />
      </main>

      {!location.pathname.includes("/gradient-maker") && <Footer />}
    </div>
  )
}

export default RootLayout
