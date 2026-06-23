/* src/components/TestimonialCarousel.tsx */
"use client";

import { useState, useEffect } from "react";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goToSlide = (index: number) => setCurrentIndex(index);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto px-4 overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {testimonials.map((t, index) => (
          <div key={index} className="min-w-full px-4">
            <div className="max-w-md mx-auto"><TestimonialCard {...t} /></div>
          </div>
        ))}
      </div>
      <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-50 border border-gray-200 z-10"><ChevronLeftIcon className="w-5 h-5 text-gray-600" /></button>
      <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-50 border border-gray-200 z-10"><ChevronRightIcon className="w-5 h-5 text-gray-600" /></button>
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? "bg-accent" : "bg-gray-300 hover:bg-gray-400"}`} />
        ))}
      </div>
    </div>
  );
}