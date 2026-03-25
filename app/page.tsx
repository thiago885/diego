import Link from 'next/link';
import Image from 'next/image';
import { cities, services, brands } from '@/lib/data';
import { ChevronRight, ArrowRight, Car } from 'lucide-react';

import { getFAQSchema } from '@/lib/seo';

export default function HomePage() {
  const baseUrl = 'https://diegochaveiro24horas.com.br/imagens/';
  
  const faqs = [
    {
      question: "Qual o tempo de chegada do chaveiro?",
      answer: "Em média, nossos técnicos chegam ao local em até 30 minutos em toda a região de Campinas, Sumaré e Hortolândia."
    },
    {
      question: "Vocês atendem 24 horas?",
      answer: "Sim! Trabalhamos com plantão 24 horas, inclusive aos sábados, domingos e feriados, para qualquer tipo de emergência."
    },
    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer: "Aceitamos Pix, cartões de débito e crédito de todas as bandeiras, além de dinheiro."
    },
    {
      question: "Onde fica o ponto físico do Diego Chaveiro?",
      answer: "Nossa sede principal e ponto físico fica em Sumaré, SP, onde realizamos serviços de bancada e atendimento presencial."
    }
  ];

  const jsonLd = getFAQSchema(faqs);

  const gridImages = [
    { src: 'chave_mercedez_c180.png', alt: 'Chave Codificada Mercedes-Benz C180' },
    { src: 'chave_codificada_mini.png', alt: 'Chave Codificada Mini Cooper' },
    { src: 'chave_codificada_chevrolet.png', alt: 'Chave Codificada Chevrolet' },
    { src: 'chave_bmw2.png', alt: 'Chave Codificada BMW' },
    { src: 'chave_renault.png', alt: 'Chave Codificada Renault' },
    { src: 'chave_mercedez_c180.png', alt: 'Cópia de Chave Mercedes' },
    { src: 'chave_codificada_mini.png', alt: 'Programação de Chave Mini' },
    { src: 'chave_range_rover.png', alt: 'Chave Codificada Range Rover' }
  ];

  return (
    <main className="bg-[#ffff00] pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Grid de Imagens do Print 1 */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gridImages.map((img, idx) => (
            <div key={idx} className="aspect-square relative rounded-lg overflow-hidden shadow-md bg-white">
              <Image 
                src={`${baseUrl}${img.src}`} 
                alt={img.alt} 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Cards de Serviços do Print 2 */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Abertura de Portas */}
          <div className="bg-[#ffeb99] p-8 flex flex-col items-center text-center shadow-lg border border-slate-200 transition-all group">
            <h2 className="text-4xl font-serif font-bold mb-6">Abertura de Portas</h2>
            <div className="relative w-full aspect-square mb-6 border-2 border-slate-800 bg-white">
              <Image 
                src={`${baseUrl}fachada_chaveiro_diego.webp`} 
                alt="Abertura de Portas" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="font-bold mb-4 text-slate-900">Oferecemos serviços de abertura de portas residenciais, comerciais e automotivas.</p>
            <div className="h-px w-full bg-slate-800 mb-4 opacity-20" />
            <p className="text-sm mb-8 text-slate-700">Nossa equipe de profissionais qualificados está sempre pronta para ajudar em casos de perda ou roubo de chaves, fechaduras quebradas ou travadas. Atendemos em diversas <Link href="/cidades" className="underline font-bold hover:text-red-600">cidades da região</Link>.</p>
            <Link href="/servicos/abertura-de-portas" className="w-full bg-black text-white py-3 font-bold text-lg hover:bg-slate-900 transition-colors text-center">
              Saiba Mais
            </Link>
          </div>

          {/* Card 2: Chaves Codificadas */}
          <div className="bg-[#d1d1e9] p-8 flex flex-col items-center text-center shadow-lg border border-slate-200 transition-all group">
            <h2 className="text-4xl font-serif font-bold mb-6">Chaves Codificadas</h2>
            <div className="relative w-full aspect-square mb-6 border-2 border-slate-800 bg-white">
              <Image 
                src={`${baseUrl}copia_de_chaves.png`} 
                alt="Chaves Codificadas" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="font-bold mb-4 text-slate-900">Somos especialistas em chaves codificadas para automóveis.</p>
            <div className="h-px w-full bg-slate-800 mb-4 opacity-20" />
            <p className="text-sm mb-8 text-slate-700">Oferecemos serviços de cópia e programação de chaves para a maioria das <Link href="/marcas" className="underline font-bold hover:text-red-600">marcas e modelos</Link> de veículos nacionais e importados.</p>
            <Link href="/servicos/chaves-codificadas" className="w-full bg-black text-white py-3 font-bold text-lg hover:bg-slate-900 transition-colors text-center">
              Saiba Mais
            </Link>
          </div>

          {/* Card 3: Troca de Fechaduras */}
          <div className="bg-[#c9f0f5] p-8 flex flex-col items-center text-center shadow-lg border border-slate-200 transition-all group">
            <h2 className="text-4xl font-serif font-bold mb-6">Troca de Fechaduras</h2>
            <div className="relative w-full aspect-square mb-6 border-2 border-slate-800 bg-white">
              <Image 
                src={`${baseUrl}interna_chaveiro_diego.png`} 
                alt="Troca de Fechaduras" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="font-bold mb-4 text-slate-900">Realizamos a troca de fechaduras residenciais, comerciais e automotivas.</p>
            <div className="h-px w-full bg-slate-800 mb-4 opacity-20" />
            <p className="text-sm mb-8 text-slate-700">Trabalhamos com as melhores marcas do mercado, garantindo segurança e qualidade para nossos clientes.</p>
            <Link href="/servicos/instalacao-e-troca-de-fechaduras" className="w-full bg-black text-white py-3 font-bold text-lg hover:bg-slate-900 transition-colors text-center">
              Saiba Mais
            </Link>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="/servicos" 
            className="inline-flex items-center gap-3 bg-black text-white px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl"
          >
            VER TODOS OS SERVIÇOS <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* Silo de Marcas */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-slate-900 p-12 rounded-3xl shadow-2xl overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-8 text-white uppercase tracking-tight flex items-center gap-3">
              <Car className="text-red-500 w-8 h-8" /> Especialista em Marcas
            </h3>
            <p className="text-slate-400 mb-10 max-w-2xl">
              Possuímos tecnologia de ponta para atender veículos de diversas marcas, nacionais e importados. Clique na marca do seu carro para saber mais:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {brands.map((brand) => (
                <Link 
                  key={brand.slug} 
                  href={`/marcas/${brand.slug}`}
                  className="flex items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold text-sm hover:bg-red-600 hover:border-red-600 transition-all text-center"
                >
                  {brand.name}
                </Link>
              ))}
            </div>
          </div>
          {/* Efeito de Fundo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[100px] -translate-y-32 translate-x-32" />
        </div>
      </section>

      {/* Silo Geográfico - Links de Cidades */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white/30 backdrop-blur-sm p-8 rounded-3xl border border-white/50">
          <h3 className="text-2xl font-black mb-8 text-center uppercase tracking-widest">Atendimento em Toda a Região</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cities.map((city) => (
              <Link 
                key={city.slug} 
                href={`/cidades/${city.slug}`}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all group ${
                  city.slug === 'sumare' 
                    ? 'bg-red-600 text-white border-red-700 shadow-lg scale-105' 
                    : 'bg-white/80 border-slate-200 hover:border-red-600 hover:text-red-600'
                }`}
              >
                <div className="flex flex-col">
                  <span className="font-bold text-sm">{city.name}</span>
                  {city.slug === 'sumare' && <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Ponto Físico</span>}
                </div>
                <ArrowRight className={`w-4 h-4 transition-colors ${city.slug === 'sumare' ? 'text-white' : 'text-slate-300 group-hover:text-red-600'}`} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-slate-900 text-white p-12 rounded-3xl shadow-2xl">
          <h3 className="text-3xl font-black mb-12 text-center uppercase tracking-tight">Perguntas Frequentes</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="font-bold text-lg mb-3 text-red-500">{faq.question}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
