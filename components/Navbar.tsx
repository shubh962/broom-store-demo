'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      {/* 1. Top Announcement Bar */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-700 text-[11px] sm:text-xs text-center py-1.5 font-medium px-4 flex justify-between items-center max-w-7xl mx-auto">
        <span className="hidden sm:inline">🏭 Direct Kanpur Factory Rates | GST Invoicing Available</span>
        <span className="mx-auto sm:mx-0 font-semibold">⚡ Fast Supply across Kanpur & Entire Uttar Pradesh</span>
        <span className="hidden md:inline">📞 Bulk Sales: +91 98765 43210</span>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="text-xl sm:text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
          <div className="bg-blue-600 text-white w-9 h-9 rounded-xl flex items-center justify-center text-lg shadow-sm">
            🪠
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-blue-200">
            The Sindhuja
          </span>
        </Link>

        {/* Flipkart Style Search Bar */}
        <div className="hidden md:flex flex-1 max-w-lg mx-6 relative">
          <input
            type="text"
            placeholder="Search Brooms, Storage Boxes, Cleaning Liquids..."
            className="w-full bg-slate-800/90 text-sm text-white pl-4 pr-10 py-2.5 rounded-xl border border-slate-700/80 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition placeholder:text-slate-400"
          />
          <button className="absolute right-3 top-2.5 text-slate-400 hover:text-white">
            🔍
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition shadow-sm cursor-pointer"
          >
            🛒 <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="bg-amber-400 text-slate-900 text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Direct WhatsApp Button */}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition flex items-center gap-1.5"
          >
            💬 <span className="hidden sm:inline">Wholesale</span> WhatsApp
          </a>
        </div>
      </div>

      {/* 3. Sub-Header Category Bar */}
      <div className="bg-slate-800/80 border-t border-slate-800 text-xs text-slate-300 overflow-x-auto py-2 px-4 scrollbar-none">
        <div className="max-w-7xl mx-auto flex gap-6 whitespace-nowrap font-medium">
          <Link href="/" className="hover:text-blue-400 transition text-blue-400">🔥 All Products</Link>
          <span className="hover:text-blue-400 cursor-pointer transition">🌾 Grass Brooms (Jhadu)</span>
          <span className="hover:text-blue-400 cursor-pointer transition">📦 Storage Boxes & Containers</span>
          <span className="hover:text-blue-400 cursor-pointer transition">🧴 Cleaning Liquids & DSP</span>
          <span className="hover:text-amber-400 text-amber-300 cursor-pointer transition font-semibold">⚡ B2B Wholesale Deals</span>
        </div>
      </div>
    </header>
  );
}