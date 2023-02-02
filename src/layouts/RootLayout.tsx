/** @format */

import BackToTopBtn from "../components/BackToTopBtn"
import FloofGPT from "../components/floofGPT/FloofGPT"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import { Outlet, useLocation } from "react-router-dom"

const RootLayout = () => {
  const location = useLocation()
  return (
    <div
      className={`${
        location.pathname === "/floof-gpt" ? "bg-primary sm:bg-transparent" : ""
      } flex min-h-screen  flex-col overflow-x-hidden  `}
    >
      <BackToTopBtn />
      <FloofGPT />
      <Navbar />

      <main className="mx-auto max-w-6xl grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default RootLayout
