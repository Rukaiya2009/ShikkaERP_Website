'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaYoutube, 
  FaInstagram 
} from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    students: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoading(false);
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: MapPin, label: 'Visit Us', value: '35/1 Siddheswari Circular Road, Dhaka, Bangladesh', color: 'text-blue-500' },
    { icon: Phone, label: 'Call Us', value: '+880 1319-719968', color: 'text-green-500' },
    { icon: Mail, label: 'Email Us', value: 'info@shikkhaerp.com', color: 'text-red-500' },
    { icon: Clock, label: 'Working Hours', value: 'Mon-Fri: 9AM - 6PM', color: 'text-purple-500' },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com/shikkhaerp', color: '#1877f2' },
    { icon: FaTwitter, href: 'https://twitter.com/shikkhaerp', color: '#1da1f2' },
    { icon: FaLinkedin, href: 'https://linkedin.com/company/shikkhaerp', color: '#0077b5' },
    { icon: FaYoutube, href: 'https://youtube.com/@shikkhaerp', color: '#ff0000' },
    { icon: FaInstagram, href: 'https://instagram.com/shikkhaerp', color: '#e4405f' },
  ];

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md mx-auto p-8"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-heading font-bold text-secondary mb-3">Thank You! 🎉</h2>
          <p className="text-gray-600 mb-6">
            We've received your message. Our team will reach out within 24 hours.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition"
          >
            Back to Home
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-accent text-white py-20 lg:py-24">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-white/20">
              <Sparkles className="w-4 h-4 inline-block mr-1" />
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4">
              Let's Build Something <br />
              <span className="text-accent-light">Extraordinary Together</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? Want to schedule a demo? Or just want to say hello?
              We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Form - 8 columns */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-12"
              >
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-500">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                        placeholder="john@school.edu.bd"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                        placeholder="+880 1XXX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-1">
                        School Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="school"
                        value={formData.school}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                        placeholder="Your School Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary mb-1">
                      Number of Students
                    </label>
                    <select
                      name="students"
                      value={formData.students}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    >
                      <option value="">Select range</option>
                      <option value="less-200">Less than 200</option>
                      <option value="200-500">200 - 500</option>
                      <option value="500-1000">500 - 1000</option>
                      <option value="1000-2000">1000 - 2000</option>
                      <option value="2000+">2000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary mb-1">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      placeholder="Tell us about your school's needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    ✓ We'll respond within 24 hours • Your information is secure
                  </p>
                </form>
              </motion.div>
            </div>

            {/* Contact Info - 4 columns */}
            <div className="lg:col-span-4 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 border border-slate-100">
                  <h3 className="text-xl font-heading font-bold text-secondary mb-6">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className={`w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm ${item.color}`}>
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 font-medium">{item.label}</p>
                          <p className="text-secondary font-medium">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                  <h3 className="text-xl font-heading font-bold text-secondary mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ backgroundColor: social.color }}
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                      >
                        <social.icon className="w-5 h-5 text-white" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Quick CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-6 text-white text-center">
                  <h3 className="text-lg font-heading font-bold mb-2">
                    Need a Quick Demo?
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    Schedule a 30-minute personalized walkthrough of ShikkhaERP.
                  </p>
                  <a
                    href="tel:+8801319719968"
                    className="inline-block bg-white text-primary px-6 py-2 rounded-full font-medium hover:bg-slate-100 transition"
                  >
                    Call Now
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-2">
              Find Us
            </h2>
            <p className="text-gray-500">
              Visit our office in the heart of Dhaka
            </p>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-[400px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.5!2d90.4!3d23.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQyJzAwLjAiTiA5MMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg text-sm text-secondary font-medium">
              📍 35/1 Siddheswari Circular Road, Dhaka
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}