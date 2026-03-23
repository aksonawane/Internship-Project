// ============================================================
// AROM INFRACON — Central Configuration File
// ============================================================
//
// HOW TO CHANGE THE WHATSAPP NUMBER:
//   1. Open this file: client/src/constants/config.js
//   2. Update WHATSAPP_NUMBER below (country code + number, no + or spaces)
//      Example: "919834008456" = +91 98340 08456 (India)
//   3. Save — the change propagates to all buttons sitewide automatically.
// ============================================================

const config = {
  // ── Company Details ──────────────────────────────────────
  COMPANY_NAME: 'AROM INFRACON',
  TAGLINE: 'Engineering Sustainable Infrastructure for the Future',

  // ── WhatsApp Configuration ───────────────────────────────
  // Change WHATSAPP_NUMBER to update every WhatsApp link on the site
  WHATSAPP_NUMBER: '919834008456',
  WHATSAPP_MESSAGE: 'Hello I am interested in AROM INFRACON services',

  // Auto-generated WhatsApp URL — do NOT edit this line
  get WHATSAPP_URL() {
    return `https://wa.me/${this.WHATSAPP_NUMBER}?text=${encodeURIComponent(this.WHATSAPP_MESSAGE)}`;
  },

  // ── Contact Details ───────────────────────────────────────
  CONTACT_PHONE: '+91 98340 08456',
  CONTACT_EMAIL: 'info@arominfracon.com',
  CONTACT_ADDRESS: 'AROM INFRACON, Infrastructure Tower, Maharashtra, India',

  // ── Social Media Links ────────────────────────────────────
  // Replace '#' with real profile URLs when available
  SOCIAL_LINKS: {
    linkedin: '#',
    twitter: '#',
    facebook: '#',
    instagram: '#',
  },

  // ── API Base URL ─────────────────────────────────────────
  // Vite proxies /api → http://localhost:5000 (see vite.config.js)
  API_URL: '/api',
};

export default config;
