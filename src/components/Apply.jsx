import React from "react";
import styles from "../style";
import { Navbar, Footer, ImageCardList } from "../components";
import slide_image_1 from "../assets/Photos/Apply (1).jpg";
import slide_image_2 from "../assets/Photos/Apply (2).jpg";
import slide_image_3 from "../assets/Photos/Apply (5).jpg";
import slide_image_4 from "../assets/Photos/Apply (3).jpg";
import slide_image_5 from "../assets/Photos/Apply (4).jpg";
import travel from "../assets/Photos/travel.jpg";
import ScrollToTop from "./ScrollToTop";

const imageData = [
  {
    image: slide_image_1,
    writeup: "STEM (Coding) School",
    to: "stem",
  },
  {
    image: slide_image_2,
    writeup: "IT Courses 1 - 3 months",
    to: "it-course",
  },
  {
    image: slide_image_3,
    writeup: "IT career training and Job placement",
    to: "it-career",
  },
  {
    image: slide_image_4,
    writeup: "Diploma program",
    to: "diploma",
  },
  {
    image: slide_image_5,
    writeup: "Center leasing/CBT",
    to: "cbt",
  },
  // Add more data objects for additional cards
];

const Banner = () => {
  return (
    <div
      className="bg-image py-5 text-center m-5 mt-20 mb-0 rounded"
      style={{
        backgroundImage: `url('${travel}')`,
        height: "300px", // Adjust the height as needed
        position: "relative",
      }}
    >
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></div>
      <p
        className="text-white mb-5 m-1"
        style={{
          position: "relative",
          zIndex: 2,
          fontSize: "2.5rem",
          fontWeight: "bold",
        }}
      >
        Travel Abroad
      </p>
      <p
        className="text-white mb-5 m-1"
        style={{
          position: "relative",
          zIndex: 2,
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        Explore Exciting Opportunities Abroad
      </p>
      <a
        href="http://bit.ly/WorkLiveAbroad" // Updated URL
        className="btn btn-primary text-white text-center font-bold font-lg"
        style={{
          transition: "transform 0.3s ease-in-out", // Added animation
          display: "inline-block",
          textDecoration: "none",
          position: "relative",
          zIndex: 2,
          fontSize: "1.2rem",
          fontWeight: "bold",
          padding: "1rem 2rem",
          borderRadius: "40px",
          backgroundColor: "#646cffaa", // Button background color
          border: "none",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", // Button shadow
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.1)"; // Scale up on hover
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)"; // Reset to normal size on mouse leave
        }}
        onClick={(e) => {
          e.target.style.transform = "scale(0.9)"; // Scale down on click
        }}
      >
        Apply Now
      </a>
    </div>
  );
};

const Apply = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <Banner />
      <div
        className={`flex-grow bg-primary ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth} p-5`}>
          <ImageCardList cardData={imageData} />
        </div>
      </div>

      <div className={`p-10`}>
        <Footer />
      </div>
    </div>
  );
};

export default Apply;
