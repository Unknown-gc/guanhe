export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Mythology' | 'Portrait' | 'Restoration';
  imageUrl: string;
  description?: string;
  heightClass?: string; // For masonry layout variety
}

export type Category = 'All' | 'Mythology' | 'Portrait' | 'Restoration';

export interface NavLink {
  name: string;
  path: string;
  submenu?: { name: string; path: string }[];
}