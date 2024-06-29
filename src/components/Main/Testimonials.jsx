import { feedback } from "../../constants";
import styles from "../../style";
import FeedbackCard from "./FeedbackCard";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Testimonials = () => {
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

  return (
    <motion.section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter } ${styles.padding} flex-col relative `}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      ref={ref}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <motion.div
        className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]"
      >
        <h2 className={styles.heading2}>
          What People are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}></p>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]"
      >
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
