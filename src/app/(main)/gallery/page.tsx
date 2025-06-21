import { PageHeader } from '@/components/common/PageHeader';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { galleryImages } from '@/lib/placeholders';

export default function GalleryPage() {
  return (
    <div>
      <PageHeader
        title="Gallery"
        subtitle="A glimpse into our vibrant community and memorable moments."
      />
      <div className="container py-16 md:py-24">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden break-inside-avoid transition-all duration-300 hover:shadow-lg hover:scale-105">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                data-ai-hint={image.dataAiHint}
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
