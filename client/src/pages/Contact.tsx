import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive',
      });
      return;
    }

    console.log('Contact form submitted:', formData);
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We will get back to you soon.',
    });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-b from-primary to-black text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 font-[Poppins]" data-testid="text-contact-title">
            Contact Us
          </h1>
          <p className="text-xl text-center mb-16 font-[Lexend_Deca]">
            We'd love to hear from you. Reach out for inquiries, feedback, or reservations.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 font-[Poppins]">Get in Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-chart-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1 font-[Poppins]">Phone</h3>
                    <a href="tel:+919944746112" className="hover:text-chart-2 transition-colors font-[Roboto]">
                      +91 9944746112
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-chart-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1 font-[Poppins]">Email</h3>
                    <a
                      href="mailto:info@salemrrbiryani.com"
                      className="hover:text-chart-2 transition-colors font-[Roboto]"
                    >
                      info@salemrrbiryani.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-chart-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1 font-[Poppins]">Address</h3>
                    <p className="font-[Roboto]">123 Main Road, Salem, Tamil Nadu 636001</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-4 font-[Poppins]">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-chart-2 transition-all duration-300"
                    data-testid="link-contact-facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-chart-2 transition-all duration-300"
                    data-testid="link-contact-twitter"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-chart-2 transition-all duration-300"
                    data-testid="link-contact-instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-chart-2 transition-all duration-300"
                    data-testid="link-contact-youtube"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 font-[Poppins]">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2 font-[Poppins]">Name *</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 rounded-lg"
                    data-testid="input-contact-name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 font-[Poppins]">Email *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your email"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 rounded-lg"
                    data-testid="input-contact-email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 font-[Poppins]">Message *</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message"
                    rows={5}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 rounded-lg"
                    data-testid="input-contact-message"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-chart-2 hover:bg-chart-2/90 text-primary rounded-xl"
                  data-testid="button-contact-submit"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
