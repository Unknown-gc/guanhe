import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { useEffect } from 'react';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Home page only shows Hero (no scrolling to other sections)
const Home: React.FC = () => {
  return (
    <>
      <Hero />
    </>
  );
};

const PortfolioPage: React.FC = () => {
    return (
        <div className="pt-20 min-h-screen bg-deep-ink flex flex-col justify-between">
            <Portfolio />
            <Footer />
        </div>
    )
}

const AboutPage: React.FC = () => {
    return (
        <div className="pt-20 min-h-screen bg-stone-gray flex flex-col justify-between">
            <About />
            <Footer />
        </div>
    )
}

const ServicesPage: React.FC = () => {
    return (
        <div className="pt-20 min-h-screen bg-deep-ink flex flex-col justify-between">
            <Services />
            <Footer />
        </div>
    )
}

const ContactPage: React.FC = () => {
    return (
        <div className="pt-20 min-h-screen bg-deep-ink flex flex-col justify-between">
            <Contact />
            <Footer />
        </div>
    )
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-deep-ink text-rice-paper font-sans selection:bg-vermilion selection:text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
