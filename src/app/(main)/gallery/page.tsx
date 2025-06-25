'use client';

import { motion } from 'framer-motion';
import { PageHeader } from '@/components/common/PageHeader';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { galleryImages } from '@/lib/placeholders';
import { containerVariants, itemVariants } from '@/lib/animations';

export default function GalleryPage() {
  return (
    <div className="animate-page-in">
      <PageHeader
        title="Gallery"
        subtitle="A glimpse into our vibrant community and memorable moments."
      />
      <div className="container py-16 md:py-24">
        <motion.div 
          className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {galleryImages.map((image, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="relative overflow-hidden break-inside-avoid transition-all duration-300 hover:shadow-lg hover:scale-105">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={image.dataAiHint}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
