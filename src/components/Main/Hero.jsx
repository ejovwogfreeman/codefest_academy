import styles from "../../style";
import { discount, globe } from "../../assets";
import GetStarted from "./GetStarted";
import GradientText from "./GradientText";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Terminal1 from "./Terminal1";

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.5, // Trigger animation when component is 50% in view
    triggerOnce: true, // Only trigger animation once
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
      variants={container}
      initial="hidden"
      animate="show"
      style={{ paddingTop: "150px" }}
    >
      <motion.div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 pt-24`}
        variants={item}
      >
        <motion.div
          className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
          variants={item}
        >
          <motion.img
            src={discount}
            alt=""
            className="w-[32px] h-[32px]"
            variants={item}
          />
          <motion.p className={`${styles.paragraph} ml-2`} variants={item}>
            <motion.span className="text-white" variants={item}>
              Your
            </motion.span>{" "}
            Virtual{" "}
            <motion.span className="text-white" variants={item}>
              University
            </motion.span>
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-row justify-between items-center w-full"
          variants={item}
        >
          <GradientText variants={item} />
          <motion.div
            className="ss:flex hidden md:mr-4 mr-0"
            variants={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/apply">
              <GetStarted variants={item} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.h1
          className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full"
          variants={item}
        >
          {/* Words */}
        </motion.h1>
      </motion.div>
      <Terminal1 />

      <motion.div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        variants={item}
      >
        <motion.img
          src={globe}
          alt=""
          className="w-[100%] h-[100%] relative z-[5] logo-react"
          variants={item}
        />
        {/* gradient start */}
        <motion.div
          className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"
          variants={item}
        />
        <motion.div
          className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40"
          variants={item}
        />
        <motion.div
          className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"
          variants={item}
        />
        {/* gradient end */}
      </motion.div>
    </section>
  );
};

export default Hero;
