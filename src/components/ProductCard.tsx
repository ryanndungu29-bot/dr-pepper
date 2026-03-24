import React from 'react';
import { motion } from 'motion/react';
import { Product } from '../types';
import { ArrowRight, Info } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden bg-gray-50 flex items-center justify-center p-8">
        <div 
          className="absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20"
          style={{ backgroundColor: product.color }}
        ></div>
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {product.category === 'limited' && (
          <div className="absolute top-4 right-4 bg-brand-dark text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
            Limited Edition
          </div>
        )}
      </div>

      <div className="p-8 flex-grow flex flex-col">
        <h3 className="text-2xl font-display font-black uppercase italic mb-2 group-hover:text-brand-red transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm mb-6 line-clamp-2">
          {product.tagline}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <button 
            onClick={onClick}
            className="text-brand-dark font-bold text-sm flex items-center hover:text-brand-red transition-colors"
          >
            View Details
            <ArrowRight className="ml-2" size={16} />
          </button>
          <div className="flex space-x-1">
            {product.flavors.slice(0, 2).map((flavor, i) => (
              <span key={i} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-md uppercase font-bold">
                {flavor}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
