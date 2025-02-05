import React from "react";
import styles from "../style";
import { Navbar, Footer, ImageCardList } from "../components";
import travel from "../assets/Photos/travel.jpg";
import img from "../assets/diploma.jpg";
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
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        Diploma Certification
      </p>
      <p
        className="text-white mb-5 m-1"
        style={{
          position: "relative",
          zIndex: 2,
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
      >
        Professional Diploma Certification with Codefest Institute Of Technology
      </p>
      <a
        href="https://forms.gle/6Fk7A6d2ey1eJPH57" // Updated URL
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

const DiplomaCertification = () => {
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
            Become a Tech Leader
          </h1>
          <p className="mb-4">
            Elevate Your Career by obtaining a Professional Diploma in Computer
            Science with Specialization. If you’re serious about making a
            significant impact in the tech world, our Professional Diploma in
            Computer Science with Specialization is the pathway to becoming a
            tech leader. This comprehensive program provides in-depth knowledge,
            practical experience, and specialized expertise to help you excel in
            your chosen field.
          </p>
          <br />
          <hr />
          <br />
          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Why Choose Our Professional Diploma Program?
          </h2>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <strong>Master Advanced Topics:</strong> Gain an in-depth
              understanding of computer science fundamentals and advanced topics
              such as data structures, algorithms, and software engineering.
            </li>
            <li>
              <strong>Specialize in High-Demand Areas:</strong> Choose a
              specialization to build focused expertise in fields such as
              Artificial Intelligence, Cybersecurity, Data Science, or Cloud
              Computing.
            </li>
            <li>
              <strong>Engage in Hands-on Projects:</strong> Apply your learning
              to practical projects, building a strong portfolio to showcase
              your abilities to prospective employers.
            </li>
            <li>
              <strong>Learn from Industry Experts:</strong> Benefit from expert
              instructors who bring years of real-world experience and insights
              into the classroom.
            </li>
            <li>
              <strong>Gain Professional Certifications:</strong> Upon
              completion, you'll earn a Professional Diploma and relevant
              industry certifications, boosting your credibility and
              marketability.
            </li>
          </ul>
          <br />
          <hr />
          <br />
          <h3 className="text-xl font-semibold mt-4">
            Specializations Offered
          </h3>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <strong>Artificial Intelligence (AI):</strong> Develop expertise
              in machine learning, deep learning, and natural language
              processing.
            </li>
            <li>
              <strong>Cybersecurity:</strong> Master skills in network security,
              ethical hacking, and incident response.
            </li>
            <li>
              <strong>Data Science:</strong> Become proficient in data analysis,
              data mining, and data visualization.
            </li>
            <li>
              <strong>Cloud Computing:</strong> Learn how to design, implement,
              and manage cloud-based solutions using platforms like AWS, Azure,
              or GCP.
            </li>
          </ul>
          <br />
          <hr />
          <br />
          <h3 className="text-xl font-semibold mt-4">Career Opportunities</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Data Scientist</li>
            <li>Cybersecurity Analyst</li>
            <li>Product Manager</li>
            <li>Data Analyst</li>
            <li>Software Developer</li>
            <li>Business Analyst</li>
            <li>And many more</li>
          </ul>
          <br />
          <hr />
          <br />
          <p className="mt-4">
            At Codefest, we believe that everyone has the potential to thrive in
            the tech industry. Whether you’re seeking flexible mobile learning
            or in-depth professional expertise, our courses and programs are
            designed to empower you with the skills and knowledge needed to
            achieve your career goals.
          </p>
          <br />
          <hr />
          <br />
          <p className="mt-4 text-center font-bold">
            Ready to take your career to the next level and become a tech
            leader? Visit our website to explore our Professional Diploma in
            Computer Science with Specialization program and apply today.{" "}
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
                href="https://forms.gle/6Fk7A6d2ey1eJPH57"
                target="_blank"
                className="text-blue-500 underline"
              >
                DIPLOMA CERTIFICATION
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

export default DiplomaCertification;
