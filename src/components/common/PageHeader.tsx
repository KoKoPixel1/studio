import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center text-center text-white">
      <Image
        src="https://placehold.co/1920x500.png"
        alt={`${title} banner`}
        fill
        className="object-cover brightness-50"
        data-ai-hint="abstract texture"
        priority
      />
      <div className="relative z-10 container bg-black/30 backdrop-blur-sm py-8 rounded-xl max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        {subtitle && <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
