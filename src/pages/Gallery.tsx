import { useState } from 'react';
import { X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { galleryImages } from '@/data/gallery';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-6xl font-light tracking-brand uppercase mb-4">
              Gallery
            </h1>
            <p className="text-muted-foreground font-light max-w-xl mx-auto">
              Moments captured from our curated gatherings. Each photo tells a story 
              of connection, joy, and community.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="aspect-square overflow-hidden group"
              >
                <img
                  src={image.imageUrl}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-background hover:text-muted transition-colors duration-300"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.caption}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="mt-4 text-center">
              <p className="text-background font-light">{selectedImage.caption}</p>
              <p className="text-muted text-sm font-light mt-1">{selectedImage.eventTitle}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
