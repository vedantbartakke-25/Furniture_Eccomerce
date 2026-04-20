import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Button } from '../components/Common';
import { ArrowLeft, Minus, Plus, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="pt-32 container-custom py-24 text-center">
        <h1 className="text-4xl font-serif mb-8">Product Not Found</h1>
        <Link to="/products">
          <Button variant="primary">Back to Discovery</Button>
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container-custom">
        <Link to="/products" className="inline-flex items-center text-xs uppercase tracking-widest font-bold mb-12 hover:text-brand-wood transition-colors group">
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-2 transition-transform duration-300" />
          Back to Discovery
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Images */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="aspect-[4/5] bg-brand-cream overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-6">
                {[1, 2, 3].map(i => (
                    <div key={i} className="aspect-square bg-brand-cream overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                        <img 
                            src={`${product.image}?sig=${i}`} 
                            alt={`${product.name} detail ${i}`}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col h-full"
          >
            <div className="mb-12 border-b border-brand-ink/5 pb-12">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-taupe mb-4 block">{product.category}</span>
              <h1 className="text-6xl font-serif mb-6 leading-tight">{product.name}</h1>
              <p className="text-2xl font-medium mb-8">${product.price}</p>
              <p className="text-brand-taupe leading-relaxed whitespace-pre-line text-sm max-w-lg mb-8">
                {product.description}
              </p>
              
              <div className="space-y-4">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold">Materials & Origin</h4>
                  <div className="flex flex-wrap gap-2">
                      {product.materials.map(m => (
                          <span key={m} className="px-3 py-1 bg-brand-ink/5 text-[10px] uppercase tracking-wider font-medium">{m}</span>
                      ))}
                  </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex items-center space-x-8 mb-8">
                <div className="flex items-center border border-brand-ink/10 px-4 py-3">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1 hover:text-brand-wood"><Minus size={16} /></button>
                  <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-1 hover:text-brand-wood"><Plus size={16} /></button>
                </div>
                <Button onClick={handleAddToCart} variant="primary" className="flex-1">Add to Selection</Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center p-6 bg-brand-cream/50">
                      <Truck size={24} className="mb-4 text-brand-taupe" />
                      <span className="text-[10px] uppercase tracking-widest font-bold">White Glove Delivery</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 bg-brand-cream/50">
                      <ShieldCheck size={24} className="mb-4 text-brand-taupe" />
                      <span className="text-[10px] uppercase tracking-widest font-bold">10 Year Warranty</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 bg-brand-cream/50">
                      <RotateCcw size={24} className="mb-4 text-brand-taupe" />
                      <span className="text-[10px] uppercase tracking-widest font-bold">30 Day Returns</span>
                  </div>
              </div>
            </div>

            <div className="mt-auto pt-12 border-t border-brand-ink/5">
                <h4 className="text-xs uppercase tracking-widest font-bold mb-6 italic font-serif">Deep Dive</h4>
                <div className="space-y-4">
                    <details className="group border-b border-brand-ink/5 pb-4">
                        <summary className="list-none flex justify-between items-center cursor-pointer text-xs uppercase tracking-wider font-bold">
                            Dimensions
                            <Plus size={14} className="group-open:hidden" />
                            <Minus size={14} className="hidden group-open:block" />
                        </summary>
                        <p className="mt-4 text-[10px] text-brand-taupe leading-relaxed">
                            Height: 85cm | Width: 78cm | Depth: 92cm<br/>
                            Seat Height: 42cm | Arm Height: 58cm
                        </p>
                    </details>
                    <details className="group border-b border-brand-ink/5 pb-4">
                        <summary className="list-none flex justify-between items-center cursor-pointer text-xs uppercase tracking-wider font-bold">
                            Assembly & Care
                            <Plus size={14} className="group-open:hidden" />
                            <Minus size={14} className="hidden group-open:block" />
                        </summary>
                        <p className="mt-4 text-[10px] text-brand-taupe leading-relaxed">
                            No assembly required. Professional cleaning recommended. Wipe wood components with a soft, slightly damp cloth followed by a dry cloth.
                        </p>
                    </details>
                </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Recommended Section (Simplified) */}
      <section className="container-custom pt-32">
          <div className="mb-12">
            <h2 className="text-3xl font-serif">You might also like</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {products.slice(0, 4).filter(p => p.id !== id).slice(0, 4).map(p => (
                  <Link key={p.id} to={`/products/${p.id}`} onClick={() => window.scrollTo(0,0)}>
                      <div className="aspect-square bg-brand-cream mb-6 overflow-hidden group">
                          <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                      <h3 className="text-xs font-bold uppercase tracking-widest">{p.name}</h3>
                      <p className="text-xs text-brand-taupe mt-1">${p.price}</p>
                  </Link>
              ))}
          </div>
      </section>
    </div>
  );
};

export default ProductDetails;
