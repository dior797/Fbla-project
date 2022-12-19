import { Outlet } from "react-router-dom";
import '../Navbar.css'
import Top from '../pages/Navbar'
import Footer from "../pages/Footer";

const Layout = () => {
  return (
    <>
    <Top />
      <Outlet />
      <Footer/>
       </>
  )
};

export default Layout;