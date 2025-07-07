import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Phone, Star, Utensils, Wine, Coffee, Waves } from "lucide-react";

export default function DiningPage() {
  const restaurants = [
    {
      id: 'azure-restaurant',
      name: 'Azure Restaurant',
      cuisine: 'Contemporary Fine Dining',
      description: 'Our flagship restaurant offers an exquisite culinary journey with locally sourced ingredients and innovative techniques.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      rating: 5,
      priceRange: '$$$',
      hours: {
        dinner: '6:00 PM - 11:00 PM',
        closed: 'Monday'
      },
      features: ['Michelin Star Chef', 'Ocean Views', 'Wine Pairing', 'Private Dining'],
      specialties: ['Fresh Seafood', 'Wagyu Beef', 'Seasonal Tasting Menu', 'Artisanal Desserts'],
      reservations: 'Required',
      dressCode: 'Smart Casual',
    },
    {
      id: 'sunset-terrace',
      name: 'Sunset Terrace',
      cuisine: 'Mediterranean & Grill',
      description: 'Casual outdoor dining with stunning sunset views, featuring Mediterranean flavors and grilled specialties.',
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      rating: 4.8,
      priceRange: '$$',
      hours: {
        lunch: '12:00 PM - 4:00 PM',
        dinner: '6:00 PM - 10:00 PM'
      },
      features: ['Sunset Views', 'Outdoor Seating', 'Live Music', 'Cocktail Bar'],
      specialties: ['Grilled Fish', 'Mediterranean Mezze', 'Wood-Fired Pizza', 'Craft Cocktails'],
      reservations: 'Recommended',
      dressCode: 'Casual',
    },
    {
      id: 'lobby-lounge',
      name: 'Lobby Lounge',
      cuisine: 'Light Bites & Cocktails',
      description: 'Elegant lounge perfect for afternoon tea, light meals, and signature cocktails in a sophisticated setting.',
      image: 'https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      rating: 4.7,
      priceRange: '$$',
      hours: {
        allDay: '10:00 AM - 12:00 AM'
      },
      features: ['All-Day Dining', 'Afternoon Tea', 'Live Piano', 'Business Meetings'],
      specialties: ['Afternoon Tea', 'Artisan Coffee', 'Premium Spirits', 'Light Tapas'],
      reservations: 'Walk-in Welcome',
      dressCode: 'Smart Casual',
    },
    {
      id: 'poolside-cafe',
      name: 'Poolside Café',
      cuisine: 'Casual Dining & Refreshments',
      description: 'Relaxed poolside dining with fresh salads, sandwiches, and tropical drinks perfect for a day by the pool.',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      rating: 4.5,
      priceRange: '$',
      hours: {
        breakfast: '7:00 AM - 11:00 AM',
        lunch: '11:00 AM - 6:00 PM'
      },
      features: ['Pool Views', 'Healthy Options', 'Quick Service', 'Tropical Drinks'],
      specialties: ['Fresh Salads', 'Gourmet Sandwiches', 'Smoothie Bowls', 'Frozen Cocktails'],
      reservations: 'Not Required',
      dressCode: 'Resort Casual',
    },
  ];

  const culinaryExperiences = [
    {
      title: 'Chef\'s Table Experience',
      description: 'Intimate dining experience with our executive chef featuring a personalized tasting menu.',
      price: 'From $150 per person',
      duration: '3 hours',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      title: 'Wine Tasting & Pairing',
      description: 'Guided wine tasting with our sommelier featuring premium selections and food pairings.',
      price: 'From $85 per person',
      duration: '2 hours',
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      title: 'Cooking Class',
      description: 'Learn to prepare signature dishes with our chef in our interactive cooking studio.',
      price: 'From $120 per person',
      duration: '3 hours',
      image: 'https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
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
              <span>Culinary Excellence</span>
              <div className="w-8 h-0.5 bg-luxury" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-luxury">
              Dining Experiences
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Embark on a culinary journey at Serene Heaven with our diverse dining venues, 
              each offering unique flavors and unforgettable experiences crafted by world-class chefs.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Restaurant */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-warm hover-lift">
                <Image
                  src={restaurants[0].image}
                  alt={restaurants[0].name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-luxury text-primary-foreground p-6 rounded-xl shadow-luxury max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(restaurants[0].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm opacity-90">Michelin Star Excellence</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-luxury font-medium mb-4">
                  <div className="w-6 h-0.5 bg-luxury" />
                  <span>Flagship Restaurant</span>
                </div>
                <h2 className="text-4xl font-bold mb-4 text-luxury">{restaurants[0].name}</h2>
                <p className="text-lg text-gold font-medium mb-2">{restaurants[0].cuisine}</p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {restaurants[0].description}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-semibold text-luxury">Specialties</p>
                  <ul className="space-y-1">
                    {restaurants[0].specialties.slice(0, 2).map((specialty, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-luxury">Features</p>
                  <ul className="space-y-1">
                    {restaurants[0].features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-luxury" />
                  <span className="text-sm">{restaurants[0].hours.dinner}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-luxury" />
                  <span className="text-sm">Reservations Required</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button asChild className="bg-luxury hover:bg-luxury/90 shadow-luxury transition-luxury">
                  <Link href="/contact">Make Reservation</Link>
                </Button>
                <Button variant="outline" asChild className="border-luxury/30 text-luxury hover:bg-luxury-light transition-luxury">
                  <Link href="#menu">View Menu</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Restaurants */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-luxury">Our Dining Venues</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From fine dining to casual poolside fare, discover our diverse collection of restaurants and bars, 
              each offering a unique culinary experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {restaurants.map((restaurant) => (
              <Card key={restaurant.id} className="overflow-hidden hover:shadow-luxury transition-luxury group">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={restaurant.image}
                    alt={restaurant.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-luxury/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {restaurant.priceRange}
                  </div>
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 fill-gold text-gold" />
                    <span className="text-sm font-medium">{restaurant.rating}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-luxury mb-1">{restaurant.name}</h3>
                    <p className="text-gold font-medium text-sm mb-2">{restaurant.cuisine}</p>
                    <p className="text-muted-foreground leading-relaxed">{restaurant.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-luxury" />
                      <span>
                        {restaurant.hours.allDay || 
                         `${restaurant.hours.lunch || restaurant.hours.breakfast || ''} ${restaurant.hours.dinner || ''}`.trim()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-luxury" />
                      <span>{restaurant.reservations}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {restaurant.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="text-xs bg-muted px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-4 border-t border-border/50">
                    <Button variant="outline" asChild className="flex-1 border-luxury/30 text-luxury hover:bg-luxury-light transition-luxury">
                      <Link href="#menu">Menu</Link>
                    </Button>
                    <Button asChild className="flex-1 bg-luxury hover:bg-luxury/90 shadow-luxury transition-luxury">
                      <Link href="/contact">Reserve</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culinary Experiences */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-luxury">Culinary Experiences</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Enhance your stay with our exclusive culinary experiences designed to delight food enthusiasts 
              and create lasting memories.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {culinaryExperiences.map((experience, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-luxury transition-luxury group">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-luxury mb-2">{experience.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Duration:</span>
                      <span className="text-sm font-medium">{experience.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Price:</span>
                      <span className="text-sm font-medium text-luxury">{experience.price}</span>
                    </div>
                  </div>
                  
                  <Button asChild className="w-full bg-luxury hover:bg-luxury/90 shadow-luxury transition-luxury">
                    <Link href="/contact">Book Experience</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Features */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-luxury">Why Dine With Us</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to culinary excellence extends beyond just great food to create memorable dining experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Utensils, title: "Farm-to-Table", description: "Fresh, locally sourced ingredients" },
              { icon: Wine, title: "Curated Wine List", description: "Premium wines from around the world" },
              { icon: Coffee, title: "Artisan Coffee", description: "Specialty coffee and tea selections" },
              { icon: Waves, title: "Ocean Views", description: "Stunning waterfront dining locations" },
            ].map((feature, index) => (
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

      {/* Hours & Information */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-luxury">Dining Hours & Information</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Plan your culinary journey with our restaurant hours and dining policies.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-luxury">Restaurant Hours</h3>
                  <div className="space-y-3">
                    {restaurants.map((restaurant) => (
                      <div key={restaurant.id} className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{restaurant.name}</p>
                          <p className="text-sm text-muted-foreground">{restaurant.cuisine}</p>
                        </div>
                        <div className="text-right text-sm">
                          {restaurant.hours.allDay && <p>{restaurant.hours.allDay}</p>}
                          {restaurant.hours.breakfast && <p>Breakfast: {restaurant.hours.breakfast}</p>}
                          {restaurant.hours.lunch && <p>Lunch: {restaurant.hours.lunch}</p>}
                          {restaurant.hours.dinner && <p>Dinner: {restaurant.hours.dinner}</p>}
                          {restaurant.hours.closed && <p className="text-muted-foreground">Closed: {restaurant.hours.closed}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 text-luxury">Dining Policies</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">Reservations</p>
                      <p className="text-muted-foreground">Recommended for all restaurants, required for Azure Restaurant</p>
                    </div>
                    <div>
                      <p className="font-medium">Dress Code</p>
                      <p className="text-muted-foreground">Smart casual for fine dining, resort casual for poolside</p>
                    </div>
                    <div>
                      <p className="font-medium">Dietary Requirements</p>
                      <p className="text-muted-foreground">Vegetarian, vegan, and gluten-free options available</p>
                    </div>
                    <div>
                      <p className="font-medium">Private Dining</p>
                      <p className="text-muted-foreground">Available for special occasions and business meetings</p>
                    </div>
                    <div>
                      <p className="font-medium">Room Service</p>
                      <p className="text-muted-foreground">Available 24/7 with extensive menu options</p>
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
          <h2 className="text-4xl font-bold mb-6">Savor Unforgettable Flavors</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Reserve your table today and embark on a culinary journey that will delight your senses and create lasting memories.
          </p>
          <Button size="lg" variant="secondary" asChild className="rounded-full px-8 py-6 text-lg bg-white/95 text-luxury hover:bg-white shadow-gold transition-luxury">
            <Link href="/contact">Make a Reservation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}