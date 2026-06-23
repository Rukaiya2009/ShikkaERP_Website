"use client";

import { faqCategories } from "@/data/faq";

export default function FAQCategoryFilter({
  activeCategory,
  onCategoryChange,
}: {
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {faqCategories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${
            activeCategory === cat.id
              ? "bg-primary text-white shadow-md"
              : "bg-white border border-gray-200 text-gray-600 hover:border-primary hover:text-primary"
          }`}
        >
          <cat.icon className="w-4 h-4" />
          {cat.label}
        </button>
      ))}
    </div>
  );
}
