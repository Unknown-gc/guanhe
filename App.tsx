import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { HomeSection } from './components/sections/HomeSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ContactSection } from './components/sections/ContactSection';
import { Section } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  // Logic to render the correct section
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'portfolio':
        return <PortfolioSection />;
      case 'about':
        return <AboutSection />;
      case 'services':
        return <ServicesSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="flex h-screen bg-ink text-paper overflow-hidden font-sans selection:bg-vermilion selection:text-white">
      {/* Navigation Sidebar */}
      <Navigation activeSection={activeSection} setSection={setActiveSection} />

      {/* Main Content Area */}
      <main className="flex-1 relative md:ml-64 h-full bg-ink">
        {/* We use AnimatePresence to create smooth fade transitions between "pages" */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}