import BookingForm from "@/components/hotel/BookingForm";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function BookingPage() {
  const benefits = [
    {
      title: "Best Rate Guarantee",
      description: "We promise you'll find the best rates directly through our website",
    },
    {
      title: "Flexible Cancellation",
      description: "Plans change, we understand. Enjoy free cancellation up to 48 hours before check-in",
    },
    {
      title: "Complimentary Upgrades",
      description: "When available, we'll upgrade your room for free",
    },
    {
      title: "Personalized Service",
      description: "Share your preferences and let us customize your stay",
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative bg-muted/30 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-6">Book Your Stay</h1>
            <p className="text-lg text-muted-foreground">
              Reserve your perfect getaway at Serene Haven. Book directly for our best rates and exclusive benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <BookingForm />

            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Why Book Direct</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-primary font-semibold">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{benefit.title}</h4>
                          <p className="text-muted-foreground text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Presidential Suite"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <p className="text-sm mb-1">Featured Accommodation</p>
                  <h3 className="text-xl font-bold mb-1">Presidential Suite</h3>
                  <p className="text-sm">Experience unparalleled luxury</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about booking and staying at Serene Haven.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What is your check-in and check-out time?</h3>
                <p className="text-muted-foreground">
                  Check-in is at 3:00 PM and check-out is at 12:00 PM. Early check-in and late check-out may be available upon request.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Do you offer airport transfers?</h3>
                <p className="text-muted-foreground">
                  Yes, we provide airport transfers for all guests. Please provide your flight details at least 48 hours prior to arrival.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Is breakfast included?</h3>
                <p className="text-muted-foreground">
                  Yes, all room rates include our gourmet breakfast buffet featuring local and international cuisine.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What is your cancellation policy?</h3>
                <p className="text-muted-foreground">
                  Free cancellation up to 48 hours before check-in. Cancellations within 48 hours may incur a one-night charge.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Are pets allowed?</h3>
                <p className="text-muted-foreground">
                  Yes, we are pet-friendly! We welcome well-behaved pets up to 30 pounds for an additional fee of $50 per night.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Do you offer special packages?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer romantic, spa, and adventure packages. Please view our Specials page or contact our concierge for details.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}