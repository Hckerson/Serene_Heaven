"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Star, Quote } from "lucide-react";
import { fetchTestimonials } from "@/lib/api";
import { Testimonial } from "@/data/mock-data";
import Image from "next/image";

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const response = await fetchTestimonials();
        if (response.success) {
          setTestimonials(response.data);
        }
      } catch (error) {
        console.error('Failed to load testimonials:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTestimonials();
  }, []);

  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

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
              <span>Guest Stories</span>
              <div className="w-8 h-0.5 bg-luxury" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-luxury">
              Guest Testimonials
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover what our valued guests have to say about their memorable experiences at Serene Heaven. 
              Their stories inspire us to continue delivering exceptional hospitality.
            </p>
            
            {/* Rating Summary */}
            <div className="inline-flex items-center gap-4 bg-background/80 backdrop-blur-sm rounded-full px-6 py-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-lg font-semibold text-luxury">4.9/5</span>
              <span className="text-muted-foreground">from 500+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="relative overflow-hidden hover:shadow-luxury transition-luxury">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-luxury/10 rounded-full flex items-center justify-center">
                    <Quote className="h-4 w-4 text-luxury" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  
                  {/* Comment */}
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.comment}"
                  </blockquote>
                  
                  {/* Guest Info */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-luxury">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  {/* Date */}
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <p className="text-xs text-muted-foreground">
                      Stayed on {new Date(testimonial.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Review Stats */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-luxury">Why Guests Choose Serene Heaven</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-luxury mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Guest Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-luxury mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Return Guests</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-luxury mb-2">4.9</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-luxury mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Five-Star Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-luxury">What Guests Love Most</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { category: "Service Excellence", rating: 4.9, description: "Exceptional staff and personalized attention" },
                { category: "Room Quality", rating: 4.8, description: "Luxurious accommodations and amenities" },
                { category: "Dining Experience", rating: 4.9, description: "Outstanding cuisine and presentation" },
                { category: "Location & Views", rating: 4.8, description: "Stunning oceanfront location" },
                { category: "Spa & Wellness", rating: 4.9, description: "Rejuvenating treatments and facilities" },
                { category: "Value for Money", rating: 4.7, description: "Excellent value for luxury experience" },
              ].map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-luxury transition-luxury">
                  <CardContent className="p-0">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-luxury">{item.category}</h3>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 fill-gold text-gold" />
                        <span className="font-semibold">{item.rating}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}