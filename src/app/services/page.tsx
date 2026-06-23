'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Database, 
  Code, 
  Shield, 
  School, 
  GraduationCap, 
  Calculator, 
  Beaker, 
  Heart, 
  Cloud, 
  Lock, 
  Fingerprint, 
  Globe, 
  TrendingUp,
  Sparkles,
  CheckCircle,
  Users,
  BookOpen,
  BarChart3,
  Zap,
  Award,
  Star,
  Terminal,
  Server,
  Cpu,
  Layers
} from 'lucide-react';

// Animated section wrapper
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

export default function ServicesPage() {
  const coreAreas = [
    {
      icon: Database,
      title: 'Data Science',
      description: 'Transforming data into meaningful insights using analytics, machine learning, and AI-driven solutions for smarter decision-making.',
      color: 'from-blue-600 to-cyan-500',
      stats: ['50+ Models Deployed', '95% Accuracy Rate']
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Designing and developing modern, scalable, and user-friendly software applications, web platforms, and business systems.',
      color: 'from-purple-600 to-pink-500',
      stats: ['100+ Modules', '99.9% Uptime']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protecting systems, networks, and digital assets through secure technologies, threat prevention, and security solutions.',
      color: 'from-emerald-600 to-teal-500',
      stats: ['Zero Breaches', '24/7 Monitoring']
    }
  ];

  const softwareProjects = [
    {
      icon: School,
      title: 'School Management ERP System',
      type: 'Enterprise Resource Planning (ERP)',
      overview: 'A comprehensive cloud-based school management platform designed to digitize academic and administrative operations.',
      features: [
        'Student Information System',
        'Admission Management',
        'Attendance Management',
        'Teacher Portal',
        'Parent Portal',
        'Examination & Results',
        'Fee Collection',
        'Library Management',
        'HR & Payroll',
        'Reports & Analytics',
        'Multi-school SaaS Architecture'
      ],
      tech: ['React', 'Java Spring Boot', 'PostgreSQL', 'Docker'],
      highlight: true
    },
    {
      icon: GraduationCap,
      title: 'Learning Management System (LMS)',
      type: 'Educational Technology Platform',
      overview: 'A modern learning platform for managing online education, digital classrooms, and student engagement.',
      features: [
        'Course Management',
        'Video Classes',
        'Online Assignments',
        'Quiz & Examination System',
        'Progress Tracking',
        'Certificates',
        'Student Dashboard',
        'Teacher Dashboard',
        'Mobile Accessibility'
      ],
      tech: ['React', 'Java Spring Boot', 'REST API', 'PostgreSQL']
    },
    {
      icon: Calculator,
      title: 'Accounting & VAT Solution System',
      type: 'Financial Management System',
      overview: 'A business accounting and VAT management solution for organizations to automate financial operations and reporting.',
      features: [
        'Invoice Management',
        'Accounts Payable',
        'Accounts Receivable',
        'VAT Calculation',
        'Financial Reports',
        'Tax Reporting',
        'Expense Management',
        'Dashboard Analytics'
      ],
      tech: ['Java Spring Boot', 'PostgreSQL', 'API Integration']
    }
  ];

  const dataScienceProjects = [
    {
      icon: Beaker,
      title: 'Computational Drug Discovery System',
      type: 'Data Science & AI Research',
      overview: 'An intelligent computational platform for drug discovery using machine learning and predictive analytics to support healthcare research.',
      features: [
        'Molecular Data Analysis',
        'Drug Screening',
        'AI Prediction Models',
        'Data Visualization',
        'Bioinformatics Integration',
        'Predictive Drug Interaction Analysis'
      ],
      tech: ['Python', 'Machine Learning', 'Deep Learning', 'Data Analytics'],
      highlight: true
    },
    {
      icon: Heart,
      title: 'AI-Powered Disease Prediction System',
      type: 'Healthcare Data Science & Artificial Intelligence',
      overview: 'An intelligent healthcare system that analyzes medical and patient data to predict disease risks and support early detection.',
      problems: [
        'Late disease diagnosis',
        'Rising healthcare costs',
        'Shortage of medical specialists',
        'Increasing chronic diseases',
        'Need for preventive healthcare'
      ],
      features: [
        'Disease Risk Prediction',
        'Patient Data Analytics',
        'Early Warning Alerts',
        'Health Trend Analysis',
        'Predictive Modeling',
        'AI Decision Support Dashboard'
      ],
      tech: ['Python', 'Machine Learning', 'Deep Learning', 'Predictive Analytics', 'Data Visualization']
    }
  ];

  const cybersecurityProjects = [
    {
      icon: Cloud,
      title: 'Cyber Threat Detection System',
      overview: 'An AI-powered monitoring system to detect suspicious network activities and cyber threats.',
      features: [
        'Threat Detection',
        'Anomaly Detection',
        'Alert System',
        'Security Dashboard',
        'Real-time Monitoring'
      ]
    },
    {
      icon: Lock,
      title: 'Vulnerability Assessment Platform',
      overview: 'Automated platform to identify system weaknesses and security risks.',
      features: [
        'Security Scanning',
        'Risk Assessment',
        'Vulnerability Reports',
        'Security Recommendations'
      ]
    },
    {
      icon: Fingerprint,
      title: 'Secure Authentication & Identity Management System',
      overview: 'A centralized security platform for authentication and access control.',
      features: [
        'Multi-factor Authentication',
        'Role-Based Access Control',
        'JWT Authentication',
        'User Activity Logs'
      ]
    }
  ];

  const futureProjects = [
    {
      icon: Globe,
      title: 'Climate Change & Disaster Prediction System',
      features: ['Flood prediction', 'Weather pattern analysis', 'Environmental risk assessment']
    },
    {
      icon: TrendingUp,
      title: 'Smart Agriculture AI System',
      features: ['Crop disease prediction', 'Soil analysis', 'Yield prediction']
    },
    {
      icon: Users,
      title: 'AI Fraud Detection System',
      features: ['Banking fraud detection', 'Transaction anomaly analysis', 'Risk scoring']
    },
    {
      icon: BookOpen,
      title: 'Student Performance Prediction System',
      features: ['Learning analytics', 'Student risk detection', 'Personalized learning recommendations']
    }
  ];

  return (
    <div className="pt-16">
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#132337] to-[#1a2d4a] text-white py-24 lg:py-32">
        {/* Animated Background - Clean */}
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
            {/* Badge */}
            <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-4 h-4 inline-block mr-1 text-accent-light" />
              <span className="text-sm font-medium text-accent-light">Our Services</span>
            </span>
            
            {/* Main Title - with Gold/Amber Gradient */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold leading-tight mb-6 max-w-5xl mx-auto">
              Building Smarter, Secure & <br />
              <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Scalable Technology
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              IT Data Science provides solutions in Data Science, Software Development, and Cybersecurity, 
              focusing on modern, scalable, and intelligent systems that solve real-world problems.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#projects" className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                Explore Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CORE AREAS ===== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionWrapper>
            <div className="text-center mb-14">
              <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                Core Areas
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary leading-tight">
                Our Expertise
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto mt-3 text-lg">
                Three pillars of innovation driving digital transformation
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreAreas.map((area, index) => (
              <SectionWrapper key={index}>
                <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-${area.color.split('-')[1]}-500/20`}>
                      <area.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-secondary mb-3">{area.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{area.description}</p>
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {area.stats.map((stat, idx) => (
                        <span key={idx} className="bg-slate-100 text-secondary text-xs px-3 py-1 rounded-full font-medium">
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOFTWARE DEVELOPMENT PROJECTS ===== */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="container-custom">
          <SectionWrapper>
            <div className="text-center mb-14">
              <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                Software Development
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary leading-tight">
                Our Software Projects
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto mt-3 text-lg">
                Modern, scalable, and user-friendly applications for business and education
              </p>
            </div>
          </SectionWrapper>

          <div className="space-y-8">
            {softwareProjects.map((project, index) => (
              <SectionWrapper key={index}>
                <div className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border ${project.highlight ? 'border-primary/30 ring-2 ring-primary/10' : 'border-slate-100'}`}>
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 ${project.highlight ? 'bg-gradient-to-br from-primary to-accent' : 'bg-primary/10'} rounded-2xl flex items-center justify-center shrink-0`}>
                          <project.icon className={`w-7 h-7 ${project.highlight ? 'text-white' : 'text-primary'}`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className="text-2xl font-heading font-bold text-secondary">{project.title}</h3>
                            {project.highlight && (
                              <span className="bg-gradient-to-r from-primary to-accent text-white text-xs px-3 py-0.5 rounded-full font-medium">
                                Featured
                              </span>
                            )}
                          </div>
                          <span className="text-sm text-primary font-medium">{project.type}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{project.overview}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-secondary mb-2">Main Features</h4>
                          <ul className="space-y-1">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                <CheckCircle className={`w-4 h-4 ${project.highlight ? 'text-primary' : 'text-gray-400'} shrink-0 mt-0.5`} />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary mb-2">Technology Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, idx) => (
                              <span key={idx} className={`${project.highlight ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-gray-600'} px-3 py-1 rounded-full text-xs font-medium`}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DATA SCIENCE PROJECTS ===== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionWrapper>
            <div className="text-center mb-14">
              <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                Data Science & AI
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary leading-tight">
                AI & Machine Learning Projects
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto mt-3 text-lg">
                Intelligent solutions driving healthcare innovation and predictive analytics
              </p>
            </div>
          </SectionWrapper>

          <div className="space-y-8">
            {dataScienceProjects.map((project, index) => (
              <SectionWrapper key={index}>
                <div className={`bg-slate-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border ${project.highlight ? 'border-blue-400/30 ring-2 ring-blue-400/10' : 'border-slate-100'}`}>
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shrink-0`}>
                          <project.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className="text-2xl font-heading font-bold text-secondary">{project.title}</h3>
                            {project.highlight && (
                              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs px-3 py-0.5 rounded-full font-medium">
                                Featured
                              </span>
                            )}
                          </div>
                          <span className="text-sm text-blue-500 font-medium">{project.type}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{project.overview}</p>
                      {project.problems && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-secondary mb-2">Global Problems Addressed</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.problems.map((problem, idx) => (
                              <span key={idx} className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-medium">
                                {problem}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-secondary mb-2">Main Features</h4>
                          <ul className="space-y-1">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary mb-2">Technology Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, idx) => (
                              <span key={idx} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CYBERSECURITY PROJECTS ===== */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <SectionWrapper>
            <div className="text-center mb-14">
              <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                Cybersecurity
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary leading-tight">
                Security & Protection Projects
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto mt-3 text-lg">
                Protecting digital assets with advanced security solutions
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cybersecurityProjects.map((project, index) => (
              <SectionWrapper key={index}>
                <div className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4">
                    <project.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-secondary mb-3">{project.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{project.overview}</p>
                  <h4 className="font-semibold text-secondary text-sm mb-2">Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FUTURE VISION ===== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionWrapper>
            <div className="text-center mb-14">
              <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                Roadmap
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary leading-tight">
                Future Vision & Innovation
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto mt-3 text-lg">
                Building AI-powered, secure, and scalable solutions for a smarter digital future
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {futureProjects.map((project, index) => (
              <SectionWrapper key={index}>
                <div className="group bg-slate-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <project.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-secondary mb-3">{project.title}</h3>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-start gap-2">
                        <Zap className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#132337] to-[#1a2d4a]">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="relative container-custom text-center">
          <SectionWrapper>
            <div className="space-y-8">
              <span className="inline-block bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 text-sm font-medium text-accent-light">
                Let's Build Together
              </span>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-4">
                Ready to Build Your Next{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Innovative Project?
                </span>
              </h2>
              
              <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how we can help you build smarter, secure, and scalable solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link href="/contact" className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                  Start a Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact?type=consultation" className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/20 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white hover:text-secondary transition-all duration-300 transform hover:-translate-y-1">
                  Book a Consultation
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-8 pt-4">
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <div className="w-5 h-5 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span>AI-Powered Solutions</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <div className="w-5 h-5 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span>Enterprise-Grade Security</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <div className="w-5 h-5 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span>Scalable Architecture</span>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}