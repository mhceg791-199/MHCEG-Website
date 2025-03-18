import React from "react";
import Footer from "./components/shared/Footer/Footer";
import { NavbarWithMegaMenu } from "./components/shared/Navbar/Navbar";

function Layout({ children }) {
  return (
    <>
      <NavbarWithMegaMenu />
      <div className="mt-14">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
