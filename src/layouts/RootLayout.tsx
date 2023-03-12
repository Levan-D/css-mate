/** @format */

import BackToTopBtn from "../components/BackToTopBtn"
import FloofGPT from "../components/floofGPT/FloofGPT"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import { Outlet, useLocation } from "react-router-dom"
import { useAppSelector } from "../app/hooks"
import { selectGradientStyle } from "../pages/gradients/gradient/gradientSlice"

const RootLayout = () => {
  const location = useLocation()
  const linearGradient = useAppSelector(selectGradientStyle)

  return (
    <div
      className={`${
        location.pathname === "/floof-gpt" ? "bg-primary sm:bg-transparent" : ""
      } flex min-h-screen  flex-col overflow-x-hidden `}
      style={{
        background: location.pathname.includes("/gradients/") ? linearGradient : "",
      }}
    >
      <BackToTopBtn />
      <FloofGPT />
      <Navbar />

      <main className="mx-auto max-w-6xl grow">
        <Outlet />
      </main>

      {!location.pathname.includes("/gradients/") && <Footer />}
    </div>
  )
}

export default RootLayout
