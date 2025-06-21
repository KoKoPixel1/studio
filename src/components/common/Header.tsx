'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from './Logo';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/placeholders';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Logo />
        </div>
        
        <div className="flex flex-1 items-center justify-between">
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0 bg-background/80 glassmorphism">
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b border-white/10 flex items-center justify-between">
                    <Logo />
                  </div>
                  <nav className="flex flex-col items-start space-y-2 p-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          'text-lg font-medium transition-colors',
                          pathname === link.href ? 'text-primary' : 'text-muted-foreground text-gradient-hover'
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto p-4 flex items-center justify-between">
                     <Button asChild className="flex-grow mr-2">
                      <Link href="/join-us" onClick={() => setIsMobileMenuOpen(false)}>Join Us</Link>
                    </Button>
                    <ThemeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          <div className="md:hidden">
             <Logo />
          </div>

          <nav className="hidden md:flex md:items-center md:space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors',
                  pathname === link.href ? 'text-foreground' : 'text-muted-foreground text-gradient-hover'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <Button asChild>
              <Link href="/join-us">Join Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
