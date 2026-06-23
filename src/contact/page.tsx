/* src/app/contact/page.tsx */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ClockIcon,
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export const metadata = {
  title: "Contact Us – ShikkhaERP",
  description: "Get in touch with ShikkhaERP. Request a demo, ask questions, or connect with our team.",
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    students: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-light py-20">
        <div className="container-custom">
          <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-primary p-8 text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-white">Thank You! 🎉</h2>
              <p className="text-accent-light mt-2">We've received your message.</p>
            </div>
            <div className="p-8 text-center">
              <p className="text-gray-600 mb-6">
                Our team will get back to you within <strong>24 hours</strong>. 
                We look forward to helping you transform your school with ShikkhaERP.
              </p>
              <Link
                href="/"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-light transition shadow-md"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section with Gradient */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-light text-white overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-24 translate-x-24" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-y-24 -translate-x-24" />
        
        <div className="relative container-custom py-20 lg:py-28 text-center">
          <span className="inline-block bg-white/10 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4">
            Let's Talk About Your School
          </h1>
          <p className="text-lg text-accent-light max-w-2xl mx-auto">
            Have questions about ShikkhaERP? We'd love to hear from you. 
            Reach out and let's transform your school together.
          </p>
        </div>
      </section>

      {/* Main Content - Split Layout */}
      <section className="py-16 lg:py-20 bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition group">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent transition">
                  <PhoneIcon className="w-7 h-7 text-accent group-hover:text-white transition" />
                </div>
                <h3 className="font-semibold text-primary text-lg">Call Us</h3>
                <p className="text-gray-600 text-sm mt-1">+880 1319-719968</p>
                <p className="text-xs text-gray-400">Mon-Fri, 9AM - 6PM</p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition group">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent transition">
                  <EnvelopeIcon className="w-7 h-7 text-accent group-hover:text-white transition" />
                </div>
                <h3 className="font-semibold text-primary text-lg">Email Us</h3>
                <p className="text-gray-600 text-sm mt-1">info@shikkhaerp.com</p>
                <p className="text-xs text-gray-400">Response within 24 hours</p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition group">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent transition">
                  <MapPinIcon className="w-7 h-7 text-accent group-hover:text-white transition" />
                </div>
                <h3 className="font-semibold text-primary text-lg">Visit Us</h3>
                <p className="text-gray-600 text-sm mt-1">35/1 Siddheswari Circular Road</p>
                <p className="text-gray-600 text-sm">Dhaka, Bangladesh</p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition group">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent transition">
                  <ChatBubbleLeftRightIcon className="w-7 h-7 text-accent group-hover:text-white transition" />
                </div>
                <h3 className="font-semibold text-primary text-lg">Live Chat</h3>
                <p className="text-gray-600 text-sm mt-1">Start a conversation</p>
                <button className="mt-2 text-accent text-sm font-medium hover:underline">
                  Chat Now →
                </button>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-3xl font-heading font-bold text-primary mb-2">
                    Request a Personalised Demo
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition bg-gray-50 hover:bg-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition bg-gray-50 hover:bg-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition bg-gray-50 hover:bg-white"
                        placeholder="+880 1XXX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1.5">
                        School Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="school"
                        required
                        value={formData.school}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition bg-gray-50 hover:bg-white"
                        placeholder="Your School Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">
                      Number of Students
                    </label>
                    <input
                      type="number"
                      name="students"
                      value={formData.students}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition bg-gray-50 hover:bg-white"
                      placeholder="e.g. 500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition bg-gray-50 hover:bg-white"
                      placeholder="Tell us how we can help you transform your school..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-cta text-white py-3.5 rounded-xl font-semibold hover:bg-cta-hover transition shadow-md hover:shadow-lg"
                  >
                    Send Message →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Location
            </span>
            <h2 className="text-3xl font-heading font-bold text-primary">Find Us Here</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2">
              Visit our office for a personalized demonstration of ShikkhaERP.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg h-[450px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.123!2d90.405!3d23.750!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzAwLjAiTiA5MMKwMjQnMTguMCJF!5e0!3m2!1sen!2sbd!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary py-16">
        <div className="container-custom text-center">
          <span className="inline-block bg-accent/20 text-accent-light text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Need Help?
          </span>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
            Need immediate assistance?
          </h3>
          <p className="text-accent-light mb-6 max-w-2xl mx-auto">
            Our support team is available 24/7 for urgent inquiries. 
            Give us a call and we'll help you right away.
          </p>
          <Link
            href="tel:+8801319719968"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Call Now: +880 1319-719968
          </Link>
        </div>
      </section>
    </>
  );
}