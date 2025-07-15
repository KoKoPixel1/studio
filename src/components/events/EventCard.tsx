'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, MapPin, Clock } from 'lucide-react';
import { Badge } from '../ui/badge';

interface EventCardProps {
  title: string;
  slug: string;
  date: string;
  description: string;
  imageUrl: string;
  isUpcoming?: boolean;
  dataAiHint?: string;
  place?: string;
  time?: string;
}

export function EventCard({ title, slug, date, description, imageUrl, isUpcoming = false, dataAiHint, place, time }: EventCardProps) {
  return (
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
        <div className="flex flex-col space-y-2 text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{date}</span>
          </div>
          {time && (
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{time}</span>
            </div>
          )}
          {place && (
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{place}</span>
            </div>
          )}
        </div>
        <p className="text-sm text-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline">
          <Link href={`/events/${slug}`}>
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
