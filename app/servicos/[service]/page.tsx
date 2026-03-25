import Link from 'next/link';
import { services, cities, brands } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ChevronRight, Phone, ShieldCheck, CheckCircle2, ArrowRight, Car } from 'lucide-react';
import { generateMeta, getBreadcrumbSchema, getServiceSchema } from '@/lib/seo';

interface Props {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { service: serviceSlug } = await params;
  const service = services.find(s => s.slug === serviceSlug);
  if (!service) return {};

  const keywords = [
    service.name,
    `chaveiro ${service.name.toLowerCase()}`,
    `serviço de ${service.name.toLowerCase()}`,
    'chaveiro 24h',
    'chaveiro campinas',
    'chaveiro sumare',
    'chaveiro hortolandia',
    'chaveiro americana',
    'chaveiro residencial',
    'chaveiro automotivo'
  ].join(', ');

  return generateMeta(
    `${service.name} 24h | Diego Chaveiro`,
    `${service.description} Atendimento rápido e garantido em Campinas e região. Ligue agora para ${service.name.toLowerCase()}.`,
    `/servicos/${service.slug}`,
    keywords
  );
}

export default async function ServicePage({ params }: Props) {
  const { service: serviceSlug } = await params;
  const service = services.find(s => s.slug === serviceSlug);

  if (!service) notFound();

  const jsonLd = [
    getBreadcrumbSchema([
      { name: 'Home', item: '/' },
      { name: 'Serviços', item: '/servicos' },
      { name: service.name, item: `/servicos/${service.slug}` }
    ]),
    getServiceSchema(service.name, service.description)
  ];

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
            <Link href="/servicos" className="hover:text-white transition-colors">Serviços</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-red-500">{service.name}</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
              {service.name}
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-12 max-w-2xl">
              {service.description} Atendimento especializado com técnicos treinados e equipamentos modernos para garantir a segurança do seu patrimônio.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="tel:+5519996085310" 
                className="bg-[#3b66bc] text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-2xl"
              >
                <Phone className="w-6 h-6" />
                Ligar Agora
              </a>
              <a 
                href="https://wa.me/5519996085310" 
                className="bg-[#008000] text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-2xl"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        {/* Efeito de Fundo */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 -skew-x-12 translate-x-20" />
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight mb-8">Especialista em {service.name}</h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
                <p>
                  O serviço de <strong>{service.name.toLowerCase()}</strong> exige conhecimento técnico e ferramentas específicas para evitar danos desnecessários. No Diego Chaveiro, priorizamos a integridade da sua porta, veículo ou fechadura.
                </p>
                <p>
                  Atendemos chamados de emergência em toda a região de Campinas, com tempo médio de chegada de 30 minutos. Seja para uma residência, comércio ou veículo, nossa equipe está preparada para resolver seu problema com agilidade.
                </p>
              </div>

              <div className="mt-12 grid sm:grid-cols-2 gap-6">
                {[
                  'Atendimento 24 horas',
                  'Técnicos uniformizados',
                  'Garantia em todos os serviços',
                  'Preço justo e transparente',
                  'Aceitamos cartões e Pix',
                  'Equipamentos modernos'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 font-bold text-slate-800">
                    <CheckCircle2 className="text-green-500 w-5 h-5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-12 rounded-3xl border border-slate-100">
              <h3 className="text-2xl font-black mb-8">Onde atendemos?</h3>
              <p className="text-slate-500 mb-10">Realizamos o serviço de {service.name.toLowerCase()} em todas as cidades abaixo:</p>
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

              {service.slug === 'chaves-codificadas' && (
                <div className="mt-12 pt-12 border-t border-slate-200">
                  <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                    <Car className="w-5 h-5 text-red-600" /> Marcas Especializadas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {brands.map((brand) => (
                      <Link 
                        key={brand.slug} 
                        href={`/marcas/${brand.slug}`}
                        className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:border-red-600 hover:text-red-600 transition-all"
                      >
                        {brand.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
