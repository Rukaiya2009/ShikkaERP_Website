'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Sparkles, 
  ArrowRight, 
  Shield,
  Clock,
  CreditCard,
  Globe,
  Zap,
  Star,
  Users,
  BookOpen,
  BarChart3,
  Lock,
  Headphones
} from 'lucide-react';

// ... rest of your code

// Pricing data
const plans = [
  {
    name: 'Basic',
    description: 'Perfect for small schools starting their digital journey',
    price: '9',
    currency: '৳',
    period: 'student/month',
    features: [
      'Up to 300 students',
      'Student Information System',
      'Attendance Tracking',
      'Fee Management',
      'Parent Portal',
      'Email Support',
      'Basic Reports'
    ],
    popular: false,
    cta: 'Start with Basic',
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Professional',
    description: 'Best for growing schools with advanced needs',
    price: '7',
    currency: '৳',
    period: 'student/month',
    features: [
      'Up to 800 students',
      'Everything in Basic',
      'Online Payment Integration (bKash/Nagad/Rocket)',
      'Payroll Management',
      'Examination & Results',
      'Analytics Dashboard',
      'Phone & Email Support',
      'SMS Notifications'
    ],
    popular: true,
    cta: 'Start Free Trial',
    color: 'from-primary to-accent'
  },
  {
    name: 'Enterprise',
    description: 'For large institutions with custom requirements',
    price: 'Custom',
    currency: '',
    period: 'Contact Us',
    features: [
      'Unlimited students',
      'Everything in Professional',
      'Multi-School Management',
      'Custom Development',
      'Dedicated Account Manager',
      '24/7 Premium Support',
      'SLA Agreement',
      'On-site Training'
    ],
    popular: false,
    cta: 'Contact Sales',
    color: 'from-purple-500 to-pink-500'
  }
];

// All features for comparison (with categories)
const featureCategories = [
  {
    category: 'Core Management',
    features: [
      { name: 'Student Information System', basic: true, pro: true, enterprise: true },
      { name: 'Attendance Tracking', basic: true, pro: true, enterprise: true },
      { name: 'Fee Management', basic: true, pro: true, enterprise: true },
      { name: 'Parent Portal', basic: true, pro: true, enterprise: true },
    ]
  },
  {
    category: 'Advanced Features',
    features: [
      { name: 'Online Payment Integration (bKash/Nagad/Rocket)', basic: false, pro: true, enterprise: true },
      { name: 'Payroll Management', basic: false, pro: true, enterprise: true },
      { name: 'Examination & Results', basic: false, pro: true, enterprise: true },
      { name: 'Analytics Dashboard', basic: false, pro: true, enterprise: true },
    ]
  },
  {
    category: 'Support & Services',
    features: [
      { name: 'Email Support', basic: true, pro: true, enterprise: true },
      { name: 'Phone Support', basic: false, pro: true, enterprise: true },
      { name: 'SMS Notifications', basic: false, pro: true, enterprise: true },
      { name: 'Dedicated Account Manager', basic: false, pro: false, enterprise: true },
    ]
  },
  {
    category: 'Enterprise Features',
    features: [
      { name: 'Multi-School Management', basic: false, pro: false, enterprise: true },
      { name: 'Custom Development', basic: false, pro: false, enterprise: true },
      { name: '24/7 Premium Support', basic: false, pro: false, enterprise: true },
      { name: 'SLA Agreement', basic: false, pro: false, enterprise: true },
      { name: 'On-site Training', basic: false, pro: false, enterprise: true },
    ]
  }
];

// FAQ data
const faqs = [
  {
    q: 'Can I switch plans later?',
    a: 'Yes! You can upgrade or downgrade at any time. Changes will be reflected in your next billing cycle.'
  },
  {
    q: 'Is there a free trial available?',
    a: 'Yes! We offer a 14-day free trial on all paid plans. No credit card required.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept bKash, Nagad, Rocket, VISA, Mastercard, and bank transfer.'
  },
  {
    q: 'Is my data secure?',
    a: 'Absolutely. We use 256-bit encryption, daily backups, and comply with Bangladesh Digital Security Act.'
  },
  {
    q: 'Do you offer discounts for multiple schools?',
    a: 'Yes! We offer volume discounts for multi-school groups. Contact our sales team for details.'
  }
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-16">
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#132337] to-[#1a2d4a] text-white py-20 lg:py-28">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl animate-pulse animation-delay-1000" />
        </div>

        <div className="relative container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-4 h-4 inline-block mr-1 text-accent-light" />
              <span className="text-sm font-medium text-accent-light">Simple, Transparent Pricing</span>
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Pay for What You Need. <br />
              <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Scale as You Grow.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your school. No hidden fees, no surprises.
              All plans include a 14-day free trial.
            </p>

            {/* Billing Toggle */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-white/40'}`}>Monthly</span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative w-14 h-7 bg-white/20 rounded-full transition-all duration-300"
              >
                <div className={`absolute top-1 w-5 h-5 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 ${billingCycle === 'yearly' ? 'right-1' : 'left-1'}`} />
              </button>
              <span className={`text-sm ${billingCycle === 'yearly' ? 'text-white' : 'text-white/40'}`}>
                Yearly <span className="text-accent-light text-xs">Save 20%</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== PRICING CARDS ===== */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                  plan.popular 
                    ? 'border-primary shadow-primary/20 scale-105' 
                    : 'border-slate-200 hover:border-primary/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-primary/20">
                    Most Popular
                  </div>
                )}

                <div className="text-center">
                  <h3 className="text-2xl font-heading font-bold text-secondary">{plan.name}</h3>
                  <p className="text-gray-500 text-sm mt-1">{plan.description}</p>
                  
                  <div className="mt-4 mb-6">
                    {plan.price === 'Custom' ? (
                      <div className="text-3xl font-bold text-secondary">Custom</div>
                    ) : (
                      <div>
                        <span className="text-4xl font-bold text-secondary">
                          {plan.currency}{plan.price}
                        </span>
                        <span className="text-gray-500 text-sm ml-1">
                          /{plan.period}
                        </span>
                        {billingCycle === 'yearly' && plan.price !== 'Custom' && (
                          <div className="text-sm text-accent font-medium mt-1">
                            ৳{(parseInt(plan.price) * 0.8).toFixed(0)}/student/month billed annually
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <Link
                    href="/contact"
                    className={`block w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/25'
                        : 'bg-secondary text-white hover:bg-secondary/90'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-primary' : 'text-gray-400'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Shield className="w-4 h-4 text-primary" />
              <span>256-bit Encryption</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4 text-primary" />
              <span>14-day Free Trial</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CreditCard className="w-4 h-4 text-primary" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Globe className="w-4 h-4 text-primary" />
              <span>Made for Bangladesh</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== IMPROVED FEATURE COMPARISON ===== */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Comparison
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
              Compare Features Side by Side
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-2">
              See exactly what each plan includes. All plans include core features.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-4 text-left text-sm font-semibold text-secondary min-w-[200px]">Features</th>
                    <th className="p-4 text-center text-sm font-semibold text-secondary">
                      <div className="flex flex-col items-center">
                        <span>Basic</span>
                        <span className="text-xs text-gray-400 font-normal">৳9/student</span>
                      </div>
                    </th>
                    <th className="p-4 text-center text-sm font-semibold text-primary">
                      <div className="flex flex-col items-center">
                        <span className="flex items-center gap-1">
                          Professional <Star className="w-3 h-3 fill-primary" />
                        </span>
                        <span className="text-xs text-gray-400 font-normal">৳7/student</span>
                      </div>
                    </th>
                    <th className="p-4 text-center text-sm font-semibold text-secondary">
                      <div className="flex flex-col items-center">
                        <span>Enterprise</span>
                        <span className="text-xs text-gray-400 font-normal">Custom</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {featureCategories.map((category, catIndex) => (
                    <React.Fragment key={catIndex}>
                      {/* Category Header */}
                      <tr className="bg-slate-50/50 border-b border-slate-100">
                        <td colSpan={4} className="p-3 text-sm font-semibold text-primary pl-4">
                          {category.category}
                        </td>
                      </tr>
                      {/* Category Features */}
                      {category.features.map((feature, featIndex) => (
                        <tr key={featIndex} className="border-b border-slate-100 hover:bg-slate-50 transition">
                          <td className="p-4 text-sm text-gray-700">{feature.name}</td>
                          <td className="p-4 text-center">
                            {feature.basic ? (
                              <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                            ) : (
                              <span className="text-gray-300 text-lg">—</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {feature.pro ? (
                              <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                            ) : (
                              <span className="text-gray-300 text-lg">—</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {feature.enterprise ? (
                              <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                            ) : (
                              <span className="text-gray-300 text-lg">—</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Comparison Table Footer */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Included</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-300 text-lg font-bold">—</span>
              <span>Not included</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-3">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-2">
              Everything you need to know about pricing and plans
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-secondary">{faq.q}</span>
                  <span className="text-primary text-xl">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600 text-sm">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold px-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4">
              Join 500+ schools already using ShikkhaERP. Start your 14-day free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/contact"
                className="inline-block bg-white text-primary hover:bg-slate-100 font-semibold py-3.5 px-8 rounded-xl transition duration-300 shadow-lg"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact?type=demo"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3.5 px-8 rounded-xl transition duration-300"
              >
                Request a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}