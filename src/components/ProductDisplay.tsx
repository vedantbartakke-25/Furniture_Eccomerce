import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { Button } from './Common';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link to={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-brand-cream/50 mb-6">
          <img 
            src={product.image} 
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
          <div className="absolute bottom-4 left-4 right-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
             <Button variant="primary" size="sm" className="w-full text-[10px]">Quick View</Button>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium tracking-tight uppercase mb-1">{product.name}</h3>
            <p className="text-xs text-brand-taupe">{product.category}</p>
          </div>
          <span className="text-sm font-medium">${product.price}</span>
        </div>
      </Link>
    </motion.div>
  );
};

interface FeaturedCardProps {
  product: Product;
  size?: 'large' | 'small';
}

export const FeaturedCard: React.FC<FeaturedCardProps> = ({ product, size = 'small' }) => {
  if (size === 'large') {
    return (
      <div className="relative group overflow-hidden h-[600px] bg-brand-cream">
        <img 
          src={product.image} 
          alt={product.name}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-brand-ink/20 group-hover:bg-brand-ink/10 transition-colors duration-500" />
        <div className="absolute inset-0 flex items-end p-12">
          <div className="text-white max-w-lg">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block animate-slide-up">Featured Collection</span>
            <h2 className="text-6xl font-serif mb-6 leading-none animate-slide-up" style={{ animationDelay: '0.1s' }}>{product.name}</h2>
            <p className="text-sm text-white/80 mb-8 leading-relaxed max-w-md animate-slide-up" style={{ animationDelay: '0.2s' }}>{product.description}</p>
            <Link to={`/products/${product.id}`} className="animate-slide-up block" style={{ animationDelay: '0.3s' }}>
              <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-brand-ink">
                View Collection
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link to={`/products/${product.id}`} className="block relative group overflow-hidden h-[288px] bg-brand-cream">
      <img 
        src={product.image} 
        alt={product.name}
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
      <div className="absolute bottom-6 left-6 right-6 text-white">
        <h3 className="text-lg font-serif mb-2">{product.name}</h3>
        <span className="text-[10px] uppercase tracking-widest font-bold opacity-80 decoration-white hover:underline underline-offset-4">Explore &rarr;</span>
      </div>
    </Link>
  );
};
