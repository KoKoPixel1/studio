'use client';

import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { Logo } from './Logo';
import { cn } from '@/lib/utils';

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Increased timeout to allow Spline scene to load
    const timer = setTimeout(() => setLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[200] flex items-center justify-center bg-background transition-opacity duration-500 ease-in-out',
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      aria-hidden={!loading}
    >
      <Spline
        scene="https://my.spline.design/vaporwavebackground-md8OmvzXEK7MBA99aBzGIUxE/"
        className="!absolute inset-0 z-0"
      />
      <div className="relative z-10">
        <Logo />
      </div>
    </div>
  );
}
