import { PageHeader } from '@/components/common/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { documents } from '@/lib/placeholders';
import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DocumentsPage() {
  return (
    <div>
      <PageHeader
        title="Official Documents"
        subtitle="Access our official reports, brochures, and other important documents."
      />
      <div className="container py-16 md:py-24">
        <Card>
          <CardHeader>
            <CardTitle>Downloads</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {documents.map((doc, index) => (
                <li key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-3 text-primary" />
                    <span className="font-medium">{doc.name}</span>
                  </div>
                  <Button asChild variant="outline">
                    <Link href={doc.url}>
                      Download <Download className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
