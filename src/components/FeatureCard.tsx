/* src/components/FeatureCard.tsx */
import { Feature } from "@/data/features";

export default function FeatureCard({ title, description, icon: Icon }: Feature) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}