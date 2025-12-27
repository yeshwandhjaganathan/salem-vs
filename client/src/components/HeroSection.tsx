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
    <section
      className="
        relative
        w-full
        h-[650px] md:h-[750px] lg:h-[850px]
        overflow-hidden
      "
    >
      {/* HERO IMAGE */}
      <img
        src={backgroundImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/25" />


      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-[Poppins]">
          {title}
        </h1>

        <p className="text-lg md:text-2xl text-white/90 mb-8 font-[Lexend_Deca]">
          {subtitle}
        </p>

        {ctaText && ctaAction && (
          <Button
            size="lg"
            className="bg-chart-2 hover:bg-chart-2/90 text-primary font-bold px-8 py-6 rounded-xl"
            onClick={ctaAction}
          >
            {ctaText}
          </Button>
        )}
      </div>

      {showScrollIndicator && (
        <button
          onClick={handleScroll}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      )}
    </section>
  );
}
