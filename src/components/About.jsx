import React from "react";
import styles from "../style";
import { Navbar, Footer, Info } from "../components";
import ScrollToTop from "./ScrollToTop";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <div
        className={`flex-grow bg-primary ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Info />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX}`}>
        <Footer />
      </div>
    </div>
  );
};

export default About;
