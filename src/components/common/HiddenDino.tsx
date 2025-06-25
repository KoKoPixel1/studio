'use client';

import { useDinoHunt } from './DinoHuntProvider';
import { cn } from '@/lib/utils';

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
        "z-10 text-transparent hover:text-foreground/30 transition-colors duration-300 focus:outline-none focus:text-foreground/30",
        className
      )}
      aria-label="Find the dinosaur"
      title="You found something..."
    >
      <DinoIcon className="w-8 h-8" />
    </button>
  );
}

function DinoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      {...props}
    >
      <path d="M14.5 4.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0ZM6 19v-4.5h2V19a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1v-2h1a1 1 0 0 1 1 1Zm11 2a2 2 0 0 1-2-2v-4.5h2V19a1 1 0 0 0 1-1v-2h1a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2Zm-6.5-2.5a1 1 0 0 0-1-1H9.5v-2h2a1 1 0 0 0 1-1V10a2 2 0 0 0-2-2H9V7a1 1 0 1 0-2 0v1h-.5a2 2 0 0 0-2 2v.5H4a1 1 0 0 0-1 1v1h1.5v1H3v1h1.5v.5a1 1 0 0 0 1 1h.5v.5H5a1 1 0 0 0 0 2h1.5a2.5 2.5 0 0 0 2.5-2.5Z"/>
    </svg>
  );
}
