import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHardHat } from 'react-icons/fa';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
  { name: 'Submissions', path: '/submissions' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Detect scroll to toggle backdrop blur / shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f172a]/95 backdrop-blur-md shadow-2xl shadow-black/30'
          : 'bg-[#0f172a]/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-9 h-9 bg-gradient-to-br from-[#14b8a6] to-teal-300 rounded-lg flex items-center justify-center group-hover:from-teal-400 group-hover:to-teal-300 transition-all duration-200 shadow-lg group-hover:shadow-teal-500/40"
            >
              <FaHardHat className="text-white text-base" />
            </motion.div>
            <span className="text-white font-extrabold text-xl tracking-wide">
              AROM <span className="text-[#14b8a6] group-hover:text-teal-400 transition-colors">INFRACON</span>
            </span>
          </Link>

          {/* ── Desktop Navigation ── */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.path;
              return (
                <motion.div key={link.name}>
                  <Link
                    to={link.path}
                    className={`relative text-sm font-medium transition-colors duration-200 group ${
                      active ? 'text-[#14b8a6]' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {/* Animated underline */}
                    <motion.span
                      layoutId="navbar-underline"
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#14b8a6] to-teal-400 rounded-full ${
                        active ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              );
            })}

            <motion.div whileHover={{ scale: 1.05, y: -2 }} transition={{ type: 'spring', stiffness: 400 }}>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#14b8a6] to-teal-400 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:from-teal-400 hover:to-teal-300 transition-all duration-200 shadow-lg hover:shadow-teal-500/50"
              >
                Get Quote
              </Link>
            </motion.div>
          </div>

          {/* ── Mobile Menu Toggle ── */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-b from-[#0f172a] to-[#1e293b]/50 border-t border-[#14b8a6]/20 overflow-hidden backdrop-blur-sm"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => {
                const active = location.pathname === link.path;
                return (
                  <motion.div key={link.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                    <Link
                      to={link.path}
                      className={`text-sm font-medium py-2.5 px-4 rounded-xl transition-all ${
                        active
                          ? 'bg-gradient-to-r from-[#14b8a6]/20 to-teal-400/10 text-[#14b8a6] border border-[#14b8a6]/30'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: NAV_LINKS.length * 0.05 }}>
                <Link
                  to="/contact"
                  className="mt-2 bg-gradient-to-r from-[#14b8a6] to-teal-400 text-white py-3 px-4 rounded-xl text-sm font-semibold text-center hover:from-teal-400 hover:to-teal-300 transition-all shadow-lg"
                >
                  Get Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
