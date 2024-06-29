import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { card } from "../../assets";
import styles, { layout } from "../../style";
import Button from "./Button";

const CardDeal = () => {
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
    <section className={layout.section} ref={ref}>
      <motion.div
        className={layout.sectionInfo}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.heading2}>
          Looking for the best career in Tech?
          <br className="sm:block hidden" /> Let Codefest be your guide
        </h2>
        <motion.p
          className={`${styles.paragraph} max-w-[470px] mt-5`}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Codefest admission is currently open for diploma and degree pathway in
          Tech.
        </motion.p>

        <motion.div
          className="mt-10"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button />
        </motion.div>
      </motion.div>

      <motion.div
        className={layout.sectionImg}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -50 },
        }}
        transition={{ duration: 0.5 }}
      >
        <img src={card} alt="" className="w-[100%] h-[100%]" />
        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </motion.div>
    </section>
  );
};

export default CardDeal;
