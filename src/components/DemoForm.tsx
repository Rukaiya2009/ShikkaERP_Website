"use client";

import { useState, FormEvent } from "react";

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <div className="text-center py-12"><h3 className="text-2xl font-semibold text-accent">Thank you!</h3><p className="text-gray-600 mt-2">We've received your demo request and will reach out shortly.</p></div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-xl mx-auto">
      <div><label className="block text-sm font-medium text-secondary">School Name *</label><input type="text" required className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary" /></div>
      <div><label className="block text-sm font-medium text-secondary">Contact Person *</label><input type="text" required className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary" /></div>
      <div><label className="block text-sm font-medium text-secondary">Email *</label><input type="email" required className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary" /></div>
      <div><label className="block text-sm font-medium text-secondary">Phone *</label><input type="tel" required className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary" /></div>
      <div><label className="block text-sm font-medium text-secondary">Number of Students</label><input type="number" className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary" /></div>
      <div><label className="block text-sm font-medium text-secondary">Message</label><textarea rows={3} className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary" /></div>
      <div><label className="block text-sm font-medium text-secondary">Preferred Demo Date</label><input type="datetime-local" className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary" /></div>
      <button type="submit" className="w-full bg-cta text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition">Schedule My Demo</button>
    </form>
  );
}
