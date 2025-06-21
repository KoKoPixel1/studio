import { PageHeader } from '@/components/common/PageHeader';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { sponsors } from '@/lib/placeholders';

export default function SponsorsPage() {
  const tiers = ['Gold', 'Silver', 'Bronze'];
  return (
    <div>
      <PageHeader
        title="Our Sponsors"
        subtitle="We are immensely grateful to our sponsors for their invaluable support."
      />
      <div className="container py-16 md:py-24 space-y-16">
        {tiers.map(tier => (
          <div key={tier}>
            <h2 className="text-3xl font-bold text-center mb-10 text-gradient">
              {tier} Sponsors
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
              {sponsors
                .filter(s => s.tier === tier)
                .map((sponsor, index) => (
                  <Card key={index} className="p-6 flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-40">
                    <Image
                      src={sponsor.logoUrl}
                      alt={`${sponsor.name} logo`}
                      width={200}
                      height={100}
                      className="object-contain"
                      data-ai-hint={sponsor.dataAiHint}
                    />
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
