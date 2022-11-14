import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import TopButton from "../components/TopButton/topButton";

const MainLayout = () => {
  const [viewportHeight, setViewportHeight] = useState(0);

  console.log(viewportHeight);

  const handleScroll = () => setViewportHeight(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <main className="my-5 min-vh-100">
        <Outlet />
      </main>
      <Footer />
      {viewportHeight > 1000 && <TopButton />}
    </>
  );
};

export default MainLayout;
