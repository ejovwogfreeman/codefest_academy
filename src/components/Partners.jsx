import React from "react";
import { Footer, Navbar, PartnerCarousel } from "../components";
import styles from "../style";
import ScrollToTop from "./ScrollToTop";

const Works = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <div className={`${styles.paddingX} flex-grow ${styles.flexCenter}`}>
        <PartnerCarousel />
      </div>
      <div className={`p-10`}>
        <Footer />
      </div>
    </div>
  );
};

export default Works;
