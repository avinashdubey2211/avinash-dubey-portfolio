import React from "react";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
