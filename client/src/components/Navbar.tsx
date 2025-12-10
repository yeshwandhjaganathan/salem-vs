import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from "@assets/stock_images/logo3.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
      {/* Container */}
      <div className="container mx-auto px-4">
        {/* Top bar: flex between logo and navigation / mobile button */}
        <div className="flex items-center justify-between h-20">
          {/* Logo (left) */}
          <Link to="/" data-testid="link-home">
            <div className="flex items-center cursor-pointer">
              <div className="w-56 h-56 md:w-60 md:h-60 ml-0 mt-4">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-full h-full object-contain"
                  draggable="false"
                />
              </div>
            </div>
          </Link>

          {/* Desktop nav items */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
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

          {/* Mobile menu button (visible on small screens) */}
          <div className="lg:hidden">
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu (collapsible) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
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
