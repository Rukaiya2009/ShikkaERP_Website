'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  ArrowRightIcon, 
  CheckCircleIcon,
  AcademicCapIcon,
  UsersIcon,
  CreditCardIcon,
  BookOpenIcon,
  GlobeAltIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ClockIcon,
  CalendarIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon,
  StarIcon,
  XMarkIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  PresentationChartLineIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

// ===================== COMPONENTS =====================

// Animated Section Wrapper
const SectionWrapper = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Glass Card Component
const GlassCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-3xl ${className}`}>
    {children}
  </div>
);

// Animated Counter
const AnimatedCounter = ({ target, label, icon: Icon }: { target: string; label: string; icon: any }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState('0');

  useEffect(() => {
    if (!isInView) return;
    
    const targetNum = parseInt(target.replace(/[^0-9]/g, ''));
    const suffix = target.replace(/[0-9]/g, '');
    let start = 0;
    const duration = 2000;
    const step = targetNum / (duration / 16);
    
    const timer = setInterval(() => {
      start += step;
      if (start >= targetNum) {
        setCount(targetNum + suffix);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start) + suffix);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="p-6 bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-4 mb-2">
        <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <div className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {count}
        </div>
      </div>
      <div className="text-sm text-gray-600 font-medium pl-16">{label}</div>
    </div>
  );
};

// FAQ Item with Animation
const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
      >
        <span className="font-semibold text-secondary text-lg">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <ChevronUpIcon className="w-5 h-5 text-primary" />
          ) : (
            <ChevronDownIcon className="w-5 h-5 text-gray-400" />
          )}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-5"
          >
            <p className="text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Testimonial Card
const TestimonialCard = ({ 
  quote, 
  name, 
  role, 
  school, 
  rating 
}: { 
  quote: string; 
  name: string; 
  role: string; 
  school: string; 
  rating: number 
}) => (
  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
    <div className="flex gap-1 text-accent mb-4">
      {[...Array(rating)].map((_, i) => (
        <StarIcon key={i} className="w-5 h-5 fill-current" />
      ))}
    </div>
    <p className="text-gray-700 italic leading-relaxed mb-6 text-lg">“{quote}”</p>
    <div className="pt-4 border-t border-gray-100 flex items-center gap-4">
      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
        {name.charAt(0)}
      </div>
      <div>
        <p className="font-semibold text-secondary">{name}</p>
        <p className="text-sm text-gray-500">{role}, {school}</p>
      </div>
    </div>
  </div>
);

// Feature Card with 3D Hover
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay 
}: { 
  icon: any; 
  title: string; 
  description: string; 
  delay: number 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group bg-white p-8 rounded-3xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`} />
      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent transition-all duration-300">
          <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-heading font-bold text-secondary mb-3">{title}</h3>
        <p className="text-gray-500 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

// Dark Feature Card (for the new dark section)
const DarkFeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay 
}: { 
  icon: any; 
  title: string; 
  description: string; 
  delay: number 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay }}
    className="group"
  >
    <div className="relative h-full p-8 rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 bg-white/5 backdrop-blur-sm">
      <div className="w-12 h-12 mb-5">
        <Icon className="w-10 h-10 text-accent-light group-hover:text-accent transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-heading font-semibold text-white mb-3 group-hover:text-accent-light transition-colors">
        {title}
      </h3>
      <p className="text-white/60 leading-relaxed text-sm group-hover:text-white/80 transition-colors">
        {description}
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  </motion.div>
);

// ===================== MAIN PAGE =====================

export default function Home() {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [popupDismissed, setPopupDismissed] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      quote: "ShikkhaERP transformed our academic and financial processes. Our staff spends less time on paperwork and more time supporting students.",
      name: "Mr. Rahman Hossain",
      role: "Principal",
      school: "Greenfield International School",
      rating: 5
    },
    {
      quote: "The parent portal and SMS notifications revolutionized communication with guardians. Parent satisfaction has increased dramatically.",
      name: "Mrs. Fatema Akhter",
      role: "Director",
      school: "Sunshine Model School",
      rating: 5
    },
    {
      quote: "We evaluated five ERP systems and ShikkhaERP was the most affordable and easiest to implement. Highly recommended for schools in Bangladesh.",
      name: "Dr. Sabrina Zaman",
      role: "Principal",
      school: "Maple Leaf Academy",
      rating: 5
    }
  ];

  // Exit intent popup - only trigger if not dismissed
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !showExitPopup && !popupDismissed) {
        setShowExitPopup(true);
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [showExitPopup, popupDismissed]);

  // Auto-show popup after 30 seconds - only if not dismissed
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!showExitPopup && !popupDismissed) {
        setShowExitPopup(true);
      }
    }, 30000);
    return () => clearTimeout(timer);
  }, [showExitPopup, popupDismissed]);

  // Testimonial auto-rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleClosePopup = () => {
    setShowExitPopup(false);
    setPopupDismissed(true); // Mark as dismissed permanently
  };

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#132337] to-[#1a2d4a]">
        {/* Animated Mesh Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl animate-pulse animation-delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl opacity-40" />
        </div>

        <div className="relative container-custom py-20 lg:py-32">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-8 hover:bg-white/20 transition-colors">
                <SparklesIcon className="w-4 h-4 text-accent-light" />
                <span className="text-sm font-medium text-accent-light">🇧🇩 Made in Bangladesh | Trusted by 100+ Schools</span>
              </div>
              
              {/* Main Title */}
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-heading font-bold leading-[1.1] mb-6">
                <span className="text-white">Transform Your</span>
                <br />
                <span className="bg-gradient-to-r from-accent-light via-accent to-primary bg-clip-text text-transparent">
                  School Operations
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">
                ShikkhaERP helps schools streamline admissions, attendance, academics, finance, 
                examinations, communication, and reporting through a secure cloud-based platform 
                built for Bangladesh.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href="#demo-form"
                  className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  Request Free Demo
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Explore Features
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-8 text-sm text-white/60">
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-accent-light" />
                  Free 14-day trial
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-accent-light" />
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-accent-light" />
                  Bengali support
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDownIcon className="w-6 h-6 text-white/40" />
        </motion.div>
      </section>

      {/* ===== TRUST & CREDIBILITY ===== */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <SectionWrapper>
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                Trusted by educational institutions committed to digital transformation
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            </div>
          </SectionWrapper>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <SectionWrapper>
              <AnimatedCounter target="100+" label="Schools Connected" icon={BuildingOfficeIcon} />
            </SectionWrapper>
            <SectionWrapper>
              <AnimatedCounter target="50K+" label="Students Managed" icon={UserGroupIcon} />
            </SectionWrapper>
            <SectionWrapper>
              <AnimatedCounter target="5K+" label="Teachers Supported" icon={AcademicCapIcon} />
            </SectionWrapper>
            <SectionWrapper>
              <AnimatedCounter target="10K+" label="Daily Transactions" icon={PresentationChartLineIcon} />
            </SectionWrapper>
          </div>

          {/* Trust Badges */}
          <SectionWrapper>
            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap justify-center gap-6">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-gray-600 text-sm">
                🔒 SSL Encrypted
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-gray-600 text-sm">
                💳 bKash, Nagad, Rocket
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-gray-600 text-sm">
                📱 Mobile Ready
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-gray-600 text-sm">
                ☁️ Cloud Based
              </span>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ===== PAIN POINTS ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionWrapper>
            <div className="text-center mb-14">
              <span className="inline-block bg-red-50 text-red-500 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                Challenges
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary leading-tight">
                Still Managing School Operations Manually?
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto mt-3 text-lg">
                Traditional methods create inefficiencies that impact your institution's growth.
              </p>
            </div>
          </SectionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ClockIcon, text: "Time-consuming administrative tasks", color: "bg-red-50", border: "border-red-100" },
              { icon: DocumentTextIcon, text: "Attendance tracking difficulties", color: "bg-orange-50", border: "border-orange-100" },
              { icon: CalendarIcon, text: "Delayed report generation", color: "bg-yellow-50", border: "border-yellow-100" },
              { icon: CurrencyDollarIcon, text: "Fee collection inefficiencies", color: "bg-amber-50", border: "border-amber-100" },
              { icon: ChatBubbleLeftRightIcon, text: "Disconnected communication channels", color: "bg-blue-50", border: "border-blue-100" },
              { icon: XMarkIcon, text: "Inaccurate record keeping", color: "bg-indigo-50", border: "border-indigo-100" },
            ].map((pain, idx) => (
              <SectionWrapper key={idx} className="h-full">
                <div className={`${pain.color} ${pain.border} border p-6 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full`}>
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                    <pain.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <p className="text-gray-700 font-medium">{pain.text}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
          
          <SectionWrapper>
            <div className="text-center mt-10">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-medium px-6 py-3 rounded-full hover:shadow-lg transition-all">
                <RocketLaunchIcon className="w-5 h-5" />
                ShikkhaERP solves these challenges with one integrated platform
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ===== SOLUTION / FEATURES (LIGHT) ===== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionWrapper>
            <div className="text-center mb-14">
              <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                Solution
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary leading-tight">
                Everything Your Institution Needs in One Platform
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto mt-3 text-lg">
                A complete ecosystem for modern educational management
              </p>
            </div>
          </SectionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: AcademicCapIcon, 
                title: "Centralized Student Records", 
                desc: "Maintain complete student information from admission to graduation" 
              },
              { 
                icon: CheckCircleIcon, 
                title: "Automated Attendance", 
                desc: "Track attendance digitally with real-time reporting" 
              },
              { 
                icon: CreditCardIcon, 
                title: "Digital Fee Processing", 
                desc: "Manage billing, payments, and dues efficiently" 
              },
              { 
                icon: BookOpenIcon, 
                title: "Examination & Results", 
                desc: "Create exams, publish results, and generate report cards" 
              },
              { 
                icon: UsersIcon, 
                title: "Parent Engagement", 
                desc: "Keep guardians informed through instant updates" 
              },
              { 
                icon: ChartBarIcon, 
                title: "Analytics Dashboard", 
                desc: "Monitor performance through visual insights" 
              },
            ].map((feature, idx) => (
              <FeatureCard 
                key={idx}
                icon={feature.icon}
                title={feature.title}
                description={feature.desc}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== DARK FEATURES SECTION (NEW) ===== */}
      <section className="relative py-24 bg-gradient-to-br from-[#0a1628] via-[#132337] to-[#1a2d4a] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl opacity-20" />
        </div>

        <div className="relative container-custom">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="inline-block text-accent-light text-sm font-semibold tracking-wide uppercase mb-3">
                Features
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                Your Complete Solution for Effortless <br />
                School Management
              </h2>
              <p className="text-white/60 max-w-3xl mx-auto mt-4 text-lg">
                Discover ShikkhaERP's all-in-one platform with smart features that simplify administration, 
                engage your community, and help you focus on quality education.
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: AcademicCapIcon,
                title: "Student Information Management",
                description: "Manage and search student data, import in bulk, generate certificates, handle transfers, and create customizable reports with flexible filters and editing tools."
              },
              {
                icon: CheckCircleIcon,
                title: "Attendance & Leave Tracking",
                description: "Track student and staff attendance with calendar integration, daily logs, leave management, and filtered reports for clear, organized monitoring."
              },
              {
                icon: BookOpenIcon,
                title: "Academic Result Management",
                description: "Manage and search student data, import in bulk, generate certificates, handle transfers, and create customizable reports with flexible filters and editing tools."
              },
              {
                icon: CreditCardIcon,
                title: "Fees & Payment Management",
                description: "Automate fee collection with head/class-wise setup, online payments, discounts, and detailed reports for dues, confirmations, and financial summaries."
              }
            ].map((feature, idx) => (
              <DarkFeatureCard
                key={idx}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={idx * 0.1}
              />
            ))}
          </div>

          <SectionWrapper>
            <div className="text-center mt-12">
              <Link 
                href="/features" 
                className="inline-flex items-center gap-2 text-accent-light hover:text-accent transition-colors font-medium"
              >
                View all features
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionWrapper>
            <div className="text-center mb-14">
              <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                Process
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary leading-tight">
                Get Started in Three Simple Steps
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto mt-3 text-lg">
                From demo to full deployment in days, not months
              </p>
            </div>
          </SectionWrapper>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                step: "01", 
                title: "Request a Demo", 
                desc: "Fill out the form. Our team contacts you within 24 hours" 
              },
              { 
                step: "02", 
                title: "Configure Your Institution", 
                desc: "We help set up your school data, classes, and users" 
              },
              { 
                step: "03", 
                title: "Start Managing Operations", 
                desc: "Begin using ShikkhaERP with full training support" 
              },
            ].map((item, idx) => (
              <SectionWrapper key={idx} className="text-center">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent text-white rounded-3xl flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl shadow-primary/20">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-secondary mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionWrapper>
            <div className="text-center mb-14">
              <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                Testimonials
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary leading-tight">
                What School Leaders Say
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto mt-3 text-lg">
                Trusted by educational institutions across Bangladesh
              </p>
            </div>
          </SectionWrapper>
          
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <TestimonialCard {...testimonials[activeTestimonial]} />
              </motion.div>
            </AnimatePresence>
            
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === activeTestimonial ? 'bg-gradient-to-r from-primary to-accent w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionWrapper>
            <div className="text-center mb-14">
              <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                FAQ
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto mt-3 text-lg">
                Everything you need to know about ShikkhaERP
              </p>
            </div>
          </SectionWrapper>
          
          <div className="max-w-3xl mx-auto space-y-3">
            {[
              {
                q: "Is ShikkhaERP cloud-based?",
                a: "Yes, it is accessible securely from anywhere with an internet connection."
              },
              {
                q: "Can parents access student information?",
                a: "Yes, parents receive access through a dedicated portal."
              },
              {
                q: "Does ShikkhaERP support online payments?",
                a: "Yes, integration with bKash, Nagad, Rocket, and other payment gateways is available."
              },
              {
                q: "Can we generate report cards automatically?",
                a: "Yes, report cards are generated automatically based on examination results."
              },
              {
                q: "Is training provided?",
                a: "Yes, onboarding and training support are included for all paid plans."
              },
              {
                q: "Is my data secure?",
                a: "Yes, 256-bit encryption, daily backups, and compliance with Bangladesh Digital Security Act."
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes, monthly plans have no lock-in. Cancel anytime."
              },
              {
                q: "How do I start?",
                a: "Click Request Free Demo – we'll set up your 14-day trial within 24 hours."
              },
            ].map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} index={idx} />
            ))}
          </div>
          
          <SectionWrapper>
            <div className="text-center mt-10">
              <Link href="/faq" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group">
                View all FAQs
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section id="demo-form" className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#132337] to-[#1a2d4a]">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="relative container-custom">
          <div className="max-w-5xl mx-auto">
            <SectionWrapper>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-4">
                  Ready to Digitize Your School?
                </h2>
                <p className="text-xl text-white/70 max-w-2xl mx-auto">
                  Join forward-thinking educational institutions that are simplifying operations 
                  and improving efficiency with ShikkhaERP.
                </p>
              </div>
            </SectionWrapper>
            
            <SectionWrapper>
              <GlassCard className="p-8 md:p-12">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      School Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      placeholder="Your School Name"
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Person <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Designation <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    >
                      <option value="">Select your designation</option>
                      <option value="principal">Principal</option>
                      <option value="vice-principal">Vice Principal</option>
                      <option value="director">Director</option>
                      <option value="administrator">Administrator</option>
                      <option value="accountant">Accountant</option>
                      <option value="teacher">Teacher</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      placeholder="principal@school.edu.bd"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      placeholder="+880 1XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Students <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    >
                      <option value="">Select range</option>
                      <option value="less-200">Less than 200</option>
                      <option value="200-500">200 - 500</option>
                      <option value="500-1000">500 - 1000</option>
                      <option value="1000+">1000+</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      placeholder="Tell us about your school's needs..."
                    />
                  </div>
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Schedule My Demo
                    </button>
                  </div>
                </form>
                <p className="text-center text-sm text-gray-500 mt-6">
                  ✓ Free 30-minute personalized demo + PDF brochure
                </p>
              </GlassCard>
            </SectionWrapper>
            
            <SectionWrapper>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/70">
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-accent-light" />
                  Free 14-day trial
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-accent-light" />
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-accent-light" />
                  Free data migration
                </span>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* ===== STICKY CTA ===== */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link
          href="#demo-form"
          className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full font-semibold hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 flex items-center gap-2 shadow-xl"
        >
          <SparklesIcon className="w-4 h-4" />
          Request Demo
        </Link>
      </motion.div>
      
      {/* WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <a
          href="https://wa.me/8801714090224?text=I want a demo of ShikkhaERP"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center hover:bg-green-600 transition shadow-xl hover:shadow-2xl"
        >
          <span className="text-2xl">💬</span>
        </a>
      </motion.div>

      {/* ===== EXIT POPUP ===== */}
      <AnimatePresence>
        {showExitPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative overflow-hidden"
            >
              <button
                onClick={handleClosePopup}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <SparklesIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-secondary mb-2">
                  Wait! Book a Free Product Demonstration
                </h3>
                <p className="text-gray-600 mb-6">
                  See how ShikkhaERP can transform your school operations
                </p>
                <Link
                  href="#demo-form"
                  onClick={handleClosePopup}
                  className="block w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Schedule My Demo
                </Link>
                <p className="text-sm text-gray-500 mt-3">
                  ✓ Free 30-minute personalized demo + PDF brochure
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}