import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />

      <div className="App">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default MainLayout;