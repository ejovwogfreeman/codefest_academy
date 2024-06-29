import React from "react";

function GradientText() {
  return (
    <>
      <h6 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
        Get Skilled in <br className="sm:block hidden" />{" "}
        <span className="text-gradient animated-gradient">
          Digital Education
        </span>{" "}
      </h6>

      <style>
        {`
        .text-gradient {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          background-image: linear-gradient(to right, #f12711, #f5af19, #db36a4, #c02425, #f0c27b, #c471ed, #ee0979, #1a2a6c);
        }

        .animated-gradient {
          background-image: linear-gradient(to right, #f12711, #f5af19, #db36a4, #c02425, #f0c27b, #c471ed, #ee0979, #1a2a6c);
          animation: animate-gradient 15s ease-in-out infinite;
        }

        @keyframes animate-gradient {
          0% {
            background-position: 0% 0%;
          }
          25% {
            background-position: 100% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
        `}
      </style>
    </>
  );
}

export default GradientText;
