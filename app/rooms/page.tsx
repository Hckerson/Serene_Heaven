import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import RoomCard from "@/components/hotel/RoomCard";

export default function RoomsPage() {
  const rooms = [
    {
      title: "Deluxe Room",
      description: "Our spacious deluxe rooms offer a blend of comfort and elegance with views of the surrounding landscape.",
      price: 249,
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      amenities: ["King Bed", "City View", "Free WiFi", "Minibar"],
      href: "/rooms/deluxe-room",
    },
    {
      title: "Deluxe Ocean View",
      description: "Wake up to breathtaking ocean views in our spacious deluxe rooms with premium amenities.",
      price: 299,
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      amenities: ["King Bed", "Ocean View", "Free WiFi", "Rainfall Shower"],
      href: "/rooms/deluxe-ocean",
    },
    {
      title: "Premium Garden View",
      description: "Relax in a serene atmosphere with views of our lush garden landscape from your private balcony.",
      price: 279,
      image: "https://images.pexels.com/photos/97083/pexels-photo-97083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      amenities: ["Queen Bed", "Garden View", "Balcony", "Work Desk"],
      href: "/rooms/premium-garden",
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
      title: "Junior Suite",
      description: "Experience elevated comfort in our junior suites with separate living areas and premium amenities.",
      price: 379,
      image: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      amenities: ["King Bed", "Lounge Area", "Premium Bath", "Nespresso Machine"],
      href: "/rooms/junior-suite",
    },
    {
      title: "Executive Suite",
      description: "Indulge in the spacious elegance of our executive suites with separate bedroom and living areas.",
      price: 549,
      image: "https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      amenities: ["King Bed", "Living Room", "Work Area", "Premium Amenities"],
      href: "/rooms/executive-suite",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-muted/30 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-6">Our Rooms & Accommodations</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover our range of luxurious rooms and suites designed for your comfort and relaxation. Each space is thoughtfully appointed with premium amenities and elegant décor.
            </p>
            <Button asChild>
              <Link href="/booking">Check Availability</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Room */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Presidential Suite"
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <p className="font-semibold">Most Popular</p>
                <p className="text-sm">Booked 38 times this month</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Presidential Suite</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our flagship accommodation offers unparalleled luxury with panoramic views, a private terrace, and exclusive amenities. Experience the pinnacle of hospitality in our meticulously designed presidential suite.
              </p>
              <ul className="grid grid-cols-2 gap-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  King Bed
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  Panoramic View
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  Private Terrace
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  Butler Service
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  Living Room
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  Dining Area
                </li>
              </ul>
              <div className="flex items-center mb-6">
                <p className="text-3xl font-bold">$899</p>
                <span className="text-sm text-muted-foreground ml-2">/night</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/booking">Book Now</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/rooms/presidential-suite">View Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Rooms */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">All Accommodations</h2>
            <p className="text-lg text-muted-foreground">
              Browse our selection of rooms and suites, each designed with your comfort in mind. From cozy standard rooms to luxurious suites, we have the perfect space for your stay.
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

      {/* Room Comparison */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Compare Our Rooms</h2>
            <p className="text-lg text-muted-foreground">
              See which accommodation best suits your needs with our easy comparison chart.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Room Type</th>
                  <th className="p-4">Size</th>
                  <th className="p-4">Occupancy</th>
                  <th className="p-4">Bed</th>
                  <th className="p-4">View</th>
                  <th className="p-4">Price</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-muted/30">
                  <td className="p-4 font-medium">Deluxe Room</td>
                  <td className="p-4 text-center">35 m²</td>
                  <td className="p-4 text-center">2 Adults</td>
                  <td className="p-4 text-center">King</td>
                  <td className="p-4 text-center">City</td>
                  <td className="p-4 text-center font-semibold">$249</td>
                  <td className="p-4 text-center">
                    <Button size="sm" variant="outline" asChild>
                      <Link href="/booking">Book</Link>
                    </Button>
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/30">
                  <td className="p-4 font-medium">Deluxe Ocean View</td>
                  <td className="p-4 text-center">40 m²</td>
                  <td className="p-4 text-center">2 Adults</td>
                  <td className="p-4 text-center">King</td>
                  <td className="p-4 text-center">Ocean</td>
                  <td className="p-4 text-center font-semibold">$299</td>
                  <td className="p-4 text-center">
                    <Button size="sm" variant="outline" asChild>
                      <Link href="/booking">Book</Link>
                    </Button>
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/30">
                  <td className="p-4 font-medium">Junior Suite</td>
                  <td className="p-4 text-center">55 m²</td>
                  <td className="p-4 text-center">2 Adults</td>
                  <td className="p-4 text-center">King</td>
                  <td className="p-4 text-center">Mixed</td>
                  <td className="p-4 text-center font-semibold">$379</td>
                  <td className="p-4 text-center">
                    <Button size="sm" variant="outline" asChild>
                      <Link href="/booking">Book</Link>
                    </Button>
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/30">
                  <td className="p-4 font-medium">Family Suite</td>
                  <td className="p-4 text-center">70 m²</td>
                  <td className="p-4 text-center">4 People</td>
                  <td className="p-4 text-center">King + Twin</td>
                  <td className="p-4 text-center">Mixed</td>
                  <td className="p-4 text-center font-semibold">$449</td>
                  <td className="p-4 text-center">
                    <Button size="sm" variant="outline" asChild>
                      <Link href="/booking">Book</Link>
                    </Button>
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/30">
                  <td className="p-4 font-medium">Executive Suite</td>
                  <td className="p-4 text-center">85 m²</td>
                  <td className="p-4 text-center">2 Adults</td>
                  <td className="p-4 text-center">King</td>
                  <td className="p-4 text-center">Premium</td>
                  <td className="p-4 text-center font-semibold">$549</td>
                  <td className="p-4 text-center">
                    <Button size="sm" variant="outline" asChild>
                      <Link href="/booking">Book</Link>
                    </Button>
                  </td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="p-4 font-medium">Presidential Suite</td>
                  <td className="p-4 text-center">120 m²</td>
                  <td className="p-4 text-center">2 Adults</td>
                  <td className="p-4 text-center">King</td>
                  <td className="p-4 text-center">Panoramic</td>
                  <td className="p-4 text-center font-semibold">$899</td>
                  <td className="p-4 text-center">
                    <Button size="sm" variant="outline" asChild>
                      <Link href="/booking">Book</Link>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Luxury Accommodations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book directly with us for the best rates and exclusive benefits.
          </p>
          <Button size="lg" variant="secondary" asChild className="rounded-full px-8">
            <Link href="/booking">Check Availability Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}