import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function Franchise() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive',
      });
      return;
    }

    console.log('Franchise inquiry submitted:', formData);
    toast({
      title: 'Success!',
      description: 'Thank you for your interest. We will contact you soon.',
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-primary text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-[Poppins]" data-testid="text-franchise-title">
            Franchise Opportunities
          </h1>
          <p className="text-xl font-[Lexend_Deca]">
            Join the Salem VS Biryani family and bring our legendary taste to your city
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 font-[Poppins]">20+</div>
              <p className="text-muted-foreground font-[Lexend_Deca]">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 font-[Poppins]">15+</div>
              <p className="text-muted-foreground font-[Lexend_Deca]">Successful Outlets</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 font-[Poppins]">100%</div>
              <p className="text-muted-foreground font-[Lexend_Deca]">Support & Training</p>
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 font-[Poppins]">Interested in Franchising?</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2 text-chart-2 font-[Poppins]">Full Name *</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="rounded-lg"
                  data-testid="input-franchise-name"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-chart-2 font-[Poppins]">Email Address *</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  className="rounded-lg"
                  data-testid="input-franchise-email"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-chart-2 font-[Poppins]">Phone Number *</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Enter your phone number"
                  className="rounded-lg"
                  data-testid="input-franchise-phone"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-chart-2 font-[Poppins]">Message *</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your location and investment capacity"
                  rows={5}
                  className="rounded-lg"
                  data-testid="input-franchise-message"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl"
                data-testid="button-franchise-submit"
              >
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
