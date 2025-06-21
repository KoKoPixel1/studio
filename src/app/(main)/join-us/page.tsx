import { PageHeader } from '@/components/common/PageHeader';
import { JoinForm } from '@/components/join/JoinForm';

export default function JoinUsPage() {
  return (
    <div>
       <PageHeader
        title="Become an Innovator"
        subtitle="Ready to turn your ideas into reality? Join a community of like-minded peers and start your entrepreneurial journey with us."
      />
      <div className="container py-16 md:py-24">
        <JoinForm />
      </div>
    </div>
  );
}
