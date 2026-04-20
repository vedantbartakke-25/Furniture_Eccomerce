import React from 'react';
import { motion } from 'motion/react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container-custom">
        <div className="max-w-4xl">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-taupe mb-8 block">Our Story</span>
          <h1 className="text-7xl font-serif mb-12 leading-none italic">
            Defining spaces with the language of <span className="text-brand-wood">Teak</span>
          </h1>
          <p className="text-brand-taupe text-lg font-serif italic max-w-2xl leading-relaxed mb-24">
            "We don't build furniture to fill gaps in rooms. We build furniture to create the foundations of comfort and legacy."
          </p>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-48">
          <div className="aspect-[4/5] bg-brand-cream overflow-hidden">
            <motion.img 
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              src="https://images.unsplash.com/photo-1581450134938-4c91a0c4973b?auto=format&fit=crop&q=80&w=800" 
              alt="Artisan working" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-serif mb-8 italic">The Artisan Vision</h2>
            <div className="space-y-6 text-sm text-brand-taupe leading-relaxed">
                <p>
                    Founded in 1998, Teakin began as a small workshop in the heart of the countryside. Our founder, Elias Thorne, believed that the soul of a piece of furniture lies in the honesty of its materials.
                </p>
                <p>
                    Every piece we create is a dialogue between the artisan and the wood. We specialize in Teak, a material celebrated for its resilience and evolving character. As it ages, it tells a story—not just of its origin, but of the home it resides in.
                </p>
                <p>
                    Today, we maintain the same commitment to traditional joinery while embracing modern minimalist design. Our furniture doesn't shout; it whispers quality.
                </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-12 border-t border-brand-ink/5 pt-12">
                <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Sustainability</h4>
                    <p className="text-[10px] leading-relaxed text-brand-taupe opacity-80">We only use FSC-certified timber and natural oils that preserve both the wood and the planet.</p>
                </div>
                <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Integrity</h4>
                    <p className="text-[10px] leading-relaxed text-brand-taupe opacity-80">Our pieces are built to last over 50 years, slowing down the cycle of fast-furniture consumption.</p>
                </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-ink text-brand-cream p-16 md:p-32 rounded-sm text-center mb-48">
            <h2 className="text-5xl font-serif mb-12 italic">Join the Legacy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-xs uppercase tracking-[0.2em] font-bold opacity-60">
                <div>
                    <span className="text-5xl font-serif block mb-4 italic text-brand-wood">200k+</span>
                    Homes Furnished
                </div>
                <div>
                    <span className="text-5xl font-serif block mb-4 italic text-brand-wood">15</span>
                    Global Awards
                </div>
                <div>
                    <span className="text-5xl font-serif block mb-4 italic text-brand-wood">100%</span>
                    Hand-carved
                </div>
            </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 aspect-[21/9] bg-brand-cream overflow-hidden">
                <img src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=1200" alt="Showroom" className="w-full h-full object-cover" />
            </div>
            <div className="lg:col-span-4 flex items-center p-12 bg-brand-cream/30">
                <p className="text-brand-taupe italic font-serif leading-relaxed text-lg">
                    "Our goal is to make your home feel like a deliberate choice, not an accident of convenience."
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
