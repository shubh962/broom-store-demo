import { mockProducts } from '@/data/mockProducts';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = mockProducts.find((p) => p.id === id);

  if (!product) notFound();

  const whatsappMsg = encodeURIComponent(
    `Hi! I am interested in bulk ordering ${product.name} in Kanpur.`
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8 shadow-sm">
          <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden bg-slate-100 border">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-bold uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
                {product.category}
              </span>
              <h1 className="text-2xl font-bold text-slate-900 mt-3">{product.name}</h1>
              <p className="text-slate-600 text-sm mt-3 leading-relaxed">{product.description}</p>

              <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-slate-500">Retail Rate:</span>
                  <span className="text-2xl font-bold text-slate-900">₹{product.price}</span>
                </div>
                {product.wholesalePrice && (
                  <div className="mt-2 pt-2 border-t border-slate-200 flex justify-between items-baseline text-xs text-amber-900 font-medium">
                    <span>Wholesale Offer:</span>
                    <span>{product.wholesalePrice}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <a
                href={`https://wa.me/919876543210?text=${whatsappMsg}`}
                target="_blank"
                className="block text-center w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-3 rounded-xl transition"
              >
                💬 Inquire Bulk Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}