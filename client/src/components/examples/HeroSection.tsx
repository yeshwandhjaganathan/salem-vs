import HeroSection from '../HeroSection';
import heroImage from '@assets/stock_images/delicious_biryani_ri_84ec1c29.jpg';

export default function HeroSectionExample() {
  return (
    <HeroSection
      title="Legendary Salem RR Biryani Unavagam"
      subtitle="Traditionally Cooked with Love for 20+ Years"
      backgroundImage={heroImage}
      ctaAction={() => console.log('Order Now clicked')}
    />
  );
}
