import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  ...props 
}) => {
  const variants = {
    primary: 'bg-brand-ink text-white hover:bg-opacity-90',
    secondary: 'bg-brand-wood text-white hover:bg-opacity-90',
    outline: 'border border-brand-ink text-brand-ink hover:bg-brand-ink hover:text-white',
    ghost: 'text-brand-ink hover:bg-brand-ink/5'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-12 py-4 text-lg'
  };

  return (
    <button 
      className={cn(
        'inline-flex items-center justify-center transition-all duration-300 font-medium tracking-wide uppercase text-xs',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input 
      className={cn(
        'w-full px-4 py-3 bg-transparent border border-brand-ink/20 focus:border-brand-ink outline-none transition-colors duration-300 font-sans',
        className
      )}
      {...props}
    />
  );
};
