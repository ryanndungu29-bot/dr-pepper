import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1920" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-brand-red text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              New Flavor Alert: Midnight Edition
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-black text-white leading-none mb-6 italic uppercase">
              Unleash the <span className="text-brand-red">Bold</span> Within.
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Experience the legendary blend of 23 secret flavors. Crafted for those who dare to be different. Crimson Fizz is more than a drink—it's a lifestyle.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={onCtaClick}
                className="btn-primary flex items-center group w-full sm:w-auto justify-center"
              >
                Try It Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="flex items-center text-white font-bold hover:text-brand-red transition-colors group">
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mr-3 group-hover:border-brand-red transition-colors">
                  <Play size={16} fill="currentColor" />
                </div>
                Watch Our Story
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Can Animation Placeholder */}
      <motion.div 
        initial={{ opacity: 0, x: 100, rotate: 10 }}
        animate={{ opacity: 1, x: 0, rotate: -5 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute right-0 bottom-0 hidden xl:block w-1/3 pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800" 
          alt="Crimson Fizz Can" 
          className="w-full h-auto drop-shadow-[0_35px_35px_rgba(158,27,50,0.4)]"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </section>
  );
};
