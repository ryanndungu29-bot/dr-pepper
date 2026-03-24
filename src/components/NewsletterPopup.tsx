import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Gift } from 'lucide-react';

export const NewsletterPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-brand-dark/80 backdrop-blur-sm">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative bg-white rounded-[2rem] overflow-hidden max-w-2xl w-full flex flex-col md:flex-row shadow-2xl"
        >
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 z-10 text-gray-400 hover:text-brand-dark transition-colors"
          >
            <X size={24} />
          </button>

          <div className="md:w-1/2 bg-brand-red p-12 flex flex-col justify-center items-center text-white text-center">
            <Gift size={64} className="mb-6" />
            <h3 className="text-3xl font-display font-black uppercase italic mb-4">Get 20% Off</h3>
            <p className="text-white/80">Join the Crimson Inner Circle and save on your first order.</p>
          </div>

          <div className="md:w-1/2 p-12 flex flex-col justify-center">
            <h4 className="text-2xl font-display font-black uppercase italic mb-6">Don't Miss Out!</h4>
            <p className="text-gray-500 mb-8 text-sm">Sign up for exclusive flavor drops, limited edition merch, and member-only events.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-gray-100 border-none rounded-full py-4 px-6 focus:ring-2 focus:ring-brand-red outline-none"
              />
              <button className="btn-primary w-full flex items-center justify-center">
                Subscribe Now
                <Send className="ml-2" size={18} />
              </button>
            </form>
            <p className="mt-6 text-[10px] text-gray-400 text-center uppercase tracking-widest">
              No spam. Just boldness. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
