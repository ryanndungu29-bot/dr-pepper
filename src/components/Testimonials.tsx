import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Pro Gamer",
    text: "Crimson Fizz is the only thing that keeps me focused during 12-hour streams. The flavor is unmatched.",
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  {
    name: "Sarah Jenkins",
    role: "Fitness Coach",
    text: "I love that Crimson Zero gives me that bold taste without the sugar. It's my go-to post-workout treat.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Marcus Chen",
    role: "Creative Director",
    text: "The branding is iconic, but the taste is what keeps me coming back. It's truly a unique experience.",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-black uppercase italic mb-4"
          >
            What the <span className="text-brand-red">Bold</span> Say
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join millions of fans worldwide who have made Crimson Fizz their signature drink.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 p-8 rounded-3xl border border-white/10 relative"
            >
              <Quote className="absolute top-6 right-8 text-brand-red/20" size={48} />
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="text-brand-red fill-brand-red" />
                ))}
              </div>
              <p className="text-lg text-gray-300 mb-8 italic">"{t.text}"</p>
              <div className="flex items-center">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4 border-2 border-brand-red" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-brand-red uppercase tracking-widest font-bold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
