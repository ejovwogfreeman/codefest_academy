import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContentLoader from "react-content-loader";
import { motion } from "framer-motion";

const ImageCard = ({ image, writeup, to }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Link to={to} className="card-link">
        <div className="card relative p-2">
          {image ? (
            <img
              src={image}
              alt="Card"
              className="card-image rounded-md"
              onLoad={handleImageLoad}
            />
          ) : (
            <ContentLoader
              speed={2}
              width={200}
              height={200}
              viewBox="0 0 200 200"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="0" y="0" rx="10" ry="10" width="200" height="200" />
            </ContentLoader>
          )}
          {imageLoaded && (
            <div className="card-overlay absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-md">
              <div className="card-writeup text-white text-center font-bold font-lg">
                {writeup}
              </div>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

const ImageCardList = ({ cardData }) => {
  return (
    <div
      className="card-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      style={{ paddingTop: "90px" }}
    >
      {cardData.map((card, index) => (
        <ImageCard
          key={index}
          image={card.image}
          writeup={card.writeup}
          to={card.to}
        />
      ))}
    </div>
  );
};

export default ImageCardList;
