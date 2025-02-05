import React from "react";
import styles from "../style";
import { Navbar, Footer, ImageCardList } from "../components";
import travel from "../assets/Photos/travel.jpg";
import img from "../assets/wschool.jpg";
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
        backgroundSize: "cover",
        backgroundPosition: "center",
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
        Mobile School
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
        Flexible Learning through Codefest WhatsApp School
      </p>
      <a
        href="https://forms.gle/m8NgdgYj33HNcsAc6" // Updated URL
        target="_blank"
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

const MobileSchool = () => {
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
          <h1 className="text-3xl font-bold text-center mb-6">
            Unlock Your Tech Potential
          </h1>
          <p className="mb-4">
            Flexible Learning & In-Depth Expertise with Codefest Institute of
            Technology. In today’s rapidly evolving digital world, the demand
            for skilled tech professionals is at an all-time high. Whether
            you’re just starting your tech journey or looking to advance your
            career, the key to success lies in continuous learning and
            specialization. At Codefest Institute, we are committed to providing
            accessible and high-quality education, tailored to meet your unique
            needs and career aspirations. This is why we offer two distinctive
            learning paths: our flexible and convenient Mobile School Courses
            and our comprehensive Professional Diploma in Computer Science with
            Specialization.
          </p>
          <br />
          <hr />
          <br />
          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Mobile School Courses - Learn Anywhere, Anytime
          </h2>
          <p className="mb-4">
            Are you a busy professional, a student juggling multiple
            commitments, or someone eager to explore the world of tech but
            struggling with rigid schedules? If so, our Mobile School Courses
            are the perfect solution for you. We understand that life often gets
            in the way of learning, which is why we've designed our mobile
            courses to be incredibly flexible, accessible, and engaging.
          </p>
          <br />
          <hr />
          <br />
          <h3 className="text-xl font-semibold mt-4">
            Why Choose Our Mobile School Courses?
          </h3>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Learn Anytime, Anywhere: Access engaging lessons directly from
              your smartphone or tablet.
            </li>
            <li>
              Bite-Sized Lessons: Short, digestible modules make learning easy
              and manageable.
            </li>
            <li>
              Interactive Content: Quizzes, videos, and real-world examples
              enhance learning.
            </li>
            <li>
              Expert-Led Instruction: Learn from experienced instructors who
              provide guidance.
            </li>
            <li>
              Practical Skills: Gain hands-on skills applicable to your career
              or personal projects.
            </li>
          </ul>
          <br />
          <hr />
          <br />
          <h3 className="text-xl font-semibold mt-4">Courses Offered</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <strong>Coding Basics:</strong> Learn programming fundamentals
              with languages like Python and JavaScript.
            </li>
            <li>
              <strong>Digital Marketing:</strong> Master SEO, social media
              marketing, and content creation.
            </li>
            <li>
              <strong>Mobile App Development:</strong> Build your own mobile
              applications.
            </li>
            <li>
              <strong>Data Analysis Fundamentals:</strong> Learn data
              collection, analysis, and interpretation.
            </li>
            <li>
              <strong>Cybersecurity Awareness:</strong> Understand cybersecurity
              principles and best practices.
            </li>
            <li>
              <strong>Graphics Design:</strong> Create logos, posters, and
              designs using typography, colors, and shapes.
            </li>
            <li>
              <strong>Networking:</strong> Learn about network construction,
              maintenance, and operation.
            </li>
          </ul>
          <br />
          <hr />
          <br />
          <p className="mt-4 text-center font-bold">
            Ready to transform your commute into a productive learning
            experience? Visit our website today to explore our Mobile School
            Courses and start your free trial.{" "}
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
                faculty@codefestuniversity.online
              </a>
            </h2>

            <h2 className="mb-2">
              Enroll Today: &nbsp;
              <a
                href="https://forms.gle/m8NgdgYj33HNcsAc6"
                className="text-blue-500 underline"
                target="_blank"
              >
                MOBILE SCHOOL
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

export default MobileSchool;
