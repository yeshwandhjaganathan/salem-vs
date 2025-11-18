import { useState } from 'react';
import Lightbox from '../Lightbox';
import image1 from '@assets/stock_images/delicious_biryani_ri_84ec1c29.jpg';
import image2 from '@assets/stock_images/elegant_restaurant_i_9f048d3c.jpg';

export default function LightboxExample() {
  const [isOpen, setIsOpen] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2];

  if (!isOpen) return <div className="p-4">Lightbox closed</div>;

  return (
    <Lightbox
      images={images}
      currentIndex={currentIndex}
      onClose={() => setIsOpen(false)}
      onNext={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
      onPrev={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
    />
  );
}
