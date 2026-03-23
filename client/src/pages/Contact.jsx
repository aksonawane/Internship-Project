import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from 'react-icons/fa';
import config from '../constants/config';

// ── Contact info items ────────────────────────────────────────────────────────

const CONTACT_ITEMS = [
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    value: config.CONTACT_PHONE,
    href: config.WHATSAPP_URL,
    iconColor: 'text-[#25D366]',
    bgColor: 'bg-[#25D366]/10',
    borderColor: 'border-[#25D366]/20',
  },
  {
    icon: FaPhoneAlt,
    title: 'Phone',
    value: config.CONTACT_PHONE,
    href: `tel:${config.CONTACT_PHONE}`,
    iconColor: 'text-[#14b8a6]',
    bgColor: 'bg-[#14b8a6]/10',
    borderColor: 'border-[#14b8a6]/20',
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    value: config.CONTACT_EMAIL,
    href: `mailto:${config.CONTACT_EMAIL}`,
    iconColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Address',
    value: config.CONTACT_ADDRESS,
    href: null,
    iconColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`${config.API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

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
              Get In Touch
            </span>
            <h1 className="text-5xl font-bold text-white mt-3 mb-6">Contact Us</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to start your next infrastructure project? Reach out for a consultation
              or project enquiry — we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════ WHATSAPP BANNER ════════════════════ */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12 relative">
        {/* Background decoration */}
        <div className="absolute -top-20 right-0 w-60 h-60 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative">
          <motion.a
            href={config.WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4
                       bg-gradient-to-r from-[#25D366]/15 to-[#25D366]/5 border border-[#25D366]/40 rounded-2xl p-6
                       hover:from-[#25D366]/20 hover:to-[#25D366]/10 hover:border-[#25D366]/60 transition-all duration-200 
                       cursor-pointer shadow-lg hover:shadow-green-500/20"
          >
            <div className="flex items-center gap-4">
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                <FaWhatsapp className="text-[#25D366] text-4xl flex-shrink-0" />
              </motion.div>
              <div>
                <p className="text-white font-semibold text-lg">Chat on WhatsApp Instantly</p>
                <p className="text-gray-400 text-sm">
                  Fastest way to reach us — click to open a conversation now!
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#25D366] to-[#20BA5A] text-white px-6 py-2.5 rounded-xl font-semibold text-sm flex-shrink-0 shadow-lg hover:shadow-green-500/40">
              Open Chat ↗
            </div>
          </motion.a>
        </div>
      </section>

      {/* ════════════════════ FORM + INFO ════════════════════ */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-infrastructure-dots opacity-[5%] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* ── Contact Form ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <motion.input
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-[#14b8a6]/20 text-white placeholder-gray-500
                               rounded-xl px-4 py-3 focus:outline-none
                               focus:border-[#14b8a6]/60 focus:ring-2 focus:ring-[#14b8a6]/30 transition-all duration-200 hover:border-[#14b8a6]/40"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <motion.input
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-[#14b8a6]/20 text-white placeholder-gray-500
                               rounded-xl px-4 py-3 focus:outline-none
                               focus:border-[#14b8a6]/60 focus:ring-2 focus:ring-[#14b8a6]/30 transition-all duration-200 hover:border-[#14b8a6]/40"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <motion.textarea
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    id="message"
                    name="message"
                    required
                    rows={5}
                    minLength={10}
                    maxLength={2000}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry…"
                    className="w-full bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-[#14b8a6]/20 text-white placeholder-gray-500
                               rounded-xl px-4 py-3 focus:outline-none
                               focus:border-[#14b8a6]/60 focus:ring-2 focus:ring-[#14b8a6]/30 transition-all duration-200 resize-none hover:border-[#14b8a6]/40"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#14b8a6] to-teal-400 text-white
                             py-4 rounded-xl font-semibold
                             hover:from-teal-400 hover:to-teal-300 disabled:opacity-60 disabled:cursor-not-allowed
                             transition-all duration-200 shadow-lg hover:shadow-teal-500/40"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </motion.button>

                {/* Feedback messages */}
                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-400 text-center bg-green-500/10 border border-green-500/20 rounded-xl py-3 text-sm"
                  >
                    ✓ Message sent! We'll get back to you shortly.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-center bg-red-500/10 border border-red-500/20 rounded-xl py-3 text-sm"
                  >
                    ✗ Something went wrong. Please try WhatsApp instead.
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* ── Contact Info ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8">Company Contact</h2>

              <div className="space-y-4 mb-8">
                {CONTACT_ITEMS.map(({ icon: Icon, title, value, href, iconColor, bgColor, borderColor }, idx) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className={`flex items-start gap-4 ${bgColor} border ${borderColor} rounded-2xl p-5
                               hover:border-opacity-60 transition-all duration-200 group`}
                  >
                    <div className={`w-10 h-10 rounded-xl ${bgColor} border ${borderColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className={`${iconColor} text-lg group-hover:animate-pulse`} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">{title}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className={`${iconColor} font-medium hover:underline hover:scale-105 transition-all text-sm inline-block`}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-300 font-medium text-sm">{value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Business hours card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-[#14b8a6]/20 rounded-2xl p-6
                           hover:border-[#14b8a6]/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-900/20"
              >
                <h3 className="text-white font-semibold mb-5">Business Hours</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { day: 'Monday — Friday', time: '9:00 AM – 6:00 PM' },
                    { day: 'Saturday', time: '9:00 AM – 2:00 PM' },
                    { day: 'Sunday', time: 'WhatsApp Only' },
                  ].map(({ day, time }, idx) => (
                    <motion.div 
                      key={day} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex justify-between hover:translate-x-2 transition-transform"
                    >
                      <span className="text-gray-400 hover:text-white transition-colors">{day}</span>
                      <span className={time === 'WhatsApp Only' ? 'text-[#25D366] font-semibold' : 'text-gray-300'}>
                        {time}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
