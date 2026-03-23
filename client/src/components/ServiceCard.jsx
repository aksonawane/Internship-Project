import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable animated service card used on Home and Services pages.
 * Props:
 *   icon       — React Icons component
 *   title      — Card heading
 *   description — Short description text
 *   index      — Card position (used for staggered entrance delay)
 */
const ServiceCard = ({ icon: Icon, title, description, index = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, delay: index * 0.12 }}
    whileHover={{ y: -12, scale: 1.02 }}
    className="relative bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/60 border border-[#14b8a6]/30 rounded-2xl p-7 group cursor-default
               transition-all duration-300 overflow-hidden
               hover:border-[#14b8a6]/60 hover:shadow-2xl hover:shadow-teal-900/40 hover:backdrop-blur-sm"
  >
    {/* Background pattern */}
    <div className="absolute inset-0 bg-infrastructure-dots opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
    
    {/* Animated gradient border glow */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
         style={{
           background: 'radial-gradient(circle at top-right, rgba(20, 184, 166, 0.1), transparent)',
         }} />
    
    {/* Content wrapper */}
    <div className="relative z-10">
      {/* Icon */}
      <motion.div 
        whileHover={{ scale: 1.15, rotate: 10 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="w-14 h-14 bg-gradient-to-br from-[#14b8a6]/20 to-[#14b8a6]/5 rounded-xl flex items-center justify-center mb-5
                      group-hover:from-[#14b8a6]/30 group-hover:to-[#14b8a6]/15 transition-all duration-300 shadow-lg"
      >
        <Icon className="text-[#14b8a6] text-2xl" />
      </motion.div>

      {/* Title */}
      <h3 className="text-white font-semibold text-lg mb-3 leading-tight
                     group-hover:text-[#14b8a6] transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
    </div>

    {/* Animated bottom accent line */}
    <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-[#14b8a6] to-teal-400 rounded-full
                    scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    
    {/* Corner accent */}
    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#14b8a6]/10 to-transparent rounded-full
                    -mr-10 -mt-10 group-hover:from-[#14b8a6]/20 transition-all duration-300" />
  </motion.div>
);

export default ServiceCard;
