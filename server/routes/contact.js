'use strict';

const express   = require('express');
const { body, validationResult } = require('express-validator');

const router = express.Router();

// ── Input validation + sanitisation rules ────────────────────────────────────
const validateContact = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ max: 100 }).withMessage('Name must be under 100 characters')
    .escape(),                        // strips HTML — prevents XSS

  body('email')
    .trim()
    .isEmail().withMessage('A valid email address is required')
    .normalizeEmail(),

  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 10, max: 2000 }).withMessage('Message must be 10–2000 characters')
    .escape(),                        // strips HTML — prevents XSS
];

// ── POST /api/contact ─────────────────────────────────────────────────────────
router.post('/', validateContact, async (req, res) => {
  // Return validation errors to the client
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, message } = req.body;

  // ── Console log (always active) ────────────────────────────────────────────
  console.log('\n  📩  New Contact Submission — AROM INFRACON');
  console.log('  ─────────────────────────────────────────');
  console.log(`  Name    : ${name}`);
  console.log(`  Email   : ${email}`);
  console.log(`  Message : ${message}`);
  console.log('  ─────────────────────────────────────────\n');

  // ── Nodemailer email integration (placeholder) ─────────────────────────────
  //
  // To enable email notifications:
  //   1. Create server/.env and add:
  //        EMAIL_USER=your@gmail.com
  //        EMAIL_PASS=your_gmail_app_password   ← NOT your normal password
  //        EMAIL_TO=info@arominfracon.com
  //   2. Uncomment the block below.
  //
  // ─────────────────────────────────────────────────────────────────────────
  // const nodemailer = require('nodemailer');
  //
  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: process.env.EMAIL_USER,
  //     pass: process.env.EMAIL_PASS,
  //   },
  // });
  //
  // await transporter.sendMail({
  //   from: `"AROM INFRACON Website" <${process.env.EMAIL_USER}>`,
  //   to: process.env.EMAIL_TO,
  //   replyTo: email,
  //   subject: `New Enquiry from ${name} — AROM INFRACON`,
  //   html: `
  //     <h2>New Contact Form Submission</h2>
  //     <p><strong>Name:</strong> ${name}</p>
  //     <p><strong>Email:</strong> ${email}</p>
  //     <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
  //   `,
  // });
  // ─────────────────────────────────────────────────────────────────────────

  return res.status(200).json({
    success: true,
    message: 'Thank you for contacting AROM INFRACON. We will get back to you shortly!',
  });
});

module.exports = router;
