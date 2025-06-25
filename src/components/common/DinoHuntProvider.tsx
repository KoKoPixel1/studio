'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';

const DINO_IDS = ['home-dino', 'about-dino', 'contact-dino'];
const TOTAL_DINOS = DINO_IDS.length;

type DinoHuntState = {
  dinos: Record<string, boolean>;
  findDino: (id: string) => void;
  allFound: boolean;
};

const DinoHuntContext = createContext<DinoHuntState | undefined>(undefined);

export function DinoHuntProvider({ children }: { children: ReactNode }) {
  const { toast } = useToast();
  const [dinos, setDinos] = useState(() => {
    const initialState: Record<string, boolean> = {};
    DINO_IDS.forEach(id => {
      initialState[id] = false;
    });
    return initialState;
  });
  const [achievementAwarded, setAchievementAwarded] = useState(false);

  const findDino = (id: string) => {
    if (dinos[id]) return; 

    const newDinos = { ...dinos, [id]: true };
    const foundCount = Object.values(newDinos).filter(Boolean).length;
    
    setDinos(newDinos);

    if (foundCount < TOTAL_DINOS) {
      toast({
        title: '🦖 Dino Found!',
        description: `You've found ${foundCount} of ${TOTAL_DINOS} dinosaurs.`,
      });
    }
  };
  
  const allFound = Object.values(dinos).every(Boolean);

  useEffect(() => {
    if (allFound && !achievementAwarded) {
      toast({
        title: '🦖 Achievement Unlocked! 🦖',
        description: 'I can see from miles',
      });
      setAchievementAwarded(true);
    }
  }, [allFound, achievementAwarded, toast]);


  return (
    <DinoHuntContext.Provider value={{ dinos, findDino, allFound }}>
      {children}
    </DinoHuntContext.Provider>
  );
}

export const useDinoHunt = () => {
  const context = useContext(DinoHuntContext);
  if (context === undefined) {
    throw new Error('useDinoHunt must be used within a DinoHuntProvider');
  }
  return context;
};
