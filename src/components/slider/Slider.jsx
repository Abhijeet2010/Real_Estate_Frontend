import { useState } from "react";
import "./slider.scss";

const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlider = (direction) => {
    if (direction === "left") {
      setImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else if (direction === "right") {
      setImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  return (
    <div className="slider">
      {imageIndex !== null ? (
        <div className="bigSlider">
          <div className="arrow" onClick={() => changeSlider("left")}>
            <img src="/arrow.png" className="left" alt="arrow" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow" onClick={() => changeSlider("right")}>
            <img src="/arrow.png" alt="arrow" />
          </div>

          <div className="close" onClick={() => setImageIndex(null)}>
            x
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="bigImage">
        <img
          src={images[0]}
          onClick={() => setImageIndex(0)}
          alt="property-big image"
        />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            key={index}
            onClick={() => setImageIndex(index + 1)}
            alt="property-images"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
