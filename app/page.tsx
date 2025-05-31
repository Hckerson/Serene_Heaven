import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import RoomCard from "@/components/hotel/RoomCard";
import TestimonialCarousel from "@/components/hotel/TestimonialCarousel";
import AmenityGrid from "@/components/hotel/AmenityGrid";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Luxury hotel exterior"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Welcome to Serene Haven
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience luxury redefined in our award-winning hotel and spa retreat
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="rounded-full px-8">
              <Link href="/booking">Book Your Stay</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-full px-8 text-white border-white hover:bg-white/20 hover:text-white">
              <Link href="/about">Explore More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Luxury Escape Awaits</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nestled between pristine beaches and lush landscapes, Serene Haven offers an unparalleled experience of luxury and comfort. Our dedicated staff ensures that every moment of your stay is nothing short of extraordinary.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From world-class dining to rejuvenating spa treatments, we have crafted every aspect of our hotel to provide you with a truly remarkable getaway.
              </p>
              <Button variant="default" asChild className="gap-2 group">
                <Link href="/about">
                  Discover Our Story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Hotel lobby"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <p className="font-semibold">20+ Years of Excellence</p>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Accommodations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our selection of luxurious rooms and suites, designed for your ultimate comfort and relaxation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RoomCard 
              title="Deluxe Ocean View"
              description="Wake up to breathtaking ocean views in our spacious deluxe room."
              price={299}
              image="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              amenities={["King Bed", "Ocean View", "Free WiFi", "Rainfall Shower"]}
              href="/rooms/deluxe-ocean"
            />
            <RoomCard 
              title="Garden Suite"
              description="Immerse yourself in tranquility with direct access to our lush gardens."
              price={399}
              image="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              amenities={["King Bed", "Garden View", "Sitting Area", "Spa Bath"]}
              href="/rooms/garden-suite"
            />
            <RoomCard 
              title="Presidential Suite"
              description="Experience unparalleled luxury in our flagship presidential suite."
              price={899}
              image="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              amenities={["King Bed", "Panoramic View", "Private Terrace", "Butler Service"]}
              href="/rooms/presidential-suite"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/rooms">View All Rooms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Amenities Highlight */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Exceptional Amenities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Indulge in our premium facilities designed to enhance your stay and create unforgettable memories.
            </p>
          </div>
          
          <AmenityGrid />
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/amenities">Explore All Amenities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Guest Experiences</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear what our guests have to say about their memorable stays at Serene Haven.
            </p>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for an Unforgettable Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your stay today and let us create magical moments for you.
          </p>
          <Button size="lg" variant="secondary" asChild className="rounded-full px-8">
            <Link href="/booking">Book Your Escape Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}