import React from 'react';
import './Image.css'

const Image = ({ 
  imageLink,
  align
}) => {
  return (
    <div className="image-container">
      <img src={imageLink} alt="Display" className="display-image" />
    </div>
  );
};

export default Image;
