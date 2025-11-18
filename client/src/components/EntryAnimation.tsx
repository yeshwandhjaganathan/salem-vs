import { useState, useEffect } from 'react';
import logo from '@attached_assets/stock_images/favicon.png';


interface EntryAnimationProps {
  onComplete: () => void;
}

export default function EntryAnimation({ onComplete }: EntryAnimationProps) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isAnimating) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary">
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex">
          <div
            className="w-1/2 h-full bg-primary border-r-2 border-chart-2 animate-[slideOutLeft_1s_ease-in-out_0.5s_forwards]"
            style={{
              animation: 'slideOutLeft 1s ease-in-out 0.5s forwards',
            }}
          />
          <div
            className="w-1/2 h-full bg-primary border-l-2 border-chart-2 animate-[slideOutRight_1s_ease-in-out_0.5s_forwards]"
            style={{
              animation: 'slideOutRight 1s ease-in-out 0.5s forwards',
            }}
          />
        </div>

        <div className="relative z-10 text-center animate-[fadeIn_1s_ease-in-out,fadeOut_0.5s_ease-in-out_1.5s_forwards]">
          <div className="w-24 h-24 mx-auto bg-chart-2 rounded-full flex items-center justify-center text-4xl font-bold text-primary mb-4">
            VS
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-bold font-[Poppins]">
            Salem VS Biryani
          </h1>
          <p className="text-chart-2 text-lg mt-2 font-[Lexend_Deca]">Legendary Taste of Tamil Nadu</p>
        </div>
      </div>

      <style>{`
        @keyframes slideOutLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0); }
          to { transform: translateX(100%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
