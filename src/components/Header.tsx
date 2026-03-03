import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onBookNow: () => void;
}

export default function Header({ onBookNow }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'Offers', href: '#offers' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center">
      {/* Top Banner */}
      <AnimatePresence>
        {isBannerVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="w-full bg-fern-gold text-white overflow-hidden relative"
          >
            <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-center text-xs md:text-sm font-medium tracking-wide gap-4">
              <span className="text-center truncate">
                Limited Time: Save 20% on Suites for Summer Getaways.
              </span>
              <button 
                onClick={onBookNow} 
                className="underline underline-offset-4 hover:text-fern-navy transition-colors whitespace-nowrap flex items-center gap-1"
              >
                Book Now <ArrowRight size={14} />
              </button>
              <button
                onClick={() => setIsBannerVisible(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close banner"
              >
                <X size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header */}
      <header
        className={`w-full transition-all duration-500 ${
          isScrolled ? 'bg-fern-navy/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 z-50">
            <img
              src="https://www.fernhotels.com/_next/image?url=https%3A%2F%2Fwww.fernhotels.com%2Fapi%2Fuploads%2Fimages%2F1762859690_0_The-Fern-Hotels-Resort-Logo.png&w=384&q=75"
              alt="The Fern Hotels & Resorts"
              className={`transition-all duration-500 ${isScrolled ? 'h-10' : 'h-12'} brightness-0 invert`}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest text-white/90 hover:text-fern-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onBookNow}
              className="px-6 py-2.5 bg-fern-gold text-white text-sm uppercase tracking-widest hover:bg-fern-gold-hover transition-colors rounded-sm"
            >
              Book Now
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 h-screen bg-fern-navy flex flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-white hover:text-fern-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookNow();
                }}
                className="mt-4 px-8 py-4 bg-fern-gold text-white text-lg uppercase tracking-widest hover:bg-fern-gold-hover transition-colors rounded-sm"
              >
                Book Now
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
