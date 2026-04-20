import React, { useState } from 'react';
import { Button, Input } from '../components/Common';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'motion/react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container-custom">
        <div className="mb-24 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-taupe mb-8 block">Connect With Us</span>
          <h1 className="text-7xl font-serif italic mb-6">Concierge Support</h1>
          <p className="text-brand-taupe max-w-lg mx-auto text-sm leading-relaxed">
            Whether you are curious about a specific grain or need architectural advice for your floor plan, our team is here to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 flex items-center">
                    <MapPin size={14} className="mr-3" />
                    Flagship Showroom
                </h4>
                <p className="text-sm text-brand-taupe leading-relaxed italic font-serif">
                  42 Heritage Avenue<br />
                  London, UK<br />
                  W1K 6AE
                </p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 flex items-center">
                    <Mail size={14} className="mr-3" />
                    General Enquiries
                </h4>
                <p className="text-sm text-brand-taupe transition-colors hover:text-brand-ink">
                  hello@teakin.design<br />
                  concierge@teakin.design
                </p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 flex items-center">
                    <Phone size={14} className="mr-3" />
                    Connect By Voice
                </h4>
                <p className="text-sm text-brand-taupe">
                  +44 (0) 20 7946 0123
                </p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Digital Presence</h4>
                <div className="flex space-x-6 text-brand-taupe">
                    <Instagram size={20} className="cursor-pointer hover:text-brand-ink transition-colors" />
                    <Facebook size={20} className="cursor-pointer hover:text-brand-ink transition-colors" />
                    <Twitter size={20} className="cursor-pointer hover:text-brand-ink transition-colors" />
                </div>
              </div>
            </div>

            <div className="aspect-[16/9] bg-brand-cream overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&q=80&w=800" 
                    alt="Contact Office" 
                    className="w-full h-full object-cover"
                />
            </div>
          </div>

          <div className="bg-white p-12 lg:p-20 border border-brand-ink/5">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-24"
              >
                <h3 className="text-3xl font-serif mb-6 italic">Message Received</h3>
                <p className="text-brand-taupe text-sm leading-relaxed mb-12">
                  Our concierge team will review your enquiry and respond within 24 hours.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>Send Another Message</Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-taupe">Your Name</label>
                  <Input placeholder="E.G. ALEXANDER STERLING" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-taupe">Email Address</label>
                  <Input placeholder="YOUR@EMAIL.COM" type="email" required />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest font-bold text-brand-taupe">Nature of Enquiry</label>
                   <select className="w-full px-4 py-3 bg-transparent border border-brand-ink/20 focus:border-brand-ink outline-none transition-colors duration-300 font-sans text-xs uppercase tracking-widest">
                       <option>Product Information</option>
                       <option>Order Status</option>
                       <option>Bespoke Commission</option>
                       <option>Press & Media</option>
                   </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-taupe">Your Message</label>
                  <textarea 
                    className="w-full px-4 py-3 bg-transparent border border-brand-ink/20 focus:border-brand-ink outline-none transition-colors duration-300 font-sans min-h-[160px]"
                    placeholder="HOW CAN WE ASSIST?"
                    required
                  ></textarea>
                </div>
                <Button type="submit" variant="primary" className="w-full">Dispatch Enquiry</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
