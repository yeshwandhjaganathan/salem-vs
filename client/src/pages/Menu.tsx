// client/src/pages/Menu.tsx
import { useState } from 'react';
import MenuCard from '@/components/MenuCard';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

// import your complete menu data (file you placed at client/src/data/menuItems.ts)
import { menuData } from '@/data/menuItems';

import dish1 from '@assets/stock_images/indian_food_dishes_v_e26f1487.jpg';
import dish2 from '@assets/stock_images/indian_food_dishes_v_493acf0a.jpg';
import dish3 from '@assets/stock_images/indian_food_dishes_v_491fe692.jpg';
import dish4 from '@assets/stock_images/indian_food_dishes_v_093b04f7.jpg';
import dish5 from '@assets/stock_images/indian_food_dishes_v_4f5f7261.jpg';
import dish6 from '@assets/stock_images/indian_food_dishes_v_6462d5d7.jpg';

export default function Menu() {
  const [showFullMenu, setShowFullMenu] = useState(false);

  // <-- Keep this local preview array unchanged (structure preserved)
  const menuItems = [
    { image: dish1, name: 'Chicken Biryani', description: 'Aromatic basmati rice with tender chicken'},
    { image: dish2, name: 'Mutton Biryani', description: 'Slow-cooked mutton with fragrant rice'},
    { image: dish3, name: 'Chicken Thanduri Biryani', description: 'Juicy tandoor chicken mixed with flavorful biryani.'},
    { image: dish4, name: 'Chicken 65', description: 'Spicy fried chicken appetizer'},
    { image: dish5, name: 'Paneer Tikka', description: 'Grilled cottage cheese with spices'},
    { image: dish6, name: 'Fish Fry', description: 'Crispy fried fish with special masala' },
  ];

  // safe access to imported full menu array
  const completeMenu = (menuData && menuData.all) ? menuData.all : [];

  // Helper: build category map (normalize and group)
  const rows = completeMenu.filter(r => (r.shortCode ?? '').toString().toLowerCase() !== 'short code');
  const getCat = (r: typeof rows[number]) => {
    const c = (r.category ?? '').toString().trim();
    return c === '' ? 'Others' : c;
  };
  const catMap = rows.reduce<Record<string, typeof rows>>((acc, it) => {
    const cat = getCat(it);
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(it);
    return acc;
  }, {});
  const preferredOrder = ['Briyani', 'Bucket Briyani', 'Grill & Tandoori', 'Indian Gravy', 'Tandoori Breads', 'Starters', 'Others'];
  const cats = [
    ...preferredOrder.filter(p => Object.prototype.hasOwnProperty.call(catMap, p)),
    ...Object.keys(catMap).filter(k => !preferredOrder.includes(k)).sort((a,b)=>a.localeCompare(b))
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 font-[Poppins]" data-testid="text-menu-title">
            Our Menu
          </h1>
          <p className="text-center text-muted-foreground mb-12 text-lg font-[Lexend_Deca]">
            Explore our delicious selection of authentic Tamil Nadu cuisine
          </p>

          {/* PREVIEW GRID — unchanged: uses local menuItems (with images) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {menuItems.map((item) => (
              <MenuCard key={item.name} {...item} />
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8"
              onClick={() => setShowFullMenu(true)}
              data-testid="button-view-full-menu-modal"
            >
              View Complete Menu
            </Button>
          </div>
        </div>
      </section>

      {/* ---------- DIALOG / COMPLETE MENU (place after section, still inside root <div>) ---------- */}
      <Dialog open={showFullMenu} onOpenChange={setShowFullMenu}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto" aria-labelledby="complete-menu-heading">
          <div className="flex justify-between items-start">
            <h3 id="complete-menu-heading" className="text-2xl font-bold mb-6 font-[Poppins]">Complete Menu Card</h3>
            {/* <button aria-label="Close menu" onClick={() => setShowFullMenu(false)} className="ml-4 rounded-full p-2 hover:bg-gray-100">✕</button> */}
          </div>

          <div className="space-y-6">
            {cats.map((category) => {
              const items = catMap[category] || [];
              return (
                <section key={category}>
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-bold mb-4 text-primary font-[Poppins]">{category}</h4>
                    <span className="text-sm text-muted-foreground">{items.length} item{items.length > 1 ? 's' : ''}</span>
                  </div>

                  <div className="grid gap-4">
                    {items.map((item, idx) => (
                      <div key={item.shortCode ?? `${category}-${idx}`} className="flex justify-between items-start border-b pb-3">
                        <div>
                          <h5 className="font-bold font-[Poppins]">{item.displayName ?? item.displayName} </h5>
                          <p className="text-sm text-muted-foreground font-[Roboto]">{item.description}</p>
                        </div>
                        <span className="text-chart-2 font-bold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
