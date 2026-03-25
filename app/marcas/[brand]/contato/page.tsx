import Link from 'next/link';
import { brands } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Phone, MapPin, Clock, MessageSquare, ChevronRight, ShieldCheck, Car } from 'lucide-react';
import { generateMeta } from '@/lib/seo';

interface Props {
  params: Promise<{ brand: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { brand: brandSlug } = await params;
  const brand = brands.find(b => b.slug === brandSlug);
  if (!brand) return {};

  return generateMeta(
    `Contato Chaveiro para ${brand.name} 24h | Diego Chaveiro`,
    `Precisa de chaveiro para seu veículo ${brand.name}? Entre em contato agora para chaves codificadas, aberturas e reparo de ignição para ${brand.name}. Atendimento 24h.`,
    `/marcas/${brand.slug}/contato`
  );
}

export default async function BrandContactPage({ params }: Props) {
  const { brand: brandSlug } = await params;
  const brand = brands.find(b => b.slug === brandSlug);

  if (!brand) notFound();

  return (
    <main className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-16">
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            <Link href="/" className="hover:text-red-600">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/marcas" className="hover:text-red-600">Marcas</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/marcas/${brand.slug}`} className="hover:text-red-600">{brand.name}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-900">Contato</span>
          </nav>
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-red-600 font-bold text-sm mb-4 uppercase tracking-widest">
              <Car className="w-4 h-4" />
              Especialista em {brand.name}
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Fale com o Chaveiro para <span className="text-red-600">{brand.name}</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Precisa de uma chave nova para seu <strong>{brand.name}</strong>? Nossa equipe é especialista em chaves codificadas e aberturas de veículos da marca {brand.name}.
            </p>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <a 
            href="https://wa.me/5519996085310"
            className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:border-green-500 transition-all group text-center"
          >
            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-slate-500 text-sm mb-6">Mande uma foto da sua chave {brand.name} para orçamento.</p>
            <span className="text-green-600 font-black text-lg">(19) 99608-5310</span>
          </a>

          <a 
            href="tel:+5519996085310"
            className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:border-[#3b66bc] transition-all group text-center"
          >
            <div className="w-16 h-16 bg-blue-50 text-[#3b66bc] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#3b66bc] group-hover:text-white transition-colors">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Ligar Agora</h3>
            <p className="text-slate-500 text-sm mb-6">Fale com um técnico especialista em {brand.name}.</p>
            <span className="text-[#3b66bc] font-black text-lg">(19) 99608-5310</span>
          </a>
        </div>

        <div className="bg-slate-900 text-white p-12 rounded-3xl shadow-2xl text-center">
          <ShieldCheck className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl font-black mb-4">Garantia Especializada {brand.name}</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Possuímos equipamentos de última geração para codificação de chaves e aberturas técnicas de veículos <strong>{brand.name}</strong> com total segurança e garantia.
          </p>
        </div>
      </div>
    </main>
  );
}
