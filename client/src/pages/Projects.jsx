import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWater, FaBuilding, FaCogs, FaLeaf, FaHome, FaWhatsapp } from 'react-icons/fa';
import config from '../constants/config';

// ── Data ─────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: 1,
    title: 'Rural Water Supply Scheme',
    category: 'Water Treatment',
    location: 'Nagpur District, Maharashtra',
    description:
      'Complete water supply infrastructure for 12 villages providing clean drinking water to 35,000 residents via modern treatment and distribution systems.',
    icon: FaWater,
    tags: ['Water Supply', 'Rural', 'Treatment'],
    status: 'Completed',
    year: '2023',
  },
  {
    id: 2,
    title: 'National Highway Bridge',
    category: 'Construction',
    location: 'Chandrapur, Maharashtra',
    description:
      'Design and construction of a 420-metre prestressed concrete bridge over the Wardha River as part of the NH-930 expansion project.',
    icon: FaBuilding,
    tags: ['Bridge', 'Highway', 'Civil'],
    status: 'Completed',
    year: '2022',
  },
  {
    id: 3,
    title: 'Industrial Crane Mechanism R&D',
    category: 'Heavy Engineering',
    location: 'Pune, Maharashtra',
    description:
      'Research and development of next-generation industrial crane mechanisms featuring smart load management and fail-safe systems for steel manufacturing plants.',
    icon: FaCogs,
    tags: ['R&D', 'Machinery', 'Industrial'],
    status: 'Ongoing',
    year: '2024',
  },
  {
    id: 4,
    title: 'Flood Early Warning Network',
    category: 'Environmental Science',
    location: 'Vidarbha Region, Maharashtra',
    description:
      'Installation of 28 automated weather and river monitoring stations with real-time flood alert systems covering 4 major river basins.',
    icon: FaLeaf,
    tags: ['Flood Warning', 'IoT', 'Weather'],
    status: 'Completed',
    year: '2023',
  },
  {
    id: 5,
    title: 'Integrated Rural Township',
    category: 'Rural Infrastructure',
    location: 'Yavatmal, Maharashtra',
    description:
      'Comprehensive rural development project including 240 affordable homes, internal roads, solar power systems, and community centre facilities.',
    icon: FaHome,
    tags: ['Housing', 'Rural', 'Solar'],
    status: 'Ongoing',
    year: '2024',
  },
  {
    id: 6,
    title: 'STP Upgrade — 100 MLD',
    category: 'Water Treatment',
    location: 'Amravati Municipal Corporation',
    description:
      'Modernisation of an existing 40 MLD sewage treatment plant to 100 MLD capacity with advanced tertiary treatment and biogas energy recovery.',
    icon: FaWater,
    tags: ['STP', 'Upgrade', 'Urban'],
    status: 'Completed',
    year: '2022',
  },
];

const CATEGORIES = [
  'All',
  'Water Treatment',
  'Construction',
  'Heavy Engineering',
  'Environmental Science',
  'Rural Infrastructure',
];

// ── Component ────────────────────────────────────────────────────────────────

const Projects = () => {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
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
              Our Portfolio
            </span>
            <h1 className="text-5xl font-bold text-white mt-3 mb-6">Featured Projects</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of transformative infrastructure projects across India, demonstrating
              our engineering expertise and commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════ FILTER TABS ════════════════════ */}
      <section className="px-4 sm:px-6 lg:px-8 mb-10 relative">
        {/* Background decoration */}
        <div className="absolute -top-20 right-0 w-60 h-60 bg-[#14b8a6]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-wrap gap-3 justify-center">
            {CATEGORIES.map((cat, i) => (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? 'bg-gradient-to-r from-[#14b8a6] to-teal-400 text-white shadow-lg shadow-teal-500/40'
                    : 'bg-[#1e293b] text-gray-400 hover:text-white border border-gray-700 hover:border-[#14b8a6]/50'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ PROJECT GRID ════════════════════ */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 pb-16 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-infrastructure-lines opacity-5 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/60 border border-[#14b8a6]/20 rounded-2xl overflow-hidden group
                           hover:border-[#14b8a6]/50 hover:shadow-2xl hover:shadow-teal-900/30
                           transition-all duration-300 cursor-default"
              >
                {/* Card header — icon area */}
                <div className="h-40 bg-gradient-to-br from-[#14b8a6]/20 to-blue-900/40 via-[#1e293b]/30
                                flex items-center justify-center relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-infrastructure-dots opacity-10" />
                  
                  <project.icon
                    className="text-[#14b8a6] text-6xl opacity-40
                               group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 relative z-10"
                  />
                  {/* Status badge */}
                  <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm ${
                      project.status === 'Completed'
                        ? 'bg-green-500/20 text-green-300 border border-green-500/40'
                        : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/40'
                    }`}
                  >
                    {project.status}
                  </motion.span>
                  <span className="absolute top-4 left-4 text-xs text-gray-400 bg-[#0f172a]/80 px-2.5 py-1 rounded-md backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <div className="text-[#14b8a6] text-xs font-semibold uppercase tracking-widest mb-2 group-hover:text-teal-300 transition-colors">
                    {project.category}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#14b8a6] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-xs mb-3">📍 {project.location}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.05 }}
                        className="text-xs bg-gradient-to-r from-[#14b8a6]/10 to-blue-900/10 
                                 text-gray-300 px-2.5 py-1 rounded-md border border-[#14b8a6]/30
                                 hover:border-[#14b8a6]/60 transition-all duration-200"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════ CTA ════════════════════ */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#1e293b] via-[#0f172a] to-[#1e293b] bg-infrastructure-grid relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#14b8a6]/8 rounded-full blur-3xl pointer-events-none animate-float" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-900/8 rounded-full blur-3xl pointer-events-none animate-float" style={{ animationDelay: '1.5s' }} />
        
        <div className="max-w-3xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Have a Project in Mind?</h2>
            <p className="text-gray-400 mb-8">
              Connect with us to explore how AROM INFRACON can bring your infrastructure
              vision to life.
            </p>
            <a
              href={config.WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white
                         px-8 py-4 rounded-xl font-semibold hover:bg-[#20BA5A]
                         transition-all duration-200 shadow-lg hover:shadow-green-500/40
                         hover:scale-105 transform"
            >
              <FaWhatsapp size={20} /> Discuss Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
