import { Navigate, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "../UI/Footer";
import { useContext } from "react";
import { GlobleContext } from "../GlobleState/GlobleState";

const Layout = () => {
  const { isSignedIn } = useContext(GlobleContext);
  if (!isSignedIn) {
    return <Navigate to="/Login" replace />;
  }
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
