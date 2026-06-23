import {
  QuestionMarkCircleIcon,
  CurrencyDollarIcon,
  CogIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'technical' | 'security' | 'support';
}

export const faqCategories = [
  { id: 'all', label: 'All Questions', icon: QuestionMarkCircleIcon },
  { id: 'general', label: 'General', icon: QuestionMarkCircleIcon },
  { id: 'pricing', label: 'Pricing & Billing', icon: CurrencyDollarIcon },
  { id: 'technical', label: 'Technical', icon: CogIcon },
  { id: 'security', label: 'Security', icon: ShieldCheckIcon },
  { id: 'support', label: 'Support', icon: ChatBubbleLeftRightIcon },
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What is ShikkhaERP?',
    answer: 'ShikkhaERP is a comprehensive school management system designed specifically for Bangladeshi schools. It helps manage student information, attendance, fees, examinations, payroll, and more – all in one cloud-based platform.',
    category: 'general',
  },
  {
    id: '2',
    question: 'Who can use ShikkhaERP?',
    answer: 'ShikkhaERP is built for schools of all sizes in Bangladesh, including English medium, Bengali medium, and international schools. It supports multiple user roles: administrators, teachers, parents, and students.',
    category: 'general',
  },
  {
    id: '3',
    question: 'Is ShikkhaERP suitable for small schools?',
    answer: 'Yes! Our Basic plan is designed for schools with up to 300 students. You only pay for the students you have, so small schools get enterprise-grade features at an affordable price.',
    category: 'general',
  },
  {
    id: '4',
    question: 'How much does ShikkhaERP cost?',
    answer: 'We have three plans: Basic (৳9/student/month for up to 300 students), Standard (৳7/student/month for up to 800 students), and Premium (৳5/student/month for unlimited students).',
    category: 'pricing',
  },
  {
    id: '5',
    question: 'Is there a free trial available?',
    answer: 'We offer a free demo for all schools. Contact us to schedule a personalised walkthrough of the platform.',
    category: 'pricing',
  },
  {
    id: '6',
    question: 'Can I change my plan later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Adjustments will be reflected in your next billing cycle.',
    category: 'pricing',
  },
  {
    id: '7',
    question: 'What payment methods do you accept?',
    answer: 'We accept bKash, Nagad, Rocket, VISA, and Mastercard. All payments are processed securely through our payment partners.',
    category: 'pricing',
  },
  {
    id: '8',
    question: 'Is my data secure?',
    answer: 'Yes. We use SSL/TLS encryption for all data in transit. Sensitive data is stored encrypted.',
    category: 'security',
  },
  {
    id: '9',
    question: 'Who owns the data?',
    answer: 'Your institution owns all data entered into ShikkhaERP. We will never share, sell, or use your data for commercial purposes without your explicit consent.',
    category: 'security',
  },
  {
    id: '10',
    question: 'Are there regular backups?',
    answer: 'Yes, we perform daily automated backups. In the unlikely event of data loss, we can restore your data from the most recent backup.',
    category: 'security',
  },
  {
    id: '11',
    question: 'Do I need to install any software?',
    answer: 'No. ShikkhaERP is fully cloud-based. You only need a web browser and an internet connection.',
    category: 'technical',
  },
  {
    id: '12',
    question: 'What kind of support do you offer?',
    answer: 'We provide email support with a response within 24 hours. Standard and Premium plans also include phone support.',
    category: 'support',
  },
  {
    id: '13',
    question: 'How do I request a demo?',
    answer: 'Visit our Contact page and fill out the demo request form. Our team will reach out within 1 business day.',
    category: 'support',
  },
];
