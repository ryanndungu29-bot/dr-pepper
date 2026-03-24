import React from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../types';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

export const BlogPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-8xl font-display font-black uppercase italic mb-6">
            The <span className="text-brand-red">Feed</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Your source for the latest flavor drops, lifestyle tips, and exclusive behind-the-scenes content from the world of Crimson Fizz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Featured Post */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group cursor-pointer mb-16"
            >
              <div className="relative h-[500px] rounded-[3rem] overflow-hidden mb-8 shadow-xl">
                <img 
                  src={BLOG_POSTS[0].image} 
                  alt={BLOG_POSTS[0].title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12">
                  <span className="inline-block px-4 py-1 bg-brand-red text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
                    {BLOG_POSTS[0].category}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase italic mb-4 leading-tight">
                    {BLOG_POSTS[0].title}
                  </h2>
                  <div className="flex items-center text-white/70 text-sm space-x-6">
                    <span className="flex items-center"><Calendar size={14} className="mr-2" /> {BLOG_POSTS[0].date}</span>
                    <span className="flex items-center"><User size={14} className="mr-2" /> Crimson Team</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                {BLOG_POSTS[0].excerpt}
              </p>
              <button className="text-brand-red font-bold flex items-center hover:translate-x-2 transition-transform">
                Read Full Article
                <ArrowRight className="ml-2" size={20} />
              </button>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {BLOG_POSTS.slice(1).map((post) => (
                <div key={post.id} className="group cursor-pointer">
                  <div className="relative h-64 rounded-[2rem] overflow-hidden mb-6 shadow-md">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-brand-red text-[10px] font-black uppercase tracking-widest mb-2 block">{post.category}</span>
                  <h3 className="text-2xl font-display font-black uppercase italic mb-3 group-hover:text-brand-red transition-colors">{post.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">{post.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-12">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h4 className="text-xl font-display font-black uppercase italic mb-6">Categories</h4>
              <ul className="space-y-4">
                {['Lifestyle', 'Events', 'Product News', 'Partnerships', 'Brand Story'].map((cat) => (
                  <li key={cat}>
                    <button className="flex items-center justify-between w-full text-gray-500 hover:text-brand-red transition-colors group">
                      <span className="font-bold">{cat}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded-md text-[10px] font-black group-hover:bg-brand-red group-hover:text-white transition-colors">12</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-red p-8 rounded-[2.5rem] text-white shadow-xl">
              <h4 className="text-xl font-display font-black uppercase italic mb-4">Never Miss a Drop</h4>
              <p className="text-white/80 text-sm mb-6">Get the latest news and exclusive offers delivered straight to your inbox.</p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white/20 border-none rounded-full py-3 px-6 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white outline-none"
                />
                <button className="w-full bg-white text-brand-red py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h4 className="text-xl font-display font-black uppercase italic mb-6">Popular Tags</h4>
              <div className="flex flex-wrap gap-2">
                {['#Bold', '#CrimsonFizz', '#Gaming', '#Summer', '#ZeroSugar', '#LimitedEdition'].map((tag) => (
                  <span key={tag} className="bg-gray-50 text-gray-500 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white cursor-pointer transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
