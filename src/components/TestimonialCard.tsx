/* src/components/TestimonialCard.tsx */
import { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({ quote, author, role, school }: Testimonial) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <p className="text-gray-600 italic text-sm">“{quote}”</p>
      <div className="mt-4 border-t pt-4">
        <p className="font-semibold text-primary">{author}</p>
        <p className="text-sm text-gray-500">{role}, {school}</p>
      </div>
    </div>
  );
}