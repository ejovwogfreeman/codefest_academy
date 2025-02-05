import React from "react";
import styles from "../style";
import { Navbar, Footer, ImageCardList } from "../components";
import travel from "../assets/Photos/travel.jpg";
import img from "../assets/microsoft.png";
import logo from "../assets/emmerx-logo.png";
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
        marginTop: "130px",
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
        className={`flex-grow bg-primary ${styles.paddingX} ${styles.flexCenter}`}
        style={{ margin: "50px 0px" }}
      >
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6">
            Course <span style={{ color: "#646cff" }}>Overview</span>
          </h2>
          <p className="text-lg text-gray-700">
            Cybersecurity professionals are in high demand! Stand out with a
            Microdegree from KAMK University Finland. There is no future except
            the one we create. If you are looking to build a career in tech,
            this is your sure path!
          </p>
          <p className="text-lg text-gray-700 mt-4">
            “The cybersecurity workforce gap reached 4 million in 2023, with
            gross earnings over $112,000” – Forbes.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Cloud and Cybersecurity expertise is one of the top skills employers
            seek today. Not only that, this program earns you 12 ECTS credits.
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
              padding: "0.7rem 2rem",
              borderRadius: "40px",
              width: "100%",
              marginTop: "30px",
              marginBottom: "30px",
              backgroundColor: "#646cff", // Button background color
              border: "none",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", // Button shadow
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)"; // Scale up on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)"; // Reset to normal size on mouse leave
            }}
            onClick={(e) => {
              e.target.style.transform = "scale(0.9)"; // Scale down on click
            }}
          >
            Enroll Now
          </a>
          <br />
          <hr />
          <h2 className="text-3xl font-bold text-center mt-8 mb-4">
            Admission <span style={{ color: "#646cff" }}>Requirements</span>
          </h2>
          <ul className="list-disc ml-8 text-lg text-gray-700">
            <li>No educational qualification is required.</li>
            <li>Proficiency in English is key.</li>
            <li>
              A good laptop or smart mobile device and reliable internet
              connection.
            </li>
          </ul>
          <br />
          <hr />
          <h2 className="text-3xl font-bold text-center mt-8 mb-4">
            Course <span style={{ color: "#646cff" }}>Outline</span>
          </h2>
          <p className="text-lg text-gray-700">
            The Cloud and Cybersecurity Study Program consists of six courses
            brought to you by experts from Microsoft and mentor companies. After
            completing the program, you’ll have essential knowledge on cloud
            services and cybersecurity as well as Microsoft’s Azure.
          </p>
          <br />
          <hr />
          <h2 className="text-3xl font-bold text-center mt-8 mb-4">Fee</h2>
          <p className="text-lg text-gray-700">
            A one-off payment of ₦550,000 for the entire duration of the
            program.
          </p>
          <br />
          <hr />
          <h2 className="text-3xl font-bold text-center mt-8 mb-4">
            Program <span style={{ color: "#646cff" }}>Outcomes</span>
          </h2>
          <p className="text-lg text-gray-700">
            After completing the program, you’ll be well-equipped to tackle
            Microsoft certificate exams (AZ-900, SC-900 AZ-104, AZ-500, SC-100)
            and receive shareable badges to show off your new skills.
          </p>
          <p className="text-lg text-gray-700">
            You’ll earn 6 Certificates of completion and a Cloud and
            Cybersecurity Professional Micro Degree after passing the final
            exam.
          </p>
          <br />
          <hr />
          <h2 className="text-3xl font-bold text-center mt-8 mb-4">
            Special <span style={{ color: "#646cff" }}>Offer</span>
          </h2>
          <p className="text-lg text-gray-700">
            Limited-time offer for students.
            <ul className="list-disc ml-8 text-lg text-gray-700">
              <li>Course Fee without EU Grant: ₦3,540,000. </li>
              <li>
                Course Fee with EU Grant: A one-off payment of ₦450,000 for the
                entire duration of the program. (Till December 28th 2024).
              </li>
            </ul>
          </p>
          <br />
          <hr />
          <h2 className="text-3xl font-bold text-center mt-8 mb-4">
            Payment <span style={{ color: "#646cff" }}>Details</span>
          </h2>
          <p className="text-lg text-gray-700">
            Make payment to the account below before registering:
          </p>
          <ul className="list-disc ml-8 text-lg text-gray-700">
            <li>
              <strong>Account Number:</strong> 1016084310
            </li>
            <li>
              <strong>Account Name:</strong> CODEFEST International Ltd
            </li>
            <li>
              <strong>Bank:</strong> Zenith bank
            </li>
          </ul>
          <br />
          <hr />
          <br />
          <div className="contact-info">
            <h2 className="mb-2">
              WhatsApp: &nbsp;
              <a
                href="https://wa.me/2349061817858"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                +2349061817858
              </a>
            </h2>

            <h2 className="mb-2">
              Mail: &nbsp;
              <a
                href="mailto:faculty@codefestuniversity.online"
                className="text-blue-600"
              >
                faculty@codefestuniversity.online
              </a>
            </h2>

            <h2>
              Authorized by: &nbsp;
              <img
                src={logo}
                alt="E-MMERX logo"
                className="ml-2 inline-block"
                style={{ width: "200px", height: "auto" }}
              />
            </h2>
          </div>
        </div>
      </div>
      <div className={`p-10`}>
        <Footer />
      </div>
    </div>
  );
};

export default Mdp;
