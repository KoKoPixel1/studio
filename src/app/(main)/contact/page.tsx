import { PageHeader } from '@/components/common/PageHeader';
import { ContactForm } from '@/components/contact/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MailIcon, MapPinIcon, PhoneIcon } from '@/components/common/Icons';

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with questions, proposals, or just to say hello."
      />
      <div className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 mr-4 mt-1 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold">Our Address</h3>
                    <p className="text-sm text-muted-foreground">
                      IISER Berhampur Transit Campus, Govt. ITI, Berhampur, Engineering School Junction, NH 59, Berhampur, Odisha 760010
                    </p>
                  </div>
                </div>
                 <div className="flex items-start">
                  <MailIcon className="h-6 w-6 mr-4 mt-1 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <a href="mailto:iiec@iiserbpr.ac.in" className="text-sm text-muted-foreground hover:text-primary">
                      iiec@iiserbpr.ac.in
                    </a>
                  </div>
                </div>
                 <div className="flex items-start">
                  <PhoneIcon className="h-6 w-6 mr-4 mt-1 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-sm text-muted-foreground">+91-123-456-7890</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
