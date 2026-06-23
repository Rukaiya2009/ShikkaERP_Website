'use client';
// At the top of your file, with other imports
import Link from 'next/link';
import { 
  HeartIcon, 
  LightBulbIcon, 
  UsersIcon, 
  ShieldCheckIcon,
  CogIcon,
  ChartBarIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#132337] to-[#1a2d4a] text-white overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl opacity-60 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full blur-3xl opacity-40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl opacity-20" />
          <div className="absolute top-20 right-10 w-20 h-20 border border-white/10 rounded-full animate-spin-slow opacity-20" />
          <div className="absolute bottom-20 left-10 w-32 h-32 border border-white/10 rounded-full animate-spin-slow opacity-10" />
        </div>

        <div className="relative container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6 animate-fade-in-up">
            <SparklesIcon className="w-4 h-4 text-blue-300" />
            <span className="text-sm font-medium text-blue-300">🇧🇩 Made in Bangladesh</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold leading-tight mb-6 text-white animate-fade-in-up animation-delay-100">
            Thinks, Scales, and <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Protects
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            We build school management systems for Bangladesh — smart, secure, and built for growth.
            Trusted by <strong className="text-white">500+ schools</strong> nationwide.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto border-t border-white/10 pt-8 animate-fade-in-up animation-delay-300">
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-300 transition-colors">500+</div>
              <div className="text-sm text-blue-300/70 group-hover:text-blue-300 transition-colors">Schools Trust Us</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-300 transition-colors">250K+</div>
              <div className="text-sm text-blue-300/70 group-hover:text-blue-300 transition-colors">Students Managed</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-300 transition-colors">98%</div>
              <div className="text-sm text-blue-300/70 group-hover:text-blue-300 transition-colors">Satisfaction Rate</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-300 transition-colors">24/7</div>
              <div className="text-sm text-blue-300/70 group-hover:text-blue-300 transition-colors">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Our Story
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Building the Future of Education Technology
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              ShikkhaERP is a school management system built <strong>in Bangladesh — for Bangladesh</strong>. 
              We combine smart automation, secure infrastructure, and scalable design to help 
              schools manage everything from admissions to payroll without the headaches.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you run a small school in a district or a large institution in Dhaka, 
              our platform adapts to your workflow — not the other way around.
            </p>
            
            <div className="mt-8 flex justify-center gap-4">
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">100% Local Solution</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Affordable Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THREE PILLARS ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Our Pillars
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              What Drives Us
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: LightBulbIcon,
                title: "Think",
                desc: "We build smart systems that automate manual work so teachers can focus on students — not spreadsheets.",
                tag: "Automated dashboards"
              },
              {
                icon: ChartBarIcon,
                title: "Scale",
                desc: "From 100 students to 5,000 — our platform grows with you without breaking or slowing down.",
                tag: "Unlimited scalability"
              },
              {
                icon: ShieldCheckIcon,
                title: "Protect",
                desc: "Security isn't an afterthought — it's built in. We protect student data with enterprise-grade encryption.",
                tag: "Built-in security"
              }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                  <pillar.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{pillar.desc}</p>
                <div className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium">
                  → {pillar.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              What We Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Our Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CogIcon, title: "Implementation", desc: "Data migration & setup" },
              { icon: UsersIcon, title: "Staff Training", desc: "Live workshops & tutorials" },
              { icon: GlobeAltIcon, title: "Custom Development", desc: "Tailored modules & APIs" },
              { icon: HeartIcon, title: "Ongoing Support", desc: "24/7 help & maintenance" }
            ].map((service, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM PREVIEW ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Leadership
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Meet Our Team
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              The dedicated people behind ShikkhaERP.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Farhana Hoque", role: "CEO & Founder", img: "https://i.pravatar.cc/300?img=1" },
              { name: "Rukaiya Binte Shafique", role: "Lead Strategist", img: "https://i.pravatar.cc/300?img=5" },
              { name: "Md. Kamal Hossain", role: "Lead Developer", img: "https://i.pravatar.cc/300?img=3" },
              { name: "Sarah Ahmed", role: "Product Manager", img: "https://i.pravatar.cc/300?img=9" }
            ].map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border-2 border-blue-100 group-hover:border-blue-500 transition-colors">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/team" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all group">
              View Full Team
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="py-20 bg-gradient-to-br from-[#0a1628] via-[#132337] to-[#1a2d4a] text-white">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-4">
            Our Values
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10">
            What We Stand For
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: HeartIcon, title: "Passion", desc: "We care about education." },
              { icon: LightBulbIcon, title: "Innovation", desc: "We build for tomorrow." },
              { icon: UsersIcon, title: "Customer First", desc: "Your success is ours." },
              { icon: ShieldCheckIcon, title: "Trust", desc: "Protection built in, not bolted on." }
            ].map((value, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white text-lg">{value.title}</h3>
                <p className="text-sm text-blue-300/80">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center mb-4">
                <GlobeAltIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower every school in Bangladesh with intelligent, secure, and 
                scalable technology that simplifies operations and improves outcomes.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center mb-4">
                <AcademicCapIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become Bangladesh's most trusted school management platform — 
                where every school, from district to city, runs on ShikkhaERP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Why Us
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Why Schools Choose ShikkhaERP
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "🇧🇩 Built for Bangladesh",
              "🏫 500+ Schools Trusted",
              "⭐ 98% Satisfaction Rate",
              "🛡️ 24/7 Local Support",
              "🚀 Secure & Scalable",
              "🎓 Free Training Included",
              "💰 No Hidden Fees",
              "☁️ Cloud-Based Access"
            ].map((reason, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-4 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group">
                <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
<section className="bg-gradient-to-r from-cyan-500 to-blue-500 py-20 relative overflow-hidden">
  <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-24 translate-x-24" />
  <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl translate-y-24 -translate-x-24" />
  
  <div className="relative container-custom text-center">
    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-4">
      <SparklesIcon className="w-4 h-4 text-white" />
      <span className="text-sm font-medium text-white">Ready to Transform Your School?</span>
    </div>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-4">
      Join 500+ schools across Bangladesh
    </h2>
    <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
      already running on ShikkhaERP.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link href="/contact" className="inline-block bg-white text-gray-900 px-8 py-3.5 rounded-full font-semibold hover:shadow-2xl transition-all duration-300">
        Get Started Today
      </Link>
      <Link href="/features" className="inline-block border border-white text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
        Explore Features
      </Link>
    </div>
  </div>
</section>

      {/* ===== ANIMATION STYLES ===== */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </>
  );
}