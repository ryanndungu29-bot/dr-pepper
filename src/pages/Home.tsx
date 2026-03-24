import React from 'react';
import { motion } from 'motion/react';
import { HeroSection } from '../components/HeroSection';
import { PRODUCTS, BLOG_POSTS } from '../types';
import { ProductCard } from '../components/ProductCard';
import { Testimonials } from '../components/Testimonials';
import { ArrowRight, Zap, Shield, Globe, Mail } from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
  setSelectedProduct: (id: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentPage, setSelectedProduct }) => {
  return (
    <div className="overflow-hidden">
      <HeroSection onCtaClick={() => setCurrentPage('products')} />

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic mb-4">
                The <span className="text-brand-red">Favorites</span>
              </h2>
              <p className="text-gray-500 max-w-xl">
                Our most loved flavors, crafted with the same secret recipe since 1885.
              </p>
            </div>
            <button 
              onClick={() => setCurrentPage('products')}
              className="mt-6 md:mt-0 text-brand-red font-bold flex items-center hover:translate-x-2 transition-transform"
            >
              View All Products
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 3).map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <ProductCard 
                  product={product} 
                  onClick={() => {
                    setSelectedProduct(product.id);
                    setCurrentPage('product-detail');
                  }} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Values / Features */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1556742044-3c52d6e88c02?auto=format&fit=crop&q=80&w=800" 
                  alt="Lifestyle" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-10 -right-10 bg-brand-red p-8 rounded-[2rem] text-white shadow-xl hidden md:block">
                <span className="text-5xl font-display font-black block mb-1 italic">140+</span>
                <span className="text-xs font-bold uppercase tracking-widest">Years of Boldness</span>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-display font-black uppercase italic mb-8">
                Why We Are <span className="text-brand-red">Different</span>
              </h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center mr-6 flex-shrink-0">
                    <Zap className="text-brand-red" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Unique Flavor Profile</h4>
                    <p className="text-gray-500">A complex blend of 23 secret flavors that creates a taste experience you can't find anywhere else.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center mr-6 flex-shrink-0">
                    <Shield className="text-brand-red" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Quality Ingredients</h4>
                    <p className="text-gray-500">We use only the finest ingredients to ensure every sip is as refreshing and bold as the first.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center mr-6 flex-shrink-0">
                    <Globe className="text-brand-red" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Global Community</h4>
                    <p className="text-gray-500">Join a worldwide movement of individuals who dare to be different and embrace their own path.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Latest News / Blog Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase italic mb-4">
              The <span className="text-brand-red">Crimson</span> Feed
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Stay up to date with our latest collaborations, events, and brand stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group cursor-pointer"
                onClick={() => setCurrentPage('blog')}
              >
                <div className="relative h-80 rounded-[2.5rem] overflow-hidden mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-brand-red text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                    {post.category}
                  </div>
                </div>
                <h3 className="text-2xl font-display font-black uppercase italic mb-3 group-hover:text-brand-red transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 mb-4">{post.excerpt}</p>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{post.date}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-brand-red rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-7xl font-display font-black uppercase italic mb-8 leading-tight">
                Ready to Taste <br /> the <span className="text-brand-dark">Boldness?</span>
              </h2>
              <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                Join the millions who have already discovered their favorite flavor. Find Crimson Fizz near you today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button 
                  onClick={() => setCurrentPage('locator')}
                  className="bg-brand-dark text-white px-10 py-4 rounded-full font-bold hover:bg-black transition-all transform hover:scale-105 active:scale-95 shadow-xl w-full sm:w-auto"
                >
                  Find a Store
                </button>
                <button 
                  onClick={() => setCurrentPage('products')}
                  className="bg-white text-brand-red px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105 active:scale-95 shadow-xl w-full sm:w-auto"
                >
                  Shop Online
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
