import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      {/* Using an img tag for the logo */}
      {/* The src is relative to the public directory */}
      <img src="/logo.svg" alt="IIEC Logo" className="h-8 w-8" />
      <span className="text-xl font-bold text-primary">IIEC</span>
    </Link>
  );
}
