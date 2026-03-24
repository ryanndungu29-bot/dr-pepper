import React from 'react';
import { motion } from 'motion/react';
import { PROMOTIONS } from '../types';
import { Ticket, Clock, ArrowRight, Gift } from 'lucide-react';

export const PromotionsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-display font-black uppercase italic mb-4">
            Exclusive <span className="text-brand-red">Offers</span>
          </h1>
          <p className="text-gray-500 max-w-xl">
            Join the Crimson Inner Circle and unlock limited-time deals, exclusive merchandise, and flavor drops.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {PROMOTIONS.map((promo) => (
            <motion.div 
              key={promo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[3rem] overflow-hidden shadow-xl flex flex-col lg:flex-row border border-gray-100"
            >
              <div className="lg:w-2/5 h-80 lg:h-auto relative">
                <img 
                  src={promo.image} 
                  alt={promo.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent lg:hidden"></div>
              </div>
              <div className="lg:w-3/5 p-12 flex flex-col justify-center">
                <div className="flex items-center text-brand-red font-black uppercase tracking-widest text-xs mb-4">
                  <Gift size={16} className="mr-2" />
                  Active Promotion
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-black uppercase italic mb-6">{promo.title}</h2>
                <p className="text-gray-500 text-lg mb-8 leading-relaxed">{promo.description}</p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-8 mb-10">
                  <div className="bg-gray-50 border-2 border-dashed border-gray-200 px-8 py-4 rounded-2xl flex items-center">
                    <Ticket size={24} className="text-brand-red mr-4" />
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase font-black tracking-widest">Promo Code</span>
                      <span className="text-2xl font-display font-black tracking-tighter italic">{promo.code}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock size={20} className="mr-2" />
                    <span className="text-sm font-bold">Expires: {new Date(promo.expiresAt).toLocaleDateString()}</span>
                  </div>
                </div>

                <button className="btn-primary self-start flex items-center group">
                  Redeem Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gamified Element Placeholder */}
        <div className="mt-24 bg-brand-dark rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic mb-8">Spin to <span className="text-brand-red">Win</span></h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Feeling lucky? Spin the Crimson Wheel for a chance to win exclusive merch or a year's supply of Crimson Fizz.
            </p>
            <button className="bg-brand-red text-white px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-red-700 transition-all transform hover:scale-110 shadow-[0_0_30px_rgba(158,27,50,0.5)]">
              Play Now
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
