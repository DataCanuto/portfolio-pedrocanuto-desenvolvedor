'use client';

import React from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const variants = {
      primary: 'bg-accent-orange text-white',
      secondary: 'bg-dark-header-btn text-dark-header-text',
      outline: 'border border-accent-orange text-accent-orange',
    };

    return (
      <span
        ref={ref}
        className={cn('px-3 py-1 rounded-full text-sm font-medium inline-block', variants[variant], className)}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';
