import { PageHeader } from '@/components/common/PageHeader';
import { EventCard } from '@/components/events/EventCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { events } from '@/lib/placeholders';

export default function EventsPage() {
  return (
    <div>
      <PageHeader
        title="Our Events"
        subtitle="Join us for insightful workshops, engaging competitions, and inspiring talks."
      />
      <div className="container py-16 md:py-24">
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="mt-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.upcoming.map((event, index) => (
                <EventCard key={index} {...event} isUpcoming={true} dataAiHint={event.dataAiHint} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="past" className="mt-12">
             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.past.map((event, index) => (
                <EventCard key={index} {...event} dataAiHint={event.dataAiHint} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
