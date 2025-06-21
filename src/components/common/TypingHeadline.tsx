'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function TypingHeadline() {
  const text = "Fostering Innovation, Inspiring Entrepreneurs";
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Prevents re-typing on hot reloads
    if (displayedText) return;

    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;
      if (i > text.length) {
        clearInterval(intervalId);
        setIsComplete(true);
      }
    }, 80); // Typing speed in ms

    return () => clearInterval(intervalId);
  }, []);

  return (
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-center min-h-[96px] sm:min-h-[120px] lg:min-h-[150px] flex items-center justify-center flex-wrap">
      <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-foreground/90">
        {displayedText}
      </span>
      <span
        className={cn(
          'ml-2 inline-block h-[0.9em] w-[4px] bg-foreground/90 align-middle',
          isComplete ? 'animate-blink' : 'animate-pulse'
        )}
      />
    </h1>
  );
}
