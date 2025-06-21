import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, Twitter } from 'lucide-react';

interface ProfileCardProps {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  dataAiHint?: string;
}

export function ProfileCard({ name, role, imageUrl, bio, dataAiHint }: ProfileCardProps) {
  return (
    <Card className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="items-center">
        <Image
          src={imageUrl}
          alt={`Profile of ${name}`}
          width={128}
          height={128}
          className="rounded-full object-cover aspect-square mb-4"
          data-ai-hint={dataAiHint}
        />
        <h3 className="text-xl font-bold text-primary">{name}</h3>
        <p className="text-accent-foreground font-semibold text-sm">{role}</p>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm mb-4">{bio}</p>
        <div className="flex justify-center space-x-2">
            <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label={`${name}'s LinkedIn`}><Linkedin className="h-4 w-4" /></a>
            </Button>
            <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label={`${name}'s Twitter`}><Twitter className="h-4 w-4" /></a>
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
