import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './carousel.css';

// Import images
import image1 from './images/logo.jpg';

console.log("Heloooooooooooooooooooooo----------------------");
const images = [image1, image1, image1];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 5000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [isHovered]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <motion.img
        key={images[currentIndex]}
        src={images[currentIndex]}
        alt={`carousel image ${currentIndex + 1}`}
        className="carousel-image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <div className="carousel-controls">
        <button onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>
          Previous
        </button>
        <button onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}>
          Next
        </button>
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`carousel-dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
