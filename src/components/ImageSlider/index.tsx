import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { ImageSliderProps } from "./types";

const ImageSlider: FC<ImageSliderProps> = ({ imagesSrc, className }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % imagesSrc.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [imagesSrc.length]);

  return (
    <div className={className}>
      {imagesSrc.map((src, index) => (
        <Image
          fill
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`object-cover transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default ImageSlider;
