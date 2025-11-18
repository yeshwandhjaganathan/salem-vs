import ServiceCard from '@/components/ServiceCard';
import { Users, Briefcase, PartyPopper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import cateringImage from '@assets/stock_images/wedding_catering_eve_0f5aac91.jpg';

export default function Catering() {
  const services = [
    {
      icon: Users,
      title: 'Wedding Catering',
      description: 'Make your special day unforgettable with our premium wedding catering services for 100-5000 guests',
    },
    {
      icon: Briefcase,
      title: 'Corporate Events',
      description: 'Professional catering for business meetings, conferences, and corporate parties',
    },
    {
      icon: PartyPopper,
      title: 'Private Parties',
      description: 'Customize your menu for birthdays, anniversaries, and special celebrations',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${cateringImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[Poppins]" data-testid="text-catering-title">
            Catering Services
          </h1>
          <p className="text-xl font-[Lexend_Deca]">Bringing authentic flavors to your special events</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="bg-primary text-white rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 font-[Poppins]">Ready to Book?</h2>
            <p className="text-lg mb-8 font-[Lexend_Deca]">
              Contact us today to discuss your catering needs and get a customized quote
            </p>
            <Button
              size="lg"
              className="bg-chart-2 hover:bg-chart-2/90 text-primary rounded-xl px-8"
              data-testid="button-contact-catering"
            >
              Contact Us for Catering
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
