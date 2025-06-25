import { PageHeader } from '@/components/common/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';

export default function JoinUsPage() {
  return (
    <div>
       <PageHeader
        title="Become an Innovator"
        subtitle="Ready to turn your ideas into reality? Join a community of like-minded peers and start your entrepreneurial journey with us."
      />
      <div className="container py-16 md:py-24 flex items-center justify-center">
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader className="text-center items-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                    <Info className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>Applications Currently Closed</CardTitle>
                <CardDescription>
                    We are not accepting new applications at this time. Please check back later!
                </CardDescription>
            </CardHeader>
        </Card>
      </div>
    </div>
  );
}
