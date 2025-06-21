import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-primary"
      >
        <circle cx="12" cy="12" r="1"/>
        <path d="M20.2 20.2c2.04-2.03.02-5.91-2.98-8.9-3-2.98-6.87-4.99-8.9-2.98-2.03 2.04-.02 5.91 2.98 8.9 3 2.98 6.87 4.99 8.9 2.98Z"/>
        <path d="M3.8 3.8c-2.04 2.03-.02 5.91 2.98 8.9 3 2.98 6.87 4.99 8.9 2.98 2.03-2.04.02-5.91-2.98-8.9-3-2.98-6.87-4.99-8.9-2.98Z"/>
      </svg>
      <span className="text-xl font-bold text-primary">IIEC</span>
    </Link>
  );
}
