'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { PageHeader } from '@/components/common/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Zap, Users, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { containerVariants, itemVariants } from '@/lib/animations';

export default function AboutPage() {
  const activities = [
    { icon: <Zap className="h-6 w-6 text-primary" />, title: "E-Summit", description: "Our annual flagship event bringing together students, entrepreneurs, and investors." },
    { icon: <Lightbulb className="h-6 w-6 text-primary" />, title: "Ideation Workshops", description: "Interactive sessions to help students generate and validate their startup ideas." },
    { icon: <Award className="h-6 w-6 text-primary" />, title: "Competitions", description: "Business plan and pitch competitions to foster a competitive spirit." },
    { icon: <Users className="h-6 w-6 text-primary" />, title: "Speaker Sessions", description: "Inspiring talks from successful entrepreneurs and industry experts." },
  ];

  return (
    <div className="animate-page-in">
      <PageHeader
        title="About IIEC"
        subtitle="Fostering a culture of innovation and entrepreneurship at IISER Berhampur."
      />
      
      <motion.section 
        className="py-16 md:py-24"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-6 relative" variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gradient">Our Vision & Mission</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Vision:</strong> To establish a thriving ecosystem of innovation and entrepreneurship within IISER Berhampur, empowering students to become the leaders and problem-solvers of tomorrow.
                </p>
                <p>
                  <strong className="text-foreground">Mission:</strong> To provide students with the resources, mentorship, and opportunities necessary to transform their innovative ideas into viable business ventures. We aim to bridge the gap between academia and industry, fostering a hands-on learning environment.
                </p>
              </div>
              <Button asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Image 
                src="https://placehold.co/600x400.png"
                alt="Team working together"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint="office teamwork"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="py-16 md:py-24 bg-transparent">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-gradient">What We Do</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Our activities are designed to inspire, educate, and support aspiring entrepreneurs at every stage of their journey.
            </p>
          </motion.div>
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {activities.map((activity, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">{activity.icon}</div>
                    <CardTitle>{activity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
