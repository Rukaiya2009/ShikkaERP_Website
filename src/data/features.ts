import {
  UserPlusIcon, UsersIcon, QueueListIcon, CalendarIcon,
  BookOpenIcon, ClockIcon, CheckCircleIcon, UserCircleIcon,
  BriefcaseIcon, BanknotesIcon, GlobeAltIcon, CalculatorIcon,
  CreditCardIcon, DocumentTextIcon, PencilSquareIcon,
  ChartBarIcon, DocumentDuplicateIcon, EnvelopeIcon,
  ChartPieIcon, KeyIcon
} from "@heroicons/react/24/outline";

export interface Feature {
  title: string;
  description: string;
  icon: any;
}

export const features: Feature[] = [
  { title: "Student Admission Management", description: "Manage applications, registrations, approvals, and enrollment in one place.", icon: UserPlusIcon },
  { title: "Student Information Management", description: "Store and organize student profiles, academic records, and personal data securely.", icon: UsersIcon },
  { title: "Class and Section Management", description: "Create and manage classes, sections, and student allocations effortlessly.", icon: QueueListIcon },
  { title: "Academic Session Management", description: "Configure academic years, semesters, and session activities.", icon: CalendarIcon },
  { title: "Subject Management", description: "Create, assign, and organize subjects across classes.", icon: BookOpenIcon },
  { title: "Class Routine Management", description: "Generate and manage class schedules with teachers and time slots.", icon: ClockIcon },
  { title: "Attendance Management", description: "Track daily student attendance with automated reports and alerts.", icon: CheckCircleIcon },
  { title: "Teacher Management", description: "Manage teacher profiles, qualifications, and assignments.", icon: UserCircleIcon },
  { title: "Staff Management", description: "Maintain employee records, roles, and administrative details.", icon: BriefcaseIcon },
  { title: "Payroll Management", description: "Automate salary calculations, deductions, and payment processing.", icon: BanknotesIcon },
  { title: "Parent Portal", description: "Give parents access to attendance, results, fees, and school updates.", icon: GlobeAltIcon },
  { title: "Fee Management", description: "Manage fee structures, collections, billing, and due payments.", icon: CalculatorIcon },
  { title: "Online Payment Integration", description: "Secure digital payments through integrated gateways.", icon: CreditCardIcon },
  { title: "Accounting Management", description: "Track income, expenses, and financial transactions.", icon: DocumentTextIcon },
  { title: "Examination Management", description: "Schedule exams, manage assessments, and invigilation.", icon: PencilSquareIcon },
  { title: "Grade & Result Management", description: "Process grades and generate accurate academic results.", icon: ChartBarIcon },
  { title: "Report Card Generation", description: "Auto-generate customized report cards with performance details.", icon: DocumentDuplicateIcon },
  { title: "SMS Notification System", description: "Send automated reminders, alerts, and announcements.", icon: EnvelopeIcon },
  { title: "Dashboard & Analytics", description: "Real-time insights, statistics, and performance indicators.", icon: ChartPieIcon },
  { title: "Role-Based Access Control", description: "Restrict system access by user roles and permissions.", icon: KeyIcon },
];

export const featuredHomeFeatures = features.slice(0, 6);
