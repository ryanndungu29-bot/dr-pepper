import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../types';
import { ProductCard } from '../components/ProductCard';
import { Filter, Search } from 'lucide-react';

interface ProductsPageProps {
  onProductClick: (id: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onProductClick }) => {
  const [filter, setFilter] = useState<'all' | 'original' | 'sugar-free' | 'limited'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesFilter = filter === 'all' || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-8 md:space-y-0">
          <div>
            <h1 className="text-5xl md:text-7xl font-display font-black uppercase italic mb-4">
              Our <span className="text-brand-red">Lineup</span>
            </h1>
            <p className="text-gray-500 max-w-xl">
              From the original 23-flavor blend to our newest limited editions, discover the perfect Crimson Fizz for your next adventure.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search flavors..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-6 py-3 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-brand-red w-full sm:w-64"
              />
            </div>
            <div className="flex items-center bg-white border border-gray-200 rounded-full p-1">
              {(['all', 'original', 'sugar-free', 'limited'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                    filter === f ? 'bg-brand-red text-white shadow-md' : 'text-gray-500 hover:text-brand-dark'
                  }`}
                >
                  {f === 'all' ? 'All' : f === 'sugar-free' ? 'Zero' : f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <ProductCard 
                  product={product} 
                  onClick={() => onProductClick(product.id)} 
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="text-gray-400 text-xl">No products found matching your criteria.</p>
            <button 
              onClick={() => {setFilter('all'); setSearchQuery('');}}
              className="mt-4 text-brand-red font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
