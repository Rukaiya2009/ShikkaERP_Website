'use client';

import { useFormContext } from 'react-hook-form';

export default function StepSchool() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-heading font-bold text-secondary dark:text-white">
          School Information
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Tell us about your institution.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-secondary dark:text-white mb-1">
            School Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('name')}
            placeholder="e.g., ABC School"
            className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1">{errors.name.message as string}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary dark:text-white mb-1">
            Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register('address')}
            placeholder="e.g., 123, Dhaka"
            className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          />
          {errors.address && (
            <p className="text-xs text-red-500 mt-1">{errors.address.message as string}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary dark:text-white mb-1">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            {...register('phone')}
            placeholder="+880 1XXX XXX XXX"
            className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          />
          {errors.phone && (
            <p className="text-xs text-red-500 mt-1">{errors.phone.message as string}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary dark:text-white mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="info@school.edu.bd"
            className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message as string}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary dark:text-white mb-1">
            School Type <span className="text-red-500">*</span>
          </label>
          <select
            {...register('type')}
            className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          >
            <option value="">Select type</option>
            <option value="PRIMARY">Primary</option>
            <option value="SECONDARY">Secondary</option>
            <option value="HIGHER_SECONDARY">Higher Secondary</option>
            <option value="UNIVERSITY">University</option>
          </select>
          {errors.type && (
            <p className="text-xs text-red-500 mt-1">{errors.type.message as string}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary dark:text-white mb-1">
            Number of Students <span className="text-red-500">*</span>
          </label>
          <input
            {...register('numberOfStudents')}
            type="number"
            placeholder="e.g., 500"
            className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          />
          {errors.numberOfStudents && (
            <p className="text-xs text-red-500 mt-1">{errors.numberOfStudents.message as string}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary dark:text-white mb-1">
            Number of Teachers <span className="text-red-500">*</span>
          </label>
          <input
            {...register('numberOfTeachers')}
            type="number"
            placeholder="e.g., 25"
            className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          />
          {errors.numberOfTeachers && (
            <p className="text-xs text-red-500 mt-1">{errors.numberOfTeachers.message as string}</p>
          )}
        </div>
      </div>
    </div>
  );
}