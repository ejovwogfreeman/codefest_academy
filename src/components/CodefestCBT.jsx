import React from "react";
import styles from "../style";
import { Navbar, Footer, ImageCardList } from "../components";
import travel from "../assets/Photos/travel.jpg";
import img from "../assets/computerlab.jpg";
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
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        Codefest CBT
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
        Simplifying online examinations with secure solutions.
      </p>
      <a
        href="https://exams.codefestuniversity.online" // Updated URL
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
        Enroll Today
      </a>
    </div>
  );
};

const CodefestCBT = () => {
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
            Discover the Power of Codefest CBT Platform
          </h2>
          <p className="mb-4">
            In today's fast-paced and technology-driven world, traditional
            paper-based testing methods are becoming increasingly outdated.
            Educators, trainers, and organizations are constantly seeking
            innovative ways to deliver assessments that are efficient, secure,
            and effective. That's where Codefest CBT Platform comes in. We
            provide a robust and user-friendly computer-based testing platform
            designed to transform your testing experience and empower you to
            achieve your goals.
          </p>
          <br />
          <hr />
          <br />
          <h2 className="text-2xl font-semibold mt-6">Why Choose Us?</h2>
          <p className="mb-4">
            Our CBT Platform is more than just a testing tool; it's a
            comprehensive platform designed to meet the diverse needs of
            educators, training providers, and organizations. We offer a wide
            range of features to help you create, administer, and analyze
            assessments effectively:
          </p>
          <br />
          <hr />
          <br />
          <h3 className="text-xl font-semibold mt-4">1. Efficiency:</h3>
          <ul className="list-disc pl-6">
            <li>Faster Results: Automated grading and instant feedback.</li>
            <li>
              Reduced Administrative Burden: Streamlined test creation and
              result analysis.
            </li>
            <li>Cost-Effective: Save on printing and grading labor.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">2. Security:</h3>
          <ul className="list-disc pl-6">
            <li>
              Secure Test Delivery: Minimize cheating with test randomization
              and proctoring.
            </li>
            <li>
              Reduced Test Compromise: Eliminate physical test theft risks.
            </li>
            <li>
              Data Security: Protect test data with robust security protocols.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">
            3. Flexibility and Accessibility:
          </h3>
          <ul className="list-disc pl-6">
            <li>Remote Access: Take assessments from anywhere.</li>
            <li>Scalability: Administer exams to large groups easily.</li>
            <li>
              Accessibility Features: Support candidates with disabilities.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">
            4. Improved Candidate Experience:
          </h3>
          <ul className="list-disc pl-6">
            <li>
              Interactive Question Types: Engage with multimedia and
              simulations.
            </li>
            <li>Immediate Feedback: Enhance learning with instant insights.</li>
            <li>User-Friendly Interface: Simplify the testing process.</li>
          </ul>
          <br />
          <hr />
          <br />
          <h2 className="text-2xl font-semibold mt-6">
            Who Benefits from Our Platform?
          </h2>
          <h3 className="text-xl font-semibold mt-4">
            1. Educational Institutions:
          </h3>
          <ul className="list-disc pl-6">
            <li>Streamline assessments and reduce costs.</li>
            <li>Administer exams, quizzes, and standardized tests securely.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">2. Training Providers:</h3>
          <ul className="list-disc pl-6">
            <li>Assess trainees effectively.</li>
            <li>Track progress and tailor training programs.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">3. Organizations:</h3>
          <ul className="list-disc pl-6">
            <li>Evaluate employee performance and track talent gaps.</li>
            <li>Administer pre-employment and certification tests.</li>
          </ul>
          <br />
          <hr />
          <br />
          <h2 className="text-2xl font-semibold mt-6">Our Commitment</h2>
          <ul className="list-disc pl-6">
            <li>Dedicated Customer Support: Get expert assistance.</li>
            <li>Comprehensive Documentation and Resources.</li>
            <li>Continuous Innovation: Regular feature updates.</li>
            <li>Competitive Pricing: Flexible plans for all needs.</li>
          </ul>
          <br />
          <hr />
          <br />
          <h2 className="text-2xl font-semibold mt-6">
            Ready to Transform Your Testing Experience?
          </h2>
          <p className="mt-4">
            Discover the power of Codefest CBT Platform today! Visit our website
            to request a demo, explore our pricing plans, or learn more about
            our features.
          </p>
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
                exams@codefestuniversity.online
              </a>
            </h2>

            <h2 className="mb-2">
              Website: &nbsp;
              <a
                href="https://exams.codefestuniversity.online"
                className="text-blue-500 underline"
                target="_blank"
              >
                CODEFEST CBT
              </a>
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

export default CodefestCBT;
