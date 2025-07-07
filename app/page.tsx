import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Calendar, Users, Award } from "lucide-react";
import RoomCard from "@/components/hotel/RoomCard";
import TestimonialCarousel from "@/components/hotel/TestimonialCarousel";
import AmenityGrid from "@/components/hotel/AmenityGrid";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Serene Heaven luxury hotel exterior"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        
        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-gold rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-luxury rounded-full animate-pulse opacity-40 delay-1000" />
        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-gold rounded-full animate-pulse opacity-50 delay-500" />
        
        <div className="container mx-auto px-4 z-10 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              <Award className="h-4 w-4 text-gold" />
              <span>Award-Winning Luxury Resort</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Welcome to
              <span className="block text-gold">Serene Heaven</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Where luxury meets tranquility in an unforgettable boutique experience. 
              Discover your perfect escape in our award-winning resort.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" asChild className="rounded-full px-8 py-6 text-lg bg-luxury hover:bg-luxury/90 shadow-luxury transition-luxury">
                <Link href="/booking">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Stay
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full px-8 py-6 text-lg text-white border-white/70 hover:bg-white/10 hover:text-white hover:border-white transition-luxury">
                <Link href="/gallery">
                  Explore Gallery
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">20+</div>
                <div className="text-sm opacity-80">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">50+</div>
                <div className="text-sm opacity-80">Luxury Suites</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">98%</div>
                <div className="text-sm opacity-80">Guest Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-gradient-warm relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-luxury/5 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full translate-y-24 -translate-x-24" />
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 text-luxury font-medium">
                <div className="w-8 h-0.5 bg-luxury" />
                <span>Boutique Luxury</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-luxury leading-tight">
                Your Sanctuary of 
                <span className="text-gold"> Elegance</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nestled between pristine coastlines and lush landscapes, Serene Heaven offers an unparalleled experience of luxury and comfort. Our dedicated team ensures that every moment of your stay is nothing short of extraordinary.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                From world-class dining to rejuvenating spa treatments, we have crafted every aspect of our resort to provide you with a truly remarkable getaway that will create memories to last a lifetime.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild className="gap-2 group bg-luxury hover:bg-luxury/90 shadow-luxury transition-luxury">
                  <Link href="/about">
                    Discover Our Story
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="border-luxury/30 text-luxury hover:bg-luxury-light transition-luxury">
                  <Link href="/amenities">
                    <Users className="w-4 h-4 mr-2" />
                    View Amenities
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-warm hover-lift">
                  <Image
                    src="https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="Serene Heaven luxury hotel lobby"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                
                {/* Floating card */}
                <div className="absolute -bottom-8 -left-8 bg-luxury text-primary-foreground p-6 rounded-xl shadow-luxury max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <span className="text-sm font-medium">5.0 Rating</span>
                  </div>
                  <p className="text-sm opacity-90">
                    "An absolutely magical experience that exceeded all our expectations."
                  </p>
                  <p className="text-xs opacity-75 mt-2">- Recent Guest Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-luxury font-medium mb-4">
              <div className="w-8 h-0.5 bg-luxury" />
              <span>Luxury Accommodations</span>
              <div className="w-8 h-0.5 bg-luxury" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-luxury">Featured Suites & Rooms</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our selection of luxurious accommodations, each thoughtfully designed for your ultimate comfort and relaxation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RoomCard 
              title="Deluxe Ocean View"
              description="Wake up to breathtaking ocean views in our spacious deluxe room with premium amenities."
              price={299}
              image="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              amenities={["Ocean View", "King Bed", "Free WiFi", "Rainfall Shower"]}
              href="/rooms/deluxe-ocean"
            />
            <RoomCard 
              title="Garden Suite"
              description="Immerse yourself in tranquility with direct access to our lush gardens and private terrace."
              price={399}
              image="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              amenities={["Garden View", "King Bed", "Living Area", "Spa Bath"]}
              href="/rooms/garden-suite"
            />
            <RoomCard 
              title="Presidential Suite"
              description="Experience unparalleled luxury in our flagship presidential suite with panoramic views."
              price={899}
              image="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              amenities={["Panoramic View", "King Bed", "Private Terrace", "Butler Service"]}
              href="/rooms/presidential-suite"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-luxury hover:bg-luxury/90 shadow-luxury transition-luxury px-8">
              <Link href="/rooms">
                View All Accommodations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Amenities Highlight */}
      <section className="py-24 bg-gradient-warm relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gold/5 rounded-full -translate-y-36 -translate-x-36" />
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-luxury/5 rounded-full translate-y-28 translate-x-28" />
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-luxury font-medium mb-4">
              <div className="w-8 h-0.5 bg-luxury" />
              <span>World-Class Facilities</span>
              <div className="w-8 h-0.5 bg-luxury" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-luxury">Exceptional Amenities</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Indulge in our premium facilities designed to enhance your stay and create unforgettable memories.
            </p>
          </div>
          
          <AmenityGrid />
          
          <div className="text-center mt-12">
            <Button asChild className="bg-luxury hover:bg-luxury/90 shadow-luxury transition-luxury px-8">
              <Link href="/amenities">
                Explore All Amenities
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-luxury font-medium mb-4">
              <div className="w-8 h-0.5 bg-luxury" />
              <span>Guest Stories</span>
              <div className="w-8 h-0.5 bg-luxury" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-luxury">What Our Guests Say</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Hear from our valued guests about their memorable experiences at Serene Heaven.
            </p>
          </div>
          
          <TestimonialCarousel />
          
          <div className="text-center mt-12">
            <Button variant="outline" asChild className="border-luxury/30 text-luxury hover:bg-luxury-light transition-luxury px-8">
              <Link href="/testimonials">
                Read More Reviews
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-luxury text-primary-foreground relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full" />
          <div className="absolute top-32 right-20 w-16 h-16 border border-white/20 rounded-full" />
          <div className="absolute bottom-20 left-32 w-12 h-12 border border-white/20 rounded-full" />
          <div className="absolute bottom-32 right-16 w-24 h-24 border border-white/20 rounded-full" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready for an Unforgettable Experience?
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Book your stay today and let us create magical moments that will last a lifetime.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" asChild className="rounded-full px-8 py-6 text-lg bg-white/95 text-luxury hover:bg-white shadow-gold transition-luxury">
                <Link href="/booking">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Escape Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full px-8 py-6 text-lg border-white/70 text-white hover:bg-white/10 transition-luxury">
                <Link href="/contact">
                  Contact Our Concierge
                </Link>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">24/7</div>
                <div className="text-sm opacity-80">Concierge Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">Free</div>
                <div className="text-sm opacity-80">Cancellation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">Best</div>
                <div className="text-sm opacity-80">Rate Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}