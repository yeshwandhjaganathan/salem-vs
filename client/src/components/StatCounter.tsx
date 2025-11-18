import { useEffect, useState } from 'react';

interface StatCounterProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

export default function StatCounter({ end, label, suffix = '', duration = 2000 }: StatCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <div className="text-center" data-testid="stat-counter">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-[Poppins]" data-testid="text-stat-value">
        {count}{suffix}
      </div>
      <div className="text-lg text-muted-foreground font-[Lexend_Deca]" data-testid="text-stat-label">
        {label}
      </div>
    </div>
  );
}
