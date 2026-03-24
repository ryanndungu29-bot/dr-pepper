import React from 'react';
import { motion } from 'motion/react';
import { History, Heart, Target, Users } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-black uppercase italic mb-8"
          >
            Our <span className="text-brand-red">Legacy</span>
          </motion.h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Born in a small pharmacy in 1885, Crimson Fizz was created by a visionary who believed that a beverage should be more than just a drink—it should be an experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-black uppercase italic mb-6">The <span className="text-brand-red">Secret</span> 23</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              For over a century, the exact blend of our 23 signature flavors has been one of the world's most closely guarded secrets. It's not just cherry, it's not just vanilla—it's Crimson Fizz.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              Our master blenders still follow the original handwritten recipe, ensuring that every bottle delivered today tastes exactly as bold as the very first one served in 1885.
            </p>
          </motion.div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800" 
              alt="Vintage Crimson Fizz" 
              className="rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-brand-red text-white p-8 rounded-3xl shadow-xl">
              <History size={40} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <div className="text-center">
            <div className="w-20 h-20 bg-brand-red/10 rounded-3xl flex items-center justify-center mx-auto mb-6 text-brand-red">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-500 italic">"To fuel the bold spirits and creative minds of the world through unparalleled flavor and energy."</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-brand-red/10 rounded-3xl flex items-center justify-center mx-auto mb-6 text-brand-red">
              <Heart size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <p className="text-gray-500">Authenticity, Boldness, and Community are at the heart of everything we do.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-brand-red/10 rounded-3xl flex items-center justify-center mx-auto mb-6 text-brand-red">
              <Users size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Community</h3>
            <p className="text-gray-500">We celebrate the individuals who dare to stand out and make their own mark on the world.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
