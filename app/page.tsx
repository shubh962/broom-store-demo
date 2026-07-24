import ProductCard from '@/components/ProductCard';
import { mockProducts } from '@/data/mockProducts';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-10">
        <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-800">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-400/30 uppercase tracking-wide">
              Kanpur Manufacturing Hub
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight">
              Brooms, Storage Boxes & Cleaning Liquids
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm">
              Direct factory supplies across UP. Retail buy online + Bulk wholesale inquiry available.
            </p>
          </div>
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900">Featured Products</h2>
            <p className="text-xs text-slate-500">Retail prices listed below. Click for wholesale rates.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}