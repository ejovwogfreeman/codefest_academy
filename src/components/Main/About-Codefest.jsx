import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { features } from "../../constants";
import styles, { layout } from "../../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const cardVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      transition={{ duration: 0.5 }}
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <motion.div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.img
          src={icon}
          alt=""
          className="w-[50%] h-[50%] object-contain"
          whileHover={{ rotate: 360 }}
        />
      </motion.div>
      <motion.div className="flex-1 flex flex-col ml-3">
        <motion.h4
          className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1"
          whileHover={{ color: "#ff0080" }}
        >
          {title}
        </motion.h4>
        <motion.p
          className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]"
          whileHover={{ color: "#ff0080" }}
        >
          {content}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>About Codefest</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        An organization birthed to transform Africa economy and positioned in
        Africa to bring about collaboration and accessibility; innovation and
        speed; change and management. This drive started since 2010, we are
        striving to grow the largest knowledge force, made up of an institution
        of passionate people with a common goal to make a significant
        contribution in the technology and business landscape of Africa.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
