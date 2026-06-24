'use client';

import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import StepSchool from '@/components/demo/StepSchool';
import StepSuperAdmin from '@/components/demo/StepSuperAdmin';
import StepSummary from '@/components/demo/StepSummary';
import SuccessPage from '@/components/demo/SuccessPage';
import { submitDemoRequest } from '@/lib/api/demo';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// ---- Zod Schemas ----
const schoolSchema = z.object({
  name: z.string().min(2, 'School name is required'),
  address: z.string().min(5, 'Address is required'),
  phone: z.string().min(10, 'Valid phone number required'),
  email: z.string().email('Valid email required'),
  type: z.string().min(1, 'Please select school type'),
  numberOfStudents: z.string().min(1, 'Number of students required'),
  numberOfTeachers: z.string().min(1, 'Number of teachers required'),
});

const superAdminSchema = z.object({
  superAdminName: z.string().min(2, 'Full name is required'),
  superAdminEmail: z.string().email('Valid email required'),
  superAdminPhone: z.string().optional(),
});

const fullSchema = schoolSchema.merge(superAdminSchema);
type FullFormData = z.infer<typeof fullSchema>;

// ---- Component ----
export default function DemoRequestPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState<{ requestId: string; email: string } | null>(null);
  const [termsChecked, setTermsChecked] = useState(false);

  const methods = useForm<FullFormData>({
    resolver: zodResolver(fullSchema),
    defaultValues: {
      name: '',
      address: '',
      phone: '',
      email: '',
      type: '',
      numberOfStudents: '',
      numberOfTeachers: '',
      superAdminName: '',
      superAdminEmail: '',
      superAdminPhone: '',
    },
    mode: 'onBlur',
  });

  const { handleSubmit, trigger, getValues, formState: { errors } } = methods;

  const nextStep = async () => {
    const fieldsToValidate = step === 1
      ? ['name', 'address', 'phone', 'email', 'type', 'numberOfStudents', 'numberOfTeachers']
      : ['superAdminName', 'superAdminEmail'];
    const isValid = await trigger(fieldsToValidate as any);
    if (isValid) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const onSubmit = async (data: FullFormData) => {
    // Prevent submission if terms not checked
    if (!termsChecked) {
      alert('Please agree to the Terms & Conditions and Privacy Policy.');
      return;
    }

    setLoading(true);
    try {
      const payload = {
        school: {
          name: data.name,
          address: data.address,
          phone: data.phone,
          email: data.email,
          type: data.type,
          numberOfStudents: parseInt(data.numberOfStudents, 10),
          numberOfTeachers: parseInt(data.numberOfTeachers, 10),
        },
        superAdmin: {
          name: data.superAdminName,
          email: data.superAdminEmail,
          phone: data.superAdminPhone || '',
        },
      };
      const response = await submitDemoRequest(payload);
      setSuccessData({ requestId: response.requestId, email: response.email });
    } catch (error: any) {
      console.error('Submission failed:', error);
      // Optionally show a toast or error message
      alert(error.message || 'Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (successData) {
    return <SuccessPage requestId={successData.requestId} email={successData.email} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-primary hover:underline inline-flex items-center gap-1 text-sm">
            ← Back to Home
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Stepper Header */}
          <div className="px-6 pt-6 sm:px-8 sm:pt-8">
            <div className="flex items-center justify-between mb-6">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                      step >= num
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {num}
                  </div>
                  {num < 3 && (
                    <div
                      className={`flex-1 h-1 mx-2 transition-colors ${
                        step > num ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs font-medium text-gray-500 dark:text-gray-400 mb-6">
              <span>School</span>
              <span>Admin</span>
              <span>Summary</span>
            </div>
          </div>

          {/* Form */}
          <FormProvider {...methods}>
            {/* Removed onSubmit from form */}
            <form>
              <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <StepSchool />
                    </motion.div>
                  )}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <StepSuperAdmin />
                    </motion.div>
                  )}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <StepSummary
                        termsChecked={termsChecked}
                        setTermsChecked={setTermsChecked}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="inline-flex items-center gap-2 px-6 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition shadow-sm"
                    >
                      Next Step
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="button"  // ← Important: not submit
                      onClick={handleSubmit(onSubmit)}  // ← Manual call
                      disabled={loading}
                      className="inline-flex items-center gap-2 px-8 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent-dark transition shadow-sm disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        'Submit Request'
                      )}
                    </button>
                  )}
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}