import { BookingWizard } from "@/components/booking/BookingWizard";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Gift, Phone } from "lucide-react";

export default function BookingPage() {
  const benefits = [
    {
      icon: Shield,
      title: "Best Rate Guarantee",
      description: "We promise you'll find the best rates directly through our website with price matching available.",
    },
    {
      icon: Clock,
      title: "Flexible Cancellation",
      description: "Plans change, we understand. Enjoy free cancellation up to 48 hours before check-in.",
    },
    {
      icon: Gift,
      title: "Complimentary Upgrades",
      description: "When available, we'll upgrade your room for free as our valued direct booking guest.",
    },
    {
      icon: Phone,
      title: "24/7 Concierge Support",
      description: "Our dedicated concierge team is available around the clock to assist with your needs.",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-warm">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 text-luxury font-medium mb-6">
              <div className="w-8 h-0.5 bg-luxury" />
              <span>Secure Booking</span>
              <div className="w-8 h-0.5 bg-luxury" />
            </div>
            <h1 className="text-5xl font-bold tracking-tight mb-6 text-luxury">Book Your Stay</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Reserve your perfect getaway at Serene Heaven. Book directly for our best rates and exclusive benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Wizard */}
      <section className="pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <BookingWizard />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-luxury">Why Book Direct with Us</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Enjoy exclusive benefits and the best rates when you book directly through our website.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-luxury transition-luxury">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-luxury/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-luxury" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-luxury">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-luxury">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Find answers to common questions about booking and staying at Serene Heaven.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What is your check-in and check-out time?",
                answer: "Check-in is at 3:00 PM and check-out is at 12:00 PM. Early check-in and late check-out may be available upon request."
              },
              {
                question: "Do you offer airport transfers?",
                answer: "Yes, we provide airport transfers for all guests. Please provide your flight details at least 48 hours prior to arrival."
              },
              {
                question: "Is breakfast included?",
                answer: "Yes, all room rates include our gourmet breakfast buffet featuring local and international cuisine."
              },
              {
                question: "What is your cancellation policy?",
                answer: "Free cancellation up to 48 hours before check-in. Cancellations within 48 hours may incur a one-night charge."
              },
              {
                question: "Are pets allowed?",
                answer: "Yes, we are pet-friendly! We welcome well-behaved pets up to 30 pounds for an additional fee of $50 per night."
              },
              {
                question: "Do you offer special packages?",
                answer: "Yes, we offer romantic, spa, and adventure packages. Please view our Specials page or contact our concierge for details."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-luxury transition-luxury">
                <CardContent className="p-0">
                  <h3 className="font-semibold mb-3 text-luxury">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}