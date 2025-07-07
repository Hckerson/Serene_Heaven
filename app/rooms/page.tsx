import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import RoomCard from "@/components/hotel/RoomCard";
import { Bed, Users, Maximize, Eye, Wifi, Car, Coffee, Dumbbell } from "lucide-react";

export default function RoomsPage() {
  const rooms = [
    {
      title: "Standard Room",
      description: "Comfortable and elegant standard room perfect for business travelers and couples seeking quality accommodation.",
      price: 199,
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      amenities: ["City View", "Queen Bed", "Free WiFi", "Work Desk"],
      href: "/rooms/standard-room",
    },
    {
      title: "Deluxe Room",
      description: "Our spacious deluxe rooms offer a blend of comfort and elegance with enhanced amenities and city views.",
      price: 249,
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      amenities: ["City View", "King Bed", "Free WiFi", "Minibar"],
      href: "/rooms/deluxe-room",
    },
    {
      title: "Deluxe Ocean View",
      description: "Wake up to breathtaking ocean views in our spacious deluxe rooms with premium amenities and elegant décor.",
      price: 299,
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      amenities: ["Ocean View", "King Bed", "Free WiFi", "Rainfall Shower"],
      href: "/rooms/deluxe-ocean",
    },
    {
      title: "Premium Garden View",
      description: "Relax in a serene atmosphere with views of our lush garden landscape from your private balcony.",
      price: 279,
      image: "https://images.pexels.com/photos/97083/pexels-photo-97083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      amenities: ["Garden View", "Queen Bed", "Balcony", "Work Desk"],
      href: "/rooms/premium-garden",
    },
    {
      title: "Junior Suite",
      description: "Experience elevated comfort in our junior suites with separate living areas and premium amenities.",
      price: 379,
      image: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      amenities: ["King Bed", "Lounge Area", "Premium Bath", "Nespresso Machine"],
      href: "/rooms/junior-suite",
    },
    {
      title: "Family Suite",
      description: "Perfect for families, our spacious suites feature separate living areas and comfortable accommodations for everyone.",
      price: 449,
      image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      amenities: ["King + Twin Beds", "Living Area", "Two Bathrooms", "Entertainment System"],
      href: "/rooms/family-suite",
    },
    {
      title: "Executive Suite",
      description: "Indulge in the spacious elegance of our executive suites with separate bedroom and living areas.",
      price: 549,
      image: "https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      amenities: ["King Bed", "Living Room", "Work Area", "Premium Amenities"],
      href: "/rooms/executive-suite",
    },
    {
      title: "Presidential Suite",
      description: "Experience unparalleled luxury in our flagship presidential suite with panoramic views and exclusive amenities.",
      price: 899,
      image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      amenities: ["Panoramic View", "King Bed", "Private Terrace", "Butler Service"],
      href: "/rooms/presidential-suite",
    },
  ];

  const roomFeatures = [
    { icon: Wifi, title: "Complimentary WiFi", description: "High-speed internet throughout the resort" },
    { icon: Car, title: "Valet Parking", description: "Complimentary valet parking service" },
    { icon: Coffee, title: "24/7 Room Service", description: "Gourmet dining delivered to your room" },
    { icon: Dumbbell, title: "Fitness Access", description: "Complimentary access to our fitness center" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-warm py-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-luxury/5 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full translate-y-24 -translate-x-24" />
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-luxury font-medium mb-6">
              <div className="w-8 h-0.5 bg-luxury" />
              <span>Luxury Accommodations</span>
              <div className="w-8 h-0.5 bg-luxury" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-luxury">
              Rooms & Suites
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover our range of luxurious accommodations, each thoughtfully designed for your comfort and relaxation. 
              Every space features premium amenities and elegant décor.
            </p>
            <Button asChild size="lg" className="bg-luxury hover:bg-luxury/90 shadow-luxury transition-luxury px-8">
              <Link href="/booking">Check Availability</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Room */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-warm hover-lift">
                <Image
                  src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Presidential Suite"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-luxury text-primary-foreground p-6 rounded-xl shadow-luxury max-w-xs">
                <p className="font-semibold mb-2">Most Popular Choice</p>
                <p className="text-sm opacity-90">Booked 47 times this month</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-luxury font-medium mb-4">
                  <div className="w-6 h-0.5 bg-luxury" />
                  <span>Signature Suite</span>
                </div>
                <h2 className="text-4xl font-bold mb-4 text-luxury">Presidential Suite</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our flagship accommodation offers unparalleled luxury with panoramic views, a private terrace, 
                  and exclusive amenities. Experience the pinnacle of hospitality in our meticulously designed presidential suite.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-luxury/10 rounded-full flex items-center justify-center">
                    <Bed className="h-5 w-5 text-luxury" />
                  </div>
                  <div>
                    <p className="font-medium">King Bed</p>
                    <p className="text-sm text-muted-foreground">Premium bedding</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-luxury/10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-luxury" />
                  </div>
                  <div>
                    <p className="font-medium">Up to 4 Guests</p>
                    <p className="text-sm text-muted-foreground">Spacious layout</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-luxury/10 rounded-full flex items-center justify-center">
                    <Maximize className="h-5 w-5 text-luxury" />
                  </div>
                  <div>
                    <p className="font-medium">120 m²</p>
                    <p className="text-sm text-muted-foreground">Generous space</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-luxury/10 rounded-full flex items-center justify-center">
                    <Eye className="h-5 w-5 text-luxury" />
                  </div>
                  <div>
                    <p className="font-medium">Panoramic View</p>
                    <p className="text-sm text-muted-foreground">Ocean & garden</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 pt-4">
                <div>
                  <p className="text-4xl font-bold text-luxury">$899</p>
                  <span className="text-sm text-muted-foreground">per night</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="bg-luxury hover:bg-luxury/90 shadow-luxury transition-luxury">
                    <Link href="/booking">Book Now</Link>
                  </Button>
                  <Button variant="outline" asChild className="border-luxury/30 text-luxury hover:bg-luxury-light transition-luxury">
                    <Link href="/rooms/presidential-suite">View Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Rooms */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-luxury">All Accommodations</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Browse our complete selection of rooms and suites, each designed with your comfort in mind. 
              From cozy standard rooms to luxurious suites, we have the perfect space for your stay.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <RoomCard 
                key={index}
                title={room.title}
                description={room.description}
                price={room.price}
                image={room.image}
                amenities={room.amenities}
                href={room.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Room Features */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-luxury">Included with Every Stay</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every room and suite at Serene Heaven includes these premium amenities and services at no additional cost.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roomFeatures.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-luxury transition-luxury">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-luxury/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-luxury" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-luxury">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Room Comparison */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-luxury">Compare Our Rooms</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              See which accommodation best suits your needs with our easy comparison chart.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <div className="min-w-full bg-background rounded-lg shadow-warm overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="text-left p-4 font-semibold">Room Type</th>
                    <th className="p-4 font-semibold">Size</th>
                    <th className="p-4 font-semibold">Occupancy</th>
                    <th className="p-4 font-semibold">Bed</th>
                    <th className="p-4 font-semibold">View</th>
                    <th className="p-4 font-semibold">Price</th>
                    <th className="p-4 font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Standard Room", size: "28 m²", occupancy: "2 Adults", bed: "Queen", view: "City", price: "$199" },
                    { name: "Deluxe Room", size: "35 m²", occupancy: "2 Adults", bed: "King", view: "City", price: "$249" },
                    { name: "Deluxe Ocean View", size: "40 m²", occupancy: "2 Adults", bed: "King", view: "Ocean", price: "$299" },
                    { name: "Junior Suite", size: "55 m²", occupancy: "2 Adults", bed: "King", view: "Mixed", price: "$379" },
                    { name: "Family Suite", size: "70 m²", occupancy: "4 People", bed: "King + Twin", view: "Mixed", price: "$449" },
                    { name: "Executive Suite", size: "85 m²", occupancy: "2 Adults", bed: "King", view: "Premium", price: "$549" },
                    { name: "Presidential Suite", size: "120 m²", occupancy: "4 People", bed: "King", view: "Panoramic", price: "$899" },
                  ].map((room, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="p-4 font-medium">{room.name}</td>
                      <td className="p-4 text-center">{room.size}</td>
                      <td className="p-4 text-center">{room.occupancy}</td>
                      <td className="p-4 text-center">{room.bed}</td>
                      <td className="p-4 text-center">{room.view}</td>
                      <td className="p-4 text-center font-semibold text-luxury">{room.price}</td>
                      <td className="p-4 text-center">
                        <Button size="sm" variant="outline" asChild className="border-luxury/30 text-luxury hover:bg-luxury-light transition-luxury">
                          <Link href="/booking">Book</Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-luxury text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Our Luxury Accommodations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Book directly with us for the best rates and exclusive benefits including complimentary upgrades and late checkout.
          </p>
          <Button size="lg" variant="secondary" asChild className="rounded-full px-8 py-6 text-lg bg-white/95 text-luxury hover:bg-white shadow-gold transition-luxury">
            <Link href="/booking">Check Availability Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}