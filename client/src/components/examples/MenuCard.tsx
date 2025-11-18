import MenuCard from '../MenuCard';
import dishImage from '@assets/stock_images/indian_food_dishes_v_e26f1487.jpg';

export default function MenuCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <MenuCard
        image={dishImage}
        name="Special Chicken Biryani"
        description="Aromatic basmati rice cooked with tender chicken and authentic spices"
        price="350"
      />
    </div>
  );
}
