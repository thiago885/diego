import Link from 'next/link';
import { services } from '@/lib/data';
import { Key, ChevronRight, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Serviços de Chaveiro | Diego Chaveiro 24h',
  description: 'Conheça todos os serviços prestados pelo Diego Chaveiro 24h: aberturas, chaves automotivas, fechaduras digitais e muito mais.',
};

export default function ServicesPage() {
  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-16">
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
            <Link href="/" className="hover:text-red-600">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-900">Serviços</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Nossos Serviços</h1>
          <p className="text-slate-500 mt-4 max-w-2xl">
            Soluções profissionais para residências, comércios e veículos. Atendimento especializado com equipamentos de última geração.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article key={service.slug} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-red-100 transition-all flex flex-col">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-8">
                <Key className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4">{service.name}</h2>
              <p className="text-slate-500 leading-relaxed mb-10 flex-grow">
                {service.description} Oferecemos garantia em todos os serviços e atendimento imediato em toda a região.
              </p>
              <Link 
                href={`/servicos/${service.slug}`}
                className="inline-flex items-center gap-2 font-bold text-red-600 uppercase tracking-widest text-xs hover:gap-3 transition-all"
              >
                Detalhes do Serviço <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
