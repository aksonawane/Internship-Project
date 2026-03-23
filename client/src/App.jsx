import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Submissions from './pages/Submissions';

const App = () => (
  <Router>
    {/* Scroll to top on every route transition */}
    <ScrollToTop />

    <div className="min-h-screen flex flex-col bg-[#0f172a]">
      {/* Sticky navigation */}
      <Navbar />

      {/* Page content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/"         element={<Home />}     />
          <Route path="/about"    element={<About />}    />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact"  element={<Contact />}  />
          <Route path="/submissions" element={<Submissions />} />
        </Routes>
      </main>

      {/* Site footer */}
      <Footer />

      {/* Floating WhatsApp button (all pages) */}
      <WhatsAppButton />
    </div>
  </Router>
);

export default App;
