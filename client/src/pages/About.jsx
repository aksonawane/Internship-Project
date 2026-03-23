import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBullseye,
  FaEye,
  FaWater,
  FaBuilding,
  FaCogs,
  FaLeaf,
  FaHome,
  FaGlobe,
  FaShieldAlt,
  FaUsers,
  FaAward,
} from 'react-icons/fa';

// ── Data ─────────────────────────────────────────────────────────────────────

const CORE_VALUES = [
  { icon: FaShieldAlt, title: 'Integrity', desc: 'Upholding the highest standards of ethics in every project.' },
  { icon: FaUsers, title: 'Collaboration', desc: 'Working hand-in-hand with clients, partners, and communities.' },
  { icon: FaAward, title: 'Excellence', desc: 'Delivering quality that consistently exceeds expectations.' },
  { icon: FaLeaf, title: 'Sustainability', desc: 'Building eco-consciously for future generations.' },
];

const INDUSTRIES = [
  { icon: FaWater, name: 'Water & Sanitation', desc: 'Treatment plants, supply networks, and groundwater management.' },
  { icon: FaBuilding, name: 'Civil Construction', desc: 'Bridges, highways, and commercial & industrial buildings.' },
  { icon: FaCogs, name: 'Heavy Engineering', desc: 'Specialized machinery design and industrial equipment R&D.' },
  { icon: FaLeaf, name: 'Environment & Climate', desc: 'Environmental monitoring, weather systems, green technology.' },
  { icon: FaHome, name: 'Rural Development', desc: 'Housing, sanitation, rural roads, and community infrastructure.' },
  { icon: FaGlobe, name: 'Sustainable Development', desc: 'Eco-friendly solutions for long-term community growth.' },
];

// ── Component ────────────────────────────────────────────────────────────────

const About = () => (
  <div className="bg-[#0f172a] pt-20">

    {/* ════════════════════ HERO ════════════════════ */}
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-infrastructure-grid animate-infrastructure-grid">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#14b8a6]/10 rounded-full blur-3xl pointer-events-none animate-float" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-900/8 rounded-full blur-3xl pointer-events-none animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#14b8a6] text-sm font-semibold uppercase tracking-widest">
            About Us
          </span>
          <h1 className="text-5xl font-bold text-white mt-3 mb-6">
            Building India's Infrastructure Future
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            AROM INFRACON is a premier engineering and infrastructure company dedicated to
            delivering innovative, sustainable solutions across water treatment, construction,
            heavy engineering, environmental science, and rural development sectors.
          </p>
        </motion.div>
      </div>
    </section>

    {/* ════════════════════ COMPANY OVERVIEW ════════════════════ */}
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1e293b] to-[#0f172a] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-infrastructure-diagonal opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#14b8a6] text-sm font-semibold uppercase tracking-widest">
              Company Overview
            </span>
            <h2 className="text-3xl font-bold text-white mt-3 mb-6">Who We Are</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
              <p>
                Founded with a vision to transform India's infrastructure landscape, AROM INFRACON
                brings together world-class engineering talent and cutting-edge technology to solve
                the most complex infrastructure challenges.
              </p>
              <p>
                With over 15 years of experience, we have successfully executed 50+ projects across
                10+ states, touching millions of lives through improved water access, better roads,
                and smarter environmental systems.
              </p>
              <p>
                Our multidisciplinary teams of civil engineers, environmental scientists, and
                technology experts collaborate to deliver integrated solutions that are technically
                superior and environmentally responsible.
              </p>
            </div>
          </motion.div>

          {/* Core values grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {CORE_VALUES.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-[#0f172a]/80 to-[#1e293b]/50 rounded-2xl p-5 border border-[#14b8a6]/20
                           hover:border-[#14b8a6]/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-900/20 group"
              >
                <val.icon className="text-[#14b8a6] text-2xl mb-3 group-hover:scale-125 transition-transform duration-300" />
                <h3 className="text-white font-semibold mb-1">{val.title}</h3>
                <p className="text-gray-400 text-sm">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    {/* ════════════════════ MISSION & VISION ════════════════════ */}
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-infrastructure-lines opacity-5 pointer-events-none" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#14b8a6]/5 rounded-full blur-3xl pointer-events-none animate-float" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-900/5 rounded-full blur-3xl pointer-events-none animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#14b8a6] text-sm font-semibold uppercase tracking-widest">
            Our Direction
          </span>
          <h2 className="text-4xl font-bold text-white mt-3">Mission & Vision</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-[#14b8a6]/15 via-[#14b8a6]/5 to-[#0f172a]/50
                       border border-[#14b8a6]/30 rounded-3xl p-8 hover:border-[#14b8a6]/50 transition-all duration-300
                       hover:shadow-lg hover:shadow-teal-900/20"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#14b8a6] to-teal-400 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <FaBullseye className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To deliver world-class infrastructure solutions that empower communities, protect
              the environment, and drive sustainable economic development. We commit to engineering
              projects with precision, integrity, and innovation — contributing to India's growth
              story one project at a time.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-blue-900/15 via-blue-900/5 to-[#0f172a]/50
                       border border-blue-700/30 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300
                       hover:shadow-lg hover:shadow-blue-900/20"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-400 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <FaEye className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To be India's most trusted and innovative infrastructure partner — recognised for
              transforming communities through sustainable engineering, pioneering research, and a
              relentless commitment to excellence. We aspire to set national benchmarks in
              infrastructure quality and environmental stewardship.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ════════════════════ INDUSTRIES ════════════════════ */}
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f172a] to-[#1e293b] bg-infrastructure-dots relative overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#14b8a6]/8 rounded-full blur-3xl pointer-events-none animate-float" />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-900/8 rounded-full blur-3xl pointer-events-none animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#14b8a6] text-sm font-semibold uppercase tracking-widest">
            Our Reach
          </span>
          <h2 className="text-4xl font-bold text-white mt-3 mb-4">Industries We Serve</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A diverse portfolio spanning critical sectors of national infrastructure and development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-[#1e293b]/70 to-[#0f172a]/50 rounded-2xl p-6 border border-[#14b8a6]/20
                         hover:border-[#14b8a6]/50 transition-all duration-300 group hover:shadow-lg hover:shadow-teal-900/20 overflow-hidden"
            >
              {/* Background pattern for hover */}
              <div className="absolute inset-0 bg-infrastructure-diagonal opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
              
              {/* Content */}
              <div className="relative">
                <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="inline-block">
                  <ind.icon className="text-[#14b8a6] text-3xl mb-4 group-hover:scale-125 transition-transform duration-300" />
                </motion.div>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#14b8a6] transition-colors">{ind.name}</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
