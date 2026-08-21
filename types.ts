export type PageRoute = 'home' | 'products' | 'about' | 'contact' | 'blog';

export interface ProductItem {
  id: string;
  name: string;
  category: 'tshirts' | 'pants' | 'trackpants' | 'tracksuits' | 'caps' | 'bags';
  categoryLabel: string;
  tagline: string;
  description: string;
  price: number;
  bulkPriceEstimate: string;
  moq: number; // Minimum Order Quantity for B2B
  image: string;
  galleryImages: string[];
  features: string[];
  fabricSpecs: {
    composition: string;
    weightGsm: string;
    weave: string;
    properties: string[];
  };
  sizes: string[];
  colors: {
    name: string;
    hex: string;
  }[];
  customizationOptions: string[];
  bestseller?: boolean;
  isNew?: boolean;
  tags: string[];
}

export interface ProductCategoryInfo {
  id: 'tshirts' | 'pants' | 'trackpants' | 'tracksuits' | 'caps' | 'bags';
  title: string;
  highlight: string;
  image: string;
  count: number;
  description: string;
}

export interface QuoteDeskItem {
  id: string;
  product: ProductItem;
  quantity: number;
  size: string;
  color?: string;
  customizationNotes?: string;
}

export interface CartQuoteItem {
  product: ProductItem;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
  customizationNotes?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
  category: string;
  author: string;
  image: string;
  tags: string[];
}

export interface StatItem {
  id: string;
  number: string;
  label: string;
  subtext: string;
}
