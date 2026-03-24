import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, MapPin, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Products', id: 'products' },
    { name: 'Promotions', id: 'promotions' },
    { name: 'About', id: 'about' },
    { name: 'Store Locator', id: 'locator' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/95 py-3 shadow-xl backdrop-blur-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center cursor-pointer" 
          onClick={() => setCurrentPage('home')}
        >
          <span className="text-2xl font-display font-black text-white tracking-tighter italic">
            CRIMSON<span className="text-brand-red">FIZZ</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setCurrentPage(link.id)}
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                currentPage === link.id ? 'text-brand-red' : 'text-white hover:text-brand-red'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <button className="text-white hover:text-brand-red transition-colors">
            <Search size={20} />
          </button>
          <button 
            onClick={() => setCurrentPage('locator')}
            className="text-white hover:text-brand-red transition-colors flex items-center space-x-1"
          >
            <MapPin size={20} />
          </button>
          <button className="bg-brand-red text-white p-2 rounded-full hover:bg-red-700 transition-all">
            <ShoppingBag size={20} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-dark border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setCurrentPage(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left text-lg font-bold uppercase tracking-widest ${
                    currentPage === link.id ? 'text-brand-red' : 'text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 flex items-center space-x-6">
                <button className="text-white"><Search size={24} /></button>
                <button className="text-white" onClick={() => setCurrentPage('locator')}><MapPin size={24} /></button>
                <button className="text-white"><ShoppingBag size={24} /></button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
