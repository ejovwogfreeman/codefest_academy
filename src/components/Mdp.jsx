import React from "react";
import styles from "../style";
import { Navbar, Footer, ImageCardList } from "../components";
import travel from "../assets/Photos/travel.jpg";
import img from "../assets/microsoft.png";
import ScrollToTop from "./ScrollToTop";

const Banner = () => {
  return (
    <div
      className="bg-image py-5 text-center m-5 mb-0 rounded"
      style={{
        backgroundImage: `url('${img}')`,
        height: "300px", // Adjust the height as needed
        position: "relative",
        paddingTop: "50px",
        marginTop: "120px",
        display: "flex",
        flexDirection: "column", // Ensures content stacks vertically
        alignItems: "center", // Center horizontally
        justifyContent: "center", // Center vertically
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
        MDP Registration
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
        MicroSoft skills for Jobs in Cloud and Cybersecurity
      </p>
      <a
        href="https://forms.gle/pAQvnxxZwh19fhg56" // Updated URL
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
          backgroundColor: "#646cff", // Button background color
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

const Mdp = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <Banner />
      <div
        className={`bg-primary ${styles.paddingX}`}
        style={{
          color: "white",
          padding: "50px",
          background: "black", // Linear
          //   width: "80%",
          margin: "auto",
        }} // Set to column to stack elements top-down
      >
        <h1 className="text-center font-bold text-4xl mb-8">
          Welcome to Codefest Institute of Technology
        </h1>
        {/* <p className="mb-5">
          Greetings everyone, I congratulate you for joining the Q/A sessions
          and embarking on the next career path.
        </p> */}
        <p className="mb-5">
          Codefest Institute of Technology/Codefest International specializes in
          training, test preparation, and certifications in IT courses and
          career paths. Codefest Institute is headquartered in Lagos, with
          additional branches in Abuja and Ebonyi State (eLearning campus).
        </p>
        <p className="mb-5">
          I welcome you to the next batch of MICROSOFT SKILLS for Jobs in Cloud
          and Cybersecurity by KAMK University Finland, with an 85% Grant from
          the European Union. Africans need not pay N3.5 million for the entire
          program. E-MMERX is the authorized company in Nigeria for the program,
          and Codefest is a mentor/strategic partner.
        </p>
        <p className="mb-5">
          The program is completed within a year, after which jobs are provided
          remotely across Europe by companies involved with Microsoft. A
          cybersecurity professional earns an average of $50 per hour or $7000
          per month.
        </p>
        <h2 className="font-bold text-2xl mb-3">
          CODEFEST shall provide mentor/clarity class during the program
        </h2>
        <p className="mb-5">We have two batches in 2024:</p>
        <ul className="list-disc pl-8 mb-5">
          <li>
            <strong>Batch 1</strong> - Commencement/Induction Date: November 9th
          </li>
          <li>
            Enrollment Fee: N450,000 (includes course, exam, certifications, and
            mentorship)
          </li>
          <li>
            <strong>Batch 2</strong> - Commencement/Induction Date: December 7th
          </li>
          <li>
            Enrollment Fee: This will be announced next week and will reflect
            the current dollar rise/inflation
          </li>
        </ul>
        <p className="mb-5">
          <strong>Note:</strong>
        </p>
        <ul className="list-disc pl-8 mb-5">
          <li>
            Endeavour to fill the data capture form{" "}
            <a
              className="text-blue-600"
              href="https://forms.gle/pAQvnxxZwh19fhg56"
            >
              Register Now
            </a>
          </li>
          <li>
            All payments should go to:
            <ul className="pl-8">
              <li>Zenith Bank</li>
              <li>CODEFEST International</li>
              <li>Account Number: 1016084310</li>
              <li>Send payment proof to 09061817858</li>
            </ul>
          </li>
          <li>
            You need a computer or a good smartphone and internet for the
            program.
          </li>
          <li>
            You will obtain 6 certificates during the program and badges. After
            each certificate, you can start applying for jobs.
          </li>
          <li>
            Ensure your enrollment fees are paid before the class starting date.
          </li>
          <li>
            If you want to take this initiative to your town, state, or country,
            contact us for guidance.
          </li>
        </ul>
        <p className="mb-5">
          For inquiries and official correspondence, send a message to
          +2349061817858 or email{" "}
          <a
            href="mailto:faculty@codefestuniversity.online"
            className="text-blue-600"
          >
            faculty@codefestuniversity.online
          </a>
          .
        </p>
        <p className="font-bold">For, Codefest Institute</p>
        <p className="font-bold">Signed,</p>
        <p className="font-bold">Moss Uromtah, President</p>
      </div>

      <div className={`p-10`}>
        <Footer />
      </div>
    </div>
  );
};

export default Mdp;
