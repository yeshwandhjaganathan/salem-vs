import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // ✅ updated import
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // ✅ updated to react-router-dom

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" data-testid="link-home">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-12 h-12 bg-chart-2 rounded-full flex items-center justify-center text-xl font-bold text-primary">
                VS
              </div>
              <span className="text-white font-bold text-lg hidden md:block font-[Poppins]">
                Salem VS Biryani
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <span
                  className={`text-white hover:text-chart-2 transition-colors duration-300 font-[Lexend_Deca] ${
                    location.pathname === item.path ? 'text-chart-2 font-semibold' : ''
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="lg:hidden text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <span
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-white hover:text-chart-2 transition-colors duration-300 font-[Lexend_Deca] py-2 ${
                    location.pathname === item.path ? 'text-chart-2 font-semibold' : ''
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
