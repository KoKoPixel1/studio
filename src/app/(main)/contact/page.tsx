import { PageHeader } from '@/components/common/PageHeader';
import { ContactForm } from '@/components/contact/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone, User } from 'lucide-react';

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
                  <MapPin className="h-6 w-6 mr-4 mt-1 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold">Our Address</h3>
                    <p className="text-sm text-muted-foreground">
                      IISER Berhampur Transit Campus, Govt. ITI, Berhampur, Engineering School Junction, NH 59, Berhampur, Odisha 760010
                    </p>
                  </div>
                </div>
                 <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold">General Inquiries</h3>
                    <a href="mailto:iiec@iiserbpr.ac.in" className="text-sm text-muted-foreground hover:text-primary">
                      iiec@iiserbpr.ac.in
                    </a>
                  </div>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Our Coordinators</h3>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <User className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" />
                            <div>
                                <p className="font-medium">Kiran Manisha Priyadarsini</p>
                                <a href="mailto:kiranm23@iiserbpr.ac.in" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
                                    <Mail className="h-4 w-4" /> kiranm23@iiserbpr.ac.in
                                </a>
                                <a href="tel:+917735569360" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
                                    <Phone className="h-4 w-4" /> +91-7735569360
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <User className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" />
                            <div>
                                <p className="font-medium">Nayanshi Jain</p>
                                <a href="mailto:nayanshi23@iiserbpr.ac.in" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
                                    <Mail className="h-4 w-4" /> nayanshi23@iiserbpr.ac.in
                                </a>
                                <a href="tel:+918233794299" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
                                    <Phone className="h-4 w-4" /> +91-8233794299
                                </a>
                            </div>
                        </div>
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
