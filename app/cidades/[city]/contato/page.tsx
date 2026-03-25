import Link from 'next/link';
import { cities } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Phone, MapPin, Clock, MessageSquare, ChevronRight, ShieldCheck } from 'lucide-react';
import { generateMeta } from '@/lib/seo';

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { city: citySlug } = await params;
  const city = cities.find(c => c.slug === citySlug);
  if (!city) return {};

  return generateMeta(
    `Contato Chaveiro em ${city.name} 24h | Diego Chaveiro`,
    `Precisa de chaveiro em ${city.name}? Entre em contato agora para atendimento emergencial 24h. Chegamos em até 30 minutos em qualquer bairro de ${city.name}.`,
    `/cidades/${city.slug}/contato`
  );
}

export default async function CityContactPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = cities.find(c => c.slug === citySlug);

  if (!city) notFound();

  return (
    <main className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-16">
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            <Link href="/" className="hover:text-red-600">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/cidades" className="hover:text-red-600">Cidades</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/cidades/${city.slug}`} className="hover:text-red-600">{city.name}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-900">Contato</span>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Fale com o Chaveiro em <span className="text-red-600">{city.name}</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Atendimento prioritário para toda a cidade de <strong>{city.name}</strong>. Se você está com uma emergência, ligue agora ou mande um WhatsApp para um orçamento imediato.
            </p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <a 
              href="tel:+5519996085310" 
              className="bg-[#3b66bc] text-white p-10 rounded-3xl flex flex-col items-center text-center shadow-xl hover:opacity-90 transition-all"
            >
              <Phone className="w-12 h-12 mb-4" />
              <span className="text-xs font-black uppercase tracking-widest opacity-80 mb-2">Ligar Agora</span>
              <span className="text-2xl font-black">(19) 99608-5310</span>
            </a>
            <a 
              href="https://wa.me/5519996085310" 
              className="bg-[#008000] text-white p-10 rounded-3xl flex flex-col items-center text-center shadow-xl hover:opacity-90 transition-all"
            >
              <MessageSquare className="w-12 h-12 mb-4" />
              <span className="text-xs font-black uppercase tracking-widest opacity-80 mb-2">WhatsApp</span>
              <span className="text-2xl font-black">Enviar Foto</span>
            </a>
          </div>

          <div className="bg-slate-50 p-12 rounded-3xl border border-slate-200">
            <h3 className="text-2xl font-black mb-8 text-center">Atendimento em {city.name}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center">
                  <Clock className="text-red-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400 mb-1">Tempo</h4>
                  <p className="text-slate-700 font-bold">Até 30 min</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center">
                  <ShieldCheck className="text-red-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400 mb-1">Garantia</h4>
                  <p className="text-slate-700 font-bold">Total</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center">
                  <MapPin className="text-red-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400 mb-1">Cobertura</h4>
                  <p className="text-slate-700 font-bold">Todos os Bairros</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
