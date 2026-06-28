"use client";

import { useState, FormEvent } from "react";

// ============================================
// ✅ API Configuration - Using VITE_API_BASE_URL from Vercel
// ============================================
const API_BASE = process.env.VITE_API_BASE_URL || 'https://shikkhaerp-backend.onrender.com/api';

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ============================================
  // Form Submission Handler
  // ============================================
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    
    const payload = {
      school: {
        name: formData.get('schoolName') || '',
        address: formData.get('address') || '',
        phone: formData.get('phone') || '',
        email: formData.get('email') || '',
        type: 'PRIMARY',
        numberOfStudents: parseInt(formData.get('students') as string) || 0,
        numberOfTeachers: 0,
      },
      superAdmin: {
        name: formData.get('contactPerson') || '',
        email: formData.get('email') || '',
        phone: formData.get('phone') || '',
      }
    };

    setLoading(true);
    setError(null);

    try {
      console.log('📤 Sending to:', `${API_BASE}/demo/submit`);
      console.log('📦 Payload:', payload);

      const response = await fetch(`${API_BASE}/demo/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('❌ API Error:', response.status, errorData);
        throw new Error(`HTTP ${response.status}: ${errorData}`);
      }

      const result = await response.json();
      console.log('✅ Demo request submitted:', result);
      
      setSubmitted(true);
      
    } catch (err) {
      console.error('❌ Failed to submit demo request:', err);
      setError(err instanceof Error ? err.message : 'Failed to submit. Please try again.');
      setLoading(false);
    }
  };

  // ============================================
  // Success Screen
  // ============================================
  if (submitted) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-semibold text-accent">Thank you!</h3>
        <p className="text-gray-600 mt-2">We've received your demo request and will reach out shortly.</p>
      </div>
    );
  }

  // ============================================
  // Form Render
  // ============================================
  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-xl mx-auto">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
          <p>{error}</p>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-secondary">School Name *</label>
        <input 
          type="text" 
          name="schoolName"
          required 
          className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary" 
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-secondary">Contact Person *</label>
        <input 
          type="text" 
          name="contactPerson"
          required 
          className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary" 
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-secondary">Email *</label>
        <input 
          type="email" 
          name="email"
          required 
          className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary" 
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-secondary">Phone *</label>
        <input 
          type="tel" 
          name="phone"
          required 
          className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary" 
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-secondary">Address</label>
        <input 
          type="text" 
          name="address"
          className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary" 
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-secondary">Number of Students</label>
        <input 
          type="number" 
          name="students"
          className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary" 
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-secondary">Message</label>
        <textarea 
          name="message"
          rows={3} 
          className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary" 
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-secondary">Preferred Demo Date</label>
        <input 
          type="datetime-local" 
          name="demoDate"
          className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary" 
        />
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-cta text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Submitting...' : 'Schedule My Demo'}
      </button>
    </form>
  );
}