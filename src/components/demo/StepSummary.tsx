'use client';

import { useFormContext } from 'react-hook-form';
import { CheckCircle } from 'lucide-react';

interface StepSummaryProps {
  termsChecked: boolean;
  setTermsChecked: (checked: boolean) => void;
}

export default function StepSummary({ termsChecked, setTermsChecked }: StepSummaryProps) {
  const { getValues } = useFormContext();
  const values = getValues();

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-heading font-bold text-secondary dark:text-white">
          Review & Submit
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Please verify all information before submitting.
        </p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 space-y-4">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-secondary dark:text-white">School</p>
            <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <p><span className="font-medium">Name:</span> {values.name}</p>
              <p><span className="font-medium">Address:</span> {values.address}</p>
              <p><span className="font-medium">Phone:</span> {values.phone}</p>
              <p><span className="font-medium">Email:</span> {values.email}</p>
              <p><span className="font-medium">Type:</span> {values.type}</p>
              <p><span className="font-medium">Students:</span> {values.numberOfStudents}</p>
              <p><span className="font-medium">Teachers:</span> {values.numberOfTeachers}</p>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3 border-t border-gray-200 dark:border-gray-600 pt-4">
          <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-secondary dark:text-white">Super Admin</p>
            <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <p><span className="font-medium">Name:</span> {values.superAdminName}</p>
              <p><span className="font-medium">Email:</span> {values.superAdminEmail}</p>
              <p><span className="font-medium">Phone:</span> {values.superAdminPhone || 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="terms"
          checked={termsChecked}
          onChange={(e) => setTermsChecked(e.target.checked)}
          className="w-4 h-4 mt-1 rounded border-gray-300 text-primary focus:ring-primary"
          required
        />
        <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-300">
          I agree to the{' '}
          <a href="/terms" className="text-primary hover:underline">Terms & Conditions</a>{' '}
          and{' '}
          <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
        </label>
      </div>
    </div>
  );
}