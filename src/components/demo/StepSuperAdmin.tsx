'use client';

import { useFormContext } from 'react-hook-form';

export default function StepSuperAdmin() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-heading font-bold text-secondary dark:text-white">
          Super Admin Account
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          This will be the primary contact for your school.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-secondary dark:text-white mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('superAdminName')}
            placeholder="John Doe"
            className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          />
          {errors.superAdminName && (
            <p className="text-xs text-red-500 mt-1">{errors.superAdminName.message as string}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary dark:text-white mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            {...register('superAdminEmail')}
            type="email"
            placeholder="john@school.edu.bd"
            className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          />
          {errors.superAdminEmail && (
            <p className="text-xs text-red-500 mt-1">{errors.superAdminEmail.message as string}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary dark:text-white mb-1">
            Phone (optional)
          </label>
          <input
            {...register('superAdminPhone')}
            placeholder="+880 1XXX XXX XXX"
            className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          />
        </div>
      </div>
    </div>
  );
}