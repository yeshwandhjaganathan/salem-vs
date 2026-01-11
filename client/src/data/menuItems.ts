// client/src/data/menuItems.ts
export type MenuItem = {
  id: string | null;
  shortCode: string | null;
  category: string | null;
  displayName: string | null;
  description: string | null;
  price: string | null;
};

export const menuData: Record<string, MenuItem[]> = {
 all: [

    /* ===================== BRIYANI ===================== */
    { id: '', shortCode: 'B01', category: 'Briyani', displayName: 'Mutton Briyani', description: 'Tender mutton slow-cooked with fragrant basmati rice and traditional spices. Served with raita, bread halwa, and brinjal gravy.', price: '' },
    { id: '', shortCode: 'B02', category: 'Briyani', displayName: 'Chicken Briyani', description: 'Juicy chicken cooked with aromatic basmati rice and spices. Served with raita, bread halwa, and brinjal gravy.', price: '' },
    { id: '', shortCode: 'B03', category: 'Briyani', displayName: 'Chicken 65 Briyani', description: 'Crispy Chicken 65 layered with flavorful biryani rice. Served with raita and brinjal gravy.', price: '' },
    { id: '', shortCode: 'B04', category: 'Briyani', displayName: 'Tandoori Briyani', description: 'Smoky tandoori chicken mixed with spiced basmati rice. Served with raita, bread halwa, and brinjal gravy.', price: '' },
    { id: '', shortCode: 'B05', category: 'Briyani', displayName: 'Egg Briyani', description: 'Boiled eggs cooked with aromatic basmati rice and spices. Served with raita, bread halwa, and brinjal gravy.', price: '' },
    { id: '', shortCode: 'B06', category: 'Briyani', displayName: 'Plain Briyani', description: 'Fragrant basmati rice cooked with whole spices. Served with raita, bread halwa, and brinjal gravy.', price: '' },

    /* ===================== GRILL & TANDOORI ===================== */
    { id: '', shortCode: 'GT01', category: 'Grill & Tandoori', displayName: 'Grill Chicken', description: 'Juicy chicken marinated in special spices and flame grilled to perfection.', price: '' },
    { id: '', shortCode: 'GT02', category: 'Grill & Tandoori', displayName: 'Grill Chicken Pepper Fry', description: 'Grilled chicken tossed with freshly ground black pepper and spices.', price: '' },
    { id: '', shortCode: 'GT03', category: 'Grill & Tandoori', displayName: 'Tandoori Chicken', description: 'Authentic tandoori chicken roasted in clay oven with Indian spices.', price: '' },
    { id: '', shortCode: 'GT04', category: 'Grill & Tandoori', displayName: 'Tangadi Kabab', description: 'Spicy chicken drumsticks marinated and grilled to smoky perfection.', price: '' },

    /* ===================== SOUTH INDIAN STARTERS ===================== */
    { id: '', shortCode: 'S01', category: 'South Indian Starters', displayName: 'Chicken 65', description: 'Deep-fried spicy chicken tossed with curry leaves and South Indian spices.', price: '' },
    { id: '', shortCode: 'S02', category: 'South Indian Starters', displayName: 'Chicken Lollipop', description: 'Crispy fried chicken lollipops tossed in spicy sauce.', price: '' },
    { id: '', shortCode: 'S03', category: 'South Indian Starters', displayName: 'Nattu Kozhi Fry', description: 'Country chicken fried with traditional spices for a rustic flavor.', price: '' },
    { id: '', shortCode: 'S04', category: 'South Indian Starters', displayName: 'Pallipalayam Chicken', description: 'Authentic Pallipalayam style chicken fry with minimal spices.', price: '' },
    { id: '', shortCode: 'S05', category: 'South Indian Starters', displayName: 'Vanjaram Fish Fry', description: 'Fresh seer fish marinated and shallow fried until crispy.', price: '' },

    /* ===================== TANDOORI BREADS ===================== */
    { id: '', shortCode: 'T01', category: 'Tandoori Breads', displayName: 'Plain Naan', description: 'Soft tandoor baked plain naan.', price: '' },
    { id: '', shortCode: 'T02', category: 'Tandoori Breads', displayName: 'Butter Naan', description: 'Classic naan topped with melted butter.', price: '' },
    { id: '', shortCode: 'T03', category: 'Tandoori Breads', displayName: 'Garlic Naan', description: 'Naan infused with fresh garlic and coriander.', price: '' },
    { id: '', shortCode: 'T04', category: 'Tandoori Breads', displayName: 'Ginger Naan', description: 'Soft naan flavored with fresh ginger.', price: '' },
    { id: '', shortCode: 'T05', category: 'Tandoori Breads', displayName: 'Roti', description: 'Whole wheat tandoor roti.', price: '' },

    /* ===================== FRIED CHICKEN ===================== */
    { id: '', shortCode: 'FC01', category: 'Fried Chicken', displayName: 'Classic Fried Chicken', description: 'Crispy golden fried chicken with juicy inside.', price: '' },

    /* ===================== DESSERTS ===================== */
    { id: '', shortCode: 'D01', category: 'Desserts', displayName: 'Fresh Juice', description: 'Seasonal fresh fruit juices.', price: '' },
    { id: '', shortCode: 'D02', category: 'Desserts', displayName: 'Milkshakes', description: 'Thick and creamy flavored milkshakes.', price: '' },
    { id: '', shortCode: 'D03', category: 'Desserts', displayName: 'Ice Cream', description: 'Assorted ice cream flavors.', price: '' },
    { id: '', shortCode: 'D04', category: 'Desserts', displayName: 'Falooda', description: 'Traditional falooda with ice cream and nuts.', price: '' },
    { id: '', shortCode: 'D05', category: 'Desserts', displayName: 'Fruit Salad', description: 'Fresh seasonal fruits mixed and chilled.', price: '' }

  ]
};
