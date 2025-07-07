import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bed, Users, Maximize, Eye, Wifi, Coffee, Flower, Crown } from "lucide-react";

export default function SuitesPage() {
  const suites = [
    {
      id: 'presidential-suite',
      name: 'Presidential Suite',
      description: 'Our flagship accommodation offering unparalleled luxury with panoramic ocean views, private terrace, and exclusive amenities.',
      price: 899,
      size: 120,
      capacity: 4,
      bedType: 'King Bed + Sofa Bed',
      view: 'Panoramic Ocean & Garden',
      images: [
        'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      ],
      amenities: [
        'Private Terrace with Ocean Views',
        'Separate Living & Dining Areas',
        'Premium Bar & Wine Selection',
        'Butler Service',
        'Marble Bathroom with Jacuzzi',
        'Walk-in Closet',
        'Premium Sound System',
        'Complimentary Airport Transfer'
      ],
      features: [
        'Panoramic floor-to-ceiling windows',
        'Private entrance and elevator access',
        'Dedicated concierge service',
        'In-suite dining for up to 8 guests'
      ],
      href: '/suites/presidential-suite',
    },
    {
      id: 'executive-suite',
      name: 'Executive Suite',
      description: 'Sophisticated suite with separate bedroom and living area, perfect for business travelers and discerning guests.',
      price: 549,
      size: 85,
      capacity: 3,
      bedType: 'King Bed',
      view: 'Ocean or Garden View',
      images: [
        'https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      ],
      amenities: [
        'Separate Living Room',
        'Work Desk & Business Center Access',
        'Premium Bathroom with Rain Shower',
        'Nespresso Machine',
        'Minibar & Snack Selection',
        'Complimentary WiFi',
        'Daily Newspaper',
        'Express Laundry Service'
      ],
      features: [
        'Spacious work area with ergonomic chair',
        'High-speed internet and charging stations',
        'Separate entrance to living area',
        'Premium bedding and linens'
      ],
      href: '/suites/executive-suite',
    },
    {
      id: 'garden-suite',
      name: 'Garden Suite',
      description: 'Tranquil suite with direct garden access and private terrace, surrounded by lush tropical landscaping.',
      price: 399,
      size: 65,
      capacity: 3,
      bedType: 'King Bed',
      view: 'Private Garden',
      images: [
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/97083/pexels-photo-97083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      ],
      amenities: [
        'Private Garden Terrace',
        'Direct Garden Access',
        'Spa-Style Bathroom',
        'Outdoor Seating Area',
        'Premium Bath Products',
        'Complimentary Breakfast',
        'Garden View Balcony',
        'Aromatherapy Amenities'
      ],
      features: [
        'Floor-to-ceiling windows overlooking gardens',
        'Private outdoor shower option',
        'Meditation corner with garden views',
        'Fresh flowers and plants in suite'
      ],
      href: '/suites/garden-suite',
    },
    {
      id: 'family-suite',
      name: 'Family Suite',
      description: 'Spacious two-bedroom suite designed for families, featuring separate living areas and child-friendly amenities.',
      price: 449,
      size: 95,
      capacity: 6,
      bedType: 'King + Twin Beds',
      view: 'Garden or Pool View',
      images: [
        'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      ],
      amenities: [
        'Two Separate Bedrooms',
        'Living Room with Sofa Bed',
        'Kitchenette with Refrigerator',
        'Two Full Bathrooms',
        'Kids Welcome Amenities',
        'Entertainment System',
        'Connecting Door Option',
        'Babysitting Service Available'
      ],
      features: [
        'Child-safe furniture and fixtures',
        'Games and entertainment for children',
        'Separate adult and children sleeping areas',
        'Easy access to family pool area'
      ],
      href: '/suites/family-suite',
    },
    {
      id: 'junior-suite',
      name: 'Junior Suite',
      description: 'Elegant suite with open-plan design featuring a comfortable seating area and premium amenities.',
      price: 379,
      size: 55,
      capacity: 2,
      bedType: 'King Bed',
      view: 'Ocean or Garden View',
      images: [
        'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      ],
      amenities: [
        'Open-Plan Living Area',
        'Comfortable Seating Area',
        'Premium Bath with Soaking Tub',
        'Nespresso Machine',
        'Minibar',
        'Complimentary WiFi',
        'Daily Turndown Service',
        'Premium Toiletries'
      ],
      features: [
        'Elegant open-plan design',
        'Luxury furnishings and decor',
        'Enhanced bathroom with premium fixtures',
        'Personalized welcome amenities'
      ],
      href: '/suites/junior-suite',
    },
    {
      id: 'honeymoon-suite',
      name: 'Honeymoon Suite',
      description: 'Romantic suite designed for couples with intimate ambiance, private balcony, and special romantic touches.',
      price: 599,
      size: 70,
      capacity: 2,
      bedType: 'King Bed',
      view: 'Ocean View with Sunset',
      images: [
        'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      ],
      amenities: [
        'Private Balcony with Ocean Views',
        'Romantic Lighting & Ambiance',
        'Jacuzzi Tub for Two',
        'Champagne Welcome',
        'Rose Petal Turndown',
        'Couples Massage Available',
        'Private Dining Option',
        'Sunset View Guarantee'
      ],
      features: [
        'Romantic decor with soft lighting',
        'Private balcony perfect for sunset viewing',
        'Luxury bathroom with couples amenities',
        'Complimentary romantic touches'
      ],
      href: '/suites/honeymoon-suite',
    },
  ];

  const suiteFeatures = [
    { icon: Wifi, title: "Complimentary WiFi", description: "High-speed internet throughout" },
    { icon: Coffee, title: "24/7 Room Service", description: "Gourmet dining to your suite" },
    { icon: Flower, title: "Spa Services", description: "In-suite spa treatments available" },
    { icon: Crown, title: "Concierge Service", description: "Dedicated personal concierge" },
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
              <span>Ultimate Luxury</span>
              <div className="w-8 h-0.5 bg-luxury" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-luxury">
              Luxury Suites
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Experience the pinnacle of luxury in our meticulously designed suites. Each space offers 
              exceptional comfort, premium amenities, and personalized service for an unforgettable stay.
            </p>
            <Button asChild size="lg" className="bg-luxury hover:bg-luxury/90 shadow-luxury transition-luxury px-8">
              <Link href="/booking">Reserve Your Suite</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Suite */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-warm hover-lift">
                <Image
                  src={suites[0].images[0]}
                  alt={suites[0].name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-luxury text-primary-foreground p-6 rounded-xl shadow-luxury max-w-xs">
                <p className="font-semibold mb-2">Presidential Suite</p>
                <p className="text-sm opacity-90">Our most exclusive accommodation</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-luxury font-medium mb-4">
                  <div className="w-6 h-0.5 bg-luxury" />
                  <span>Flagship Suite</span>
                </div>
                <h2 className="text-4xl font-bold mb-4 text-luxury">{suites[0].name}</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {suites[0].description}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-luxury/10 rounded-full flex items-center justify-center">
                    <Bed className="h-5 w-5 text-luxury" />
                  </div>
                  <div>
                    <p className="font-medium">{suites[0].bedType}</p>
                    <p className="text-sm text-muted-foreground">Premium bedding</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-luxury/10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-luxury" />
                  </div>
                  <div>
                    <p className="font-medium">Up to {suites[0].capacity} Guests</p>
                    <p className="text-sm text-muted-foreground">Spacious layout</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-luxury/10 rounded-full flex items-center justify-center">
                    <Maximize className="h-5 w-5 text-luxury" />
                  </div>
                  <div>
                    <p className="font-medium">{suites[0].size} m²</p>
                    <p className="text-sm text-muted-foreground">Generous space</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-luxury/10 rounded-full flex items-center justify-center">
                    <Eye className="h-5 w-5 text-luxury" />
                  </div>
                  <div>
                    <p className="font-medium">{suites[0].view}</p>
                    <p className="text-sm text-muted-foreground">Stunning views</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 pt-4">
                <div>
                  <p className="text-4xl font-bold text-luxury">${suites[0].price}</p>
                  <span className="text-sm text-muted-foreground">per night</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="bg-luxury hover:bg-luxury/90 shadow-luxury transition-luxury">
                    <Link href="/booking">Book Now</Link>
                  </Button>
                  <Button variant="outline" asChild className="border-luxury/30 text-luxury hover:bg-luxury-light transition-luxury">
                    <Link href={suites[0].href}>View Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Suites */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-luxury">Our Suite Collection</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each suite is uniquely designed to provide the ultimate in comfort and luxury. 
              From intimate romantic retreats to spacious family accommodations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {suites.map((suite, index) => (
              <Card key={suite.id} className="overflow-hidden hover:shadow-luxury transition-luxury group">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={suite.images[0]}
                    alt={suite.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  {index === 0 && (
                    <div className="absolute top-4 left-4 bg-gold text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Flagship
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-luxury">{suite.name}</h3>
                    <div className="text-right">
                      <p className="text-lg font-bold text-luxury">${suite.price}</p>
                      <p className="text-sm text-muted-foreground">per night</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">{suite.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Maximize className="h-4 w-4 text-luxury" />
                      <span>{suite.size} m²</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-luxury" />
                      <span>Up to {suite.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="h-4 w-4 text-luxury" />
                      <span>{suite.bedType}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4 text-luxury" />
                      <span>{suite.view}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-4 border-t border-border/50">
                    <Button variant="outline" asChild className="flex-1 border-luxury/30 text-luxury hover:bg-luxury-light transition-luxury">
                      <Link href={suite.href}>Details</Link>
                    </Button>
                    <Button asChild className="flex-1 bg-luxury hover:bg-luxury/90 shadow-luxury transition-luxury">
                      <Link href="/booking">Book</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Suite Features */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-luxury">Suite Amenities</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every suite includes these premium amenities and services to ensure your stay exceeds expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {suiteFeatures.map((feature, index) => (
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

      {/* Suite Comparison */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-luxury">Suite Comparison</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Compare our luxury suites to find the perfect accommodation for your stay.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <div className="min-w-full bg-background rounded-lg shadow-warm overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="text-left p-4 font-semibold">Suite</th>
                    <th className="p-4 font-semibold">Size</th>
                    <th className="p-4 font-semibold">Capacity</th>
                    <th className="p-4 font-semibold">Bed Type</th>
                    <th className="p-4 font-semibold">View</th>
                    <th className="p-4 font-semibold">Price</th>
                    <th className="p-4 font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  {suites.map((suite, index) => (
                    <tr key={suite.id} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="p-4 font-medium">{suite.name}</td>
                      <td className="p-4 text-center">{suite.size} m²</td>
                      <td className="p-4 text-center">{suite.capacity} guests</td>
                      <td className="p-4 text-center">{suite.bedType}</td>
                      <td className="p-4 text-center">{suite.view}</td>
                      <td className="p-4 text-center font-semibold text-luxury">${suite.price}</td>
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
          <h2 className="text-4xl font-bold mb-6">Experience Ultimate Luxury</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Indulge in our meticulously designed suites where every detail has been crafted for your comfort and enjoyment.
          </p>
          <Button size="lg" variant="secondary" asChild className="rounded-full px-8 py-6 text-lg bg-white/95 text-luxury hover:bg-white shadow-gold transition-luxury">
            <Link href="/booking">Reserve Your Suite Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}