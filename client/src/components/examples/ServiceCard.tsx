import ServiceCard from '../ServiceCard';
import { Users } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ServiceCard
        icon={Users}
        title="Wedding Catering"
        description="Make your special day unforgettable with our premium catering services"
      />
    </div>
  );
}
