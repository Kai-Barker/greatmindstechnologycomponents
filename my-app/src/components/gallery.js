import React from 'react';
import './gallery.css';

// Import images
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';

const images = [image1, image2, image3, image4];

const Gallery = () => {
  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`Gallery image ${index + 1}`} className="gallery-image" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
