export type Section = 'home' | 'portfolio' | 'about' | 'services' | 'contact';

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  color?: string; // Dominant color hint
}

export interface PricingItem {
  title: string;
  price: string;
  details: string[];
}

export interface ServiceNote {
  title: string;
  content: string;
}