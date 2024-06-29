import React from "react";
import Navbar from "./Main/Navbar";
import Footer from "./Main/Footer";
import BackgroundImage from "./Main/BackgroundImage";
import styles from "../style";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Coverflow from "./Main/Coverflow";
import ScrollToTop from "./ScrollToTop";

import slide_image_1 from "../assets/Photos/Background (5).jpg";
import slide_image_2 from "../assets/Photos/Background (3).jpg";
import slide_image_3 from "../assets/Photos/Background (7).jpg";

const photos = [slide_image_1, slide_image_2, slide_image_3];

const CareerNav = () => {
  const [ref, inView] = useInView({
    threshold: 0.5, // Trigger animation when component is 50% in view
  });

  const container = {
    visible: { opacity: 1, y: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <BackgroundImage photos={photos} />
      <Coverflow />
      <div
        className={`flex-grow bg-primary ${styles.paddingX} ${styles.flexCenter}`}
        ref={ref}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CareerNav;
