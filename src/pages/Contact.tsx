import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-8xl font-display font-black uppercase italic mb-6">
            Get in <span className="text-brand-red">Touch</span>
          </h1>
          <p className="text-xl text-gray-500">
            Have a question, feedback, or just want to say hello? We're always listening to the bold.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex items-start">
              <div className="w-12 h-12 bg-brand-red/10 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 text-brand-red">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Email Us</h4>
                <p className="text-gray-500 text-sm">hello@crimsonfizz.com</p>
                <p className="text-gray-500 text-sm">support@crimsonfizz.com</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex items-start">
              <div className="w-12 h-12 bg-brand-red/10 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 text-brand-red">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Call Us</h4>
                <p className="text-gray-500 text-sm">+1 (800) CRIMSON</p>
                <p className="text-gray-500 text-sm">Mon-Fri, 9am - 6pm EST</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex items-start">
              <div className="w-12 h-12 bg-brand-red/10 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 text-brand-red">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Visit Us</h4>
                <p className="text-gray-500 text-sm">742 Bold Street</p>
                <p className="text-gray-500 text-sm">Flavor City, FC 12345</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100"
            >
              <h3 className="text-3xl font-display font-black uppercase italic mb-8 flex items-center">
                <MessageSquare className="mr-4 text-brand-red" size={32} />
                Send a Message
              </h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-gray-50 border-none rounded-full py-4 px-8 focus:ring-2 focus:ring-brand-red outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-gray-50 border-none rounded-full py-4 px-8 focus:ring-2 focus:ring-brand-red outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Subject</label>
                  <select className="w-full bg-gray-50 border-none rounded-full py-4 px-8 focus:ring-2 focus:ring-brand-red outline-none appearance-none">
                    <option>General Inquiry</option>
                    <option>Product Feedback</option>
                    <option>Partnership Request</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Your Message</label>
                  <textarea 
                    rows={5} 
                    placeholder="Tell us something bold..." 
                    className="w-full bg-gray-50 border-none rounded-[2rem] py-6 px-8 focus:ring-2 focus:ring-brand-red outline-none resize-none"
                  ></textarea>
                </div>
                <button className="btn-primary w-full flex items-center justify-center py-5">
                  Send Message
                  <Send className="ml-2" size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
