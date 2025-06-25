'use client';

import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadingDuration = 1500;
    
    // Timer to hide the loading screen
    const timer = setTimeout(() => {
        setLoading(false)
    }, loadingDuration);
    
    // Animate progress bar
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsedTime = timestamp - startTime;
        const progressValue = Math.min((elapsedTime / loadingDuration) * 100, 100);
        setProgress(progressValue);

        if (elapsedTime < loadingDuration) {
            animationFrameId = requestAnimationFrame(animate);
        }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[200] flex items-center justify-center bg-background transition-opacity duration-1000 ease-in-out',
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      aria-hidden={!loading}
    >
      <div className="flex flex-col items-center gap-4 w-48">
        <div>
          <Logo />
        </div>
        <Progress value={progress} className="h-2 w-full" />
      </div>
    </div>
  );
}
