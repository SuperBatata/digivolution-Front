import React, { useState } from "react";
import IMG1 from "../assets/1-1.jpg";
import IMG2 from "../assets/1-2.jpg";
import IMG3 from "../assets/1-3.jpg";
import IMG4 from "../assets/1-4.jpg";
import IMG7 from "../assets/2-1.jpg";
import IMG8 from "../assets/2-2.jpg";
import IMG9 from "../assets/2-3.jpg";
import IMG10 from "../assets/2-4.jpg";
import IMG11 from "../assets/3-1.jpg";
import IMG12 from "../assets/3-2.jpg";
import IMG13 from "../assets/3-5.jpg";
import IMG14 from "../assets/3-4.jpg";

const Work = () => {
  const [showGallery, setShowGallery] = useState(false);

  const images1 = [IMG2, IMG3, IMG4];

  const images2 = [IMG8, IMG9, IMG10];
  const images3 = [IMG12, IMG13, IMG14];

  const handleImageClick = () => {
    setShowGallery(!showGallery); // Toggle the showGallery state value
  };

  return (
    <>
      <h2 className="sous-titre" id="work">
        <span className="line">Our latest Work</span>
      </h2>
      <div className="toggleContainer">
        <div>
          <img
            src={IMG1}
            alt="Main Image"
            onClick={handleImageClick}
            className="imgToggle"
          />

          {showGallery && (
            <div className="image-gallery">
              {images1.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index}`}
                  className="imgElements"
                />
              ))}
            </div>
          )}
        </div>
        <div>
          <img
            src={IMG7}
            alt="Main 2"
            onClick={handleImageClick}
            className="imgToggle"
          />

          {showGallery && (
            <div className="image-gallery">
              {images2.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index}`}
                  className="imgElements"
                />
              ))}
            </div>
          )}
        </div>
        <div>
          <img
            src={IMG11}
            alt="Main3"
            onClick={handleImageClick}
            className="imgToggle"
          />

          {showGallery && (
            <div className="image-gallery">
              {images3.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index}`}
                  className="imgElements"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Work;
