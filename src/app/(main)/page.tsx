import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Lightbulb, Target, Users, Handshake } from 'lucide-react';
import { EventCard } from '@/components/events/EventCard';
import { ProfileCard } from '@/components/team/ProfileCard';
import { events, teamMembers, sponsors } from '@/lib/placeholders';
import { HiddenDino } from '@/components/common/HiddenDino';

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
        <div className="relative z-10 container animate-in fade-in duration-500">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter">
            Fostering Innovation, Inspiring Entrepreneurs
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/90 animate-in fade-in delay-200 duration-500">
            The Innovation and Incubation Entrepreneurship Cell (IIEC) of IISER Berhampur is dedicated to building a vibrant startup ecosystem.
          </p>
          <div className="mt-8 flex justify-center gap-4 animate-in fade-in delay-400 duration-500">
            <Button asChild size="lg">
              <Link href="/events">Upcoming Events</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Snippet Section */}
      <section className="py-20 md:py-28">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
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
          </div>
          <div className="relative">
            <HiddenDino dinoId="home-dino" dinoType="trex" className="absolute -top-4 -left-4" />
            <Image 
              src="https://placehold.co/600x600.png" 
              alt="Team discussing ideas" 
              width={600} 
              height={600} 
              className="rounded-lg shadow-lg"
              data-ai-hint="team collaboration"
            />
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 md:py-28 bg-transparent">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient transition-all">Upcoming Events</h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
              Join our workshops, competitions, and talks.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {events.upcoming.slice(0, 2).map((event, index) => (
              <EventCard key={index} {...event} isUpcoming={true} dataAiHint={event.dataAiHint} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/events">View All Events <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient transition-all">Meet Our Coordinators</h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
              The guiding force behind our initiatives.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {teamMembers.core.filter(member => member.role === 'Coordinator').map((member, index) => (
              <ProfileCard key={index} {...member} dataAiHint={member.dataAiHint} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/team">See Full Team <Users className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 md:py-28 bg-transparent">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient transition-all">Our Valued Sponsors</h2>
            <p className="mt-2 text-muted-foreground">We are grateful for the support of our partners.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {sponsors.map((sponsor, index) => (
              <Image
                key={index}
                src={sponsor.logoUrl}
                alt={`${sponsor.name} logo`}
                width={160}
                height={80}
                className="object-contain"
                data-ai-hint={sponsor.dataAiHint}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
