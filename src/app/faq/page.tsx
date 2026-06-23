"use client";

import { useState } from "react";
import { faqs, faqCategories } from "@/data/faq";
import FAQAccordion from "@/components/FAQAccordion";
import FAQCategoryFilter from "@/components/FAQCategoryFilter";
import FAQSearch from "@/components/FAQSearch";
import Link from "next/link";
import { ChatBubbleLeftRightIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-gray-50 min-h-screen pb-16">
      <div className="bg-gradient-to-br from-primary to-blue-900 text-white pt-16 pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Find answers to common questions about ShikkhaERP. Can't find what you're looking for?{" "}
            <Link href="/contact" className="underline hover:text-white">Contact our support team</Link>.
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
          <div className="mb-8"><FAQSearch value={searchQuery} onChange={setSearchQuery} /></div>
          <div className="mb-8 overflow-x-auto pb-2"><FAQCategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} /></div>
          <div className="space-y-2">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => <FAQAccordion key={faq.id} faq={faq} />)
            ) : (
              <p className="text-center text-gray-500 py-8">No questions found matching your search.</p>
            )}
          </div>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-heading font-bold text-secondary mb-6">Still Have Questions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3"><EnvelopeIcon className="w-6 h-6 text-green-600" /></div>
              <h3 className="font-semibold text-secondary">Email Us</h3>
              <p className="text-sm text-gray-500 mt-1">support@shikkhaerp.com</p>
              <p className="text-xs text-gray-400">Response within 24h</p>
              <Link href="mailto:support@shikkhaerp.com" className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition text-center">Email Support</Link>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3"><PhoneIcon className="w-6 h-6 text-blue-600" /></div>
              <h3 className="font-semibold text-secondary">Call Us</h3>
              <p className="text-sm text-gray-500 mt-1">+880 1714-090224</p>
              <p className="text-xs text-gray-400">Mon-Fri, 9AM-6PM</p>
              <a href="tel:+8801714090224" className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition text-center">Call Now</a>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col items-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-3"><ChatBubbleLeftRightIcon className="w-6 h-6 text-indigo-600" /></div>
              <h3 className="font-semibold text-secondary">Live Chat</h3>
              <p className="text-sm text-gray-500 mt-1">Start a conversation</p>
              <p className="text-xs text-gray-400">Available 24/7</p>
              <button className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition text-center">Start Chat</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}