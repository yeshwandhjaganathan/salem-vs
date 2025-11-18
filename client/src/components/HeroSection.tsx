import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaAction?: () => void;
  showScrollIndicator?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  ctaText = 'Order Now',
  ctaAction,
  showScrollIndicator = true,
}: HeroSectionProps) {
  const handleScroll = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-[Poppins] animate-in fade-in slide-in-from-bottom-8 duration-700"
          data-testid="text-hero-title"
        >
          {title}
        </h1>
        <p
          className="text-lg md:text-2xl text-white/90 mb-8 font-[Lexend_Deca] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150"
          data-testid="text-hero-subtitle"
        >
          {subtitle}
        </p>
        {ctaText && (
          <Button
            size="lg"
            className="bg-chart-2 hover:bg-chart-2/90 text-primary font-bold text-lg px-8 py-6 rounded-xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300"
            onClick={ctaAction}
            data-testid="button-hero-cta"
          >
            {ctaText}
          </Button>
        )}
      </div>

      {showScrollIndicator && (
        <button
          onClick={handleScroll}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
          data-testid="button-scroll-indicator"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      )}
    </div>
  );
}
