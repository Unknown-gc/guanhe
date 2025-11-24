import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if active link
  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { name: '首页 Home', path: '/' },
    { 
      name: '作品 Portfolio', 
      path: '/portfolio',
      submenu: [
        { name: '神话 Mythology', path: '/portfolio?cat=Mythology' },
        { name: '唯美 Portrait', path: '/portfolio?cat=Portrait' },
        { name: '复原 Restoration', path: '/portfolio?cat=Restoration' }
      ]
    },
    { name: '关于 About', path: '/about' },
    { name: '约拍 Services', path: '/services' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled || location.pathname !== '/' ? 'bg-deep-ink/95 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-serif text-2xl tracking-widest text-rice-paper border-2 border-vermilion px-3 py-1 relative group overflow-hidden">
              <span className="relative z-10">关河</span>
              <div className="absolute inset-0 bg-vermilion transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12 items-center">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => link.submenu && setDropdownOpen(true)}
                onMouseLeave={() => link.submenu && setDropdownOpen(false)}
              >
                <Link
                  to={link.path}
                  className={`font-serif tracking-wider text-sm transition-colors duration-300 flex items-center ${
                    isActive(link.path) ? 'text-vermilion' : 'text-rice-paper/80 hover:text-imperial-gold'
                  }`}
                >
                  {link.name}
                  {link.submenu && <ChevronDown size={14} className="ml-1" />}
                </Link>

                {/* Dropdown */}
                {link.submenu && (
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-1/2 transform -translate-x-1/2 top-full mt-4 w-48 bg-stone-gray border border-imperial-gold/20 shadow-xl rounded-sm overflow-hidden py-2"
                      >
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="block px-4 py-3 text-xs text-center text-rice-paper/70 hover:bg-white/5 hover:text-imperial-gold transition-colors font-serif"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            
            <Link to="/contact">
              <button className={`border px-6 py-2 text-xs tracking-[0.2em] transition-all duration-300 font-serif ${
                  isActive('/contact') 
                  ? 'bg-vermilion text-white border-vermilion' 
                  : 'border-vermilion text-vermilion hover:bg-vermilion hover:text-white'
              }`}>
                联系 Contact
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-rice-paper hover:text-vermilion transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 bg-deep-ink z-40 pt-24 px-8 overflow-y-auto"
          >
            <div className="flex flex-col space-y-8 items-center">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col items-center w-full">
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-serif text-rice-paper hover:text-imperial-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <div className="flex flex-col mt-4 space-y-4 items-center w-full border-t border-white/10 pt-4">
                      {link.submenu.map(sub => (
                         <Link
                         key={sub.name}
                         to={sub.path}
                         onClick={() => setIsOpen(false)}
                         className="text-sm text-rice-paper/60"
                       >
                         {sub.name}
                       </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-8">
                 <span className="text-vermilion text-lg font-serif border-b border-vermilion pb-1">联系我 Contact Me</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
