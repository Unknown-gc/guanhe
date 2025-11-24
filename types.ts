export enum Page {
  HOME = 'home',
  PORTFOLIO = 'portfolio',
  ABOUT = 'about',
  SERVICES = 'services',
  CONTACT = 'contact'
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
}

export interface ServicePackage {
  title: string;
  price: string;
  features: string[];
  note?: string;
  highlight?: boolean;
}

export interface NavItem {
  label: string;
  enLabel: string;
  page: Page;
}