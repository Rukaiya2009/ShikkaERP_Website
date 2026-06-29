"use client";

import { useState, FormEvent } from "react";
import { submitDemoRequest } from "../lib/api/demo"; // ✅ Import the API function

// ============================================
// ✅ API Configuration - Using VITE_API_BASE_URL from Vercel
// ============================================
const API_BASE = process.env.VITE_API_BASE_URL || 'https://shikkhaerp.onrender.com/api';

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
        name: formData.get('schoolName') as string || '',
        address: formData.get('address') as string || '',
        phone: formData.get('phone') as string || '',
        email: formData.get('email') as string || '',
        type: 'PRIMARY',
        numberOfStudents: parseInt(formData.get('students') as string) || 0,
        numberOfTeachers: 0,
      },
      superAdmin: {
        name: formData.get('contactPerson') as string || '',
        email: formData.get('email') as string || '',
        phone: formData.get('phone') as string || '',
      }
    };

    setLoading(true);
    setError(null);

    try {
      // ✅ FIXED: Use the imported API function instead of manual fetch
      const result = await submitDemoRequest(payload);
      console.log('✅ Demo request submitted:', result);
      setSubmitted(true);
      
    } catch (err: any) {
      console.error('❌ Failed to submit demo request:', err);
      setError(err instanceof Error ? err.message : 'Failed to submit. Please try again.');
      setLoading(false);
    }
  };

  // Success screen and form render remain the same...
}