'use client';

import React from 'react';
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-dark-bg';
    
    const variants = {
      primary: 'bg-accent-orange text-white hover:bg-accent-orange-light hover:shadow-lg',
      secondary: 'bg-dark-header-btn text-dark-header-text hover:bg-dark-bg hover:border-accent-orange border border-dark-border',
      outline: 'border-2 border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white',
      ghost: 'text-dark-header-text hover:text-accent-orange hover:bg-dark-border/50',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
