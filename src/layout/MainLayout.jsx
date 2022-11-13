import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main className="mt-5">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default MainLayout;
