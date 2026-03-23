// ============================================================
// AROM INFRACON — Express Server
// ============================================================
// Run:  node server.js         (production)
//        nodemon server.js     (development, auto-restart)
// ============================================================

'use strict';

const express = require('express');
const cors    = require('cors');
const dotenv  = require('dotenv');
const mongoose = require('mongoose');

// Load .env variables (PORT, CLIENT_ORIGIN, EMAIL_USER, etc.)
dotenv.config();

const contactRouter = require('./routes/contact');

const app  = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// ── Security: only allow requests from the configured frontend origin ─────────
const allowedOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

app.use(
  cors({
    origin: allowedOrigin,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  })
);

// ── Body parser — limit size to guard against large-payload attacks ───────────
app.use(express.json({ limit: '10kb' }));

// ── Routes ────────────────────────────────────────────────────────────────────
app.use('/api/contact', contactRouter);

// Health-check endpoint (useful for uptime monitors / deployment checks)
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', company: 'AROM INFRACON', timestamp: new Date().toISOString() });
});

// ── 404 handler ───────────────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ── Global error handler ──────────────────────────────────────────────────────
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error('Unhandled server error:', err.message);
  res.status(500).json({ error: 'Internal server error' });
});

// ── Start ─────────────────────────────────────────────────────────────────────
const startServer = async () => {
  if (!MONGODB_URI) {
    console.error('MONGODB_URI is missing. Add it in server/.env');
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected successfully.');

    app.listen(PORT, () => {
      console.log(`\n  AROM INFRACON Backend`);
      console.log(`  Running  → http://localhost:${PORT}`);
      console.log(`  Health   → http://localhost:${PORT}/api/health`);
      console.log(`  CORS     → ${allowedOrigin}\n`);
    });
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

startServer();
