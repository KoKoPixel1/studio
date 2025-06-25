'use client';

import { useDinoHunt } from './DinoHuntProvider';
import { cn } from '@/lib/utils';
import { Dinosaur } from 'lucide-react';

interface HiddenDinoProps {
  dinoId: string;
  className?: string;
}

export function HiddenDino({ dinoId, className }: HiddenDinoProps) {
  const { dinos, findDino } = useDinoHunt();

  if (dinos[dinoId]) {
    return null;
  }

  const handleClick = () => {
    findDino(dinoId);
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "z-10 text-foreground/30 hover:text-primary hover:scale-110 transition-all duration-300 focus:outline-none focus:text-primary",
        className
      )}
      aria-label="Find the dinosaur"
      title="You found something..."
    >
      <Dinosaur className="w-8 h-8" />
    </button>
  );
}
