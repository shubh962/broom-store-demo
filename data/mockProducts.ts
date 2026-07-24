import { Product } from '@/types/product';

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Super Clean Grass Broom (Jhadu)",
    category: "Brooms",
    price: 99,
    wholesalePrice: "₹75/pc (Min. 50 Pcs)",
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=600",
    description: "High-density natural grass broom, long-life handle, minimal dust shed. Direct manufacturer rates in Kanpur.",
    inStock: true,
  },
  {
    id: "2",
    name: "Heavy Duty Plastic Storage Box (5 Litre)",
    category: "Boxes",
    price: 149,
    wholesalePrice: "₹110/pc (Min. 100 Pcs)",
    image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=600",
    description: "100% Virgin Plastic, Stackable design, ideal for domestic & commercial storage.",
    inStock: true,
  },
  {
    id: "3",
    name: "DSP Liquid Floor Cleaner (5 Litre Can)",
    category: "Cleaning DSP",
    price: 299,
    wholesalePrice: "₹220/can (Min. 10 Cans)",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600",
    description: "Powerful surface disinfectant, long-lasting fragrance, formulated for heavy dirt.",
    inStock: true,
  }
];