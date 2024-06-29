import React, { useState } from "react";
import { quotes } from "../../assets";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeedbackCard = ({ content, name, title, img }) => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore(!showMore);

  const { ref, inView } = useInView();

  const cardVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <motion.div
      className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      transition={{ duration: 1.0 }}
    >
      <motion.img
        src={quotes}
        alt="double_quotes"
        className="w-[42.6px] h-[27.6px] object-contain"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
      <div
        className={classNames(
          "font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10",
          {
            "max-h-[96px] overflow-hidden": !showMore,
          }
        )}
      >
        {content}
      </div>
      {!showMore && (
        <div
          className="text-white font-poppins font-semibold text-sm cursor-pointer mt-4 hover:underline"
          onClick={toggleShowMore}
        >
          See More
        </div>
      )}
      {showMore && (
        <div
          className="text-white font-poppins font-semibold text-sm cursor-pointer mt-4 hover:underline"
          onClick={toggleShowMore}
        >
          See Less
        </div>
      )}

      <div className="flex flex-row mt-6">
        <motion.img
          src={img}
          alt={name}
          className="w-[48px] h-[48px] rounded-full"
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 1.5 }}
        />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeedbackCard;
