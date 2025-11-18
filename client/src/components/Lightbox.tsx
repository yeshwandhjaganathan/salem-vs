import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
      <Button
        size="icon"
        variant="ghost"
        className="absolute top-4 right-4 text-white hover:bg-white/10"
        onClick={onClose}
        data-testid="button-lightbox-close"
      >
        <X className="w-6 h-6" />
      </Button>

      <Button
        size="icon"
        variant="ghost"
        className="absolute left-4 text-white hover:bg-white/10"
        onClick={onPrev}
        data-testid="button-lightbox-prev"
      >
        <ChevronLeft className="w-8 h-8" />
      </Button>

      <img
        src={images[currentIndex]}
        alt={`Gallery image ${currentIndex + 1}`}
        className="max-w-full max-h-[90vh] object-contain"
        data-testid="img-lightbox"
      />

      <Button
        size="icon"
        variant="ghost"
        className="absolute right-4 text-white hover:bg-white/10"
        onClick={onNext}
        data-testid="button-lightbox-next"
      >
        <ChevronRight className="w-8 h-8" />
      </Button>

      <div className="absolute bottom-4 text-white font-[Roboto]">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
