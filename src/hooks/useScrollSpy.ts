'use client';

import { useEffect, useState } from 'react';

interface ScrollSpyItem {
  id: string;
  label: string;
}

export function useScrollSpy(items: ScrollSpyItem[], offset: number = 100) {
  const [activeId, setActiveId] = useState<string>('hero');

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        // Find which section is currently visible on screen
        let activeSection = items[0]?.id || 'hero';
        
        // Iterate through items in reverse to find the section that has scrolled into view
        for (let i = items.length - 1; i >= 0; i--) {
          const item = items[i];
          const element = document.getElementById(item.id);
          
          if (!element) continue;
          
          const elementPosition = element.getBoundingClientRect();
          
          // If element top is above or at the trigger point (header height + offset)
          if (elementPosition.top <= offset) {
            activeSection = item.id;
            break;
          }
        }
        
        setActiveId(activeSection);
      }, 50);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Call once on mount to set initial state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [items, offset]);

  return activeId;
}
