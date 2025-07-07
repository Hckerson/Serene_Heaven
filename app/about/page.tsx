import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-muted/30 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-6">About Serene Haven</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Founded in 2005, Serene Haven has been the epitome of luxury hospitality for over two decades. Our commitment to excellence and personalized service has earned us a reputation as one of the world's premier luxury destinations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/rooms">Explore Our Rooms</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Serene Haven Hotel Exterior"
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              The journey of Serene Haven began with a vision to create a sanctuary where luxury meets tranquility. What started as a boutique hotel has evolved into an award-winning destination that continues to set the standard for exceptional hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">The Beginning</h3>
              <p className="text-muted-foreground">
                In 2005, our founder envisioned a retreat that would combine luxury with the natural beauty of our location. The original building was renovated with meticulous attention to detail.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth & Recognition</h3>
              <p className="text-muted-foreground">
                By 2010, we had expanded to include our signature spa and received our first international award for excellence in hospitality and guest satisfaction.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Today & Beyond</h3>
              <p className="text-muted-foreground">
                Today, Serene Haven is a destination of choice for discerning travelers worldwide. We continue to innovate while honoring our commitment to personalized service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Mission */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Our Values & Mission</h2>
              <p className="text-lg mb-6">
                At Serene Haven, we believe that true luxury is found in personalized experiences that rejuvenate the mind, body, and soul. Our mission is to provide an oasis of tranquility where every guest feels valued and pampered.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary font-semibold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                    <p className="text-muted-foreground">
                      We strive for excellence in every aspect of our service, from the cleanliness of our rooms to the quality of our dining experiences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary font-semibold">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personalization</h3>
                    <p className="text-muted-foreground">
                      We believe that each guest is unique, and we tailor our services to meet individual preferences and needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary font-semibold">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                    <p className="text-muted-foreground">
                      We are committed to sustainable practices that respect and preserve the natural environment that surrounds us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <Image
                src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Serene Haven Lobby"
                width={600}
                height={800}
                className="rounded-lg shadow-xl object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-lg shadow-lg max-w-xs">
                <p className="text-lg font-semibold mb-2">Our Promise</p>
                <p className="text-muted-foreground">
                  "Every stay at Serene Haven is designed to exceed expectations and create lasting memories."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              Meet the dedicated team behind Serene Haven's commitment to excellence and exceptional hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-[3/4] relative">
                <Image
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Elizabeth Morgan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Elizabeth Morgan</h3>
                <p className="text-primary mb-3">CEO & Founder</p>
                <p className="text-muted-foreground">
                  With over 25 years in luxury hospitality, Elizabeth's vision and leadership have been the driving force behind Serene Haven's success.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-[3/4] relative">
                <Image
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="James Chen"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">James Chen</h3>
                <p className="text-primary mb-3">Operations Director</p>
                <p className="text-muted-foreground">
                  James ensures that every aspect of Serene Haven operates seamlessly to deliver the exceptional experience our guests expect.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-[3/4] relative">
                <Image
                  src="https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Sophia Rodriguez"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Sophia Rodriguez</h3>
                <p className="text-primary mb-3">Guest Experience Manager</p>
                <p className="text-muted-foreground">
                  Sophia and her team are dedicated to creating personalized experiences that exceed our guests' expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Awards & Recognition</h2>
            <p className="text-lg text-muted-foreground">
              Serene Haven has been recognized for excellence in hospitality by leading industry organizations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4">
                <div className="w-full h-full bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">★</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Five Star Excellence</h3>
              <p className="text-muted-foreground">
                Forbes Travel Guide<br />2022 - 2025
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4">
                <div className="w-full h-full bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">🏆</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Luxury Resort</h3>
              <p className="text-muted-foreground">
                World Travel Awards<br />2021, 2023
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4">
                <div className="w-full h-full bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">🥂</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fine Dining Excellence</h3>
              <p className="text-muted-foreground">
                Michelin Guide<br />2020 - 2025
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4">
                <div className="w-full h-full bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">💆</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Hotel Spa</h3>
              <p className="text-muted-foreground">
                Condé Nast Traveler<br />2019, 2022, 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Serene Haven</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable stay where luxury and tranquility create the perfect retreat.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/booking">Book Your Stay Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}