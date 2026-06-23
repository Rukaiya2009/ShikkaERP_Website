/* src/components/CTASection.tsx */
'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-primary py-20 mb-0">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
          Ready to Transform Your School?
        </h2>
        <p className="text-accent-light text-lg mb-8 max-w-2xl mx-auto">
          Join 500+ schools across Bangladesh already running on ShikkhaERP.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Get Started Today
          </Link>
          <Link
            href="/features"
            className="inline-block border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
          >
            Explore Features
          </Link>
        </div>
      </div>
    </section>
  );
}