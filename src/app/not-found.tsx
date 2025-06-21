import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Frown } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container flex flex-col items-center justify-center text-center py-24">
            <Frown className="h-24 w-24 text-primary mb-6" />
            <h1 className="text-6xl font-bold text-primary tracking-tighter">404</h1>
            <h2 className="text-3xl font-semibold mt-4 mb-2">Page Not Found</h2>
            <p className="max-w-md text-muted-foreground mb-8">
                Sorry, we couldn&apos;t find the page you were looking for. It might have been moved or deleted.
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
