import { PageHeader } from '@/components/common/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone, User, Info } from 'lucide-react';

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
            <Card className="relative h-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 mt-1 text-primary shrink-0" />
                  <div className="space-y-4">
                    <h3 className="font-semibold">Our Addresses</h3>
                    <div>
                      <h4 className="font-medium text-foreground">Permanent Campus</h4>
                      <p className="text-sm text-muted-foreground">
                        IISER Berhampur, At/Po: -Laudigam, Dist.- Ganjam, Odisha, India-760003
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Transit Campus</h4>
                      <p className="text-sm text-muted-foreground">
                        IISER Berhampur, Govt. ITI Premises, NH-59, Engineering School Junction, Berhampur, Dist.- Ganjam, Odisha, India-760010
                      </p>
                    </div>
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
             <Card className="h-full flex flex-col justify-center items-center text-center p-6">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                    <Info className="h-10 w-10 text-primary" />
                </div>
                <CardHeader className="p-0">
                    <CardTitle>Form Unavailable</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                    <p className="text-muted-foreground">The contact form is temporarily disabled. Please use the email addresses provided to get in touch with us.</p>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
