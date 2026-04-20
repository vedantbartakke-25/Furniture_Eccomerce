import React, { useState } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductDisplay';
import { motion } from 'motion/react';
import { Filter, ChevronDown } from 'lucide-react';

const categories = ['All', 'Living Room', 'Bedroom', 'Dining', 'Office'];
const priceRanges = ['All Prices', 'Under $500', '$500 - $1000', 'Over $1000'];

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All Prices');

  const filteredProducts = products.filter(p => {
    const categoryMatch = selectedCategory === 'All' || p.category === selectedCategory;
    
    let priceMatch = true;
    if (selectedPrice === 'Under $500') priceMatch = p.price < 500;
    else if (selectedPrice === '$500 - $1000') priceMatch = p.price >= 500 && p.price <= 1000;
    else if (selectedPrice === 'Over $1000') priceMatch = p.price > 1000;

    return categoryMatch && priceMatch;
  });

  return (
    <div className="pt-32 min-h-screen pb-24">
      <div className="container-custom">
        <div className="mb-16">
          <h1 className="text-6xl font-serif mb-6">Discovery</h1>
          <p className="text-brand-taupe max-w-lg text-sm leading-relaxed">
            Browse our full repertoire of masterfully crafted furniture pieces. Use the filters to narrow your search for the perfect addition to your home.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 space-y-12">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 flex items-center">
                <Filter size={14} className="mr-2" />
                Categories
              </h3>
              <div className="flex flex-wrap lg:flex-col gap-4">
                {categories.map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-sm tracking-wide text-left transition-colors font-serif italic ${selectedCategory === cat ? 'text-brand-ink underline underline-offset-4' : 'text-brand-taupe hover:text-brand-ink'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Price Range</h3>
              <div className="flex flex-wrap lg:flex-col gap-4">
                {priceRanges.map((range) => (
                  <button 
                    key={range}
                    onClick={() => setSelectedPrice(range)}
                    className={`text-sm tracking-wide text-left transition-colors font-serif italic ${selectedPrice === range ? 'text-brand-ink underline underline-offset-4' : 'text-brand-taupe hover:text-brand-ink'}`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden lg:block border-t border-brand-ink/5 pt-12">
               <div className="p-8 bg-brand-ink text-brand-cream rounded-sm">
                  <h4 className="text-sm font-serif mb-4 italic">Bespoke Design</h4>
                  <p className="text-[10px] leading-relaxed opacity-60 mb-6">Looking for something specific? Our artisans can create custom dimensions for your space.</p>
                  <button className="text-[10px] uppercase font-bold tracking-widest border-b border-brand-cream/40 pb-1">Enquire Now</button>
               </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-12 border-b border-brand-ink/5 pb-6">
               <span className="text-xs text-brand-taupe uppercase tracking-widest">{filteredProducts.length} items found</span>
               <div className="flex items-center text-xs uppercase tracking-widest font-bold cursor-pointer hover:text-brand-wood transition-colors">
                  Sort By: Default <ChevronDown size={14} className="ml-1" />
               </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-20">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-24 text-center">
                <p className="font-serif italic text-xl text-brand-taupe">No products match your current selection.</p>
                <button 
                   onClick={() => { setSelectedCategory('All'); setSelectedPrice('All Prices'); }}
                   className="mt-6 text-xs uppercase font-bold tracking-widest border-b border-brand-ink pb-1"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
