import React, { useState } from "react";
import sendEmail from "./sendEmail";
import sanitizeHtml from "sanitize-html";

function Form1() {
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
    const title = document.getElementById("title").textContent;

    const formData = {
      firstName: sanitizedFirstName,
      lastName: sanitizedLastName,
      email: sanitizedEmail,
      mobile: sanitizedMobile,
      howDidYouFindUs: sanitizedHowDidYouFindUs,
      gender: sanitizedGender,
      currentEducation: sanitizedCurrentEducation,
      codingExperience: sanitizedCodingExperience,
      title,
    };

    try {
      await sendEmail(formData);
      setFormSubmitted(true);
    } catch (error) {
      console.error(error);
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
            Apply for STEM (Coding) School program
          </h2>
          {error && (
            <p className="text-red-500 mb-4">
              Something went wrong. Please try again later.
            </p>
          )}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="firstName"
              >
                First Name:
              </label>
              <input
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
                className="block text-gray-700 font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name:
              </label>
              <input
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
            <div className="flex items-center">
              <input
                type="radio"
                id="gender-male"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
                className="mr-2"
                required
              />
              <label htmlFor="gender-male" className="text-gray-700 mr-4">
                Male
              </label>
              <input
                type="radio"
                id="gender-female"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
                className="mr-2"
                required
              />
              <label htmlFor="gender-female" className="text-gray-700">
                Female
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="currentEducation"
            >
              Current Education:
            </label>
            <select
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
              id="codingExperience"
              value={codingExperience}
              onChange={(e) => setCodingExperience(e.target.value)}
              className="border-2 border-gray-200 p-2 w-full rounded-md"
              required
            >
              <option value="">Please select</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>{" "}
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
            className={`py-2 px-2 font-poppins font-medium text-[14px] text-primary bg-blue-gradient rounded-[10px] outline-none`}
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

export default Form1;
