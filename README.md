# AROM INFRACON — Company Website

> **Engineering Sustainable Infrastructure for the Future**

A modern, fully responsive company website built with **React (Vite) + Tailwind CSS** on the frontend and **Node.js + Express** on the backend.

---

## Project Structure

```
arom-infracon/
├── client/                          ← React + Vite frontend
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx           ← Sticky responsive navbar
│       │   ├── Footer.jsx           ← Site footer with links & socials
│       │   ├── WhatsAppButton.jsx   ← Floating WhatsApp button (all pages)
│       │   ├── ServiceCard.jsx      ← Animated service card component
│       │   └── ScrollToTop.jsx      ← Scroll to top on page change
│       ├── pages/
│       │   ├── Home.jsx             ← Hero, stats, services, CTA
│       │   ├── About.jsx            ← Company overview, mission, industries
│       │   ├── Services.jsx         ← Detailed service sections
│       │   ├── Projects.jsx         ← Filterable project grid
│       │   └── Contact.jsx          ← Form + contact info
│       ├── constants/
│       │   └── config.js            ← ⭐ Central config (WhatsApp number, etc.)
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│
└── server/                          ← Node.js + Express backend
    ├── server.js                    ← Express app entry point
    ├── package.json
    ├── .env.example                 ← Copy to .env and fill in values
    └── routes/
        └── contact.js               ← POST /api/contact endpoint
```

---

## Tech Stack

| Layer       | Technology                              |
|-------------|----------------------------------------|
| Frontend    | React 18, Vite 5, Tailwind CSS 3       |
| Routing     | React Router DOM v6                    |
| Animations  | Framer Motion 11                       |
| Icons       | React Icons 5                          |
| Backend     | Node.js, Express 4                     |
| Validation  | express-validator 7                    |
| Email       | Nodemailer (placeholder — see below)   |

---

## Setup & Installation

### Prerequisites
- **Node.js** v18 or higher — https://nodejs.org
- **npm** v9 or higher (comes with Node.js)

---

### 1 — Install Frontend Dependencies

```bash
cd arom-infracon/client
npm install
```

### 2 — Install Backend Dependencies

```bash
cd arom-infracon/server
npm install
```

---

## Running the Project

### Start the Frontend (React dev server)

```bash
cd arom-infracon/client
npm run dev
```

Opens at → **http://localhost:5173**

---

### Start the Backend (Express API)

```bash
cd arom-infracon/server
npm run dev        # uses nodemon (auto-restart on save)
# OR
npm start          # plain node (production)
```

Runs at → **http://localhost:5000**

The Vite dev server automatically proxies `/api/*` requests to the backend,
so the frontend and backend work together seamlessly during development.

---

## How to Change the WhatsApp Number

1. Open **`client/src/constants/config.js`**
2. Find the line:
   ```js
   WHATSAPP_NUMBER: '919834008456',
   ```
3. Replace with your number — **country code + number, no `+` or spaces**:
   ```js
   WHATSAPP_NUMBER: '919876543210',   // +91 98765 43210
   ```
4. Save the file. All WhatsApp buttons across the entire site update automatically.

---

## Enabling Email Notifications (Nodemailer)

1. Copy the example env file:
   ```bash
   cp server/.env.example server/.env
   ```
2. Fill in your Gmail credentials in `server/.env`:
   ```env
   EMAIL_USER=your@gmail.com
   EMAIL_PASS=your_gmail_app_password
   EMAIL_TO=info@arominfracon.com
   ```
   > Use a **Gmail App Password** (not your regular password).  
   > Create one at: https://myaccount.google.com/apppasswords

3. Open `server/routes/contact.js` and **uncomment** the `nodemailer` block.

---

## Building for Production

```bash
# Build frontend
cd arom-infracon/client
npm run build
# Output → client/dist/

# Run backend (set NODE_ENV=production in .env)
cd arom-infracon/server
npm start
```

Serve `client/dist/` with any static host (Nginx, Netlify, Vercel, etc.)
and deploy the Express server to Railway, Render, or a VPS.

---

## Color Theme

| Variable    | Hex       | Usage                          |
|-------------|-----------|--------------------------------|
| Dark Blue   | `#0f172a` | Page backgrounds               |
| Teal/Brand  | `#14b8a6` | Accents, buttons, highlights   |
| Mid Dark    | `#1e293b` | Cards, section alternates      |
| Light Gray  | `#f1f5f9` | Body text base                 |

---

## Pages

| Route        | Page     | Description                            |
|--------------|----------|----------------------------------------|
| `/`          | Home     | Hero, stats, services preview, CTA     |
| `/about`     | About    | Overview, mission, vision, industries  |
| `/services`  | Services | 5 detailed service cards               |
| `/projects`  | Projects | Filterable project portfolio grid      |
| `/contact`   | Contact  | Form + WhatsApp + contact info         |

---

*AROM INFRACON © 2025. All rights reserved.*
