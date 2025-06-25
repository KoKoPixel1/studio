'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Lightbulb, Target, Users, Handshake } from 'lucide-react';
import { EventCard } from '@/components/events/EventCard';
import { ProfileCard } from '@/components/team/ProfileCard';
import { events, teamMembers, sponsors } from '@/lib/placeholders';
import { containerVariants, itemVariants } from '@/lib/animations';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center text-center text-white">
         <Image
            src="https://placehold.co/1920x1080.png"
            alt="IIEC Team"
            fill
            className="object-cover brightness-50"
            data-ai-hint="innovation team"
            priority
          />
        <motion.div 
          className="relative z-10 container"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter"
            variants={itemVariants}
          >
            Fostering Innovation, Inspiring Entrepreneurs
          </motion.h1>
          <motion.p 
            className="mt-6 max-w-2xl mx-auto text-lg text-white/90"
            variants={itemVariants}
          >
            The Innovation and Incubation Entrepreneurship Cell (IIEC) of IISER Berhampur is dedicated to building a vibrant startup ecosystem.
          </motion.p>
          <motion.div 
            className="mt-8 flex justify-center gap-4"
            variants={itemVariants}
          >
            <Button asChild size="lg">
              <Link href="/events">Upcoming Events</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Link href="/about">Learn More</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Us Snippet Section */}
      <motion.section 
        className="py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-gradient transition-all">Nurturing the Next Generation of Innovators</h2>
            <p className="mt-4 text-muted-foreground">
              IIEC is a student-run organization committed to fostering an entrepreneurial mindset among students. We provide a platform for aspiring entrepreneurs to learn, network, and grow their ideas into successful ventures.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full"><Lightbulb className="w-6 h-6 text-primary"/></div>
                <div>
                  <h3 className="font-semibold">Ideation & Innovation</h3>
                  <p className="text-sm text-muted-foreground">Workshops and sessions to spark and refine groundbreaking ideas.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full"><Target className="w-6 h-6 text-primary"/></div>
                <div>
                  <h3 className="font-semibold">Skill Development</h3>
                  <p className="text-sm text-muted-foreground">Building essential entrepreneurial skills through hands-on training.</p>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full"><Handshake className="w-6 h-6 text-primary"/></div>
                <div>
                  <h3 className="font-semibold">Networking Opportunities</h3>
                  <p className="text-sm text-muted-foreground">Connecting students with mentors, investors, and industry leaders.</p>
                </div>
              </div>
            </div>
             <Button asChild className="mt-8">
              <Link href="/about">Discover Our Mission <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>
          <motion.div className="relative" variants={itemVariants}>
            <Image 
              src="https://placehold.co/600x600.png" 
              alt="Team discussing ideas" 
              width={600} 
              height={600} 
              className="rounded-lg shadow-lg"
              data-ai-hint="team collaboration"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Upcoming Events Section */}
      <section className="py-16 md:py-24 bg-transparent">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-gradient transition-all">Upcoming Events</h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
              Join our workshops, competitions, and talks.
            </p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {events.upcoming.slice(0, 2).map((event, index) => (
              <motion.div key={index} variants={itemVariants}>
                <EventCard {...event} isUpcoming={true} dataAiHint={event.dataAiHint} />
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/events">View All Events <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-gradient transition-all">Meet Our Coordinators</h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
              The guiding force behind our initiatives.
            </p>
          </motion.div>
          <motion.div 
            className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {teamMembers.core.filter(member => member.role === 'Coordinator').map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ProfileCard {...member} dataAiHint={member.dataAiHint} />
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/team">See Full Team <Users className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 md:py-24 bg-transparent">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-gradient transition-all">Our Valued Sponsors</h2>
            <p className="mt-2 text-muted-foreground">We are grateful for the support of our partners.</p>
          </motion.div>
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {sponsors.map((sponsor, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Image
                  src={sponsor.logoUrl}
                  alt={`${sponsor.name} logo`}
                  width={160}
                  height={80}
                  className="object-contain"
                  data-ai-hint={sponsor.dataAiHint}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
