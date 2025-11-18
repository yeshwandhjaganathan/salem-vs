import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="p-6 text-center transition-all duration-400 hover:-translate-y-2 hover:shadow-xl group">
      <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-400">
        <Icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-400" />
      </div>
      <h3 className="text-xl font-bold mb-2 font-[Poppins]" data-testid="text-service-title">
        {title}
      </h3>
      <p className="text-muted-foreground font-[Roboto]" data-testid="text-service-description">
        {description}
      </p>
    </Card>
  );
}
