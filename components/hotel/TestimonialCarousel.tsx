"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Emma Thompson",
    location: "New York, USA",
    quote: "Our stay at Serene Haven was absolutely magical. The staff went above and beyond to make our anniversary special. The ocean view suite was breathtaking!",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 2,
    name: "Michael Garcia",
    location: "London, UK",
    quote: "The attention to detail is remarkable. From the moment we arrived, we felt like royalty. The spa treatments were incredibly rejuvenating.",
    rating: 5,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 3,
    name: "Sophia Chen",
    location: "Tokyo, Japan",
    quote: "A perfect blend of luxury and comfort. The cuisine was exceptional, and the infinity pool has the most stunning sunset views you can imagine.",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <Card className="shadow-lg bg-card">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 relative aspect-square md:aspect-auto">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover h-full"
              />
            </div>
            <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary stroke-primary mr-1" />
                ))}
              </div>
              <blockquote className="text-lg italic mb-6">
                `${testimonial.quote}`
              </blockquote>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="absolute left-0 right-0 bottom-6 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex ? "bg-primary w-6" : "bg-primary/30"
            }`}
            onClick={() => {
              setAutoplay(false);
              setCurrentIndex(index);
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="secondary"
        size="icon"
        className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full opacity-70 hover:opacity-100"
        onClick={handlePrev}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="secondary"
        size="icon"
        className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full opacity-70 hover:opacity-100"
        onClick={handleNext}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
}