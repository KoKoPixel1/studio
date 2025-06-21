interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-gradient">{title}</h1>
        {subtitle && <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
