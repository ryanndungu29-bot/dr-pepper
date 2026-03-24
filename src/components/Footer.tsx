import React from 'react';
import { Instagram, Twitter, Facebook, Youtube, Send } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <span className="text-3xl font-display font-black text-white tracking-tighter italic mb-6 block">
              CRIMSON<span className="text-brand-red">FIZZ</span>
            </span>
            <p className="text-gray-400 mb-8 max-w-xs leading-relaxed">
              The world's boldest beverage brand. Since 1885, we've been crafting unique flavors for those who dare to stand out.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Explore</h4>
            <ul className="space-y-4">
              <li><button onClick={() => setCurrentPage('products')} className="text-gray-400 hover:text-brand-red transition-colors">All Products</button></li>
              <li><button onClick={() => setCurrentPage('promotions')} className="text-gray-400 hover:text-brand-red transition-colors">Promotions</button></li>
              <li><button onClick={() => setCurrentPage('locator')} className="text-gray-400 hover:text-brand-red transition-colors">Store Locator</button></li>
              <li><button onClick={() => setCurrentPage('blog')} className="text-gray-400 hover:text-brand-red transition-colors">Latest News</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              <li><button onClick={() => setCurrentPage('about')} className="text-gray-400 hover:text-brand-red transition-colors">Our Story</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="text-gray-400 hover:text-brand-red transition-colors">Contact Us</button></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-red transition-colors">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Join the Bold</h4>
            <p className="text-gray-400 mb-6 text-sm">Subscribe for exclusive offers and flavor drops.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-white focus:outline-none focus:border-brand-red transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-red rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-xs">
            © 2026 Crimson Fizz Beverage Co. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
