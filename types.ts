import { LucideIcon } from "lucide-react";

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  className?: string;
}

export interface CategoryCardProps {
  title: string;
  items: string;
  imageUrl: string;
  gridArea?: string;
}

export interface TestimonialProps {
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatarUrl: string;
}

export interface MarketItem {
  id: string;
  title: string;
  location: string;
  type: 'demand' | 'supply';
  time: string;
  imageUrl?: string;
  price?: string;
}