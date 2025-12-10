import React, { useEffect, useState } from "react";
import logo from "@assets/stock_images/logo7.png";

type EntryAnimationProps = {
  onComplete?: () => void;
};

export default function EntryAnimation({ onComplete }: EntryAnimationProps) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      onComplete?.();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isAnimating) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary">
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* sliding panels */}
        <div className="absolute inset-0 flex">
          <div
            className="w-1/2 h-full bg-primary border-r-2 border-chart-2 animate-[slideOutLeft_1s_ease-in-out_0.5s_forwards]"
          />
          <div
            className="w-1/2 h-full bg-primary border-l-2 border-chart-2 animate-[slideOutRight_1s_ease-in-out_0.5s_forwards]"
          />
        </div>

        {/* center image */}
        <div className="relative z-10 text-center animate-[fadeIn_1s_ease-in-out,fadeOut_0.5s_ease-in-out_1.5s_forwards]">
  <div className="w-52 h-52
 mx-auto mb-4">
    <img 
      src={logo}
      alt="Logo"
      className="w-full h-full object-contain mx-auto"
    />
  </div>
</div>


        {/* keyframes */}
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
    </div>
  );
}
