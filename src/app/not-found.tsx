'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Frown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function NotFound() {
  const { toast } = useToast();

  const handleFrownClick = () => {
    toast({
      title: 'Turn that frown upside down! 🙂',
      description: 'The homepage is just one click away.',
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container flex flex-col items-center justify-center text-center py-24">
            <Frown
              className="h-24 w-24 text-primary mb-6 cursor-pointer hover:scale-110 transition-transform"
              onClick={handleFrownClick}
            />
            <h1 className="text-6xl font-bold tracking-tighter text-gradient">404</h1>
            <h2 className="text-3xl font-semibold mt-4 mb-2 text-gradient">Page Not Found</h2>
            <p className="max-w-md text-muted-foreground mb-8">
                Sorry, we couldn't find the page you were looking for. It might have been moved or deleted.
            </p>
            <Button asChild>
                <Link href="/">Return to Homepage</Link>
            </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
