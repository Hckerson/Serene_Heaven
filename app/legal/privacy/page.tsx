import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-warm py-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-luxury">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: January 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-luxury">1. Information We Collect</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We collect information you provide directly to us, such as when you:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Make a reservation or book our services</li>
                    <li>Create an account on our website</li>
                    <li>Contact us for customer service</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Participate in surveys or promotions</li>
                    <li>Use our facilities and services during your stay</li>
                  </ul>
                  <p>This information may include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Personal identifiers (name, email address, phone number)</li>
                    <li>Payment information (credit card details, billing address)</li>
                    <li>Reservation details (dates, room preferences, special requests)</li>
                    <li>Communication preferences and marketing consents</li>
                    <li>Feedback and reviews about our services</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-luxury">2. How We Use Your Information</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Process and manage your reservations and bookings</li>
                    <li>Provide customer service and support</li>
                    <li>Communicate with you about your stay and our services</li>
                    <li>Process payments and prevent fraud</li>
                    <li>Personalize your experience and improve our services</li>
                    <li>Send marketing communications (with your consent)</li>
                    <li>Comply with legal obligations and resolve disputes</li>
                    <li>Analyze usage patterns to improve our website and services</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-luxury">3. Information Sharing and Disclosure</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We may share your information in the following circumstances:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (payment processing, email delivery, analytics)</li>
                    <li><strong>Business Transfers:</strong> In connection with any merger, sale of assets, or acquisition</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                    <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
                  </ul>
                  <p>We do not sell, rent, or trade your personal information to third parties for their marketing purposes.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-luxury">4. Data Security</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and employee training</li>
                    <li>Secure payment processing systems</li>
                    <li>Regular backup and disaster recovery procedures</li>
                  </ul>
                  <p>However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-luxury">5. Cookies and Tracking Technologies</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We use cookies and similar tracking technologies to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Provide personalized content and advertisements</li>
                    <li>Improve website functionality and user experience</li>
                  </ul>
                  <p>You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-luxury">6. Your Rights and Choices</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                    <li><strong>Objection:</strong> Object to processing of your information for certain purposes</li>
                    <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                  </ul>
                  <p>To exercise these rights, please contact us using the information provided below.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-luxury">7. Data Retention</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We retain your personal information for as long as necessary to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide our services and fulfill our contractual obligations</li>
                    <li>Comply with legal, regulatory, and tax requirements</li>
                    <li>Resolve disputes and enforce our agreements</li>
                    <li>Improve our services and customer experience</li>
                  </ul>
                  <p>When we no longer need your information, we will securely delete or anonymize it in accordance with our data retention policies.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-luxury">8. International Data Transfers</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Your information may be transferred to and processed in countries other than your country of residence. We ensure that such transfers are conducted in accordance with applicable data protection laws and implement appropriate safeguards to protect your information.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-luxury">9. Children's Privacy</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Our services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-luxury">10. Changes to This Privacy Policy</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-luxury">11. Contact Us</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> privacy@serenehaven.com</p>
                    <p><strong>Phone:</strong> +1 (888) 555-1234</p>
                    <p><strong>Mail:</strong><br />
                    Serene Heaven Hotel & Spa<br />
                    Privacy Officer<br />
                    123 Luxury Avenue<br />
                    Beachfront, Resort City 90210<br />
                    United States</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6 text-luxury">Related Information</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild className="border-luxury/30 text-luxury hover:bg-luxury-light transition-luxury">
                <Link href="/legal/terms">Terms & Conditions</Link>
              </Button>
              <Button variant="outline" asChild className="border-luxury/30 text-luxury hover:bg-luxury-light transition-luxury">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild className="bg-luxury hover:bg-luxury/90 shadow-luxury transition-luxury">
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}