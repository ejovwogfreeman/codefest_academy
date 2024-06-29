import { useState } from "react";
import { services } from "../../constants"; // an array of service objects
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../../style";

const Services = () => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const renderedServices = showAll ? services : services.slice(0, 3); // show all services if showAll is true, otherwise show only the first 3
    const { ref, inView } = useInView({
        threshold: 0.2,
    });

    const cardVariants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
    };

    return (
        <>
            <motion.section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={cardVariants}
                transition={{ duration: 0.5 }}
            >
                <div className="flex-1 flex flex-col text-center  items-center">
                    <h4 className={styles.heading4}>Our Services</h4>
                    <ul>
                        {renderedServices.map((service) => (
                            <li className={`${styles.paragraph}`} key={service.id}>
                                <h3>{service.title}</h3>
                            </li>
                        ))}
                    </ul>
                    {services.length > 3 && (
                        <button onClick={toggleShowAll} className="text-white font-poppins font-semibold text-sm cursor-pointer mt-4 hover:underline">
                            {showAll ? "Show Less" : "Show More"}
                        </button>
                    )}
                </div>

            </motion.section>
        </>
    );
};

export default Services;
