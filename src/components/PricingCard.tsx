/* src/components/PricingCard.tsx */
import { Plan } from "@/data/pricing";
import Link from "next/link";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div className={`relative flex flex-col bg-white rounded-2xl border p-6 shadow-sm ${
      plan.highlighted 
        ? "border-accent ring-2 ring-accent/20 scale-105 shadow-lg" 
        : "border-gray-200"
    }`}>
      {plan.highlighted && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-heading font-semibold text-primary">{plan.name}</h3>
      <p className="text-sm text-gray-500 mt-1">{plan.studentLimit} students</p>
      <div className="mt-4">
        <span className="text-3xl font-bold text-primary">{plan.pricePerStudent}</span>
        <span className="text-gray-500"> /student/month</span>
      </div>
      <p className="text-sm text-gray-500 mt-1">{plan.monthlyEstimate}</p>
      <ul className="mt-6 space-y-2 flex-1">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2 text-sm text-gray-600">
            <CheckIcon className="w-4 h-4 text-success mt-0.5 shrink-0" />
            {feat}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link
          href="/contact"
          className={`block text-center py-2.5 rounded-lg font-medium transition ${
            plan.highlighted
              ? "bg-accent text-white hover:bg-accent-light"
              : "border border-accent text-accent hover:bg-accent hover:text-white"
          }`}
        >
          {plan.name === 'Premium' ? 'Contact Sales' : 'Get Started'}
        </Link>
      </div>
      <p className="text-xs text-gray-400 mt-2 text-center">Support: {plan.support}</p>
    </div>
  );
}