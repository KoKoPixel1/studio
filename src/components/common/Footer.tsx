import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/lib/placeholders';

export function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/10">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Fostering the spirit of innovation and entrepreneurship at IISER Berhampur.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.slice(0, 5).map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 mt-1 shrink-0 text-primary" />
                <span className="text-muted-foreground">IISER Berhampur, Transit Campus, Govt. ITI, Berhampur, Engineering School Junction, NH 59, Berhampur, Odisha 760010</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-3 shrink-0 text-primary" />
                <a href="mailto:iiec@iiserbpr.ac.in" className="text-muted-foreground hover:text-primary transition-colors">iiec@iiserbpr.ac.in</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-3 shrink-0 text-primary" />
                <span className="text-muted-foreground">+91-123-456-7890</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Join Our Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">Stay updated with our latest events and initiatives.</p>
            {/* Newsletter form can be added here */}
            <p className="text-xs text-muted-foreground">Coming soon.</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} IIEC IISER Berhampur. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
