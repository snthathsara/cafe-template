// ==========================================================================
// CAFE TEMPLATE — Menu Data Store
// Customize or extend dishes, prices, descriptions, and categories below.
// ==========================================================================

export const MENU_ITEMS = [
  // --- 1. MAINS: ALL-DAY BRUNCH & KITCHEN (4 Items) ---
  {
    id: 'truffle-mushroom-toast',
    name: 'Truffle Wild Mushroom Toast',
    category: 'mains',
    categoryLabel: 'Mains · All-Day Artisan Brunch',
    price: '$14.50',
    description: 'Sautéed seasonal forest mushrooms over toasted sourdough with whipped herb ricotta, organic poached egg, aged parmesan shaving, and white truffle drizzle.',
    notes: 'Whipped lemon ricotta, thyme butter, shaved parmesan.',
    dietary: ['Vegetarian', 'Chef Signature', 'Organic Sourdough'],
    pairing: 'Artisan Double Flat White',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Cooked to Order'
  },
  {
    id: 'smashed-avocado-tartine',
    name: 'Smashed Avocado Tartine',
    category: 'mains',
    categoryLabel: 'Mains · All-Day Artisan Brunch',
    price: '$13.00',
    description: 'Hass avocado seasoned with lemon zest and Maldon sea salt on toasted country levain, crowned with marinated heirloom tomatoes, radish ribbons, and pistachio dukkah.',
    notes: 'Zesty citrus oil, roasted dukkah crunch, pickled shallots.',
    dietary: ['Vegan Friendly', 'Nutrient Rich', 'Bestseller'],
    pairing: 'Vanilla Sea-Salt Cold Brew',
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Freshly Prepared'
  },
  {
    id: 'brioche-french-toast',
    name: 'Brioche French Toast & Berries',
    category: 'mains',
    categoryLabel: 'Mains · All-Day Artisan Brunch',
    price: '$13.50',
    description: 'Golden thick-cut brioche soaked in rich vanilla-bean custard, layered with whipped vanilla mascarpone, pure maple reduction, and fresh seasonal berries.',
    notes: 'House-baked brioche, caramelized edges, pure Canadian maple.',
    dietary: ['House Favorite', 'Vegetarian'],
    pairing: 'Signature Iced Spanish Latte',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Griddled Golden'
  },
  {
    id: 'artisan-breakfast-skillet',
    name: 'Artisan Skillet Breakfast',
    category: 'mains',
    categoryLabel: 'Mains · All-Day Artisan Brunch',
    price: '$15.00',
    description: 'Two cage-free sunny eggs, herb-roasted baby potatoes, charred sweet peppers, avocado slices, and house chimichurri, served with warm crusty baguette slices.',
    notes: 'Served sizzling with toasted herb sourdough.',
    dietary: ['Hearty Feast', 'Gluten-Free Option'],
    pairing: 'Single-Origin Pour-Over V60',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Cooked Hot to Order'
  },

  // --- 2. SNACKS: SCRATCH BAKERY & PASTRIES (3 Items) ---
  {
    id: 'almond-frangipane-croissant',
    name: 'Almond Frangipane Croissant',
    category: 'snacks',
    categoryLabel: 'Bakery · Scratch Morning Pastries',
    price: '$5.25',
    description: 'Twice-baked butter croissant soaked in orange blossom syrup, generously filled with velvety almond cream and topped with toasted sliced almonds.',
    notes: 'Flaky 100% French butter layers, toasted almond crust.',
    dietary: ['Baked Daily', 'Vegetarian'],
    pairing: 'Artisan Double Flat White',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Fresh from the Oven'
  },
  {
    id: 'basque-burnt-cheesecake',
    name: 'Basque Burnt Cheesecake',
    category: 'snacks',
    categoryLabel: 'Bakery · Scratch Morning Pastries',
    price: '$6.50',
    description: 'Caramelized, dark mahogany exterior with a silky, ultra-creamy molten vanilla bean center. Baked in small batches every morning.',
    notes: 'Rich vanilla aroma, caramelized custard notes.',
    dietary: ['Gluten-Free', 'House Special'],
    pairing: 'Single-Origin Pour-Over V60',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Chilled Daily Batch'
  },
  {
    id: 'pistachio-cardamom-bun',
    name: 'Pistachio Cardamom Morning Bun',
    category: 'snacks',
    categoryLabel: 'Bakery · Scratch Morning Pastries',
    price: '$4.95',
    description: 'Flaky laminated sourdough bun rolled with freshly ground green cardamom, pistachio paste, and raw demerara sugar crystals for a warm, fragrant bite.',
    notes: 'Nordic spice profile, crunchy sugared exterior.',
    dietary: ['Baked Fresh', 'Vegetarian'],
    pairing: 'Ceremonial Matcha Cloud Latte',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Morning Batch'
  },

  // --- 3. COFFEE & SIPS: SPECIALTY ESPRESSO & BREWS (4 Items) ---
  {
    id: 'iced-spanish-latte',
    name: 'Signature Iced Spanish Latte',
    category: 'sips',
    categoryLabel: 'Coffee · Specialty Espresso & Brews',
    price: '$5.50',
    description: 'Double ristretto espresso pulled over creamy condensed milk and cold whole milk, crowned with silky microfoam and a dusting of Ceylon cinnamon.',
    notes: 'Subtle sweetness, bold espresso depth, served over crystal ice.',
    dietary: ['Signature Favorite', 'Dairy-Free Option'],
    pairing: 'Almond Frangipane Croissant',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Barista Handcrafted'
  },
  {
    id: 'cold-foam-cold-brew',
    name: 'Vanilla Sea-Salt Cold Foam Brew',
    category: 'sips',
    categoryLabel: 'Coffee · Specialty Espresso & Brews',
    price: '$5.75',
    description: '18-hour slow steeped single-origin cold brew coffee topped with a thick layer of lightly sweetened vanilla sea-salt cold cream foam.',
    notes: 'Velvety sweet cream contrast, smooth chocolate-toned coffee.',
    dietary: ['Low Acidity', 'Barista Pick'],
    pairing: 'Basque Burnt Cheesecake',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',
    prepTime: '18-Hour Slow Steep'
  },
  {
    id: 'artisan-flat-white',
    name: 'Artisan Double Flat White',
    category: 'sips',
    categoryLabel: 'Coffee · Specialty Espresso & Brews',
    price: '$4.75',
    description: 'Double shot of our house espresso blend harmonized with velvety textured steamed microfoam and intricate free-pour latte art.',
    notes: 'Notes of toasted hazelnut, dark cocoa, and silky mouthfeel.',
    dietary: ['Single-Origin Blend', 'Oat / Almond Milk Available'],
    pairing: 'Truffle Wild Mushroom Toast',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Steamed Microfoam Perfection'
  },
  {
    id: 'single-origin-pour-over',
    name: 'Single-Origin Pour-Over V60',
    category: 'sips',
    categoryLabel: 'Coffee · Specialty Espresso & Brews',
    price: '$6.00',
    description: 'Precision hand-poured filter brew highlighting our rotating single-origin micro-lots, brewed to reveal delicate floral and fruit tasting notes.',
    notes: 'Rotating Ethiopian or Colombian micro-lot origin.',
    dietary: ['Black Coffee', 'Zero Sugar'],
    pairing: 'Brioche French Toast & Berries',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Hand Poured to Order'
  },

  // --- 4. BEVERAGES: TEAS & REFRESHERS (3 Items) ---
  {
    id: 'matcha-cloud-latte',
    name: 'Ceremonial Matcha Cloud Latte',
    category: 'refreshers',
    categoryLabel: 'Beverages · Teas & Artisan Refreshers',
    price: '$6.25',
    description: 'First-harvest ceremonial grade Uji matcha whisked with oat milk, served iced with a velvety floating vanilla cloud foam.',
    notes: 'Earthy umami, vibrant green vibrancy, natural energy.',
    dietary: ['Antioxidant Rich', 'Vegan Friendly'],
    pairing: 'Pistachio Cardamom Morning Bun',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Whisked Fresh'
  },
  {
    id: 'sparkling-hibiscus-spritz',
    name: 'Sparkling Hibiscus Rose Spritz',
    category: 'refreshers',
    categoryLabel: 'Beverages · Teas & Artisan Refreshers',
    price: '$5.25',
    description: 'Cold-steeped organic Egyptian hibiscus flowers infused with Damascus rose water, crushed mint, lime, and crisp sparkling mineral water.',
    notes: 'Tart botanical floral notes, sparkling and effervescent.',
    dietary: ['Caffeine-Free', 'Naturally Sweetened'],
    pairing: 'Smashed Avocado Tartine',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Muddled Fresh'
  },
  {
    id: 'peach-jasmine-iced-tea',
    name: 'White Peach & Jasmine Iced Tea',
    category: 'refreshers',
    categoryLabel: 'Beverages · Teas & Artisan Refreshers',
    price: '$5.00',
    description: 'Fragrant high-mountain jasmine green tea cold brewed and shaken with white peach purée, Meyer lemon juice, and local wildflower honey.',
    notes: 'Sweet stone-fruit aroma, crisp floral finish.',
    dietary: ['House Brewed', 'Refreshing'],
    pairing: 'Almond Frangipane Croissant',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Cold Shaken'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'gallery-specialty-coffee',
    title: 'Precision Roasted Coffee',
    subtitle: 'Single-origin espresso, pour-overs & silky microfoam lattes',
    category: 'Specialty Coffee ☕',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gallery-artisan-brunch',
    title: 'All-Day Farm-to-Table Brunch',
    subtitle: 'Wild mushroom tartines, avocado toast & custard brioche',
    category: 'Brunch & Kitchen 🍳',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gallery-scratch-bakery',
    title: 'Fresh Daily Scratch Bakery',
    subtitle: 'Butter croissants, Basque burnt cheesecake & morning buns',
    category: 'Bakery & Sweets 🥐',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gallery-botanical-sips',
    title: 'Craft Teas & Coolers',
    subtitle: 'Ceremonial Uji matcha, sparkling hibiscus & peach teas',
    category: 'Teas & Refreshers 🍵',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80'
  }
];
