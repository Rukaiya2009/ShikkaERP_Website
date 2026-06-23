import Link from "next/link";

export const metadata = { title: "Privacy Policy – ShikkhaERP" };

export default function PrivacyPage() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-secondary prose-p:text-gray-600 prose-ul:text-gray-600 prose-li:marker:text-primary">
            <h1 className="text-4xl font-heading font-bold text-secondary mb-4">Privacy Policy</h1>
            <p className="font-semibold text-gray-700">Effective Date: To be set upon website launch</p>
            <p className="text-sm text-gray-500 mt-1">Note: This is a draft. Legal counsel should review before publication.</p>
            <h2>1. Introduction</h2>
            <p>IT Data Science operates the ShikkhaERP platform at shikkhaerp.com. This Privacy Policy explains how we collect, use, store, and protect your information.</p>
            <h2>2. Information We Collect</h2>
            <h3>Information You Provide Directly</h3>
            <ul><li>School name, contact person name, email, phone</li><li>Student, teacher, and staff records</li><li>Financial information</li></ul>
            <h2>12. Contact Us</h2>
            <p>Email: info@shikkhaerp.com<br />Phone: +880 1714-090224<br />Address: 35/1, Siddheswari, Ramna, Dhaka, Bangladesh</p>
          </div>
          <div className="mt-10 pt-6 border-t border-gray-200"><Link href="/" className="inline-flex items-center text-primary font-medium hover:underline">← Back to Home</Link></div>
        </div>
      </div>
    </section>
  );
}