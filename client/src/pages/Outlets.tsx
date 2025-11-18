import { MapPin, Phone, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function Outlets() {
  const outlets = [
    {
      name: 'Salem Main Branch',
      address: '123 Main Road, Salem, Tamil Nadu 636001',
      phone: '+91 9876543210',
      hours: '11:00 AM - 11:00 PM',
    },
    {
      name: 'Coimbatore Branch',
      address: '456 RS Puram, Coimbatore, Tamil Nadu 641002',
      phone: '+91 9876543211',
      hours: '11:00 AM - 11:00 PM',
    },
    {
      name: 'Chennai Branch',
      address: '789 Anna Nagar, Chennai, Tamil Nadu 600040',
      phone: '+91 9876543212',
      hours: '11:00 AM - 11:00 PM',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 font-[Poppins]" data-testid="text-outlets-title">
            Our Outlets
          </h1>
          <p className="text-center text-muted-foreground mb-12 text-lg font-[Lexend_Deca]">
            Visit us at any of our locations across Tamil Nadu
          </p>

          <div className="mb-12">
            <div className="w-full h-[400px] bg-muted rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125389.83314887583!2d78.06369844335938!3d11.664325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1ccf52ef3d7%3A0x4166d7d7cfb1b809!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Salem VS Biryani Outlets Map"
                data-testid="map-outlets"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outlets.map((outlet, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold mb-4 font-[Poppins]" data-testid={`text-outlet-name-${index}`}>
                  {outlet.name}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground font-[Roboto]" data-testid={`text-outlet-address-${index}`}>
                      {outlet.address}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <a
                      href={`tel:${outlet.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors font-[Roboto]"
                      data-testid={`link-outlet-phone-${index}`}
                    >
                      {outlet.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground font-[Roboto]" data-testid={`text-outlet-hours-${index}`}>
                      {outlet.hours}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
