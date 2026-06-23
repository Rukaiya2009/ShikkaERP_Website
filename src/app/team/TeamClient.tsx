'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaGithub, 
  FaEnvelope 
} from 'react-icons/fa';

// Team members with REAL images
const teamMembers = [
  { 
    name: 'Md. Shafique Hassan', 
    position: ' Founder', 
    description: 'Full-stack engineer with expertise in React, Java, and cloud architecture. Leading engineering teams at Figma and Pitch.',
    image: '/images/team/shafique.jpg',
    social: { linkedin: '#', twitter: '#', github: '#', email: 'kamal@shikkhaerp.com' }
  },
  { 
    name: 'Farhana Hoque', 
    position: 'CEO ', 
    description: 'Visionary leader transforming education in Bangladesh through technology. 10+ years of experience in EdTech.',
    image: '/images/team/Farhana.jpg',
    social: { linkedin: '#', twitter: '#', github: '#', email: 'farhana@shikkhaerp.com' }
  },
  { 
    name: 'Hasan Habib', 
    position: 'Lead Developer', 
    description: 'Creative designer focused on crafting intuitive and accessible user experiences for educational platforms.',
    image: '/images/team/hasanhabib.jpg',
    social: { linkedin: '#', twitter: '#', github: '#', email: 'tahmid@shikkhaerp.com' }
  },
  
  
  { 
    name: 'Rukaiya Binte Shafique', 
    position: 'Lead Strategist', 
    description: 'Strategic thinker with expertise in product development and market expansion. Former co-founder of Opendoor.',
    image: '/images/team/RUKAIYA.jpg',
    social: { linkedin: '#', twitter: '#', github: '#', email: 'rukaiya@shikkhaerp.com' }
  },
  { 
    name: 'Humayra Binte Shafique', 
    position: 'Data Analyst', 
    description: 'Data-driven professional specializing in analytics, machine learning, and business intelligence solutions.',
    image: '/images/team/humayra.jpg',
    social: { linkedin: '#', twitter: '#', github: '#', email: 'nusrat@shikkhaerp.com' }
  },
  { 
    name: 'Mahmudul Hasan', 
    position: 'Product Manager', 
    description: 'Product leader with a passion for user-centric design. Former PM for Linear, Lambda School, and On Deck.',
    image: '/images/team/mahmud.jpg',
    social: { linkedin: '#', twitter: '#', github: '#', email: 'sarah@shikkhaerp.com' }
  }
];

export default function TeamClient() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Team
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary dark:text-white leading-tight">
            Meet the People Behind <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ShikkhaERP
            </span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto mt-3">
            A passionate team dedicated to transforming education through technology.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-heading font-bold text-secondary dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-2">
                  {member.position}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <FaEnvelope className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Decorative bottom gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* Join Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary dark:text-white mb-3">
            Join Our Team
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            We're always looking for passionate individuals to help us transform education.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            View Open Positions
          </Link>
        </motion.div>
      </div>
    </section>
  );
}