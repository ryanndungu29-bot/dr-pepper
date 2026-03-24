export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  color: string;
  category: 'original' | 'sugar-free' | 'limited';
  nutrition: {
    calories: number;
    sugar: number;
    caffeine: number;
  };
  flavors: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  code?: string;
  expiresAt: string;
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'original',
    name: 'Crimson Classic',
    tagline: 'The Original Boldness',
    description: 'A unique blend of 23 secret flavors that creates a taste experience like no other. Bold, refreshing, and timeless.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800',
    color: '#9e1b32',
    category: 'original',
    nutrition: { calories: 150, sugar: 40, caffeine: 41 },
    flavors: ['Cherry', 'Vanilla', 'Spices', 'Caramel']
  },
  {
    id: 'zero',
    name: 'Crimson Zero',
    tagline: 'Zero Sugar, All Bold',
    description: 'Everything you love about the original Crimson Fizz, with absolutely zero sugar. No compromises, just pure flavor.',
    image: 'https://images.unsplash.com/photo-1543253687-c931c8e01820?auto=format&fit=crop&q=80&w=800',
    color: '#1a1a1a',
    category: 'sugar-free',
    nutrition: { calories: 0, sugar: 0, caffeine: 41 },
    flavors: ['Cherry', 'Vanilla', 'Spices']
  },
  {
    id: 'cherry-blast',
    name: 'Cherry Blast',
    tagline: 'Explosive Fruit Flavor',
    description: 'An extra kick of dark cherry flavor blended with our signature spices. It is a fruit explosion in every sip.',
    image: 'https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?auto=format&fit=crop&q=80&w=800',
    color: '#d00000',
    category: 'original',
    nutrition: { calories: 160, sugar: 42, caffeine: 41 },
    flavors: ['Dark Cherry', 'Signature Blend']
  },
  {
    id: 'midnight-edition',
    name: 'Midnight Edition',
    tagline: 'Limited Time Dark Blend',
    description: 'A mysterious, darker take on our classic recipe with hints of blackberry and deep cocoa. Available only for a limited time.',
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&q=80&w=800',
    color: '#000000',
    category: 'limited',
    nutrition: { calories: 155, sugar: 38, caffeine: 45 },
    flavors: ['Blackberry', 'Cocoa', 'Midnight Spices']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Crimson Fizz x Gaming: The Ultimate Setup',
    excerpt: 'How we are fueling the next generation of pro gamers with our latest partnership.',
    date: 'March 20, 2026',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    category: 'Lifestyle'
  },
  {
    id: '2',
    title: 'The Secret Behind the 23 Flavors',
    excerpt: 'A deep dive into the history and craftsmanship of our legendary recipe.',
    date: 'March 15, 2026',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
    category: 'Brand Story'
  }
];

export const PROMOTIONS: Promotion[] = [
  {
    id: 'promo-1',
    title: 'Summer Sizzle Pack',
    description: 'Get a free limited edition cooler with any 24-pack purchase.',
    code: 'SUMMERFIZZ',
    expiresAt: '2026-06-01',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800'
  }
];
