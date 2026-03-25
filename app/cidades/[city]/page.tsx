import Link from 'next/link';
import { cities, services, brands } from '@/lib/data';
import { notFound } from 'next/navigation';
import { MapPin, ChevronRight, Phone, Clock, ShieldCheck, Car } from 'lucide-react';
import { generateMeta, getLocalBusinessSchema, getBreadcrumbSchema } from '@/lib/seo';

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

  const keywords = [
    `chaveiro em ${city.name}`,
    `chaveiro 24h ${city.name}`,
    `chaveiro residencial ${city.name}`,
    `chaveiro automotivo ${city.name}`,
    `abertura de portas ${city.name}`,
    `chave codificada ${city.name}`,
    'chaveiro 24h',
    'socorro 24h'
  ].join(', ');

  return generateMeta(
    `Chaveiro 24h em ${city.name} | Atendimento Rápido`,
    `Precisa de chaveiro em ${city.name}? Atendimento emergencial 24h para aberturas e chaves automotivas. Chegamos em até 30 min em ${city.name}.`,
    `/cidades/${city.slug}`,
    keywords
  );
}

export default async function CityPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = cities.find(c => c.slug === citySlug);

  if (!city) notFound();

  const jsonLd = [
    getLocalBusinessSchema(city.name),
    getBreadcrumbSchema([
      { name: 'Home', item: '/' },
      { name: 'Cidades', item: '/cidades' },
      { name: city.name, item: `/cidades/${city.slug}` }
    ])
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            <Link href="/" className="hover:text-red-600">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/cidades" className="hover:text-red-600">Cidades</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-900">{city.name}</span>
          </nav>

          <div className="max-w-3xl">
            {city.slug === 'sumare' && (
              <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-lg shadow-red-200">
                <MapPin className="w-3.5 h-3.5" /> Ponto Físico em Sumaré
              </div>
            )}
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Chaveiro 24h em <span className="text-red-600">{city.name}</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              {city.description || `Atendimento especializado em toda a cidade de ${city.name}. Se você está trancado para fora de casa ou do carro, ligue agora para um atendimento imediato.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+5519996085310" 
                className="inline-flex items-center justify-center gap-3 bg-[#3b66bc] text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Ligar em {city.name}
              </a>
              <Link 
                href={`/cidades/${city.slug}/contato`}
                className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-xl"
              >
                Falar com Chaveiro em {city.name}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black tracking-tight mb-8">Bairros Atendidos em {city.name}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {city.neighborhoods.map((neighborhood) => (
                  <Link 
                    key={neighborhood} 
                    href={`/cidades/${city.slug}/${neighborhood.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')}`}
                    className="flex items-center justify-between p-5 bg-white border border-slate-100 rounded-xl hover:border-red-600 hover:text-red-600 transition-all group shadow-sm"
                  >
                    <span className="font-bold">{neighborhood}</span>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-red-600 transition-colors" />
                  </Link>
                ))}
              </div>

              <div className="mt-20 prose prose-slate max-w-none">
                <h3 className="text-2xl font-bold mb-6 text-slate-900">Por que escolher o Diego Chaveiro em {city.name}?</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Sabemos que emergências com chaves e fechaduras não têm hora para acontecer. Por isso, mantemos equipes estratégicas em {city.name} para garantir o menor tempo de resposta da região.
                </p>
                <ul className="grid sm:grid-cols-2 gap-4 list-none p-0">
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <ShieldCheck className="text-red-600 w-5 h-5" /> Abertura sem danos
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <Clock className="text-red-600 w-5 h-5" /> Chegada em 30 min
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <MapPin className="text-red-600 w-5 h-5" /> Atendimento em domicílio
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <Phone className="text-red-600 w-5 h-5" /> Suporte 24 horas
                  </li>
                </ul>

                <div className="mt-16 p-8 bg-slate-900 rounded-3xl text-white">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Car className="text-red-500 w-5 h-5" /> Especialista em Chaves Automotivas em {city.name}
                  </h3>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                    Possuímos tecnologia para atender as principais marcas de veículos em {city.name}. Realizamos cópias, codificação e aberturas técnicas:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {brands.slice(0, 10).map((brand) => (
                      <Link 
                        key={brand.slug} 
                        href={`/marcas/${brand.slug}`}
                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-white hover:bg-red-600 hover:border-red-600 transition-all"
                      >
                        {brand.name}
                      </Link>
                    ))}
                    <Link href="/marcas" className="px-3 py-1.5 bg-white/10 rounded-lg text-xs font-bold text-white hover:bg-white/20 transition-all">
                      Ver Todas
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <aside className="space-y-8">
              <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold mb-6">Serviços Disponíveis</h3>
                <ul className="space-y-4">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link 
                        href={`/servicos/${service.slug}`}
                        className="flex items-center justify-between text-slate-400 hover:text-white transition-colors group"
                      >
                        <span className="text-sm font-bold uppercase tracking-wider">{service.name}</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-2 border-red-100 p-8 rounded-2xl bg-red-50/30">
                <h3 className="text-lg font-bold mb-4">Precisa de orçamento?</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Envie uma foto da sua fechadura ou chave pelo WhatsApp para um orçamento rápido e sem compromisso.
                </p>
                <a 
                  href="https://wa.me/5519996085310" 
                  className="block w-full text-center bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
