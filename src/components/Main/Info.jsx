import styles from "../../style";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Services from "./Services";

const Info = () => {
  const [ref, inView] = useInView({
    threshold: 0.5, // Trigger animation when component is 50% in view
  });

  const container = {
    visible: { opacity: 1, y: 0 },
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
    <motion.section
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mt-10 `}
      ref={ref}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <motion.div
        className="w-full  justify-between  md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]"
        variants={item}
      >
        <div className="I">
          <iframe
            src="https://www.youtube.com/embed/AJajnDb60_8?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <br />
        <h3 className={styles.heading3}>About Us</h3>
        <motion.div
          className="w-full  md:mt-0 mt-10"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={container}
          transition={{ duration: 0.5 }}
        >
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            We champion and empower Nigeria companies and schools to adopt
            innovations in STEM as a solution to existing problems and building
            a STEM nation.
          </p>{" "}
          <br></br>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            An organization birthed to transform Africa economy and positioned
            to bring about collaboration and accessibility; change and
            management. We are striving to grow the largest knowledge force, an
            institution of passionate people with a common goal to make a
            significant contribution in the technology and economy landscape of
            Africa.
          </p>
        </motion.div>
        <br />
        <br />
        <br />
        <motion.div className="w-full flex  justify-between  md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
          <div className="m-5">
            <h4 className={styles.heading4}>Vision</h4>
            <p className={`${styles.paragraph} text-left max-w-[450px]`}>
              To be the most Innovative institution in Africa driven by purpose.
            </p>
          </div>

          <div className="m-5">
            <h4 className={styles.heading4}>Mission</h4>
            <p className={`${styles.paragraph} text-left max-w-[450px]`}>
              Committed to achieving excellence using innovation and technology:
              with the people we work for; the people we work with and the
              people who work for Us.
            </p>
          </div>

          <div className="m-5">
            <h4 className={styles.heading4}>
              Corporate Social Responsibility (CSR)
            </h4>
            <p className={`${styles.paragraph} text-left max-w-[450px]`}>
              Digital Transformation Support - Fostering use of digital
              technologies in driving change at every socio-economic level. We
              have mandate of empowering Africans through digital connect
              programs.
            </p>
          </div>
          <br />
          <br />
        </motion.div>
        <Services />
      </motion.div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]"></div>
    </motion.section>
  );
};

export default Info;
