import React from 'react';
import { motion } from 'motion/react';
import { Product, PRODUCTS } from '../types';
import { ArrowLeft, MapPin, ShoppingCart, CheckCircle2 } from 'lucide-react';

interface ProductDetailPageProps {
  productId: string;
  onBack: () => void;
  onNavigateToLocator: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId, onBack, onNavigateToLocator }) => {
  const product = PRODUCTS.find(p => p.id === productId);

  if (!product) return null;

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-500 hover:text-brand-red transition-colors font-bold mb-12 group"
        >
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
          Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-square bg-gray-50 rounded-[3rem] flex items-center justify-center p-12 overflow-hidden"
          >
            <div 
              className="absolute inset-0 opacity-10"
              style={{ backgroundColor: product.color }}
            ></div>
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-h-full w-auto object-contain drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-brand-red font-black uppercase tracking-[0.3em] text-sm mb-4 block">
              {product.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-black uppercase italic mb-6">
              {product.name}
            </h1>
            <p className="text-2xl text-gray-600 font-medium mb-8 italic">
              "{product.tagline}"
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              {product.description}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-12">
              <div className="bg-white border border-gray-100 p-6 rounded-3xl text-center shadow-sm">
                <span className="block text-3xl font-display font-black text-brand-red mb-1">{product.nutrition.calories}</span>
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Calories</span>
              </div>
              <div className="bg-white border border-gray-100 p-6 rounded-3xl text-center shadow-sm">
                <span className="block text-3xl font-display font-black text-brand-red mb-1">{product.nutrition.sugar}g</span>
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Sugar</span>
              </div>
              <div className="bg-white border border-gray-100 p-6 rounded-3xl text-center shadow-sm">
                <span className="block text-3xl font-display font-black text-brand-red mb-1">{product.nutrition.caffeine}mg</span>
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Caffeine</span>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Flavor Profile</h3>
              <div className="flex flex-wrap gap-3">
                {product.flavors.map((flavor, i) => (
                  <div key={i} className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                    <CheckCircle2 size={16} className="text-brand-red mr-2" />
                    <span className="text-sm font-bold text-gray-700">{flavor}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn-primary flex-1 flex items-center justify-center">
                <ShoppingCart className="mr-2" size={20} />
                Buy Online
              </button>
              <button 
                onClick={onNavigateToLocator}
                className="btn-outline flex-1 flex items-center justify-center"
              >
                <MapPin className="mr-2" size={20} />
                Find Near You
              </button>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        <div className="mt-32">
          <h2 className="text-3xl font-display font-black uppercase italic mb-12">You Might Also <span className="text-brand-red">Like</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.filter(p => p.id !== productId).slice(0, 3).map((p) => (
              <div key={p.id} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <img src={p.image} alt={p.name} className="h-48 w-auto mx-auto mb-6 object-contain" referrerPolicy="no-referrer" />
                <h4 className="text-xl font-display font-black uppercase italic text-center">{p.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
