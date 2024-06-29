import React from "react";
import styles from "../../style";
import { Navbar, Footer, Form } from "..";
import ScrollToTop from "../ScrollToTop";

const Apply = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <div
        className={`flex-grow bg-primary ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Form />
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        </div>
      </div>

      <div className={`p-10`}>
        <Footer />
      </div>
    </div>
  );
};

export default Apply;
