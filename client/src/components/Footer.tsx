// Footer.jsx
import { Link } from 'react-router-dom'; // <-- changed to react-router-dom
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/menu', label: 'Our Menu' },
    { path: '/catering', label: 'Catering' },
    { path: '/franchise', label: 'Franchise' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/outlets', label: 'Outlets' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <footer className="bg-[#7a0006] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-chart-2 rounded-full flex items-center justify-center text-xl font-bold text-primary">
                VS
              </div>
              <span className="font-bold text-lg font-[Poppins]">Salem VS Biryani</span>
            </div>
            <p className="text-white/80 font-[Roboto]">
              Traditionally cooked with love for 20+ years. Experience the legendary taste of Tamil Nadu.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 font-[Poppins]">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}    // <-- react-router Link uses `to`
                  className="text-white/80 hover:text-chart-2 transition-colors duration-300 font-[Roboto]"
                  data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 font-[Poppins]">Follow Us</h3>
            <div className="flex gap-4">
              {/* external links stay <a> */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-chart-2 transition-all duration-300"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-chart-2 transition-all duration-300"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-chart-2 transition-all duration-300"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-chart-2 transition-all duration-300"
                data-testid="link-youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

       <div className="border-t border-white/10 pt-6 text-center">
  <p className="text-white/60 font-[Roboto]">
    © {new Date().getFullYear()} Salem VS Biryani Unavagam. All rights reserved.
  </p>
  <p className="text-white/60 font-[Roboto] mt-2">
    Designed by{" "}
    <a
      href="https://yeshwandhjs-portfolio.netlify.app/"   // ✅ just keep this line clean
      target="_blank"
      rel="noopener noreferrer"
      className="text-chart-2 hover:underline hover:text-white transition-colors duration-300 font-semibold"
    >
      YESHWANDH J S
    </a>
  </p>
</div>
      </div>
    </footer>
  );
}
