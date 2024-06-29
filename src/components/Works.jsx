import React from "react";
import { Navbar, Footer, Terminal } from "../components";
import styles from "../style";
import ScrollToTop from "./ScrollToTop";

const Works = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <div className={`${styles.paddingX} flex-grow ${styles.flexCenter}`}>
        <Terminal />
      </div>
      <div className={`p-10`}>
        <Footer />
      </div>
    </div>
  );
};

export default Works;
