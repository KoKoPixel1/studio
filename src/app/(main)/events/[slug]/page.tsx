import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { events } from '@/lib/placeholders';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Ticket } from 'lucide-react';

export async function generateStaticParams() {
  const allEvents = [...events.upcoming, ...events.past];
  return allEvents.map((event) => ({
    slug: event.slug,
  }));
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const allEvents = [...events.upcoming, ...events.past];
  const event = allEvents.find(e => e.slug === params.slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="animate-page-in">
      <div className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src={event.imageUrl}
          alt={event.title}
          fill
          className="object-cover brightness-50"
          data-ai-hint={event.dataAiHint}
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="container bg-black/30 backdrop-blur-sm py-8 rounded-xl">
            <h1 className="text-4xl md:text-6xl font-bold">{event.title}</h1>
            <div className="flex items-center justify-center text-lg mt-4">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{event.date}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gradient mb-4">About the Event</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground whitespace-pre-wrap">
                {event.details}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gradient mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {event.gallery.map((img, index) => (
                  <Card key={index} className="overflow-hidden break-inside-avoid group transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <Image
                      src={img.src}
                      alt={`Event gallery image ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                      data-ai-hint={img.dataAiHint}
                    />
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Event Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold">Date & Time</h3>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Ticket className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold">Registration</h3>
                    {event.isUpcoming ? (
                       <Button asChild className="mt-2">
                         <Link href="#">Register Now</Link>
                       </Button>
                    ) : (
                      <Button disabled variant="outline" className="mt-2">Registration Closed</Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
