import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import EntryAnimation from '@/components/EntryAnimation';
import { Button } from '@/components/ui/button';
import MenuCard from '@/components/MenuCard';

import heroImage from '@assets/stock_images/delicious_biryani_ri_84ec1c29.jpg';
import dish1 from '@assets/stock_images/indian_food_dishes_v_e26f1487.jpg';
import dish2 from '@assets/stock_images/indian_food_dishes_v_493acf0a.jpg';
import dish3 from '@assets/stock_images/indian_food_dishes_v_491fe692.jpg';

export default function Home() {
  const [showEntry, setShowEntry] = useState(true);

  const featuredDishes = [
    {
      image: dish1,
      name: 'Chicken Biryani',
      description: 'Aromatic basmati rice with tender chicken and authentic spices',
      price: '350',
    },
    {
      image: dish2,
      name: 'Mutton Biryani',
      description: 'Slow-cooked mutton with fragrant rice and traditional masala',
      price: '450',
    },
    {
      image: dish3,
      name: 'Chicken Thanduri Biryani',
      description:
        'Juicy chicken pieces marinated in rich spices, tandoor-grilled, and blended into flavorful biryani.',
      price: '280',
    },
  ];

  const handleOrderNow = () => {
    const section = document.getElementById('contact-preview');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {showEntry && <EntryAnimation onComplete={() => setShowEntry(false)} />}

      {/* HERO */}
      <HeroSection
        title=""
        subtitle=""
        backgroundImage={heroImage}
        // ctaText="Order Now"
        // ctaAction={handleOrderNow}
      />

      {/* FEATURED DISHES */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 font-[Poppins]">
            Featured Dishes
          </h2>
          <p className="text-center text-muted-foreground mb-12 font-[Lexend_Deca]">
            Discover our most loved traditional recipes
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredDishes.map((dish) => (
              <MenuCard key={dish.name} {...dish} />
            ))}
          </div>

          <div className="text-center">
            <a
              href="/menu"
              className="inline-block bg-primary hover:bg-primary/90 text-white rounded-xl px-8 py-3 font-[Roboto]"
            >
              View Our Menu
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section
        id="contact-preview"
        className="py-20 px-4 bg-gradient-to-b from-primary to-black"
      >
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-4xl font-bold mb-6 font-[Poppins]">
            Ready to Order?
          </h2>
          <p className="text-xl mb-8 font-[Lexend_Deca]">
            Call us now or visit our outlets for the authentic biryani experience
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919944746112"
              className="bg-chart-2 hover:bg-chart-2/90 text-primary rounded-xl px-8 py-3 font-[Roboto]"
            >
              Call Now: +91 9944746112
            </a>

            <a
              href="/Outlets"
              className="border border-white text-white hover:bg-white/10 rounded-xl px-8 py-3 font-[Roboto]"
            >
              Find Our Outlets
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
