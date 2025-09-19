import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Gift, Percent, Star, Users } from "lucide-react";

export default function SpecialsPage() {
  const specialOffers = [
    {
      id: 'summer-escape',
      title: 'Summer Escape Package',
      description: 'Enjoy 3 nights with breakfast, spa credit, and complimentary beach activities.',
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      originalPrice: 899,
      discountPrice: 699,
      discount: 22,
      validUntil: '2024-08-31',
      includes: ['Daily Breakfast', '$200 Spa Credit', 'Beach Activities', 'Late Checkout'],
      category: 'seasonal',
      featured: true,
    },
    {
      id: 'romantic-getaway',
      title: 'Romantic Getaway',
      description: 'Perfect for couples with champagne, roses, and couples spa treatment.',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      originalPrice: 1299,
      discountPrice: 999,
      discount: 23,
      validUntil: '2024-12-31',
      includes: ['Champagne & Roses', 'Couples Massage', 'Private Dinner', 'Ocean View Suite'],
      category: 'romance',
      featured: true,
    },
    {
      id: 'wellness-retreat',
      title: 'Wellness Retreat',
      description: '5-day wellness program with yoga, meditation, and healthy cuisine.',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      originalPrice: 1899,
      discountPrice: 1499,
      discount: 21,
      validUntil: '2024-10-31',
      includes: ['Daily Yoga Classes', 'Spa Treatments', 'Healthy Meals', 'Meditation Sessions'],
      category: 'wellness',
      featured: false,
    },
    {
      id: 'family-fun',
      title: 'Family Fun Package',
      description: 'Family-friendly package with kids activities and family suite.',
      image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      originalPrice: 799,
      discountPrice: 599,
      discount: 25,
      validUntil: '2024-09-30',
      includes: ['Family Suite', 'Kids Club Access', 'Family Activities', 'Welcome Gifts'],
      category: 'family',
      featured: false,
    },
    {
      id: 'business-traveler',
      title: 'Business Traveler Special',
      description: 'Extended stay package for business travelers with meeting room access.',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      originalPrice: 299,
      discountPrice: 249,
      discount: 17,
      validUntil: '2024-12-31',
      includes: ['Meeting Room Access', 'Business Center', 'Express Laundry', 'Late Checkout'],
      category: 'business',
      featured: false,
    },
    {
      id: 'early-bird',
      title: 'Early Bird Booking',
      description: 'Book 60 days in advance and save up to 30% on your stay.',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      originalPrice: 399,
      discountPrice: 279,
      discount: 30,
      validUntil: '2024-12-31',
      includes: ['30% Discount', 'Free Cancellation', 'Room Upgrade', 'Welcome Drink'],
      category: 'advance',
      featured: false,
    },
  ];

  const featuredOffers = specialOffers.filter(offer => offer.featured);
  const regularOffers = specialOffers.filter(offer => !offer.featured);

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
              <span>Exclusive Offers</span>
              <div className="w-8 h-0.5 bg-luxury" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-luxury">
              Special Packages
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover our curated collection of special offers and packages designed to enhance your stay 
              at Serene Heaven. From romantic getaways to wellness retreats, find the perfect experience.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Offers */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-luxury font-medium mb-4">
              <div className="w-8 h-0.5 bg-luxury" />
              <span>Limited Time</span>
              <div className="w-8 h-0.5 bg-luxury" />
            </div>
            <h2 className="text-4xl font-bold mb-6 text-luxury">Featured Offers</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don't miss these exclusive packages with exceptional value and unforgettable experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredOffers.map((offer) => (
              <Card key={offer.id} className="overflow-hidden hover:shadow-luxury transition-luxury group">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-luxury text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                  <div className="absolute top-4 right-4 bg-gold text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                    {offer.discount}% OFF
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-luxury">{offer.title}</h3>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground line-through">
                        ${offer.originalPrice}
                      </div>
                      <div className="text-xl font-bold text-luxury">
                        ${offer.discountPrice}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {offer.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-luxury mb-2">Package Includes:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {offer.includes.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Valid until {new Date(offer.validUntil).toLocaleDateString()}</span>
                    </div>
                    <Button asChild className="bg-luxury hover:bg-luxury/90 shadow-luxury transition-luxury">
                      <Link href="/booking">Book Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Offers */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-luxury">All Special Offers</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Browse our complete collection of packages and find the perfect offer for your next stay.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularOffers.map((offer) => (
              <Card key={offer.id} className="overflow-hidden hover:shadow-luxury transition-luxury group">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-luxury/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                    {offer.discount}% OFF
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-luxury">{offer.title}</h3>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground line-through">
                        ${offer.originalPrice}
                      </div>
                      <div className="text-lg font-bold text-luxury">
                        ${offer.discountPrice}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {offer.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {offer.includes.slice(0, 2).map((item, index) => (
                        <span key={index} className="text-xs bg-muted px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                      {offer.includes.length > 2 && (
                        <span className="text-xs text-muted-foreground">
                          +{offer.includes.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="text-xs text-muted-foreground">
                      Until {new Date(offer.validUntil).toLocaleDateString()}
                    </div>
                    <Button size="sm" asChild className="bg-luxury hover:bg-luxury/90 transition-luxury">
                      <Link href="/booking">Book</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-luxury">Terms & Conditions</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold mb-4 text-luxury">Booking Terms</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• All packages are subject to availability</li>
                    <li>• Advance booking required for special rates</li>
                    <li>• Packages cannot be combined with other offers</li>
                    <li>• Minimum stay requirements may apply</li>
                    <li>• Blackout dates may apply during peak seasons</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold mb-4 text-luxury">Cancellation Policy</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Free cancellation up to 48 hours before arrival</li>
                    <li>• Special packages may have different policies</li>
                    <li>• No-show charges equal to one night's stay</li>
                    <li>• Modifications subject to availability</li>
                    <li>• Refunds processed within 5-7 business days</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-luxury text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Save on Your Next Stay?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Don't miss out on these exclusive offers. Book now and experience luxury for less at Serene Heaven.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="rounded-full px-8 py-6 text-lg bg-white/95 text-luxury hover:bg-white shadow-gold transition-luxury">
              <Link href="/booking">Book Special Offer</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full px-8 py-6 text-lg border-white/70 text-white hover:bg-white/10 transition-luxury">
              <Link href="/contact">Contact for Custom Package</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}