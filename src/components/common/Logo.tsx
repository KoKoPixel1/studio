import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <circle cx="12" cy="12" r="1" />
        <path d="M20.2 20.2c2.04-2.03.02-5.91-2.4-8.3s-6.27-4.44-8.3-2.4c-2.03 2.04-.02 5.91 2.4 8.3s6.27 4.44 8.3 2.4z" />
        <path d="M3.8 3.8c-2.04 2.03-.02 5.91 2.4 8.3s6.27 4.44 8.3 2.4c2.03-2.04.02-5.91-2.4-8.3S5.84 1.76 3.8 3.8z" />
      </svg>
      <span className="text-xl font-bold text-primary">IIEC</span>
    </Link>
  );
}