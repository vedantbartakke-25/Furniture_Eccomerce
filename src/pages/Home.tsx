import React from 'react';
import { products } from '../data/products';
import { FeaturedCard, ProductCard } from '../components/ProductDisplay';
import { Button } from '../components/Common';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const featuredLarge = products[1]; // Sylvan Dining Table
  const featuredSmall = products.slice(2, 5); // Luna, Eos, Nova
  const featuredCollection = products.slice(0, 4);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <FeaturedCard product={featuredLarge} size="large" />
          </div>
          <div className="flex flex-col gap-6">
            {featuredSmall.map((product) => (
              <FeaturedCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="container-custom py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-taupe mb-4 block">New Arrivals</span>
            <h2 className="text-5xl font-serif leading-tight">Elevate Your Living Space with Timeless Crafts</h2>
          </div>
          <Link to="/products" className="flex items-center text-xs uppercase tracking-widest font-bold group">
            View All Products
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {featuredCollection.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brand Ethos */}
      <section className="bg-brand-ink text-brand-cream py-32 overflow-hidden relative">
        <div className="container-custom relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-cream/40 mb-8 block">Our Philosophy</span>
                <h2 className="text-4xl md:text-6xl font-serif mb-12 max-w-4xl mx-auto leading-tight italic">
                    "Furniture should be more than utility. It is the silent architecture of our lives."
                </h2>
                <Link to="/about">
                    <Button variant="outline" className="border-brand-cream/30 text-brand-cream hover:bg-brand-cream hover:text-brand-ink">
                        Discover Our Craft
                    </Button>
                </Link>
            </motion.div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-wood/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-taupe/10 rounded-full blur-3xl -ml-48 -mb-48" />
      </section>

      {/* Categories Grid */}
      <section className="container-custom py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="flex flex-col gap-8">
                  <div className="aspect-[4/5] bg-brand-cream overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800" 
                        alt="Living Room" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                      />
                  </div>
                  <div>
                      <h3 className="text-2xl font-serif mb-4 italic">Living Spaces</h3>
                      <p className="text-sm text-brand-taupe leading-relaxed mb-6">Create a haven of comfort with our hand-picked selection of sofas and seating.</p>
                      <Link to="/products" className="text-xs font-bold uppercase tracking-widest border-b border-brand-ink pb-1">Shop Living</Link>
                  </div>
              </div>
              <div className="flex flex-col gap-8 md:mt-24">
                  <div className="aspect-[4/5] bg-brand-cream overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=800" 
                        alt="Dining" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                      />
                  </div>
                  <div>
                      <h3 className="text-2xl font-serif mb-4 italic">Dining & Kitchen</h3>
                      <p className="text-sm text-brand-taupe leading-relaxed mb-6">Where memories are made. Solid wood tables built for gathering.</p>
                      <Link to="/products" className="text-xs font-bold uppercase tracking-widest border-b border-brand-ink pb-1">Shop Dining</Link>
                  </div>
              </div>
              <div className="flex flex-col gap-8">
                  <div className="aspect-[4/5] bg-brand-cream overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800" 
                        alt="Bedroom" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                      />
                  </div>
                  <div>
                      <h3 className="text-2xl font-serif mb-4 italic">Restful Sleep</h3>
                      <p className="text-sm text-brand-taupe leading-relaxed mb-6">Experience the perfect balance of form and function in the bedroom.</p>
                      <Link to="/products" className="text-xs font-bold uppercase tracking-widest border-b border-brand-ink pb-1">Shop Bedroom</Link>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Home;
