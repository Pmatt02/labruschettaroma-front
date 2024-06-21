import React, { useState } from 'react';
import './Gallery.css';
import Image from '../Image/Image';

const Gallery = ({ 
  imageLinks 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageLinks.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageLinks.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="gallery-container">
      <button onClick={goToPrevious} className="arrow left-arrow">
        &lt;
      </button>
      <Image imageLink={imageLinks[currentIndex]} />
      <button onClick={goToNext} className="arrow right-arrow">
        &gt;
      </button>
    </div>
  );
};

export default Gallery;