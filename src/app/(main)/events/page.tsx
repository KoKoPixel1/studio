'use client';

import { motion } from 'framer-motion';
import { PageHeader } from '@/components/common/PageHeader';
import { EventCard } from '@/components/events/EventCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { events } from '@/lib/placeholders';
import { containerVariants, itemVariants } from '@/lib/animations';

export default function EventsPage() {
  return (
    <div className="animate-page-in">
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
            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {events.upcoming.map((event, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <EventCard {...event} isUpcoming={true} dataAiHint={event.dataAiHint} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          <TabsContent value="past" className="mt-12">
            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {events.past.map((event, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <EventCard {...event} dataAiHint={event.dataAiHint} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
