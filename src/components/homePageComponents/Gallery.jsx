import React, { useState } from 'react';

import image1 from '../../assets/images/gallery/image1.jpg';
import image2 from '../../assets/images/gallery/image2.jpg';
import image3 from '../../assets/images/gallery/image3.jpg';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3];
  const totalImages = images.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="gallery-container">
        <h1>גלריה</h1>
      <button className="gallery-button prev" onClick={handlePrev}></button>
      <div className="gallery-wrapper">
        <div className="gallery-images" style={{ transform: `translateX(-${currentIndex * 100 / 5}%)` }}>
          {images.map((image, index) => (
            <div className="gallery-image" key={index}>
              <img src={image} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      {/* ←→ */}
      <button className="gallery-button next" onClick={handleNext}> </button>
      <div className="gallery-indicator">
        {`${currentIndex + 1} / ${totalImages}`}
      </div>
    </div>
  );
};

export default Gallery;
