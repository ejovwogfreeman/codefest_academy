import { apple, bill, google } from "../../assets";
import { paths } from "../../constants";
import styles, { layout } from "../../style";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Path = ({ title, index }) => {
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3, // The component will be considered in view when it's 30% visible
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      setIsInView(true);
      controls.start("visible");
    } else {
      setIsInView(false);
      controls.start("hidden");
    }
  }, [inView, controls]);

  const cardVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <motion.div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== paths.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
      ref={ref}
      animate={inView ? "visible" : "hidden"}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 1 }}
    >
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
      </div>
    </motion.div>
  );
};

const Career = () => {
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3, // The component will be considered in view when it's 30% visible
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      setIsInView(true);
      controls.start("visible");
    } else {
      setIsInView(false);
      controls.start("hidden");
    }
  }, [inView, controls]);

  const cardVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <section id="product" className={layout.sectionReverse} ref={ref}>
      <motion.div
        className={layout.sectionImgReverse}
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -50 },
        }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={bill}
          alt=""
          className="w-[100%] h-[100%] relative z-[5]"
          animate={inView ? "visible" : "hidden"}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.5 }}
        />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </motion.div>

      <motion.div
        className={layout.sectionInfo}
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -50 },
        }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.heading2}>
          The Career Pathways <br className="sm:block hidden" /> available in
          Codefest
        </h2>
        <motion.div
          className={`${layout.sectionImg}  flex-wrap `}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariants}
          transition={{ duration: 0.5 }}
        >
          {paths.map((feature, index) => (
            <Path key={feature.id} {...feature} index={index} />
          ))}
        </motion.div>

        {/* <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p> */}
      </motion.div>
    </section>
  );
};

export default Career;
