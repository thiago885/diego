import Link from 'next/link';
import { cities } from '@/lib/data';
import { MapPin, ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Cidades Atendidas | Diego Chaveiro 24h',
  description: 'Confira todas as cidades atendidas pelo Diego Chaveiro 24h na região de Campinas, Sumaré e Hortolândia.',
};

export default function CitiesPage() {
  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-16">
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
            <Link href="/" className="hover:text-red-600">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-900">Cidades</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Cidades Atendidas</h1>
          <p className="text-slate-500 mt-4 max-w-2xl">
            Oferecemos atendimento rápido em toda a região metropolitana de Campinas. Escolha sua cidade para ver os bairros atendidos.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link 
                key={city.slug} 
                href={`/cidades/${city.slug}`}
                className={`group p-8 rounded-2xl border transition-all shadow-sm flex items-center justify-between ${
                  city.slug === 'sumare' 
                    ? 'bg-red-600 border-red-700 text-white shadow-xl scale-105' 
                    : 'bg-white border-slate-200 hover:border-red-600'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    city.slug === 'sumare' ? 'bg-white/20 text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-red-50 group-hover:text-red-600'
                  }`}>
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">{city.name}</h2>
                    <p className={`text-xs uppercase tracking-widest font-bold mt-1 ${
                      city.slug === 'sumare' ? 'text-white/80' : 'text-slate-400'
                    }`}>
                      {city.slug === 'sumare' ? 'Sede / Ponto Físico' : `${city.neighborhoods.length} Bairros`}
                    </p>
                  </div>
                </div>
                <ChevronRight className={`w-5 h-5 transition-all ${
                  city.slug === 'sumare' ? 'text-white' : 'text-slate-300 group-hover:text-red-600 group-hover:translate-x-1'
                }`} />
              </Link>
            ))}
        </div>
      </div>
    </main>
  );
}
