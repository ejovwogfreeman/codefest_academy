import React, { useEffect, useRef } from 'react';

const Terminal = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    const terminal = terminalRef.current;

    // Simulate typing animation
    const text = [
        'Welcome to the Program!',
        'Join us to become a global citizen through acquiring future-proof IT skills.',
        'Our disruptive one-year tech academy offers specialized IT training.',
        'Experience our unique program that connects you with recruiters and industry mentors.',
        'Discover course clarity and engage in Q&A sessions.',
        'Our experienced instructors and mentors guide you along various career paths.',
        'Admissions are open for the January 2023 batch. Only 100 seats available!',
        'Enroll now with no prerequisites or age restrictions.',
        'Immerse yourself in our 100% e-learning platform with instructor guidance.',
        'Access our self-paced online courses, mobile app, and practice labs.',
        'Expand your skills through projects, assessments, and on-site campus learning.',
        'Benefit from job placement assistance, internships, and industry certifications.',
        'Explore networking opportunities and enjoy flexible learning from anywhere.',
        'Take advantage of pay-as-you-go options and available discounts/scholarships.',
        'Apply for study loans to support your learning journey.',
        'Choose from career pathways like Cybersecurity, Web Development, and more.',
        'Follow our program outline with trimester-based training and assessments.',
        'Experience our pedigree of success with over 5,000 students.',
        'Discover STEM careers through our partnership model with schools and universities.',
      ];
    let currentIndex = 0;
    let currentLine = '';
    let typingTimeout;

    const typeLine = () => {
      const line = text[currentIndex];
      const delay = line.length === currentLine.length ? 1500 : 100;

      if (currentLine === line) {
        currentIndex = (currentIndex + 1) % text.length;
        currentLine = '';
      } else if (currentLine.length < line.length) {
        currentLine = line.substr(0, currentLine.length + 1);
      }

      terminal.innerHTML = currentLine;

      typingTimeout = setTimeout(typeLine, delay);
    };

    typeLine();

    // Blinking cursor
    const cursorInterval = setInterval(() => {
      const lastChar = terminal.innerHTML.slice(-1);
      terminal.innerHTML = lastChar === '|' ? currentLine : currentLine + '|';
    }, 500);

    return () => {
      clearTimeout(typingTimeout);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="flex flex-col mt-20 items-center justify-center w-full h-full px-4 py-10 rounded-lg bg-gray-900 text-white">
      <div className="max-w-lg w-full bg-gray-800 text-white-400 font-mono rounded-lg p-4 text-sm md:text-base overflow-x-auto">
        <div className="flex justify-start mb-2">
          <div className="bg-red-500 w-2 h-2 rounded-full mr-2" />
          <div className="bg-yellow-500 w-2 h-2 rounded-full mr-2" />
          <div className="bg-green-500 w-2 h-2 rounded-full" />
        </div>
        <p className="mb-2" ref={terminalRef} />
      </div>
    </div>
  );
};

export default Terminal;
