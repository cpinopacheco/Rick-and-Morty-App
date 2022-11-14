import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main className="m-5 min-vh-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
