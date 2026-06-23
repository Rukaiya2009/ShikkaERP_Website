/* src/components/TrustBar.tsx */
export default function TrustBar() {
  return (
    <section className="bg-light py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
        <span className="text-sm text-gray-500 font-medium">Trusted Across Bangladesh</span>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span>⭐ 4.9/5 rating</span>
          <span>🔒 SSL Secured</span>
          <span>🇧🇩 Made for Bangladesh</span>
        </div>
      </div>
    </section>
  );
}