import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';

type MenuCategory = 'starters' | 'mains' | 'desserts' | 'drinks';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  tags?: string[];
}

interface MenuItems {
  [key: string]: MenuItem[];
}

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('starters');

  const categories = [
    { id: 'starters' as MenuCategory, label: 'Launch Sequence', icon: '🚀' },
    { id: 'mains' as MenuCategory, label: 'Main Missions', icon: '🛸' },
    { id: 'desserts' as MenuCategory, label: 'Cosmic Finales', icon: '✨' },
    { id: 'drinks' as MenuCategory, label: 'Fuel Station', icon: '🍸' },
  ];

  const menuItems: MenuItems = {
    starters: [
      {
        name: 'Nebula Oysters',
        description: 'Fresh Bluff oysters with a champagne and yuzu foam, dusted with activated charcoal',
        price: '$28',
        tags: ['GF', 'Signature'],
      },
      {
        name: 'Dark Matter Dumplings',
        description: 'Squid ink dumplings filled with crayfish, served in a starlight broth',
        price: '$24',
      },
      {
        name: 'Satellite Spheres',
        description: 'Olive oil caviar with burrata, heirloom tomatoes, and microgreens',
        price: '$22',
        tags: ['V', 'GF'],
      },
      {
        name: 'Solar Flare Ceviche',
        description: 'Snapper with citrus, chilli, coconut cream, and crispy shallots',
        price: '$26',
        tags: ['GF', 'DF'],
      },
    ],
    mains: [
      {
        name: 'The Mothership',
        description: 'Wagyu beef tenderloin, truffle mash, charred broccolini, red wine jus',
        price: '$65',
        tags: ['GF', 'Signature'],
      },
      {
        name: 'Deep Space Catch',
        description: 'Market fish with kohlrabi, samphire, brown butter, and caviar',
        price: '$52',
        tags: ['GF'],
      },
      {
        name: 'Gravity Well Duck',
        description: 'Confit duck leg, kumara purée, pickled cherries, jus gras',
        price: '$48',
        tags: ['GF'],
      },
      {
        name: 'Zero-G Garden',
        description: 'Seasonal vegetables with miso glaze, grains, nuts, and herb oil',
        price: '$38',
        tags: ['VG', 'GF'],
      },
    ],
    desserts: [
      {
        name: 'Black Hole Chocolate',
        description: 'Valrhona dark chocolate sphere, liquid caramel core, gold leaf',
        price: '$24',
        tags: ['V', 'Signature'],
      },
      {
        name: 'Meteor Shower',
        description: 'Deconstructed pavlova with passionfruit curd and freeze-dried berries',
        price: '$20',
        tags: ['GF'],
      },
      {
        name: 'Aurora Borealis',
        description: 'Colour-changing gin panna cotta with edible flowers',
        price: '$22',
        tags: ['GF'],
      },
      {
        name: 'Constellation Platter',
        description: 'Selection of NZ artisan cheeses with quince paste and crackers',
        price: '$32',
        tags: ['V'],
      },
    ],
    drinks: [
      {
        name: 'Event Horizon',
        description: 'Butterfly pea gin, tonic, lime, colour-shifting as you watch',
        price: '$22',
        tags: ['Signature'],
      },
      {
        name: 'Rocket Fuel Espresso Martini',
        description: 'Vodka, Kahlúa, espresso, with a kick of chilli',
        price: '$20',
      },
      {
        name: 'Milky Way Smoothie',
        description: 'Coconut, banana, activated charcoal, and edible glitter',
        price: '$14',
        tags: ['VG', 'AF'],
      },
      {
        name: 'Supernova Sangria',
        description: 'Red wine, brandy, citrus, with popping candy rim',
        price: '$18',
      },
    ],
  };

  return (
    <section id="menu" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-nebula-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-nebula-500/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-nebula-400 mb-4">
            // Fuel Your Mission
          </span>
          <h2 className="section-title text-white mb-6">
            The <span className="text-gradient">Menu</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60 leading-relaxed">
            Every dish is crafted to take your taste buds on an interstellar journey. 
            Fresh New Zealand produce meets bold, cosmic creativity.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-display text-sm uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-nebula-600 to-nebula-500 text-white shadow-lg shadow-nebula-500/30'
                  : 'glass text-white/70 hover:text-white hover:border-nebula-500/30'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {menuItems[activeCategory].map((item, index) => (
            <Card key={index} className="card-hover group">
              <CardContent className="p-6 lg:p-8">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-nebula-400 transition-colors duration-300">
                      {item.name}
                    </h3>
                    {item.tags && (
                      <div className="flex gap-2 mt-2">
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-2 py-0.5 rounded text-xs font-mono uppercase tracking-wider ${
                              tag === 'Signature'
                                ? 'bg-nebula-500/20 text-nebula-400'
                                : 'bg-white/5 text-white/40'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="font-display font-bold text-2xl text-gradient">
                    {item.price}
                  </span>
                </div>
                <p className="text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dietary Key */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-6 px-6 py-4 glass rounded-full">
            {[
              { key: 'V', label: 'Vegetarian' },
              { key: 'VG', label: 'Vegan' },
              { key: 'GF', label: 'Gluten Free' },
              { key: 'DF', label: 'Dairy Free' },
              { key: 'AF', label: 'Alcohol Free' },
            ].map((item) => (
              <span key={item.key} className="font-mono text-xs text-white/40">
                <span className="text-nebula-400">{item.key}</span> = {item.label}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button variant="outline" size="lg">
            Download Full Mission Brief (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
