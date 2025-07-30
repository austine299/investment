import React from "react";

const images = [
  "/images/slide-img/slide1.png",
  "/images/slide-img/slide2.png",
  "/images/slide-img/slide3.png",
  "/images/slide-img/slide5.png",
  "/images/slide-img/slide4.png",
  "/images/slide-img/slide6.png",
  "/images/slide-img/slide7.png",
  "/images/slide-img/slide8.png",
  "/images/slide-img/slide9.png",
  "/images/slide-img/slide10.png",
];

const ImageSlider = () => {
  return (
    <div className=" w-full px-6 md:px-20 mt-20 group">
      <div className="flex overflow-hidden gap-4 whitespace-nowrap ">
        {[...images, ...images].map((img, idx) => (
          <div
            key={idx}
            className="basis-10/5 flex-shrink-0 animate-slide group-hover:[animation-play-state:paused]" // Ensures 5 per row
          >
            <img
              src={img}
              alt={`Slide ${idx}`}
              className=" w-40 object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
