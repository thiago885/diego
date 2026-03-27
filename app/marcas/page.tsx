import Link from 'next/link';
import { brands } from '@/lib/data';
import { ChevronRight, Car, Phone } from 'lucide-react';
import { generateMeta } from '@/lib/seo';

export const metadata = generateMeta(
  'Marcas de Veículos Atendidas | Diego Chaveiro 24h',
  'Confira todas as marcas de carros que atendemos para aberturas, chaves codificadas e reparos de ignição. Atendimento 24h em Campinas e região.',
  '/marcas',
  'chaves automotivas, chaveiro carros, marcas de carros, chave codificada, abertura de veiculos'
);

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-white py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-900">Marcas</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <Car className="w-3.5 h-3.5" /> Especialista Automotivo
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
              Marcas de Veículos <span className="text-red-600">Atendidas</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Possuímos tecnologia de ponta para realizar aberturas, cópias de chaves e programação de sistemas imobilizadores das principais montadoras do mercado nacional e importado.
            </p>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <Link 
                key={brand.slug} 
                href={`/marcas/${brand.slug}`}
                className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-red-600 transition-all flex flex-col items-center text-center gap-4"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-red-50 transition-colors">
                  <Car className="w-8 h-8 text-slate-300 group-hover:text-red-600 transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">{brand.name}</h3>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-red-600 transition-colors">Ver Serviços</span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-24 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent)]" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Não encontrou sua marca?</h2>
              <p className="text-slate-400 text-lg mb-10">
                Atendemos diversas outras montadoras e modelos específicos. Entre em contato agora mesmo para confirmar a disponibilidade para o seu veículo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+5519996085310" 
                  className="bg-[#3b66bc] text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  Ligar Agora
                </a>
                <a 
                  href="https://wa.me/5519996085310" 
                  className="bg-[#008000] text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-xl"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
