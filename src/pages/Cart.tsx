import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '../components/Common';
import { Trash2, ShoppingBag, ArrowRight, Minus, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-48 pb-32 container-custom text-center">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-brand-ink/5 rounded-full flex items-center justify-center mb-8">
            <ShoppingBag size={32} className="text-brand-taupe" />
          </div>
          <h1 className="text-4xl font-serif mb-6 italic">Your Selection is Empty</h1>
          <p className="text-brand-taupe mb-12 max-w-sm mx-auto text-sm leading-relaxed">
            Discover our collection of handcrafted pieces and start building your dream space.
          </p>
          <Link to="/products">
            <Button variant="primary">Explore Collection</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container-custom">
        <div className="mb-16">
          <h1 className="text-6xl font-serif mb-6">Your Selection</h1>
          <p className="text-brand-taupe text-sm uppercase tracking-widest font-bold">
            {totalItems} {totalItems === 1 ? 'Item' : 'Items'} in bag
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-12">
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex gap-8 group pb-12 border-b border-brand-ink/5 last:border-0"
                  >
                    <div className="w-32 sm:w-48 aspect-[3/4] bg-brand-cream overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="text-[10px] uppercase tracking-widest font-bold text-brand-taupe block mb-1">{item.category}</span>
                          <h3 className="text-lg sm:text-xl font-serif italic mb-1">{item.name}</h3>
                          <p className="text-sm font-medium">${item.price}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-brand-taupe hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>

                      <div className="mt-auto flex justify-between items-end">
                        <div className="flex items-center border border-brand-ink/10 px-3 py-2">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:text-brand-wood"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-10 text-center text-xs font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:text-brand-wood"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="text-sm font-bold uppercase tracking-widest">
                          Total: ${item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-10 border border-brand-ink/5">
              <h2 className="text-xl font-serif mb-8 italic">Order Summary</h2>
              
              <div className="space-y-6 mb-10 pb-10 border-b border-brand-ink/5 text-sm uppercase tracking-widest font-medium">
                <div className="flex justify-between">
                  <span className="text-brand-taupe">Subtotal</span>
                  <span>${totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-taupe">Estimated Shipping</span>
                  <span className="text-green-600 font-bold tracking-normal">Free</span>
                </div>
                <div className="flex justify-between">
                   <span className="text-brand-taupe">Tax</span>
                   <span>$0</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-12">
                <h3 className="text-sm uppercase tracking-[0.2em] font-bold">Estimated Total</h3>
                <span className="text-2xl font-serif italic">${totalPrice}</span>
              </div>

              <Link to="/checkout" className="block w-full">
                <Button variant="primary" className="w-full flex items-center justify-center">
                  Proceed to Checkout
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              
              <div className="mt-8 pt-8 border-t border-brand-ink/5 space-y-4">
                  <div className="flex items-center text-[10px] text-brand-taupe uppercase tracking-widest font-bold">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                    White Glove Delivery Available
                  </div>
                  <div className="flex items-center text-[10px] text-brand-taupe uppercase tracking-widest font-bold">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                    Items In Stock & Ready to Ship
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
