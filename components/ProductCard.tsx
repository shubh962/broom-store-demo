'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const whatsappMsg = encodeURIComponent(
    `Hi! I want to inquire about bulk ordering: ${product.name} (Kanpur delivery).`
  );

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition flex flex-col justify-between">
      <div>
        <div className="relative h-48 w-full bg-slate-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="p-4">
          <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md">
            {product.category}
          </span>
          <h3 className="font-semibold text-slate-800 text-base mt-2 line-clamp-1">
            {product.name}
          </h3>

          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-xl font-bold text-slate-900">₹{product.price}</span>
            <span className="text-xs text-slate-500">Retail Rate</span>
          </div>

          {product.wholesalePrice && (
            <div className="mt-2 text-xs bg-amber-50 text-amber-900 border border-amber-200/60 p-2 rounded-lg font-medium">
              🏷️ Wholesale: {product.wholesalePrice}
            </div>
          )}
        </div>
      </div>

      <div className="p-4 pt-0 space-y-2">
        <button
          type="button"
          onClick={handleAddToCart}
          className="block text-center w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2.5 rounded-lg transition shadow-sm cursor-pointer"
        >
          🛒 Add to Cart
        </button>
        <a
          href={`https://wa.me/919876543210?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2.5 rounded-lg transition"
        >
          💬 Wholesale Inquiry
        </a>
      </div>
    </div>
  );
}