'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-secondary/95 backdrop-blur-lg border-b border-white/10 shadow-lg' 
        : 'bg-secondary'
    }`}>
      <nav className="container-custom flex items-center justify-between h-16 lg:h-20">
        {/* Logo - Graduation Cap with Tail + Fixed Colors */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="white" 
      className="w-5 h-5"
    >
      {/* Cap Top */}
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      
      {/* Cap Base */}
      <path d="M12 13l-9-4.5V15l9 4.5 9-4.5v-6.5L12 13z" />
      
      {/* Tassel String */}
      <path d="M3 7v8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Tassel Knot */}
      <circle cx="3" cy="15" r="1.5" fill="white" />
      
      {/* Tassel Fringes */}
      <path d="M2 17l1 2 1-2" stroke="white" strokeWidth="1" strokeLinecap="round" />
      <path d="M2.5 18l0.5 1 0.5-1" stroke="white" strokeWidth="1" strokeLinecap="round" />
    </svg>
  </div>
  <div className="flex flex-col">
    <span className="text-xl font-heading font-bold text-white leading-none">
      Shikkha<span className="text-amber-400">ERP</span>
    </span>
    <span className="text-[10px] text-blue-300 font-medium">Smart School Management</span>
  </div>
</Link>

        {/* Desktop Navigation - Dark Glassmorphism Pill */}
        <div className="hidden md:flex items-center bg-white/10 backdrop-blur-sm rounded-full px-2 py-1.5 gap-0.5 border border-white/10 shadow-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-secondary shadow-md'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Button - Changed to Emerald/Teal */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary border-t border-white/10 px-4 pb-6 pt-2 shadow-xl"
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block py-3 px-4 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block mt-3 text-center bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-lg font-medium hover:shadow-lg transition"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}