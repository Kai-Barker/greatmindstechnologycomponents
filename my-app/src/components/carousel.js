import logo from 'l'



import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://via.placeholder.com/600x300?text=Image+1',
  'https://via.placeholder.com/600x300?text=Image+2',
  'https://via.placeholder.com/600x300?text=Image+3'
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
      <motion.img
        key={images[currentIndex]}
        src={images[currentIndex]}
        alt="carousel"
        className="w-full h-auto rounded-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      />
    </div>
  );
};

export default Carousel;
