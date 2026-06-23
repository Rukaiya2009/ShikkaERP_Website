/* src/components/HeroSection.tsx */
'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight">
            Complete School Management. <br />
            <span className="text-accent">One Powerful Platform.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl">
            The all-in-one School ERP trusted by Bangladesh schools to streamline operations, engage parents, and deliver results.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/contact"
              className="bg-cta text-white px-8 py-3 rounded-lg font-semibold hover:bg-cta-hover transition shadow-md"
            >
              Request a Free Demo
            </Link>
            <button className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-white transition">
              ▶ Watch a Video
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-md h-80 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
            Hero Image / App Screenshot
          </div>
        </div>
      </div>
    </section>
  );
}