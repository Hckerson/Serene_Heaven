import { ImageGallery, defaultGalleryImages } from "@/components/gallery/ImageGallery";

export default function GalleryPage() {
  const categories = ['exterior', 'rooms', 'amenities', 'dining', 'spa', 'interior'];

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
              <span>Visual Journey</span>
              <div className="w-8 h-0.5 bg-luxury" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-luxury">
              Photo Gallery
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Explore the beauty and elegance of Serene Heaven through our curated collection of images. 
              Discover our luxurious accommodations, world-class amenities, and stunning surroundings.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <ImageGallery images={defaultGalleryImages} categories={categories} />
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-luxury">Virtual Tour</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Take a 360° virtual tour of our resort and experience the luxury before you arrive.
            </p>
            
            {/* Virtual Tour Placeholder */}
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center shadow-warm">
              <div className="text-center">
                <div className="w-16 h-16 bg-luxury/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏨</span>
                </div>
                <p className="text-muted-foreground">
                  360° Virtual Tour Coming Soon
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Interactive virtual tour will be embedded here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}