import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import config from '../constants/config';

/**
 * Floating WhatsApp button — visible on ALL pages (fixed bottom-right).
 * Opens the configured WhatsApp chat link in a new tab.
 * To change the number, update WHATSAPP_NUMBER in src/constants/config.js
 */
const WhatsAppButton = () => {
  const [showTip, setShowTip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Tooltip bubble */}
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.18 }}
            className="bg-white text-gray-800 px-4 py-2 rounded-xl shadow-xl text-sm font-semibold whitespace-nowrap border border-gray-100 pointer-events-none"
          >
            💬 Chat with us!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={config.WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with AROM INFRACON on WhatsApp"
        onMouseEnter={() => setShowTip(true)}
        onMouseLeave={() => setShowTip(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22, delay: 1.2 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.93 }}
        className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-900/40 hover:bg-[#20BA5A] transition-colors duration-200"
      >
        {/* Ripple pulse */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <FaWhatsapp className="text-white text-2xl relative z-10" />
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
