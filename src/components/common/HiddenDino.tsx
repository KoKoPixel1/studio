'use client';

import { useDinoHunt } from './DinoHuntProvider';
import { cn } from '@/lib/utils';
import { DinosaurIcon, type DinoType } from './DinosaurIcons';

interface HiddenDinoProps {
  dinoId: string;
  dinoType: DinoType;
  className?: string;
}

export function HiddenDino({ dinoId, dinoType, className }: HiddenDinoProps) {
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
        "z-10 text-primary opacity-30 hover:opacity-100 hover:scale-125 transition-all duration-300 focus:outline-none focus:opacity-100",
        className
      )}
      aria-label="Find the dinosaur"
      title="You found something..."
    >
      <DinosaurIcon type={dinoType} className="w-6 h-6" />
    </button>
  );
}
