/** @format */

import BackToTopBtn from "../components/BackToTopBtn";
import FloofGPT from "../features/floofGPT/FloofGPT";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectGradientStyle } from "../features/colors/gradientMaker/gradientSlice";
import Slider from "../components/slider/Slider";

const RootLayout = () => {
  const { path } = useAppSelector((store) => store.navbar);

  const linearGradient = useAppSelector(selectGradientStyle);

  return (
    <div
      className={`${
        path.includes("/floof-gpt") ? "bg-primary sm:bg-transparent" : ""
      } flex min-h-screen  flex-col overflow-x-hidden `}
      style={{
        background: path.includes("/gradient-maker") ? linearGradient : "",
      }}
    >
      {/* <BackToTopBtn /> */}
      {/* <FloofGPT /> */}
      <Slider />
      <Navbar />

      <main className="mx-auto max-w-6xl grow">
        <Outlet />
      </main>

      {!location.pathname.includes("/gradient-maker") && <Footer />}
    </div>
  );
};

export default RootLayout;
