'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import { Badge } from '../ui/badge';
import { EventDetailModal } from './EventDetailModal';

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  details: string;
  imageUrl: string;
  isUpcoming?: boolean;
  dataAiHint?: string;
}

export function EventCard({ title, date, description, details, imageUrl, isUpcoming = false, dataAiHint }: EventCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const event = { title, date, description, details, imageUrl, isUpcoming, dataAiHint };

  return (
    <>
      <Card className="overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardHeader className="p-0 relative">
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={400}
            className="w-full h-48 object-cover"
            data-ai-hint={dataAiHint}
          />
          {isUpcoming && <Badge className="absolute top-4 right-4">Upcoming</Badge>}
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="mb-2 text-xl text-gradient">{title}</CardTitle>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{date}</span>
          </div>
          <p className="text-sm text-foreground">{description}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button variant="outline" onClick={() => setIsModalOpen(true)}>
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
      <EventDetailModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        event={event}
      />
    </>
  );
}
