/* src/app/features/page.tsx */
'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRightIcon,
  // Import all necessary Heroicons
  UserGroupIcon, 
  ChatBubbleLeftRightIcon, 
  VideoCameraIcon, 
  ShareIcon, 
  BuildingOfficeIcon, 
  BanknotesIcon,
  PaintBrushIcon, 
  BookOpenIcon, 
  UserPlusIcon, 
  CalendarIcon, 
  CalculatorIcon, 
  PencilSquareIcon, 
  DocumentTextIcon, 
  IdentificationIcon, 
  HomeIcon, 
  QrCodeIcon, 
  UsersIcon, 
  CreditCardIcon, 
  ShoppingBagIcon, 
  DocumentCheckIcon, 
  HeartIcon, 
  WrenchIcon, 
  SparklesIcon 
} from '@heroicons/react/24/outline';

// The exact 24 features from your eSkooly list
const eskoolyFeatures = [
  {
    id: 'multi-user-access',
    title: 'Multi-User Access',
    description: 'eSkooly provides dedicated portals tailored for admins, teachers, students, and parents, ensuring seamless access to relevant information and tools. This multi-user functionality allows each role to interact with the system based on their specific needs, promoting efficient communication and management. With secure login credentials, users can access personalized dashboards anytime, anywhere.',
    icon: UserGroupIcon
  },
  {
    id: 'communication-tools',
    title: 'Communication Tools',
    description: 'Revolutionize how your school connects with parents and staff using eSkooly\'s integrated communication suite. Send unlimited, free SMS and instant WhatsApp alerts to keep stakeholders informed about critical updates, attendance, and events without incurring extra bulk messaging costs.',
    icon: ChatBubbleLeftRightIcon
  },
  {
    id: 'live-classes',
    title: 'Live Classes',
    description: 'Conduct unlimited, interactive virtual classrooms directly within the eSkooly dashboard without paying for expensive third-party subscriptions. Our built-in live streaming engine eliminates the need for Zoom, Google Meet, or Microsoft Teams, providing a seamless and free distance learning solution.',
    icon: VideoCameraIcon
  },
  {
    id: 'stay-connected',
    title: 'Stay Connected',
    description: 'Boost institutional productivity with eSkooly\'s integrated internal messenger and file-sharing hub. This feature ensures your staff, teachers, and admins stay synchronized through secure, real-time chat without mixing professional data with personal messaging apps.',
    icon: ShareIcon
  },
  {
    id: 'institute-profile',
    title: 'Institute Profile',
    description: 'Establish your brand identity with eSkooly\'s customizable Institute Profile module. Easily upload your school\'s logo, configure official contact details, and personalize the system\'s interface to ensure that every report, ID card, and portal reflects your unique institutional branding.',
    icon: BuildingOfficeIcon
  },
  {
    id: 'fees-structure',
    title: 'Fees Structure',
    description: 'Simplify your institution\'s financial planning with eSkooly\'s flexible Fee Structure engine. Create unlimited fee categories, assign distinct amounts to different classes, and manage scholarship discounts systematically to ensure accurate automated billing.',
    icon: BanknotesIcon
  },
  {
    id: 'theme-language',
    title: 'Theme & Language',
    description: 'Create a comfortable and inclusive working environment with eSkooly\'s personalization suite. Users can toggle between various visual themes to suit their preferences and switch the entire system language to their native tongue for better accessibility.',
    icon: PaintBrushIcon
  },
  {
    id: 'classes-subjects',
    title: 'Classes & Subjects',
    description: 'Build the academic backbone of your institution with eSkooly\'s flexible curriculum manager. Effortlessly structure your grade levels, assign subjects to specific classes, and organize topics into chapters to create a clear and navigable learning roadmap.',
    icon: BookOpenIcon
  },
  {
    id: 'admissions-sims',
    title: 'Admissions & SIMS',
    description: 'Streamline your enrollment process with eSkooly\'s robust Student Information Management System (SIMS). Capture comprehensive student data in a digital format and automatically generate secure login credentials (usernames and passwords) instantly upon registration.',
    icon: UserPlusIcon
  },
  {
    id: 'timetable-management',
    title: 'Timetable Management',
    description: 'Eliminate scheduling conflicts and optimize your academic calendar with eSkooly\'s smart Timetable Management system. Easily design comprehensive weekly routines that map out subjects, teachers, and classrooms for every period of the day.',
    icon: CalendarIcon
  },
  {
    id: 'accounts',
    title: 'Accounts',
    description: 'Take control of your institution\'s financial health with eSkooly\'s comprehensive Accounts module. Record every transaction, manage a detailed chart of accounts, and track income versus expenses to ensure total fiscal transparency and better budget planning.',
    icon: CalculatorIcon
  },
  {
    id: 'exams-tests',
    title: 'Exams & Tests',
    description: 'Automate your entire examination lifecycle with eSkooly\'s powerful assessment module. From scheduling date sheets to recording marks and generating professional result cards, our system handles the heavy lifting so teachers can focus on grading rather than calculating.',
    icon: PencilSquareIcon
  },
  {
    id: 'question-paper-creation',
    title: 'Question Paper Creation',
    description: 'Transform the way you prepare for exams with eSkooly\'s Question Paper Generator. Build a robust bank of questions categorized by subject and difficulty, and automatically generate professional, standardized question papers in minutes, saving teachers hours of typing and formatting.',
    icon: DocumentTextIcon
  },
  {
    id: 'id-cards',
    title: 'ID Cards',
    description: 'Establish a secure campus environment by instantly generating professional ID cards for all students and staff. Our bulk printing tool allows you to design and export high-quality identity badges complete with photos, details, and barcodes in just a few clicks.',
    icon: IdentificationIcon
  },
  {
    id: 'homework',
    title: 'Homework',
    description: 'Extend learning beyond the classroom with eSkooly\'s digital Homework module. Teachers can easily assign tasks, upload reference materials, and track student submissions, while parents stay updated on daily assignments to ensure their child stays on track.',
    icon: HomeIcon
  },
  {
    id: 'card-scanning-attendance',
    title: 'Card Scanning Attendance',
    description: 'Modernize your morning assembly with eSkooly\'s rapid Card Scanning Attendance system. Simply scan the barcode or QR code on a student\'s ID card to mark their attendance instantly, eliminating manual roll calls and ensuring accurate time-tracking.',
    icon: QrCodeIcon
  },
  {
    id: 'employee-management',
    title: 'Employee Management',
    description: 'Streamline your Human Resources operations with eSkooly\'s dedicated Employee Management module. From onboarding new staff and generating official job letters to processing monthly salaries and tracking daily attendance, we handle your entire workforce lifecycle.',
    icon: UsersIcon
  },
  {
    id: 'fees-management',
    title: 'Fees Management',
    description: 'Automate your institution\'s entire revenue cycle with eSkooly\'s Fees Management system. Effortlessly generate bulk invoices, record payments in real-time, track outstanding balances, and issue professional fee slips to parents with a single click.',
    icon: CreditCardIcon
  },
  {
    id: 'online-store-pos',
    title: 'Online Store & POS',
    description: 'Transform your school\'s supply room into a streamlined revenue center with eSkooly\'s integrated Online Store and Point of Sale (POS) system. Efficiently sell uniforms, textbooks, and stationery while managing inventory levels, product categories, and tax calculations automatically.',
    icon: ShoppingBagIcon
  },
    {
    id: 'certificates-reports',
    title: 'Certificates & Reports',
    description: 'Create and distribute official school documents with ease using eSkooly\'s Certificates & Reports engine. Utilize our customizable templates to instantly generate professional Character Certificates, School Leaving Certificates, and merit awards without manual drafting.',
    icon: DocumentCheckIcon,  // ✅ Replaced CertificateIcon
  },
  {
    id: 'behavior-skills-tracking',
    title: 'Behavior & Skills Tracking',
    description: 'Go beyond academic grades by monitoring the holistic development of your students. eSkooly allows you to define, track, and generate detailed reports on Affective (attitude, discipline) and Psychomotor (physical skills, arts) domains to provide a complete picture of student progress.',
    icon: HeartIcon,
  },
  {
    id: 'customization',
    title: 'Customization',
    description: 'Adapt eSkooly to your specific requirements with deep customization options. Add custom data fields to admission forms, configure report layouts, and toggle specific modules to ensure the software fits your institution\'s unique operational style.',
    icon: WrenchIcon,  // ✅ Replaced WrenchScrewdriverIcon
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    description: 'Future-proof your institution by leveraging the power of Artificial Intelligence directly within eSkooly. Use smart AI tools to instantly generate quiz questions, draft professional circulars, and automate routine administrative tasks with unprecedented speed.',
    icon: SparklesIcon
  }
];

function FeatureCard({ feature, index }: { feature: typeof eskoolyFeatures[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const IconComponent = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300 flex flex-col h-full"
    >
      {/* Icon Box */}
      <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
        <IconComponent className="w-7 h-7 text-accent group-hover:scale-110 transition-transform" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-heading font-semibold text-primary mb-2">
        {feature.title}
      </h3>

      {/* Description (clamped to 3 lines) */}
      <p className="text-gray-600 text-sm leading-relaxed flex-grow-1 clamp-3">
        {feature.description}
      </p>

      {/* Explore Feature Link */}
      <Link
        href={`/features/${feature.id}`}
        className="mt-4 inline-flex items-center gap-2 text-accent font-medium text-sm hover:gap-3 transition-all"
      >
        Explore Feature <ArrowRightIcon className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}

export default function FeaturesPage() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="bg-primary text-white py-20 lg:py-28 overflow-hidden relative">
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block bg-white/10 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full mb-6">
            Core Capabilities
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight max-w-4xl mx-auto mb-4">
            The Complete <span className="text-accent-light">Toolbox</span> for Modern School Management
          </h1>
          <p className="text-accent-light text-lg max-w-2xl mx-auto leading-relaxed">
            From streamlined admissions to comprehensive academic reporting and financial transparency, ShikkhaERP provides every essential tool your institution needs to thrive—all in one place.
          </p>
        </div>
      </section>

      {/* SECTION 2: FEATURES GRID */}
      <section className="py-16 lg:py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-3">
              All-in-One Platform
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Everything You Need to Run Your School
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eskoolyFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CTA */}
      <section className="bg-primary py-16 text-center">
        <div className="container-custom">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
            Ready to Transform Your Institution?
          </h3>
          <p className="text-accent-light mb-6 max-w-2xl mx-auto">
            With ShikkhaERP, you're not just managing a school—you're building a brighter future for education.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-cta text-white px-8 py-3 rounded-lg font-semibold hover:bg-cta-hover transition shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}