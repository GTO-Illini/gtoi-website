"use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";

// const images = [
//   "/image-assets/landing-page-slideshow/IMG_4629.jpg",
//   "/image-assets/landing-page-slideshow/20240405_235638_4dba6283.jpg",
//   "/image-assets/landing-page-slideshow/20240426_222933_e97bb73b.jpg",
// ];

export default function HeroSection() {
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => 
  //       prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 7000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        {/* {images.map((image, index) => (
          <img
          key={image}
          src={image}
          alt={`Slideshow image ${index + 1}`}
          className={`object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          } absolute inset-0`}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        ))} */
        <img
          src="image-assets/landing-page-slideshow/kevin_champ.jpg"
          alt="Hero Image"
          className="object-cover absolute inset-0 w-full h-full"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      }
      </div>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center" style={{ fontFamily: 'var(--font-jqkas-wild)' }}>
        <h1 className="text-4xl md:text-9xl font-normal mb-4">
          GTO Illini
        </h1>
        <p className="text-xl md:text-4xl max-w-2xl px-4">
          Poker at the University of Illinois
        </p>
      </div>
    </div>
  );
}
