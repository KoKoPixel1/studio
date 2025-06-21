import { PageHeader } from '@/components/common/PageHeader';
import { FaqAccordion } from '@/components/faq/FaqAccordion';
import { faqItems } from '@/lib/placeholders';

export default function FAQPage() {
  return (
    <div>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about the IIEC, our events, and how to get involved."
      />
      <div className="container py-16 md:py-24 max-w-4xl mx-auto">
        <FaqAccordion items={faqItems} />
      </div>
    </div>
  );
}
