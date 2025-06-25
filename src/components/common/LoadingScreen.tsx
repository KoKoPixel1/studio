'use client';

import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { cn } from '@/lib/utils';

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer to hide the loading screen
    const timer = setTimeout(() => setLoading(false), 1500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[200] flex items-center justify-center bg-background transition-opacity duration-1000 ease-in-out',
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      aria-hidden={!loading}
    >
      <div className="relative z-10 animate-pulse">
        <Logo />
      </div>
    </div>
  );
}
