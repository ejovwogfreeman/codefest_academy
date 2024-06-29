import React, { useEffect, useRef } from 'react';

const Terminal = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    const terminal = terminalRef.current;

    // Simulate typing animation
    const text = [
      'Join our disruptive tech academy and become a global citizen with future-proof IT skills.',
      'Enroll now for the January 2023 batch, limited seats available.',
      'Experience our unique program connecting you with industry mentors and recruiters.',
      'Explore career pathways, flexible learning, and networking opportunities.'
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
    <div className="flex items-center justify-center mt-20">
      <div className="w-80 h-60 bg-gray-900 text-white font-mono rounded-lg p-4 text-sm md:text-base overflow-hidden">
        <div className="flex justify-start mb-2">
          <div className="bg-red-500 w-2 h-2 rounded-full mr-2" />
          <div className="bg-yellow-500 w-2 h-2 rounded-full mr-2" />
          <div className="bg-green-500 w-2 h-2 rounded-full" />
        </div>
        <p className="mb-2" ref={terminalRef}></p>
      </div>
    </div>
  );
};

export default Terminal;
