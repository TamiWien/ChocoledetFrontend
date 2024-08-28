import React, { useState } from 'react';

import image1 from '../../assets/images/gallery/image1.jpg';
import image2 from '../../assets/images/gallery/image2.jpg';
import image3 from '../../assets/images/gallery/image3.jpg';
import image4 from '../../assets/images/gallery/image4.jpg';
import image5 from '../../assets/images/gallery/image5.png';
import image6 from '../../assets/images/gallery/image6.jpg';
import image7 from '../../assets/images/gallery/image7.jpg';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3, image4, image5, image6, image7];
  const totalImages = images.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalImages - 4 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalImages - 4 ? 0 : prevIndex + 1));
  };

  return (
    <div className="gallery-container">
        <h1>גלריה</h1>
      <button className="gallery-button prev" onClick={handleNext}></button>
      <div className="gallery-wrapper">
        <div className="gallery-images" style={{ transform: `translateX(${currentIndex * 25}%)`}}>
          {images.map((image, index) => (
            <div className="gallery-image" key={index}>
              <img src={image} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      {/* ←→ */}
      <button className="gallery-button next" onClick={handlePrev}> </button>
      <div className="gallery-indicator">
        {`${currentIndex + 1} / ${totalImages-3}`}
      </div>
    </div>
  );
};

export default Gallery;
