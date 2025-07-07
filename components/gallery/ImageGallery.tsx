"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  categories?: string[];
}

export function ImageGallery({ images, categories = [] }: ImageGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleImages, setVisibleImages] = useState<GalleryImage[]>([]);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // Filter images by category
  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imageId = entry.target.getAttribute('data-image-id');
            if (imageId) {
              setLoadedImages(prev => new Set([...prev, imageId]));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const imageElements = document.querySelectorAll('[data-image-id]');
    imageElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredImages]);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (lightboxIndex === null) return;

    switch (e.key) {
      case 'Escape':
        setLightboxIndex(null);
        break;
      case 'ArrowLeft':
        setLightboxIndex(prev => 
          prev === null ? null : prev > 0 ? prev - 1 : filteredImages.length - 1
        );
        break;
      case 'ArrowRight':
        setLightboxIndex(prev => 
          prev === null ? null : prev < filteredImages.length - 1 ? prev + 1 : 0
        );
        break;
    }
  }, [lightboxIndex, filteredImages.length]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex]);

  const allCategories = ['all', ...categories];

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center">
          {allCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "capitalize",
                selectedCategory === category && "bg-luxury hover:bg-luxury/90"
              )}
            >
              {category}
            </Button>
          ))}
        </div>
      )}

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            data-image-id={image.id}
            className="group relative aspect-square overflow-hidden rounded-lg bg-muted cursor-pointer"
            onClick={() => setLightboxIndex(index)}
          >
            {loadedImages.has(image.id) ? (
              <>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </>
            ) : (
              <div className="w-full h-full bg-muted animate-pulse" />
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
            onClick={() => setLightboxIndex(null)}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
            onClick={() => setLightboxIndex(prev => 
              prev === null ? null : prev > 0 ? prev - 1 : filteredImages.length - 1
            )}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
            onClick={() => setLightboxIndex(prev => 
              prev === null ? null : prev < filteredImages.length - 1 ? prev + 1 : 0
            )}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Image */}
          <div className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
            {lightboxIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </div>
  );
}

// Default gallery images for demo
export const defaultGalleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Hotel Exterior',
    category: 'exterior',
  },
  {
    id: '2',
    src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Luxury Suite',
    category: 'rooms',
  },
  {
    id: '3',
    src: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Infinity Pool',
    category: 'amenities',
  },
  {
    id: '4',
    src: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Fine Dining Restaurant',
    category: 'dining',
  },
  {
    id: '5',
    src: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Spa Treatment Room',
    category: 'spa',
  },
  {
    id: '6',
    src: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Ocean View Room',
    category: 'rooms',
  },
  {
    id: '7',
    src: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Garden Suite',
    category: 'rooms',
  },
  {
    id: '8',
    src: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Private Beach',
    category: 'amenities',
  },
  {
    id: '9',
    src: 'https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Fitness Center',
    category: 'amenities',
  },
  {
    id: '10',
    src: 'https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Hotel Lobby',
    category: 'interior',
  },
  {
    id: '11',
    src: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Business Center',
    category: 'amenities',
  },
  {
    id: '12',
    src: 'https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Presidential Suite Living Room',
    category: 'rooms',
  },
];