export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'Living Room' | 'Bedroom' | 'Dining' | 'Office';
  materials: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Harlow Lounge Chair',
    price: 850,
    image: 'https://picsum.photos/seed/harlow/800/800',
    description: 'A perfect blend of mid-century aesthetics and modern comfort. The Harlow chair features hand-carved teak legs and premium linen upholstery.',
    category: 'Living Room',
    materials: ['Teak Wood', 'Linen', 'High-density Foam']
  },
  {
    id: '2',
    name: 'Sylvan Dining Table',
    price: 1200,
    image: 'https://picsum.photos/seed/sylvan/1200/800',
    description: 'Minimalist statement piece for your dining room. Solid walnut construction with a natural oil finish that highlights the unique wood grain.',
    category: 'Dining',
    materials: ['Sustainably Sourced Walnut', 'Natural Oil Finish']
  },
  {
    id: '3',
    name: 'Luna Bed Frame',
    price: 1500,
    image: 'https://picsum.photos/seed/luna/1200/1000',
    description: 'Experience tranquility with the Luna bed frame. Low profile, platform style with an integrated storage headboard.',
    category: 'Bedroom',
    materials: ['Oak Wood', 'Steel Reinforcements']
  },
  {
    id: '4',
    name: 'Eos Office Desk',
    price: 650,
    image: 'https://picsum.photos/seed/eos/1000/800',
    description: 'A dedicated space for focused work. The Eos desk provides a large surface area with integrated cable management and a soft-close drawer.',
    category: 'Office',
    materials: ['Birch Plywood', 'Powder-coated Steel']
  },
  {
    id: '5',
    name: 'Nova Sideboard',
    price: 950,
    image: 'https://picsum.photos/seed/nova/1000/600',
    description: 'Elegant storage solution. Hand-woven rattan doors combined with a matte black frame create a striking artisanal look.',
    category: 'Living Room',
    materials: ['Blackened Oak', 'Natural Rattan']
  },
  {
    id: '6',
    name: 'Aries Coffee Table',
    price: 450,
    image: 'https://picsum.photos/seed/aries/800/800',
    description: 'Geometric interlocking base with a tempered glass top. A light and airy piece that suits any modern living space.',
    category: 'Living Room',
    materials: ['Tempered Glass', 'Ash Wood']
  },
  {
    id: '7',
    name: 'Nora Nightstand',
    price: 320,
    image: 'https://picsum.photos/seed/nora/800/800',
    description: 'Compact and functional. The Nora nightstand features a single drawer and an open shelf for your nighttime essentials.',
    category: 'Bedroom',
    materials: ['Cherry Wood', 'Brass Hardware']
  },
  {
    id: '8',
    name: 'Helix Dining Chair',
    price: 280,
    image: 'https://picsum.photos/seed/helix/800/1000',
    description: 'Sculptural silhouette with ergonomic support. The Helix chair is as comfortable as it is beautiful, perfect for long dinner conversations.',
    category: 'Dining',
    materials: ['Molded Plywood', 'Leather Seat Pad']
  }
];
