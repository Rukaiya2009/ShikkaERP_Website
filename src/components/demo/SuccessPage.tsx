'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Mail, Clock, User } from 'lucide-react';
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
            <span className="font-medium">📧 Super Admin Email:</span> {email}
            <br />
            <span className="text-xs text-gray-400">
              (Login credentials will be sent here after approval)
            </span>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">📋 Request ID:</span> {requestId}
          </p>
        </div>

        {/* 👑 ROLE-BASED INFO BOX — NEW */}
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-4 mb-6 text-left">
          <p className="text-sm font-medium text-amber-800 dark:text-amber-300 flex items-center gap-2 mb-2">
            <User className="w-4 h-4" />
            Who gets the login link?
          </p>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 list-disc list-inside">
            <li>
              <strong>School Super Admin:</strong> The login link will be sent to <strong>{email}</strong> after our team approves the request.
            </li>
            <li>
              <strong>Requester (You):</strong> You will receive a <strong>text-only</strong> confirmation email (no links). 
              Ask the Super Admin to invite you later from the dashboard.
            </li>
          </ul>
        </div>

        {/* ⏳ TIMELINE SECTION — UPDATED */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mb-6 text-left">
          <p className="text-sm font-medium text-blue-800 dark:text-blue-300 flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4" />
            What happens next?
          </p>
          <ol className="text-sm text-gray-600 dark:text-gray-300 space-y-2 list-decimal list-inside">
            <li>
              Our team reviews your application within <strong>72 hours</strong>.
            </li>
            <li>
              <strong>Super Admin</strong> receives an email at <strong>{email}</strong> with a login setup link.
            </li>
            <li>
              The Super Admin sets up the account, then can <strong>invite other staff members</strong> (like you) from the dashboard.
            </li>
          </ol>
        </div>

        {/* 📧 EMAIL REMINDER */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          📧 Please check the <strong>Super Admin inbox</strong> (and spam folder) for the login link.
          <br />
          <span className="text-xs text-gray-400">
            If you are the Requester, you will only receive a text notification — no login link.
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