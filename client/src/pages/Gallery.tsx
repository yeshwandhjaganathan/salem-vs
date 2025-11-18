import { useState } from 'react';
import Lightbox from '@/components/Lightbox';
import gallery1 from '@assets/stock_images/delicious_biryani_ri_84ec1c29.jpg';
import gallery2 from '@assets/stock_images/delicious_biryani_ri_adf71824.jpg';
import gallery3 from '@assets/stock_images/elegant_restaurant_i_9f048d3c.jpg';
import gallery4 from '@assets/stock_images/elegant_restaurant_i_e1c32cce.jpg';
import gallery5 from '@assets/stock_images/indian_food_dishes_v_e26f1487.jpg';
import gallery6 from '@assets/stock_images/indian_food_dishes_v_493acf0a.jpg';
import gallery7 from '@assets/stock_images/indian_chef_cooking__8f8e3120.jpg';
import gallery8 from '@assets/stock_images/wedding_catering_eve_0f5aac91.jpg';
import gallery9 from '@assets/stock_images/delicious_biryani_ri_35e9d599.jpg';

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 font-[Poppins]" data-testid="text-gallery-title">
            Our Gallery
          </h1>
          <p className="text-center text-muted-foreground mb-12 text-lg font-[Lexend_Deca]">
            A glimpse into our culinary journey and dining experience
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => openLightbox(index)}
                data-testid={`img-gallery-${index}`}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-bold font-[Poppins]">View Image</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <Lightbox
          images={images}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
}
