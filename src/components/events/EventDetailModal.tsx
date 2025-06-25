'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Calendar } from 'lucide-react';

interface Event {
  title: string;
  date: string;
  details: string;
}

interface EventDetailModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  event: Event;
}

export function EventDetailModal({ isOpen, onOpenChange, event }: EventDetailModalProps) {
  if (!event) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-gradient mb-2">{event.title}</DialogTitle>
          <DialogDescription className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{event.date}</span>
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4 -mx-2">
          <div className="p-2 text-sm text-muted-foreground whitespace-pre-wrap">
            {event.details}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
