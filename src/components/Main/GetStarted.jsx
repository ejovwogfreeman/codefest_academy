import styles from "../../style";
import { useState, useEffect } from "react";
import { arrowUp } from "../../assets";
import { navLinks } from "../../constants";
import { Link, Navigate } from 'react-router-dom';

const GetStarted = () => {
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlow((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
      style={{
        boxShadow: glow
          ? "0 0 5px rgb(66, 153, 225), 0 0 10px rgb(66, 153, 225), 0 0 15px rgb(66, 153, 225), 0 0 20px rgba(66, 153, 225, 0.4)"
          : "none",
      }}
    >
        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
          <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
              <span className={`${styles.paragraph}`}>Get</span>
            </p>
            <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
          </div>

          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className={`${styles.paragraph}`}>Started</span>
          </p>
        </div>
    </div>
  );
};

export default GetStarted;
