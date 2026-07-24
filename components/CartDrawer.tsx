'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Cart Header */}
          <div className="p-4 bg-slate-900 text-white flex justify-between items-center">
            <h2 className="text-lg font-bold flex items-center gap-2">
              🛒 Shopping Cart ({cart.length})
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 hover:bg-slate-800 rounded-lg text-slate-300 transition"
            >
              ✕
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-12 text-slate-500 space-y-3">
                <p className="text-4xl">🛍️</p>
                <p className="font-medium text-sm">Your cart is empty</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-lg"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 p-3 border border-slate-200 rounded-xl bg-slate-50 justify-between items-center"
                >
                  <div className="relative h-16 w-16 rounded-lg overflow-hidden bg-white border flex-shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" unoptimized />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-slate-800 text-xs line-clamp-1">{item.name}</h4>
                    <p className="text-blue-600 font-bold text-sm mt-0.5">₹{item.price}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 bg-slate-200 hover:bg-slate-300 rounded font-bold text-xs"
                      >
                        -
                      </button>
                      <span className="text-xs font-semibold text-slate-800">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 bg-slate-200 hover:bg-slate-300 rounded font-bold text-xs"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-xs font-medium p-1"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cart.length > 0 && (
            <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-3">
              <div className="flex justify-between items-center text-slate-900 font-bold text-base">
                <span>Subtotal:</span>
                <span>₹{cartTotal}</span>
              </div>
              <p className="text-[11px] text-slate-500">Local taxes & shipping calculated at checkout.</p>
              
              <button
                onClick={() => alert('Demo Mode: Checkout process will connect to Razorpay on live setup!')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition text-sm shadow-md"
              >
                Proceed to Checkout (Retail Buy)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}