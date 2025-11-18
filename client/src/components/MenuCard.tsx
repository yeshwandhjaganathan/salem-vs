import { Card } from '@/components/ui/card';

interface MenuCardProps {
  image: string;
  name: string;
  description: string;
  // price: string;
}

export default function MenuCard({ image, name, description }: MenuCardProps) {
  return (
    <Card
      className="overflow-hidden group cursor-pointer transition-all duration-400 hover:-translate-y-2 hover:shadow-xl"
      data-testid={`card-menu-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 font-[Poppins]" data-testid="text-dish-name">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 font-[Roboto]" data-testid="text-dish-description">
          {description}
        </p>
        <p className="text-chart-2 font-bold text-lg font-[Poppins]" data-testid="text-dish-price">
          {/* ₹{price} */}
        </p>
      </div>
    </Card>
  );
}
