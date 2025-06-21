import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image src="/logo.svg" alt="IIEC Logo" width={32} height={32} />
      <span className="text-xl font-bold text-primary">IIEC</span>
    </Link>
  );
}
