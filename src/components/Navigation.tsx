import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Navbar: React.FC = () => {
  const { totalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-ink/5">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-bold tracking-widest uppercase">
            Teakin
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={cn(
                  "text-xs uppercase tracking-widest font-medium transition-colors duration-300 link-underline",
                  location.pathname === link.path ? "text-brand-ink" : "text-brand-taupe hover:text-brand-ink"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-brand-ink hover:text-brand-wood transition-colors">
              <Search size={20} />
            </button>
            <Link to="/cart" className="relative group text-brand-ink hover:text-brand-wood transition-colors">
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-ink text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full group-hover:bg-brand-wood">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-cream border-t border-brand-ink/5 py-8 animate-fade-in">
          <div className="container-custom flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-sm uppercase tracking-widest font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-ink text-brand-cream py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif font-bold uppercase tracking-widest mb-8">Teakin</h3>
            <p className="text-sm text-brand-cream/60 leading-relaxed max-w-xs">
              Handcrafted furniture inspired by the timeless beauty of natural teak. We believe in quality that lasts for generations.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-brand-cream/60">
              <li><Link to="/products" className="hover:text-brand-cream transition-colors">Shop All</Link></li>
              <li><Link to="/about" className="hover:text-brand-cream transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-brand-cream transition-colors">Contact</Link></li>
              <li><Link to="/" className="hover:text-brand-cream transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8">Collections</h4>
            <ul className="space-y-4 text-sm text-brand-cream/60">
              <li><Link to="/products" className="hover:text-brand-cream transition-colors">Living Room</Link></li>
              <li><Link to="/products" className="hover:text-brand-cream transition-colors">Bedroom</Link></li>
              <li><Link to="/products" className="hover:text-brand-cream transition-colors">Dining Room</Link></li>
              <li><Link to="/products" className="hover:text-brand-cream transition-colors">Office</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8">Newsletter</h4>
            <p className="text-sm text-brand-cream/60 mb-6">Join our list for exclusive releases and designer insights.</p>
            <div className="flex border-b border-brand-cream/20 pb-2">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent text-xs outline-none w-full uppercase tracking-widest py-2"
              />
              <button className="text-xs font-bold uppercase tracking-widest hover:text-brand-wood transition-colors">Join</button>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-brand-cream/40 space-y-4 md:space-y-0">
          <p>&copy; 2026 Teakin Furniture Co. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <span className="cursor-pointer hover:text-brand-cream transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-brand-cream transition-colors">Terms of Service</span>
            <span className="cursor-pointer hover:text-brand-cream transition-colors">Shipping & Returns</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
