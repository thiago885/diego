import Link from 'next/link';
import { brands, cities } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ChevronRight, Phone, CheckCircle2, ArrowRight, Car } from 'lucide-react';
import { generateMeta, getBreadcrumbSchema } from '@/lib/seo';

interface Props {
  params: Promise<{ brand: string }>;
}

export async function generateStaticParams() {
  return brands.map((brand) => ({
    brand: brand.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { brand: brandSlug } = await params;
  const brand = brands.find(b => b.slug === brandSlug);
  if (!brand) return {};

  const keywords = [
    `chaveiro ${brand.name}`,
    `chave codificada ${brand.name}`,
    `cópia de chave ${brand.name}`,
    `abertura de carro ${brand.name}`,
    `chave canivete ${brand.name}`,
    `reparo de ignição ${brand.name}`,
    'chaveiro automotivo',
    'chaveiro 24h'
  ].join(', ');

  return generateMeta(
    `Chaveiro para ${brand.name} 24h | Diego Chaveiro`,
    `Especialista em chaves codificadas, abertura e cópia de chaves para veículos ${brand.name}. Atendimento 24h em Campinas e região.`,
    `/marcas/${brand.slug}`,
    keywords
  );
}

export default async function BrandPage({ params }: Props) {
  const { brand: brandSlug } = await params;
  const brand = brands.find(b => b.slug === brandSlug);

  if (!brand) notFound();

  const jsonLd = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'Marcas', item: '/marcas' },
    { name: brand.name, item: `/marcas/${brand.slug}` }
  ]);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 mb-12">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-red-500">Chaveiro {brand.name}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <Car className="w-3 h-3" /> Especialista Automotivo
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
              Chaveiro para {brand.name}
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-12 max-w-2xl">
              Perdeu a chave do seu {brand.name}? Somos especialistas em chaves codificadas, telecomandos e aberturas técnicas para todos os modelos {brand.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="tel:+5519996085310" 
                className="bg-[#3b66bc] text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-2xl"
              >
                <Phone className="w-6 h-6" />
                Ligar Agora
              </a>
              <Link 
                href={`/marcas/${brand.slug}/contato`}
                className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-slate-50 transition-all shadow-2xl"
              >
                Falar com Especialista {brand.name}
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 -skew-x-12 translate-x-20" />
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight mb-8">Serviços para Veículos {brand.name}</h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
                <p>
                  Trabalhar com veículos da <strong>{brand.name}</strong> exige equipamentos de diagnóstico avançados e softwares atualizados para programação de chaves e transponders.
                </p>
                <p>
                  No Diego Chaveiro, possuímos tecnologia de ponta para realizar a cópia da sua chave {brand.name}, mesmo que você tenha perdido todas as chaves (situação de &quot;all keys lost&quot;). Atendemos modelos nacionais e importados.
                </p>
              </div>

              <div className="mt-12 grid sm:grid-cols-2 gap-6">
                {[
                  'Cópia de Chave Reserva',
                  'Chave Canivete Completa',
                  'Programação de Transponder',
                  'Abertura Técnica sem Danos',
                  'Troca de Bateria de Controle',
                  'Reparo em Miolo de Ignição'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 font-bold text-slate-800">
                    <CheckCircle2 className="text-green-500 w-5 h-5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-lg font-bold mb-4">Serviço Especializado</h3>
                <p className="text-sm text-slate-600 mb-6">
                  Somos referência em <strong>chaves codificadas</strong> para veículos {brand.name}. Conheça mais sobre nossa tecnologia:
                </p>
                <Link 
                  href="/servicos/chaves-codificadas"
                  className="inline-flex items-center gap-2 text-red-600 font-bold text-sm hover:gap-3 transition-all"
                >
                  Ver Chaves Codificadas <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-slate-50 p-12 rounded-3xl border border-slate-100">
              <h3 className="text-2xl font-black mb-8">Atendimento 24h na Região</h3>
              <p className="text-slate-500 mb-10">Socorro automotivo para {brand.name} em todas as cidades:</p>
              <div className="grid grid-cols-2 gap-4">
                {cities.map((city) => (
                  <Link 
                    key={city.slug} 
                    href={`/cidades/${city.slug}`}
                    className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 hover:border-red-600 hover:text-red-600 transition-all group"
                  >
                    <span className="font-bold text-sm">{city.name}</span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-red-600 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
