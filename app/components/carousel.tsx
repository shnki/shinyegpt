"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import React, { ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 300,
}: CarouselProps) {
  const [slide, setSlide] = useState(0);
  const numSlides = React.Children.count(slides);

  const previousSlide = () =>
    setSlide((slide) =>
      slide === 0 ? (slides ? numSlides - 1 : 0) : slide - 1
    );
  const nextSlide = () =>
    setSlide((slide) =>
      slides ? (slide === numSlides - 1 ? 0 : slide + 1) : 0
    );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  if (!slides) {
    return null;
  }

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out"
        style={{ transform: `translateX(-${slide * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={previousSlide} className="shadow">
          <ChevronLeft size={40} />
        </button>
        <button onClick={nextSlide} className="shadow">
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="absolute bottom-2 right-0 left-0 ">
        <div className="flex justify-center items-center gap-5">
          {React.Children.map(slides, (_, i) => (
            <div
              key={i}
              onClick={() => setSlide(i)}
              className={`transition-all w-20 h-2 bg-white ${
                slide === i ? "p-2" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
