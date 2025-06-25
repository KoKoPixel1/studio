'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';

const DINO_IDS = ['home-dino', 'about-dino', 'contact-dino'];

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
    setDinos(prev => ({ ...prev, [id]: true }));
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
