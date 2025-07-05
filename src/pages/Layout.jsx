import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "./Home";

import { Routes, Route } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Layout;
