import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button, Input } from '../components/Common';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const Checkout: React.FC = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isOrdered, setIsOrdered] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: ''
  });

  if (cart.length === 0 && !isOrdered) {
    return (
        <div className="pt-48 pb-32 container-custom text-center">
             <h1 className="text-4xl font-serif mb-8">Nothing to Checkout</h1>
             <Link to="/products">
                <Button variant="primary">Start Shopping</Button>
             </Link>
        </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    clearCart();
    window.scrollTo(0, 0);
  };

  if (isOrdered) {
    return (
      <div className="pt-48 pb-32 container-custom text-center min-h-screen">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="max-w-md mx-auto"
        >
          <CheckCircle2 size={80} className="text-brand-wood mx-auto mb-8" />
          <h1 className="text-5xl font-serif mb-6 italic">Thank You</h1>
          <p className="text-brand-taupe mb-12 text-sm leading-relaxed">
            Your selection has been placed. We are preparing our artisans to begin the curation of your items. An email confirmation has been sent.
          </p>
          <Link to="/">
            <Button variant="primary">Return Home</Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container-custom">
        <Link to="/cart" className="inline-flex items-center text-xs uppercase tracking-widest font-bold mb-12 hover:text-brand-wood transition-colors group">
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-2 transition-transform duration-300" />
          Back to Selection
        </Link>

        <h1 className="text-6xl font-serif mb-16">Finalize Order</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <form onSubmit={handleSubmit} className="space-y-12">
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-taupe mb-8 flex items-center">
                 <span className="w-6 h-6 rounded-full border border-brand-ink flex items-center justify-center mr-3 text-[8px] font-sans">01</span>
                 Contact Details
              </h2>
              <div className="space-y-4">
                <Input 
                  placeholder="FULL NAME" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <div className="grid grid-cols-2 gap-4">
                    <Input 
                        placeholder="EMAIL" 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    <Input 
                        placeholder="PHONE" 
                        required 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-taupe mb-8 flex items-center">
                 <span className="w-6 h-6 rounded-full border border-brand-ink flex items-center justify-center mr-3 text-[8px] font-sans">02</span>
                 Shipping Destination
              </h2>
              <div className="space-y-4">
                <Input 
                  placeholder="STREET ADDRESS" 
                  required 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
                <div className="grid grid-cols-2 gap-4">
                    <Input 
                        placeholder="CITY" 
                        required 
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                    />
                    <Input 
                        placeholder="POSTAL CODE" 
                        required 
                        value={formData.postalCode}
                        onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                    />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-taupe mb-8 flex items-center">
                 <span className="w-6 h-6 rounded-full border border-brand-ink flex items-center justify-center mr-3 text-[8px] font-sans">03</span>
                 Payment
              </h2>
              <p className="text-xs text-brand-taupe italic mb-8 font-serif">Note: This is a design concept. No real payment will be processed.</p>
              <div className="p-8 bg-brand-cream border border-brand-ink/5">
                  <div className="flex justify-between items-center text-xs font-serif italic">
                      <span>Secure Payment via Teakin Portal</span>
                      <span className="text-[10px] uppercase tracking-widest font-bold">Standard</span>
                  </div>
              </div>
            </div>

            <Button type="submit" variant="primary" className="w-full py-6">Place Final Order</Button>
          </form>

          {/* Summary Column */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="bg-white p-12 border border-brand-ink/5">
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-10">Order Summary</h3>
                <div className="space-y-8 mb-10 overflow-y-auto max-h-96 pr-4 scrollbar-thin scrollbar-thumb-brand-ink/10">
                    {cart.map(item => (
                        <div key={item.id} className="flex justify-between items-center text-sm">
                            <div className="flex items-center">
                                <div className="w-12 h-16 bg-brand-cream overflow-hidden mr-4">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-serif italic text-base">{item.name}</h4>
                                    <span className="text-[10px] text-brand-taupe uppercase tracking-widest">Qty: {item.quantity}</span>
                                </div>
                            </div>
                            <span className="font-medium">${item.price * item.quantity}</span>
                        </div>
                    ))}
                </div>
                <div className="pt-10 border-t border-brand-ink/5 space-y-6">
                    <div className="flex justify-between text-xs uppercase tracking-widest text-brand-taupe">
                        <span>Delivery</span>
                        <span className="text-green-600 font-bold">Complimentary</span>
                    </div>
                    <div className="flex justify-between items-end">
                        <span className="text-[10px] uppercase tracking-widest font-bold">Total Allocation</span>
                        <span className="text-3xl font-serif italic">${totalPrice}</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
