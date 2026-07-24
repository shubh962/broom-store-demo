export interface Product {
  id: string;
  name: string;
  category: 'Brooms' | 'Boxes' | 'Cleaning DSP';
  price: number;
  wholesalePrice?: string;
  image: string;
  description: string;
  inStock: boolean;
}