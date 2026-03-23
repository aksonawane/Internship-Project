import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHardHat,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import config from '../constants/config';

const FOOTER_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
  { name: 'Submissions', path: '/submissions' },
];

const SOCIAL = [
  { icon: FaLinkedinIn, href: config.SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
  { icon: FaTwitter, href: config.SOCIAL_LINKS.twitter, label: 'Twitter' },
  { icon: FaFacebookF, href: config.SOCIAL_LINKS.facebook, label: 'Facebook' },
  { icon: FaInstagram, href: config.SOCIAL_LINKS.instagram, label: 'Instagram' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080f1e] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Brand Column ── */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-[#14b8a6] rounded-lg flex items-center justify-center">
                <FaHardHat className="text-white text-base" />
              </div>
              <span className="text-white font-extrabold text-xl">
                AROM <span className="text-[#14b8a6]">INFRACON</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Engineering sustainable infrastructure for a better tomorrow. From water treatment
              plants to rural development, we build the foundation of progress across India.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#14b8a6] hover:text-white transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#14b8a6] text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Info ── */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-[#14b8a6] mt-0.5 flex-shrink-0" size={13} />
                <a
                  href={`tel:${config.CONTACT_PHONE}`}
                  className="text-gray-400 text-sm hover:text-[#14b8a6] transition-colors"
                >
                  {config.CONTACT_PHONE}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-[#14b8a6] mt-0.5 flex-shrink-0" size={13} />
                <a
                  href={`mailto:${config.CONTACT_EMAIL}`}
                  className="text-gray-400 text-sm hover:text-[#14b8a6] transition-colors"
                >
                  {config.CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#14b8a6] mt-0.5 flex-shrink-0" size={13} />
                <span className="text-gray-400 text-sm">{config.CONTACT_ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            © {year} AROM INFRACON. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm italic">
            {config.TAGLINE}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
