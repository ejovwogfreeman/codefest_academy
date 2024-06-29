import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import sendEmail from "./sendEmail";
import sanitizeHtml from "sanitize-html";

function Form() {
  const { program } = useParams();
  const navigate = useNavigate();
  const [selectedProgram, setSelectedProgram] = useState(program);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [howDidYouFindUs, setHowDidYouFindUs] = useState("");
  const [gender, setGender] = useState("");
  const [currentEducation, setCurrentEducation] = useState("");
  const [codingExperience, setCodingExperience] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setSelectedProgram(program);
  }, [program]);

  useEffect(() => {
    navigate(`/apply/${selectedProgram}`, { replace: true });
  }, [selectedProgram, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formSubmitted) {
      return; // Prevent multiple submissions
    }

    setFormSubmitted(true);

    // Sanitize input values
    const sanitizedFirstName = sanitizeHtml(firstName);
    const sanitizedLastName = sanitizeHtml(lastName);
    const sanitizedEmail = sanitizeHtml(email);
    const sanitizedMobile = sanitizeHtml(mobile);
    const sanitizedHowDidYouFindUs = sanitizeHtml(howDidYouFindUs);
    const sanitizedGender = sanitizeHtml(gender);
    const sanitizedCurrentEducation = sanitizeHtml(currentEducation);
    const sanitizedCodingExperience = sanitizeHtml(codingExperience);
    const sanitizedProgram = sanitizeHtml(selectedProgram);

    const formData = {
      firstName: sanitizedFirstName,
      lastName: sanitizedLastName,
      email: sanitizedEmail,
      mobile: sanitizedMobile,
      howDidYouFindUs: sanitizedHowDidYouFindUs,
      gender: sanitizedGender,
      currentEducation: sanitizedCurrentEducation,
      codingExperience: sanitizedCodingExperience,
      program: sanitizedProgram,
    };

    console.log(formData);

    try {
      await sendEmail(formData);
      setFormSubmitted(true);
    } catch (error) {
      console.error(error);
      console.log(error);
      setError(true);
      setFormSubmitted(false); // Reset the form submission status
    }
  };

  return (
    <>
      {!formSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto mt-40 px-4 py-8 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl shadow-md p-4"
        >
          <h2 id="title" className="text-2xl text-white font-bold mb-4">
            Apply for {selectedProgram} program
          </h2>
          {error && (
            <p className="text-red-500 mb-4">
              Something went wrong. Please try again later.
            </p>
          )}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="program"
            >
              Program:
            </label>
            <select
              style={{ border: "none", outline: "none" }}
              id="program"
              value={selectedProgram}
              onChange={(e) => setSelectedProgram(e.target.value)}
              className="border-2 border-gray-200 p-2 w-full rounded-md"
              required
            >
              <option value="stem">STEM</option>
              <option value="it-course">IT-Course</option>
              <option value="it-career">IT-Career</option>
              <option value="diploma">Diploma</option>
              <option value="cbt">CBT</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                style={{ border: "none", outline: "none" }}
                className="block text-gray-700 font-bold mb-2"
                htmlFor="firstName"
              >
                First Name:
              </label>
              <input
                style={{ border: "none", outline: "none" }}
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) =>
                  setFirstName(
                    e.target.value.replace(/[^a-zA-Z\s]/g, "").slice(0, 50)
                  )
                }
                className="border-2 border-gray-200 p-2 w-full rounded-md"
                required
              />
            </div>
            <div>
              <label
                style={{ border: "none", outline: "none" }}
                className="block text-gray-700 font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name:
              </label>
              <input
                style={{ border: "none", outline: "none" }}
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) =>
                  setLastName(
                    e.target.value.replace(/[^a-zA-Z\s]/g, "").slice(0, 50)
                  )
                }
                className="border-2 border-gray-200 p-2 w-full rounded-md"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              style={{ border: "none", outline: "none" }}
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-gray-200 p-2 w-full rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="mobile"
            >
              Mobile:
            </label>
            <input
              style={{ border: "none", outline: "none" }}
              id="mobile"
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="border-2 border-gray-200 p-2 w-full rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="gender"
            >
              Gender:
            </label>
            <select
              style={{ border: "none", outline: "none" }}
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="border-2 border-gray-200 p-2 w-full rounded-md"
              required
            >
              <option value="">Please select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="currentEducation"
            >
              Current Education:
            </label>
            <select
              style={{ border: "none", outline: "none" }}
              id="currentEducation"
              value={currentEducation}
              onChange={(e) => setCurrentEducation(e.target.value)}
              className="border-2 border-gray-200 p-2 w-full rounded-md"
              required
            >
              <option value="">Please select</option>
              <option value="Primary">Primary</option>
              <option value="Secondary">Secondary</option>
              <option value="Tertiary">Tertiary</option>
              <option value="Not in school">Not in school</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="codingExperience"
            >
              Coding Experience:
            </label>
            <select
              style={{ border: "none", outline: "none" }}
              id="codingExperience"
              value={codingExperience}
              onChange={(e) => setCodingExperience(e.target.value)}
              className="border-2 border-gray-200 p-2 w-full rounded-md"
              required
            >
              <option value="">Please select</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="howDidYouFindUs"
            >
              How did you find us?
            </label>
            <select
              style={{ border: "none", outline: "none" }}
              id="howDidYouFindUs"
              value={howDidYouFindUs}
              onChange={(e) => setHowDidYouFindUs(e.target.value)}
              className="border-2 border-gray-200 p-2 w-full rounded-md"
              required
            >
              <option value="">Please select</option>
              <option value="Google">Google</option>
              <option value="Social Media">Social Media</option>
              <option value="Friend or Family">Friend or Family</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="py-2 px-2 font-poppins font-medium text-[14px] text-primary bg-blue-gradient rounded-[10px] outline-none"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="max-w-md mx-auto mt-40 px-4 py-8 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl shadow-md p-4">
          <h2 className="text-4xl text-white font-bold mb-4">
            Application Sent
          </h2>
          <p className="text-white">Thank you for your submission!</p>
        </div>
      )}
    </>
  );
}

export default Form;
