'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

export default function SuccessPage({ requestId, email }: { requestId: string; email: string }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center"
      >
        <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>

        <h1 className="text-3xl font-heading font-bold text-secondary dark:text-white mb-2">
          Request Received! ✅
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Thank you for your interest in ShikkhaERP.
        </p>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-left space-y-2 mb-6">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">📧 Email:</span> {email}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">📋 Request ID:</span> {requestId}
          </p>
        </div>

        {/* ⏳ TIMELINE SECTION */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mb-6 text-left">
          <p className="text-sm font-medium text-blue-800 dark:text-blue-300 flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4" />
            What happens next?
          </p>
          <ol className="text-sm text-gray-600 dark:text-gray-300 space-y-2 list-decimal list-inside">
            <li>
              Our team will review your application within <strong>72 hours</strong>.
            </li>
            <li>
              If approved, you'll receive an email at <strong>{email}</strong>.
            </li>
            <li>
              The email will contain a link to set up your <strong>30-day free trial</strong>.
            </li>
          </ol>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          📧 Please check your inbox <strong>(and spam folder)</strong> for a confirmation email.
          <br />
          <span className="text-xs text-gray-400">
            If you don't receive an email within 72 hours, please contact us.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition"
          >
            Go to Homepage
          </Link>
          <Link
            href="/features"
            className="inline-block border border-gray-300 dark:border-gray-600 text-secondary dark:text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            Learn More
          </Link>
        </div>
      </motion.div>
    </div>
  );
}