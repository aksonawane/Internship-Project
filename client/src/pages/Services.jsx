import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaWater,
  FaBuilding,
  FaCogs,
  FaLeaf,
  FaHome,
  FaCheckCircle,
  FaArrowRight,
  FaWhatsapp,
} from 'react-icons/fa';
import config from '../constants/config';

// ── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: FaWater,
    title: 'Water Treatment & Resource Management',
    tagline: 'Clean Water for Every Community',
    description:
      'We design, build, and maintain water treatment plants, distribution systems, and resource management frameworks. Our holistic approach covers the entire water cycle — from source protection to final delivery.',
    features: [
      'Water Treatment Plant Design & Construction',
      'Sewage & Wastewater Treatment Systems',
      'Groundwater Assessment & Management',
      'Rainwater Harvesting Solutions',
      'Water Quality Testing & Monitoring',
      'Pipeline & Distribution Network Design',
    ],
    gradient: 'from-blue-900/30 to-[#14b8a6]/10',
    border: 'border-blue-800/40',
  },
  {
    icon: FaBuilding,
    title: 'Construction & Infrastructure Development',
    tagline: 'Structures Built to Last Generations',
    description:
      'From conceptual design to project handover, we manage complete construction projects with precision and quality. Our teams specialise in civil, structural, and geotechnical engineering across all scales.',
    features: [
      'Commercial & Industrial Construction',
      'Road & Highway Development',
      'Bridge & Flyover Construction',
      'Government Infrastructure Projects',
      'Foundation & Structural Engineering',
      'Project Management & Supervision',
    ],
    gradient: 'from-slate-800/50 to-gray-900/30',
    border: 'border-gray-700/40',
  },
  {
    icon: FaCogs,
    title: 'Heavy Engineering & Machinery R&D',
    tagline: 'Innovation at Industrial Scale',
    description:
      'Our R&D division develops specialised heavy engineering solutions and machinery for complex industrial and infrastructure needs, pushing the boundaries of engineering innovation.',
    features: [
      'Custom Heavy Machinery Design',
      'Industrial Equipment R&D',
      'Mechanical Systems Engineering',
      'Prototype Development & Testing',
      'Manufacturing Process Optimisation',
      'Equipment Maintenance Systems',
    ],
    gradient: 'from-orange-900/20 to-yellow-900/10',
    border: 'border-orange-800/30',
  },
  {
    icon: FaLeaf,
    title: 'Environmental Science & Weather Monitoring',
    tagline: 'Protecting Our Planet, Predicting Tomorrow',
    description:
      'Leading-edge environmental research combined with state-of-the-art weather monitoring and early warning systems to safeguard communities and ecosystems from climate-driven risks.',
    features: [
      'Environmental Impact Assessments',
      'Weather Monitoring Station Setup',
      'Flood Early Warning Systems',
      'Air & Water Quality Monitoring',
      'Climate Change Mitigation Planning',
      'Ecological Conservation Solutions',
    ],
    gradient: 'from-green-900/20 to-teal-900/10',
    border: 'border-green-800/30',
  },
  {
    icon: FaHome,
    title: 'Rural Infrastructure Development',
    tagline: 'Empowering Rural India',
    description:
      'We bridge the infrastructure gap between urban and rural India — delivering essential services, connectivity, and community facilities to underserved regions across the country.',
    features: [
      'Rural Road & Connectivity Projects',
      'Village Sanitation & Water Supply',
      'Community Centres & Schools',
      'Affordable Housing Development',
      'Solar & Renewable Energy Systems',
      'Agricultural Infrastructure Support',
    ],
    gradient: 'from-purple-900/20 to-indigo-900/10',
    border: 'border-purple-800/30',
  },
];

// ── Component ────────────────────────────────────────────────────────────────

const Services = () => (
  <div className="bg-[#0f172a] pt-20">

    {/* ════════════════════ HERO ════════════════════ */}
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-infrastructure-lines animate-infrastructure-grid">
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
            What We Offer
          </span>
          <h1 className="text-5xl font-bold text-white mt-3 mb-6">Our Services</h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Five specialised service domains, one unified commitment — building sustainable
            infrastructure that transforms lives.
          </p>
        </motion.div>
      </div>
    </section>

    {/* ════════════════════ SERVICE CARDS ════════════════════ */}
    {SERVICES.map((svc, idx) => (
      <section
        key={svc.title}
        className={`py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${idx % 2 === 1 ? 'bg-gradient-to-b from-[#1e293b] to-[#0f172a]' : 'bg-gradient-to-b from-[#0f172a] to-[#1e293b]'}`}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 bg-infrastructure-diagonal opacity-[5%] pointer-events-none" />
        
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#14b8a6]/8 rounded-full blur-3xl pointer-events-none animate-float" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-900/8 rounded-full blur-3xl pointer-events-none animate-float" style={{ animationDelay: '1.5s' }} />
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.01 }}
            className={`rounded-3xl border ${svc.border} bg-gradient-to-br ${svc.gradient} p-8 md:p-12 backdrop-blur-sm
                        hover:border-[#14b8a6]/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-teal-900/20`}
          >
            {/* Animated top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#14b8a6]/0 to-[#14b8a6] via-[#14b8a6] rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="grid lg:grid-cols-2 gap-10 items-start">

              {/* Left: description */}
              <div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-4 mb-6"
                >
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-14 h-14 bg-gradient-to-br from-[#14b8a6] to-teal-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                  >
                    <svc.icon className="text-white text-2xl" />
                  </motion.div>
                  <div>
                    <p className="text-[#14b8a6] text-sm font-medium mb-1 hover:text-teal-300 transition-colors">{svc.tagline}</p>
                    <h2 className="text-2xl font-bold text-white leading-snug">{svc.title}</h2>
                  </div>
                </motion.div>

                <p className="text-gray-400 leading-relaxed mb-7">{svc.description}</p>

                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  href={config.WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#14b8a6] to-teal-400 text-white
                             px-6 py-3 rounded-xl font-semibold
                             hover:from-teal-400 hover:to-teal-300 transition-all duration-200 shadow-lg hover:shadow-teal-500/40"
                >
                  <FaWhatsapp /> Enquire Now
                </motion.a>
              </div>

              {/* Right: features checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {svc.features.map((feat, i) => (
                  <motion.div
                    key={feat}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center gap-3 bg-gradient-to-r from-[#14b8a6]/10 to-[#14b8a6]/5 rounded-xl px-4 py-3
                              border border-[#14b8a6]/20 hover:border-[#14b8a6]/50 hover:bg-[#14b8a6]/15 transition-all duration-200"
                  >
                    <FaCheckCircle className="text-[#14b8a6] flex-shrink-0 text-sm animate-pulse-slow" />
                    <span className="text-gray-300 text-sm hover:text-white transition-colors">{feat}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    ))}

    {/* ════════════════════ CTA ════════════════════ */}
    <section className="py-20 px-4 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] bg-infrastructure-dots relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#14b8a6]/8 rounded-full blur-3xl pointer-events-none animate-float" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-900/8 rounded-full blur-3xl pointer-events-none animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-3xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-400 mb-8">
            Every project is unique. Contact us to discuss your specific requirements and
            receive a tailored proposal from our team of experts.
          </p>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} transition={{ type: 'spring', stiffness: 400 }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#14b8a6] to-teal-400 text-white
                         px-8 py-4 rounded-xl font-semibold hover:from-teal-400 hover:to-teal-300 transition-all duration-200
                         shadow-lg hover:shadow-teal-500/40"
            >
              Get in Touch <FaArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Services;
