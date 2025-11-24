import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Page } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Main state for the current active page
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  // Helper to render the correct component based on state
  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Hero key="hero" setPage={setCurrentPage} />;
      case Page.PORTFOLIO:
        return <Portfolio key="portfolio" setPage={setCurrentPage} />;
      case Page.SERVICES:
        return <Services key="services" />;
      case Page.ABOUT:
        return <About key="about" />;
      case Page.CONTACT:
        return <Contact key="contact" />;
      default:
        return <Hero key="hero" setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-xuan min-h-screen text-ink font-sans selection:bg-vermilion selection:text-white transition-colors duration-500">
      {/* Navigation is sticky and persistent */}
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />

      {/* Main Content Area with Page Transitions */}
      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer displays on all pages except full-screen Home if desired, 
          but showing it everywhere is standard practice. */}
      {currentPage !== Page.HOME && <Footer />}
    </div>
  );
};

export default App;