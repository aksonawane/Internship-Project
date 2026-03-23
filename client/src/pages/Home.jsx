import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaWater,
  FaBuilding,
  FaCogs,
  FaLeaf,
  FaHome,
  FaArrowRight,
  FaWhatsapp,
  FaCheckCircle,
} from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';
import config from '../constants/config';

// ── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: FaWater,
    title: 'Water Treatment & Resource Management',
    description:
      'Advanced solutions for water purification, distribution networks, and sustainable water resource planning for urban and rural communities.',
  },
  {
    icon: FaBuilding,
    title: 'Construction & Infrastructure Development',
    description:
      'End-to-end construction services covering commercial, industrial, and public infrastructure — from groundbreaking to handover.',
  },
  {
    icon: FaCogs,
    title: 'Heavy Engineering & Machinery R&D',
    description:
      'Research and development of heavy machinery and industrial systems that solve large-scale engineering challenges with precision.',
  },
  {
    icon: FaLeaf,
    title: 'Environmental Science & Weather Monitoring',
    description:
      'Cutting-edge environmental research, real-time weather monitoring networks, and flood early warning systems.',
  },
  {
    icon: FaHome,
    title: 'Rural Infrastructure Development',
    description:
      'Empowering rural communities with modern roads, housing, sanitation, and essential utility infrastructure.',
  },
];

const STATS = [
  { value: '50+', label: 'Projects Completed' },
  { value: '15+', label: 'Years of Experience' },
  { value: '20+', label: 'Expert Engineers' },
  { value: '10+', label: 'States Served' },
];

const WHY_US = [
  'ISO-Certified Engineering Processes',
  'End-to-End Project Management',
  'Sustainable & Eco-Friendly Solutions',
  'Experienced Multi-Domain Engineers',
  'Proven Track Record Across India',
];

const METRIC_CARDS = [
  { label: 'Water Projects', value: '18+', icon: FaWater },
  { label: 'Infrastructure', value: '25+', icon: FaBuilding },
  { label: 'R&D Initiatives', value: '8+', icon: FaCogs },
  { label: 'Rural Projects', value: '12+', icon: FaHome },
];

// ── Component ────────────────────────────────────────────────────────────────

const Home = () => (
  <div className="bg-[#0f172a]">

    {/* ════════════════════ HERO ════════════════════ */}
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-infrastructure-grid animate-infrastructure-grid">
      {/* Multi-layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0f172a] to-[#0b1f36]" />
      
      {/* Infrastructure pattern overlay */}
      <div className="absolute inset-0 bg-infrastructure-diagonal opacity-20 pointer-events-none" />
      
      {/* Animated gradient blobs */}
      <div className="absolute top-24 right-0 w-[600px] h-[600px] bg-[#14b8a6]/5 rounded-full blur-3xl pointer-events-none animate-float" />
      <div className="absolute bottom-16 left-0 w-[400px] h-[400px] bg-blue-900/15 rounded-full blur-3xl pointer-events-none animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-3xl pointer-events-none animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Live badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#14b8a6]/10 border border-[#14b8a6]/25 rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse" />
            <span className="text-[#14b8a6] text-sm font-medium">Engineering Excellence Since 2009</span>
          </motion.div>

          {/* Company name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-5"
          >
            AROM{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-teal-300">
              INFRACON
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl sm:text-2xl text-[#14b8a6] font-medium mb-6"
          >
            {config.TAGLINE}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl"
          >
            AROM INFRACON is a premier engineering and infrastructure company committed to
            delivering innovative, sustainable solutions. From water treatment plants to rural
            development, we engineer the backbone of communities across India.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={config.WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white
                         px-8 py-4 rounded-xl font-semibold text-lg
                         hover:bg-[#20BA5A] transition-all duration-200
                         shadow-lg hover:shadow-green-500/30"
            >
              <FaWhatsapp size={22} />
              Contact Us
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 border border-gray-600
                         text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg
                         hover:border-[#14b8a6] hover:text-[#14b8a6] transition-all duration-200"
            >
              Our Services <FaArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-[#14b8a6] rounded-full" />
        </div>
      </motion.div>
    </section>

    {/* ════════════════════ STATS ════════════════════ */}
    <section className="py-14 bg-gradient-to-r from-[#1e293b] via-[#1e293b] to-[#0f172a] bg-infrastructure-dots relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-[#14b8a6]/20 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-blue-900/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center hover:scale-105 transition-transform duration-300 p-4 rounded-lg hover:bg-[#0f172a]/50"
            >
              <div className="text-4xl font-extrabold bg-gradient-to-r from-[#14b8a6] to-teal-400 bg-clip-text text-transparent mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ════════════════════ SERVICES ════════════════════ */}
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-infrastructure-lines opacity-5 pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-[#14b8a6]/5 rounded-full blur-3xl pointer-events-none animate-float" />
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-blue-900/5 rounded-full blur-3xl pointer-events-none animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#14b8a6] text-sm font-semibold uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="text-4xl font-bold text-white mt-3 mb-4">Our Core Services</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Comprehensive infrastructure solutions built on expertise, innovation, and a commitment
            to sustainability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.title} {...svc} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[#14b8a6] font-semibold hover:text-teal-300 transition-colors hover:gap-3"
          >
            View All Services <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* ════════════════════ WHY US ════════════════════ */}
    <section className="py-20 bg-gradient-to-b from-[#1e293b] to-[#0f172a] bg-infrastructure-dots relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#14b8a6]/10 rounded-full blur-3xl pointer-events-none animate-float" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#14b8a6] text-sm font-semibold uppercase tracking-widest">
              Why AROM INFRACON
            </span>
            <h2 className="text-4xl font-bold text-white mt-3 mb-6">
              Trusted by Communities Across India
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              We combine technical expertise with a deep commitment to sustainable development.
              Our multidisciplinary approach ensures projects are delivered on time, within budget,
              and to the highest quality standards.
            </p>
            <ul className="space-y-4">
              {WHY_US.map((item, idx) => (
                <motion.li 
                  key={item} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-[#14b8a6] transition-colors"
                >
                  <FaCheckCircle className="text-[#14b8a6] flex-shrink-0 animate-pulse-slow" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: metrics grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-[#14b8a6]/20 to-blue-900/20 rounded-3xl p-8 border border-[#14b8a6]/30 backdrop-blur-sm hover:border-[#14b8a6]/50 transition-all duration-300">
              <div className="grid grid-cols-2 gap-4">
                {METRIC_CARDS.map(({ label, value, icon: Icon }, idx) => (
                  <motion.div 
                    key={label} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-[#0f172a]/80 rounded-2xl p-5 text-center hover:bg-[#0f172a] hover:border border-[#14b8a6]/30 transition-all duration-300 group"
                  >
                    <Icon className="text-[#14b8a6] text-2xl mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-gray-400 text-xs mt-1">{label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ════════════════════ CTA BANNER ════════════════════ */}
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-infrastructure-grid opacity-20 pointer-events-none" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#14b8a6]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-[#14b8a6]/15 via-blue-900/10 to-[#14b8a6]/15 border border-[#14b8a6]/30 rounded-3xl p-12 backdrop-blur-sm hover:border-[#14b8a6]/50 transition-all duration-300"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Let's discuss your project requirements and create sustainable infrastructure
            solutions together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={config.WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white
                         px-8 py-4 rounded-xl font-semibold hover:bg-[#20BA5A] transition-all duration-200
                         shadow-lg hover:shadow-green-500/40 hover:scale-105 transform"
            >
              <FaWhatsapp size={20} /> WhatsApp Chat
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#14b8a6] text-white
                         px-8 py-4 rounded-xl font-semibold hover:bg-teal-400 transition-all duration-200
                         shadow-lg hover:shadow-teal-500/40 hover:scale-105 transform"
            >
              Contact Form <FaArrowRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Home;
