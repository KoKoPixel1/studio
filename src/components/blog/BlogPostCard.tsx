import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import Link from 'next/link';
import { User, Calendar, ArrowRight } from 'lucide-react';

interface BlogPostCardProps {
  title: string;
  author: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  dataAiHint?: string;
}

export function BlogPostCard({ title, author, date, excerpt, imageUrl, dataAiHint }: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <Link href="#">
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={400}
            className="w-full h-48 object-cover"
            data-ai-hint={dataAiHint}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="mb-2 text-xl leading-snug">
          <Link href="#" className="hover:text-primary transition-colors">
            {title}
          </Link>
        </CardTitle>
        <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-2" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{date}</span>
          </div>
        </div>
        <p className="text-sm text-foreground">{excerpt}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href="#" className="font-semibold text-primary hover:underline flex items-center">
          Read More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
