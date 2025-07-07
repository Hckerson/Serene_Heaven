import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-warm py-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-luxury">
              Terms & Conditions
            </h1>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Please read these terms and conditions carefully before using our services or making a reservation.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: January 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-luxury">1. Acceptance of Terms</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>By accessing our website, making a reservation, or using our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
                  <p>These terms apply to all visitors, users, and others who access or use our services, including our website, hotel facilities, and related services.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-luxury">2. Reservations and Bookings</h2>
                <div className="space-y-4 text-muted-foreground">
                  <h3 className="text-lg font-semibold text-luxury">2.1 Booking Process</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>All reservations are subject to availability and confirmation</li>
                    <li>A valid credit card is required to guarantee your reservation</li>
                    <li>Rates are quoted per room, per night, and exclude taxes unless otherwise stated</li>
                    <li>Special requests are subject to availability and cannot be guaranteed</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-luxury">2.2 Payment</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Payment is due at check-in unless otherwise arranged</li>
                    <li>We accept major credit cards, cash, and bank transfers</li>
                    <li>Incidental charges will be authorized on your credit card</li>
                    <li>All rates are subject to applicable taxes and fees</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-luxury">3. Cancellation and Modification Policy</h2>
                <div className="space-y-4 text-muted-foreground">
                  <h3 className="text-lg font-semibold text-luxury">3.1 Standard Cancellation</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Free cancellation up to 48 hours before check-in</li>
                    <li>Cancellations within 48 hours may incur a one-night charge</li>
                    <li>No-show reservations will be charged the full stay amount</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-luxury">3.2 Special Rates and Packages</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Non-refundable rates cannot be cancelled or modified</li>
                    <li>Package deals may have different cancellation terms</li>
                    <li>Group bookings have separate cancellation policies</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-luxury">3.3 Modifications</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Changes are subject to availability and rate differences</li>
                    <li>Modifications must be made at least 24 hours before check-in</li>
                    <li>Additional charges may apply for upgrades or extended stays</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-luxury">4. Check-in and Check-out</h2>
                <div className="space-y-4 text-muted-foreground">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Check-in time: 3:00 PM | Check-out time: 12:00 PM</li>
                    <li>Valid government-issued photo ID required at check-in</li>
                    <li>Early check-in and late check-out subject to availability and fees</li>
                    <li>Maximum occupancy limits strictly enforced</li>
                    <li>Additional guests may incur extra charges</li>
                    <li>Minimum age for check-in is 18 years</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-luxury">5. Guest Conduct and Hotel Policies</h2>
                <div className="space-y-4 text-muted-foreground">
                  <h3 className="text-lg font-semibold text-luxury">5.1 General Conduct</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Guests must conduct themselves in a respectful manner</li>
                    <li>Disruptive behavior may result in removal without refund</li>
                    <li>Illegal activities are strictly prohibited</li>
                    <li>Smoking is prohibited in all rooms and designated areas only</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-luxury">5.2 Property and Damages</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Guests are responsible for any damage to hotel property</li>
                    <li>Lost key cards incur a replacement fee</li>
                    <li>Excessive cleaning fees may apply</li>
                    <li>Smoking in non-smoking rooms incurs a $250 cleaning fee</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-luxury">5.3 Pets</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Pets up to 30 pounds welcome with $50/night fee</li>
                    <li>Pets must be leashed in public areas</li>
                    <li>Pet owners responsible for any damage or disturbance</li>
                    <li>Service animals welcome at no charge</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-luxury">6. Liability and Insurance</h2>
                <div className="space-y-4 text-muted-foreground">
                  <h3 className="text-lg font-semibold text-luxury">6.1 Limitation of Liability</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Hotel liability is limited to the cost of accommodation</li>
                    <li>We are not responsible for personal belongings</li>
                    <li>Safe deposit boxes available for valuables</li>
                    <li>Travel insurance recommended for all guests</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-luxury">6.2 Force Majeure</h3>
                  <p>We are not liable for failure to perform due to circumstances beyond our control, including but not limited to natural disasters, government actions, or other force majeure events.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-luxury">7. Privacy and Data Protection</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Your privacy is important to us. Please review our Privacy Policy for information about how we collect, use, and protect your personal information. By using our services, you consent to the collection and use of your information as described in our Privacy Policy.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-luxury">8. Website Terms of Use</h2>
                <div className="space-y-4 text-muted-foreground">
                  <h3 className="text-lg font-semibold text-luxury">8.1 Acceptable Use</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Website content is for personal, non-commercial use only</li>
                    <li>Unauthorized use of automated systems prohibited</li>
                    <li>Do not attempt to gain unauthorized access to our systems</li>
                    <li>Respect intellectual property rights</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-luxury">8.2 Intellectual Property</h3>
                  <p>All content on our website, including text, images, logos, and software, is protected by copyright and other intellectual property laws. Unauthorized use is prohibited.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-luxury">9. Dispute Resolution</h2>
                <div className="space-y-4 text-muted-foreground">
                  <h3 className="text-lg font-semibold text-luxury">9.1 Governing Law</h3>
                  <p>These terms are governed by the laws of the jurisdiction where our hotel is located, without regard to conflict of law principles.</p>
                  
                  <h3 className="text-lg font-semibold text-luxury">9.2 Dispute Resolution Process</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We encourage direct communication to resolve issues</li>
                    <li>Formal complaints should be submitted in writing</li>
                    <li>Mediation preferred before legal proceedings</li>
                    <li>Arbitration may be required for certain disputes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-luxury">10. Changes to Terms</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on our website with an updated effective date. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.</p>
                  <p>For significant changes, we will provide reasonable notice through our website or direct communication.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-luxury">11. Contact Information</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>For questions about these Terms and Conditions or to report violations, please contact us:</p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> legal@serenehaven.com</p>
                    <p><strong>Phone:</strong> +1 (888) 555-1234</p>
                    <p><strong>Mail:</strong><br />
                    Serene Heaven Hotel & Spa<br />
                    Legal Department<br />
                    123 Luxury Avenue<br />
                    Beachfront, Resort City 90210<br />
                    United States</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-luxury">12. Severability</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>If any provision of these Terms and Conditions is found to be unenforceable or invalid, the remaining provisions will continue to be valid and enforceable to the fullest extent permitted by law.</p>
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
                <Link href="/legal/privacy">Privacy Policy</Link>
              </Button>
              <Button variant="outline" asChild className="border-luxury/30 text-luxury hover:bg-luxury-light transition-luxury">
                <Link href="/faq">FAQ</Link>
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