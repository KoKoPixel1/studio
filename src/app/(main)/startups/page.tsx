import { PageHeader } from '@/components/common/PageHeader';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { startups } from '@/lib/placeholders';
import { User } from 'lucide-react';

export default function StartupsPage() {
  return (
    <div>
      <PageHeader
        title="Our Startups"
        subtitle="Ventures born from the innovative minds at IIEC."
      />
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8">
          {startups.map((startup, index) => (
             <Card key={index} className="overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="p-0">
                <Image
                  src={startup.imageUrl}
                  alt={`${startup.name} showcase`}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={startup.dataAiHint}
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="text-2xl text-gradient mb-2">{startup.name}</CardTitle>
                <CardDescription>{startup.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0 bg-secondary/50">
                <div className="flex items-center text-sm font-medium">
                  <User className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-muted-foreground mr-1">Founder:</span>
                  <span className="text-foreground">{startup.founder}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
