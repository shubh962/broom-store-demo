import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 mt-20">
      {/* 1. Trust Badges Banner */}
      <div className="border-b border-slate-800 bg-slate-900/50 py-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-2 space-y-1">
            <div className="text-2xl">🏭</div>
            <h4 className="font-bold text-white text-sm">Direct Factory Rates</h4>
            <p className="text-xs text-slate-400">No middleman margins</p>
          </div>
          <div className="p-2 space-y-1">
            <div className="text-2xl">🚛</div>
            <h4 className="font-bold text-white text-sm">Fast UP Delivery</h4>
            <p className="text-xs text-slate-400">Kanpur & regional shipping</p>
          </div>
          <div className="p-2 space-y-1">
            <div className="text-2xl">📦</div>
            <h4 className="font-bold text-white text-sm">Wholesale Bulk Supply</h4>
            <p className="text-xs text-slate-400">Special rates for shopkeepers</p>
          </div>
          <div className="p-2 space-y-1">
            <div className="text-2xl">✅</div>
            <h4 className="font-bold text-white text-sm">Quality Guaranteed</h4>
            <p className="text-xs text-slate-400">Virgin plastic & natural grass</p>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Bio */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="bg-blue-600 text-white p-1 rounded-lg text-sm">🪠</span>
            The Sindhuja
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Leading manufacturer and supplier of premium quality Brooms (Jhadu), Plastic Storage Containers, and Industrial Cleaning DSP liquids based in Kanpur, Uttar Pradesh.
          </p>
        </div>

        {/* Product Categories */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Product Range</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li><span className="hover:text-blue-400 cursor-pointer">Natural Grass Brooms</span></li>
            <li><span className="hover:text-blue-400 cursor-pointer">Plastic Storage Containers</span></li>
            <li><span className="hover:text-blue-400 cursor-pointer">Heavy Duty Boxes</span></li>
            <li><span className="hover:text-blue-400 cursor-pointer">DSP Floor & Liquid Cleaners</span></li>
            <li><span className="hover:text-blue-400 cursor-pointer">Bulk B2B Bundles</span></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Customer Support</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><span className="hover:text-blue-400 cursor-pointer">Retail Ordering Guide</span></li>
            <li><span className="hover:text-blue-400 cursor-pointer">Wholesale Inquiry</span></li>
            <li><span className="hover:text-blue-400 cursor-pointer">Delivery Locations (UP)</span></li>
            <li><span className="hover:text-blue-400 cursor-pointer">GST Invoice Request</span></li>
          </ul>
        </div>

        {/* Factory Contact Info */}
        <div className="space-y-3 bg-slate-900/80 p-4 rounded-xl border border-slate-800/80">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Factory & Sales Office</h4>
          <div className="text-xs text-slate-300 space-y-2 leading-normal">
            <p>📍 Industrial Area, Kanpur, Uttar Pradesh - 208001</p>
            <p>📞 Phone: +91 98765 43210</p>
            <p>💬 WhatsApp: +91 98765 43210</p>
            <p>✉️ Email: sales@thesindhuja.com</p>
          </div>
        </div>
      </div>

      {/* 3. Bottom Copyright Bar */}
      <div className="border-t border-slate-900 py-4 text-center text-xs text-slate-500 px-4">
        <p>© 2026 The Sindhuja. All Rights Reserved. Manufactured with pride in Kanpur, UP.</p>
      </div>
    </footer>
  );
}