import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Waves, 
  Flower, 
  ChefHat, 
  Dumbbell, 
  Building, 
  Palmtree,
  Wifi,
  Car,
  Coffee,
  Utensils,
  Gamepad2,
  Baby
} from "lucide-react";

export default function AmenitiesPage() {
  const mainAmenities = [
    {
      id: 'infinity-pool',
      name: 'Infinity Pool',
      description: 'Stunning infinity pool overlooking the ocean with poolside service, luxury cabanas, and a swim-up bar.',
      icon: Waves,
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      category: 'recreation',
      features: ['Infinity Edge Design', 'Poolside Service', 'Luxury Cabanas', 'Swim-up Bar', 'Heated Pool'],
    },
    {
      id: 'luxury-spa',
      name: 'Serenity Spa',
      description: 'Award-winning spa offering rejuvenating treatments, massage therapy, and comprehensive wellness programs.',
      icon: Flower,
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      category: 'wellness',
      features: ['Couples Treatment Rooms', 'Aromatherapy', 'Hot Stone Massage', 'Facial Treatments', 'Wellness Programs'],
    },
    {
      id: 'fine-dining',
      name: 'Azure Restaurant',
      description: 'Michelin-starred fine dining featuring locally sourced ingredients and panoramic ocean views.',
      icon: ChefHat,
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      category: 'dining',
      features: ['Michelin Star Chef', 'Ocean Views', 'Local Ingredients', 'Wine Pairing', 'Private Dining'],
    },
    {
      id: 'fitness-center',
      name: 'Fitness Center',
      description: 'State-of-the-art fitness center with personal trainers, yoga classes, and modern equipment.',
      icon: Dumbbell,
      image: 'https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      category: 'wellness',
      features: ['Personal Trainers', 'Yoga Classes', 'Modern Equipment', 'Group Classes', '24/7 Access'],
    },
    {
      id: 'business-center',
      name: 'Business Center',
      description: 'Fully equipped business center with meeting rooms, conference facilities, and high-speed internet.',
      icon: Building,
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      category: 'business',
      features: ['Meeting Rooms', 'Conference Facilities', 'High-Speed Internet', 'Presentation Equipment', 'Catering Service'],
    },
    {
      id: 'beach-club',
      name: 'Private Beach Club',
      description: 'Exclusive beach access with water sports, beach service, and sunset cocktails.',
      icon: Palmtree,
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      category: 'recreation',
      features: ['Private Beach Access', 'Water Sports', 'Beach Service', 'Sunset Bar', 'Beachside Dining'],
    },
  ];

  const additionalServices = [
    { icon: Wifi, title: "Complimentary WiFi", description: "High-speed internet throughout the resort" },
    { icon: Car, title: "Valet Parking", description: "Complimentary valet parking service" },
    { icon: Coffee, title: "24/7 Room Service", description: "Gourmet dining delivered to your room" },
    { icon: Utensils, title: "Multiple Restaurants", description: "Diverse dining options from casual to fine dining" },
    { icon: Gamepad2, title: "Recreation Activities", description: "Tennis court, water sports, and entertainment" },
    { icon: Baby, title: "Family Services", description: "Kids club, babysitting, and family-friendly amenities" },
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
              <span>World-Class Facilities</span>
              <div className="w-8 h-0.5 bg-luxury" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-luxury">
              Resort Amenities
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover our comprehensive collection of luxury amenities and services designed to enhance 
              your stay and create unforgettable memories at Serene Heaven.
            </p>
          </div>
        </div>
      </section>

      {/* Main Amenities */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {mainAmenities.map((amenity, index) => (
              <div key={amenity.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-warm hover-lift">
                    <Image
                      src={amenity.image}
                      alt={amenity.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-luxury text-primary-foreground p-4 rounded-xl shadow-luxury">
                    <amenity.icon className="h-8 w-8" />
                  </div>
                </div>
                
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <div className="inline-flex items-center gap-2 text-luxury font-medium mb-4">
                      <div className="w-6 h-0.5 bg-luxury" />
                      <span className="capitalize">{amenity.category}</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-4 text-luxury">{amenity.name}</h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {amenity.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold text-luxury">Features & Services:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {amenity.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button asChild className="bg-luxury hover:bg-luxury/90 shadow-luxury transition-luxury">
                      <Link href={`/amenities/${amenity.id}`}>Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-luxury">Additional Services</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Enjoy these complimentary services and amenities included with your stay at Serene Heaven.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-luxury transition-luxury">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-luxury/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-luxury" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-luxury">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-luxury">Operating Hours</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Plan your day with our amenity operating hours and availability.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-luxury">Wellness & Recreation</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Serenity Spa</span>
                      <span className="text-muted-foreground">9:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fitness Center</span>
                      <span className="text-muted-foreground">24/7 Access</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Infinity Pool</span>
                      <span className="text-muted-foreground">6:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Private Beach Club</span>
                      <span className="text-muted-foreground">7:00 AM - Sunset</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-luxury">Dining & Services</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Azure Restaurant</span>
                      <span className="text-muted-foreground">6:00 PM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Room Service</span>
                      <span className="text-muted-foreground">24/7 Available</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Business Center</span>
                      <span className="text-muted-foreground">6:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Concierge</span>
                      <span className="text-muted-foreground">24/7 Available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-luxury text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience Our World-Class Amenities</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Book your stay today and enjoy access to all our premium facilities and services.
          </p>
          <Button size="lg" variant="secondary" asChild className="rounded-full px-8 py-6 text-lg bg-white/95 text-luxury hover:bg-white shadow-gold transition-luxury">
            <Link href="/booking">Reserve Your Experience</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}