'use client';

import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export function EasterEggListeners() {
  const { toast } = useToast();
  const [keySequence, setKeySequence] = useState<string[]>([]);

  useEffect(() => {
    const targetSequence = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'b', 'a'
    ];

    const onKeyDown = (e: KeyboardEvent) => {
      setKeySequence((currentSequence) => {
        const newSequence = [...currentSequence, e.key].slice(-targetSequence.length);

        if (JSON.stringify(newSequence) === JSON.stringify(targetSequence)) {
          toast({
            title: '🚀 Konami Code Activated! 🚀',
            description: "You've unlocked... well, this message. Enjoy!",
          });
          return [];
        }
        return newSequence;
      });
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [toast]);

  return null;
}
