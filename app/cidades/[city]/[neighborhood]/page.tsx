import Link from 'next/link';
import { cities, services } from '@/lib/data';
import { notFound } from 'next/navigation';
import { MapPin, ChevronRight, Phone, Clock, ShieldCheck, Star } from 'lucide-react';
import { generateMeta, getLocalBusinessSchema, getBreadcrumbSchema } from '@/lib/seo';

interface Props {
  params: Promise<{ city: string; neighborhood: string }>;
}

export async function generateStaticParams() {
  return cities.flatMap((city) =>
    city.neighborhoods.map((neighborhood) => ({
      city: city.slug,
      neighborhood: neighborhood
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '-'),
    }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { city: citySlug, neighborhood: neighborhoodSlug } = await params;
  const city = cities.find(c => c.slug === citySlug);
  if (!city) return {};

  const neighborhood = city.neighborhoods.find(n => 
    n.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-') === neighborhoodSlug
  );
  if (!neighborhood) return {};

  // Lógica de conteúdo dinâmico para SEO
  const intros = [
    `Trancou a chave para fora no ${neighborhood}? O Diego Chaveiro 24h está de plantão agora mesmo.`,
    `Precisa de um chaveiro urgente no ${neighborhood}? Chegamos em até 30 minutos com equipe especializada.`,
    `Se você está no ${neighborhood} e teve problemas com sua fechadura, conte com atendimento profissional 24h.`,
    `Segurança é prioridade no ${neighborhood}. Oferecemos serviços completos de chaveiro residencial e automotivo.`,
    `Perdeu as chaves no ${neighborhood}? Não se preocupe, atendemos emergências dia e noite com rapidez.`,
    `O melhor serviço de chaveiro no ${neighborhood} você encontra aqui. Atendimento rápido e preço justo.`
  ];
  
  const introIndex = neighborhood.length % intros.length;
  const selectedIntro = intros[introIndex];

  const keywords = [
    `chaveiro no ${neighborhood}`,
    `chaveiro 24h ${neighborhood}`,
    `chaveiro em ${city.name} ${neighborhood}`,
    `abertura de portas ${neighborhood}`,
    `chaveiro residencial ${neighborhood}`,
    `chaveiro automotivo ${neighborhood}`,
    'chaveiro 24h',
    'socorro 24h'
  ].join(', ');

  return generateMeta(
    `Chaveiro 24h no ${neighborhood} | Chegamos em 20 Minutos`,
    selectedIntro,
    `/cidades/${city.slug}/${neighborhoodSlug}`,
    keywords
  );
}

export default async function NeighborhoodPage({ params }: Props) {
  const { city: citySlug, neighborhood: neighborhoodSlug } = await params;
  const city = cities.find(c => c.slug === citySlug);

  if (!city) notFound();

  const neighborhood = city.neighborhoods.find(n => 
    n.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-') === neighborhoodSlug
  );

  if (!neighborhood) notFound();

  // Arrays de Conteúdo Dinâmico
  const intros = [
    `Trancou a chave para fora no ${neighborhood}? O Diego Chaveiro 24h está de plantão agora mesmo.`,
    `Precisa de um chaveiro urgente no ${neighborhood}? Chegamos em até 30 minutos com equipe especializada.`,
    `Se você está no ${neighborhood} e teve problemas com sua fechadura, conte com atendimento profissional 24h.`,
    `Segurança é prioridade no ${neighborhood}. Oferecemos serviços completos de chaveiro residencial e automotivo.`,
    `Perdeu as chaves no ${neighborhood}? Não se preocupe, atendemos emergências dia e noite com rapidez.`,
    `O melhor serviço de chaveiro no ${neighborhood} você encontra aqui. Atendimento rápido e preço justo.`
  ];

  const developments = [
    `Nossa equipe técnica utiliza ferramentas de última geração para garantir que sua porta seja aberta sem danos. Atendemos residências, comércios e veículos em toda a região do ${neighborhood}.`,
    `Especialistas em chaves codificadas e fechaduras eletrônicas, trazemos tecnologia e confiança para os moradores do ${neighborhood}. Conte com quem entende do assunto.`,
    `Com anos de experiência atendendo em ${city.name}, o Diego Chaveiro se destaca pela pontualidade e qualidade no serviço prestado no ${neighborhood}.`,
    `Não importa o horário, se você precisar de socorro no ${neighborhood}, nossa unidade móvel está pronta para te atender com toda a segurança necessária.`
  ];

  const allTestimonials = [
    { name: 'João M.', text: `Excelente atendimento no ${neighborhood}. Chegou muito rápido!`, stars: 5 },
    { name: 'Maria Silva', text: `Preço justo e serviço de qualidade aqui no ${neighborhood}. Recomendo.`, stars: 5 },
    { name: 'Pedro H.', text: `Chaveiro de confiança no ${neighborhood}. Resolveu meu problema na hora.`, stars: 5 },
    { name: 'Carla F.', text: `Muito atencioso e profissional. O melhor do ${neighborhood}.`, stars: 5 },
    { name: 'Lucas G.', text: `Precisei de madrugada no ${neighborhood} e fui atendido prontamente.`, stars: 5 },
    { name: 'Beatriz R.', text: `Serviço limpo e rápido. Nota 10 para o atendimento no ${neighborhood}.`, stars: 5 },
    { name: 'Marcos A.', text: `Abriu meu carro sem riscar nada. Ótimo profissional no ${neighborhood}.`, stars: 5 },
    { name: 'Fernanda L.', text: `Sempre que preciso de chaveiro no ${neighborhood}, chamo o Diego.`, stars: 5 }
  ];

  // Seleção baseada no comprimento do nome do bairro
  const introIndex = neighborhood.length % intros.length;
  const devIndex = neighborhood.length % developments.length;
  const testIndex1 = neighborhood.length % allTestimonials.length;
  const testIndex2 = (neighborhood.length + 3) % allTestimonials.length;

  const selectedIntro = intros[introIndex];
  const selectedDev = developments[devIndex];
  const selectedTestimonials = [
    allTestimonials[testIndex1],
    allTestimonials[testIndex2]
  ];

  const jsonLd = [
    getLocalBusinessSchema(city.name, neighborhood),
    getBreadcrumbSchema([
      { name: 'Home', item: '/' },
      { name: 'Cidades', item: '/cidades' },
      { name: city.name, item: `/cidades/${city.slug}` },
      { name: neighborhood, item: `/cidades/${city.slug}/${neighborhoodSlug}` }
    ])
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero do Bairro */}
      <section className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            <Link href="/" className="hover:text-red-600">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/cidades" className="hover:text-red-600">Cidades</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/cidades/${city.slug}`} className="hover:text-red-600">{city.name}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-900">{neighborhood}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {city.slug === 'sumare' && (
                <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-lg shadow-red-200">
                  <MapPin className="w-3.5 h-3.5" /> Ponto Físico em Sumaré
                </div>
              )}
              <div className="flex items-center gap-2 text-red-600 font-bold text-sm mb-4 uppercase tracking-widest">
                <MapPin className="w-4 h-4" />
                Atendimento no {neighborhood}
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1]">
                Chaveiro 24h no <span className="text-red-600">{neighborhood}</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                {selectedIntro}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+5519996085310" 
                  className="bg-[#3b66bc] text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  Ligar Agora
                </a>
                <a 
                  href="https://wa.me/5519996085310" 
                  className="bg-[#008000] text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-xl"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
            
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 relative">
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg font-black text-sm shadow-lg rotate-3">
                TOP 1 NO BAIRRO
              </div>
              <h3 className="text-xl font-bold mb-6">Avaliações no {neighborhood}</h3>
              <div className="space-y-6">
                {selectedTestimonials.map((review, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex gap-1 mb-2">
                      {[...Array(review.stars)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-600 italic mb-3">&quot;{review.text}&quot;</p>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{review.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo do Silo */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <article className="prose prose-slate max-w-none">
                <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-6">Atendimento no {neighborhood} - Diego Chaveiro</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {selectedIntro}
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {selectedDev}
                </p>
              </article>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm">
                  <Clock className="text-red-600 w-8 h-8 mb-4" />
                  <h4 className="font-bold text-lg mb-2">Chegada Rápida</h4>
                  <p className="text-sm text-slate-500">Por estarmos próximos ao {neighborhood}, garantimos o menor tempo de espera.</p>
                </div>
                <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm">
                  <ShieldCheck className="text-red-600 w-8 h-8 mb-4" />
                  <h4 className="font-bold text-lg mb-2">Segurança</h4>
                  <p className="text-sm text-slate-500">Técnicos identificados e serviços com garantia total para sua paz de espírito.</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black mb-8">Outros Bairros em {city.name}</h3>
                <div className="flex flex-wrap gap-3">
                  {city.neighborhoods.filter(n => n !== neighborhood).map((n) => (
                    <Link 
                      key={n} 
                      href={`/cidades/${city.slug}/${n.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')}`}
                      className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:border-red-600 hover:text-red-600 transition-all"
                    >
                      {n}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-8">
              <div className="bg-red-600 text-white p-10 rounded-3xl shadow-2xl shadow-red-200">
                <h3 className="text-2xl font-black mb-6">Orçamento via WhatsApp</h3>
                <p className="mb-8 text-red-100 leading-relaxed">
                  Mande uma foto do seu problema agora mesmo e receba o valor do serviço em minutos.
                </p>
                <a 
                  href="https://wa.me/5519996085310" 
                  className="block w-full text-center bg-white text-red-600 py-4 rounded-xl font-black hover:bg-slate-100 transition-colors"
                >
                  ENVIAR FOTO
                </a>
              </div>

              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200">
                <h3 className="font-bold mb-6 uppercase tracking-widest text-xs text-slate-400">Serviços no {neighborhood}</h3>
                <ul className="space-y-4">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/servicos/${s.slug}`} className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-red-600 transition-colors">
                        <ChevronRight className="w-4 h-4 text-red-600" />
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
