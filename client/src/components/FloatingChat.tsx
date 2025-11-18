import { useState } from 'react';
import { MessageCircle, Phone, Instagram, Facebook } from 'lucide-react';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {isOpen && (
        <div className="absolute bottom-20 left-0 flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <a
            href="/contact"
            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-chart-2 transition-all duration-300 shadow-lg"
            data-testid="button-chat-contact"
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-chart-2 transition-all duration-300 shadow-lg"
            data-testid="button-chat-instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-chart-2 transition-all duration-300 shadow-lg"
            data-testid="button-chat-facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white hover:bg-chart-2 transition-all duration-300 shadow-xl hover:scale-110"
        data-testid="button-floating-chat"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
}
