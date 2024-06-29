import React from 'react';
import { useTrail, animated } from 'react-spring';

const PartnerCarousel = () => {
  const partnerNames = [
    'Ucertify',
    'India STEM Alliance',
    'University Expo, USA',
    'Ebonyi State Government',
    'Ministry of Education',
    'Education Secretary Abuja',
    'NYSC',
    'BASSCOMM',
    'Tripberry.com',
    'Wowow Innovations',
    'SEAMFIX',
    'Edgefx India Pvt',
    'Coal City University',
    'Thomas Adewunmi University',
  ];

  const trail = useTrail(partnerNames.length, {
    from: { opacity: 0, transform: 'translateX(-30px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { mass: 1, tension: 200, friction: 18 },
    reset: true,
  });

  return (
    <div className="w-full mt-20 flex justify-center">
      <div className="flex flex-wrap justify-center">
        {trail.map((style, index) => (
          <AnimatedPartnerName key={index} style={style}>
            {partnerNames[index]}
          </AnimatedPartnerName>
        ))}
      </div>
    </div>
  );
};

const AnimatedPartnerName = ({ children, style }) => {
  return (
    <animated.div
      className="text-primary bg-blue-gradient rounded-[10px] outline-none font-bold text-center text-lg p-4 mx-4 my-8"
      style={style}
    >
      {children}
    </animated.div>
  );
};

export default PartnerCarousel;
