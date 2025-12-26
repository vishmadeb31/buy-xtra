import { Product } from './types';

export const PHONE_NUMBER = '917797037684'; // Country code added for WhatsApp API

export const BRANDS = ['Apple', 'Samsung', 'Google', 'Xiaomi', 'OnePlus', 'Realme', 'Nothing', 'Philips', 'Havells', 'Portronics', 'Anchor'];

export const MOCK_PRODUCTS: Product[] = [
  // Mobiles
  {
    id: '1',
    category: 'mobile',
    brand: 'Apple',
    model: 'iPhone 15',
    name: 'Apple iPhone 15 (Blue, 128 GB)',
    images: [
      'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1696446700542-c36b6923055e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1696446700542-c36b6923055e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.6,
    reviewCount: 12453,
    variants: [
      { ram: '6GB', storage: '128GB', price: 72999, originalPrice: 79900 },
      { ram: '6GB', storage: '256GB', price: 82999, originalPrice: 89900 },
      { ram: '8GB', storage: '512GB', price: 102999, originalPrice: 109900 }
    ],
    specs: {
      processor: 'A16 Bionic Chip',
      display: '6.1 inch Super Retina XDR',
      battery: '3349 mAh',
      camera: '48MP + 12MP',
      bluetooth: 'v5.3',
      os: 'iOS 17'
    },
    highlights: [
      'A16 Bionic Chip',
      'Dynamic Island',
      'USB-C Connector'
    ],
    isFeatured: true,
    isBestSeller: true
  },
  {
    id: '2',
    category: 'mobile',
    brand: 'Samsung',
    model: 'Galaxy S24 Ultra',
    name: 'Samsung Galaxy S24 Ultra (Titanium Gray, 256 GB)',
    images: [
      'https://images.unsplash.com/photo-1706606821213-3d073820921c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1674230230239-0010c37c28db?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1705625348889-1f25b2940263?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.7,
    reviewCount: 5400,
    variants: [
      { ram: '12GB', storage: '256GB', price: 129999, originalPrice: 134999 },
      { ram: '16GB', storage: '512GB', price: 144999, originalPrice: 149999 },
      { ram: '16GB', storage: '1TB', price: 169999, originalPrice: 174999 }
    ],
    specs: {
      processor: 'Snapdragon 8 Gen 3',
      display: '6.8 inch QHD+ AMOLED',
      battery: '5000 mAh',
      camera: '200MP + 50MP',
      bluetooth: 'v5.3',
      os: 'Android 14'
    },
    highlights: [
      'Galaxy AI',
      'Titanium Frame',
      'S Pen Included'
    ],
    isFeatured: true,
    isBestSeller: true
  },
  {
    id: '3',
    category: 'mobile',
    brand: 'Nothing',
    model: 'Phone (2)',
    name: 'Nothing Phone (2) (Dark Grey, 128 GB)',
    images: [
      'https://images.unsplash.com/photo-1691432777170-c045b84c8352?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1692817814041-692797e84989?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1689242964593-9c8822081514?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1691432777328-8d02d1374465?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.4,
    reviewCount: 8902,
    variants: [
      { ram: '8GB', storage: '128GB', price: 36999, originalPrice: 44999 },
      { ram: '12GB', storage: '256GB', price: 41999, originalPrice: 49999 },
      { ram: '12GB', storage: '512GB', price: 45999, originalPrice: 54999 }
    ],
    specs: {
      processor: 'Snapdragon 8+ Gen 1',
      display: '6.7 inch LTPO OLED',
      battery: '4700 mAh',
      camera: '50MP + 50MP',
      bluetooth: 'v5.3',
      os: 'Nothing OS 2.0'
    },
    highlights: [
      'Glyph Interface',
      'Nothing OS',
      'Transparent Back Design'
    ],
    isBestSeller: true,
    isFeatured: true
  },
  {
    id: '4',
    category: 'mobile',
    brand: 'Google',
    model: 'Pixel 8',
    name: 'Google Pixel 8 (Hazel, 128 GB)',
    images: [
      'https://images.unsplash.com/photo-1697209930722-19e5999c0944?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1696347321033-d9b89d406f52?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1697209930768-450410751998?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1698741369527-3135c91350a8?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.3,
    reviewCount: 3200,
    variants: [
      { ram: '8GB', storage: '128GB', price: 65999, originalPrice: 75999 },
      { ram: '12GB', storage: '256GB', price: 72999, originalPrice: 82999 }
    ],
    specs: {
      processor: 'Google Tensor G3',
      display: '6.2 inch Actua Display',
      battery: '4575 mAh',
      camera: '50MP + 12MP',
      bluetooth: 'v5.3',
      os: 'Android 14'
    },
    highlights: [
      'Best Take',
      'Audio Magic Eraser',
      '7 Years of Updates'
    ],
    isFeatured: true,
    isBestSeller: true
  },
  {
    id: '5',
    category: 'mobile',
    brand: 'Xiaomi',
    model: 'Redmi Note 13 Pro',
    name: 'Redmi Note 13 Pro 5G (Arctic White, 128 GB)',
    images: [
      'https://images.unsplash.com/photo-1662650992389-0607d2919d18?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1678893979872-466d33306634?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1698656127117-73b310d54030?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1678893980313-1250b92224d0?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.2,
    reviewCount: 15400,
    variants: [
      { ram: '8GB', storage: '128GB', price: 25999, originalPrice: 28999 },
      { ram: '8GB', storage: '256GB', price: 27999, originalPrice: 30999 },
      { ram: '12GB', storage: '256GB', price: 29999, originalPrice: 32999 }
    ],
    specs: {
      processor: 'Snapdragon 7s Gen 2',
      display: '6.67 inch 1.5K AMOLED',
      battery: '5100 mAh',
      camera: '200MP + 8MP',
      bluetooth: 'v5.2',
      os: 'MIUI 14'
    },
    highlights: [
      '200MP Camera',
      '67W Turbo Charge',
      'Gorilla Glass Victus'
    ],
    isBestSeller: true
  },
  {
    id: '6',
    category: 'mobile',
    brand: 'OnePlus',
    model: '12R',
    name: 'OnePlus 12R (Cool Blue, 128 GB)',
    images: [
      'https://images.unsplash.com/photo-1660161427181-e28329622d1c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1675253817173-95c03c5d6487?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1649234902344-9c8822081514?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1649234902315-9c8822081514?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.5,
    reviewCount: 9210,
    variants: [
      { ram: '8GB', storage: '128GB', price: 39999, originalPrice: 42999 },
      { ram: '16GB', storage: '256GB', price: 45999, originalPrice: 48999 }
    ],
    specs: {
      processor: 'Snapdragon 8 Gen 2',
      display: '6.78 inch AMOLED',
      battery: '5500 mAh',
      camera: '50MP + 8MP',
      bluetooth: 'v5.3',
      os: 'OxygenOS 14'
    },
    highlights: [
      'LTPO 4.0',
      '100W SUPERVOOC',
      'Trinity Engine'
    ],
    isBestSeller: true
  },
  // Electronics
  {
    id: '101',
    category: 'electronics',
    brand: 'Philips',
    model: 'Wiz Smart Bulb',
    name: 'Philips Wiz Smart LED Bulb (12W, RGB)',
    images: [
        'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1617469165786-8007eda3caa7?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1540932296774-34d529241517?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.4,
    reviewCount: 2300,
    variants: [
        { price: 899, originalPrice: 1999 }
    ],
    specs: {
        power: '12 Watts',
        type: 'LED',
        warranty: '1 Year',
        color: 'RGB + Tunable White'
    },
    highlights: [
        'Wi-Fi Enabled',
        'App Control',
        'Millions of Colors'
    ]
  },
  {
    id: '102',
    category: 'electronics',
    brand: 'Havells',
    model: 'Stealth Air',
    name: 'Havells Stealth Air Ceiling Fan (Pearl White)',
    images: [
        'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1589859762194-ea84069e042c?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.3,
    reviewCount: 1250,
    variants: [
        { price: 5499, originalPrice: 7590 }
    ],
    specs: {
        power: '80 Watts',
        type: 'Ceiling Fan',
        warranty: '2 Years',
        color: 'Pearl White'
    },
    highlights: [
        'Silent Operation',
        'Aerodynamic Blades',
        'Dust Resistant'
    ]
  },
  {
    id: '103',
    category: 'electronics',
    brand: 'Portronics',
    model: 'Modesk',
    name: 'Portronics Modesk Universal Mobile Holder',
    images: [
        'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1534073828943-f801091a7d58?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1632551381387-a2f07d3b51d3?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.1,
    reviewCount: 4500,
    variants: [
        { price: 149, originalPrice: 699 }
    ],
    specs: {
        material: 'ABS Plastic',
        type: 'Mobile Stand',
        color: 'Black',
        warranty: '6 Months'
    },
    highlights: [
        'Foldable Design',
        'Anti-skid Base',
        'Adjustable Angle'
    ]
  },
  {
    id: '104',
    category: 'electronics',
    brand: 'Anchor',
    model: 'Ziva Modular Switch',
    name: 'Anchor Ziva 6A Modular Switch (White, Pack of 10)',
    images: [
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1594818379496-da1e345b0ded?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.2,
    reviewCount: 890,
    variants: [
        { price: 399, originalPrice: 850 }
    ],
    specs: {
        power: '6 Amp',
        type: 'Modular Switch',
        color: 'White',
        material: 'Polycarbonate'
    },
    highlights: [
        'Fire Retardant',
        'ISI Marked',
        'Long Life'
    ]
  }
];
