'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export default function FAQAccordion({ faq }: { faq: FAQ }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
      >
        <span className="text-base font-medium text-secondary">{faq.question}</span>
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-gray-500" />
        )}
      </button>
      <div className={`px-5 pb-5 ${isOpen ? 'block' : 'hidden'}`}>
        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}