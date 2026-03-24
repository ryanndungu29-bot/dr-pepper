import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Search, Navigation, Phone, Clock } from 'lucide-react';

const mockStores = [
  { id: 1, name: "Downtown Crimson Hub", address: "123 Bold Ave, Metropolis", distance: "0.5 miles", status: "Open Now" },
  { id: 2, name: "Westside Refresh", address: "456 Fizz St, Metropolis", distance: "1.2 miles", status: "Open Now" },
  { id: 3, name: "North Park Market", address: "789 Flavor Rd, Metropolis", distance: "2.8 miles", status: "Closing Soon" },
  { id: 4, name: "East End Spirits", address: "101 Crimson Dr, Metropolis", distance: "3.5 miles", status: "Open Now" }
];

export const StoreLocatorPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-display font-black uppercase italic mb-4">
            Find Your <span className="text-brand-red">Fizz</span>
          </h1>
          <p className="text-gray-500 max-w-xl">
            Enter your location to find the nearest retailer carrying Crimson Fizz. Never be without your favorite flavor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[700px]">
          <div className="lg:col-span-1 flex flex-col space-y-6 overflow-hidden">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Enter city or zip code" 
                className="w-full pl-12 pr-12 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-brand-red shadow-sm"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-red hover:text-red-700">
                <Navigation size={20} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto pr-2 space-y-4 custom-scrollbar">
              {mockStores.map((store) => (
                <motion.div 
                  key={store.id}
                  whileHover={{ x: 5 }}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm cursor-pointer hover:border-brand-red transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{store.name}</h3>
                    <span className="text-xs font-black text-brand-red uppercase tracking-widest">{store.distance}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4 flex items-center">
                    <MapPin size={14} className="mr-1" />
                    {store.address}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-green-600 flex items-center">
                      <Clock size={12} className="mr-1" />
                      {store.status}
                    </span>
                    <div className="flex space-x-2">
                      <button className="p-2 bg-gray-100 rounded-full hover:bg-brand-red hover:text-white transition-colors">
                        <Phone size={14} />
                      </button>
                      <button className="p-2 bg-brand-red text-white rounded-full hover:bg-red-700 transition-colors">
                        <Navigation size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 bg-gray-200 rounded-[3rem] overflow-hidden relative shadow-inner">
            {/* Mock Map Placeholder */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-50 grayscale"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl text-center shadow-xl border border-white/20">
                <MapPin size={48} className="text-brand-red mx-auto mb-4 animate-bounce" />
                <h3 className="text-xl font-bold mb-2">Interactive Map</h3>
                <p className="text-gray-600 text-sm">Google Maps API Integration would go here.</p>
              </div>
            </div>
            
            {/* Map Pins Mock */}
            <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-brand-red rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-brand-red rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
