import Link from 'next/link';
import { testimonials } from '@/lib/data';
import { Star, ChevronRight, Quote } from 'lucide-react';
import { generateMeta, getBreadcrumbSchema, getTestimonialsSchema } from '@/lib/seo';

export const metadata = generateMeta(
  'Depoimentos de Clientes | Diego Chaveiro 24h',
  'Veja o que nossos clientes dizem sobre o Diego Chaveiro 24h. Excelência em atendimento e rapidez em Campinas e região.',
  '/depoimentos',
  'depoimentos chaveiro, avaliações diego chaveiro, chaveiro campinas depoimentos, chaveiro confiavel campinas'
);

export default function TestimonialsPage() {
  const jsonLd = [
    getBreadcrumbSchema([
      { name: 'Home', item: '/' },
      { name: 'Depoimentos', item: '/depoimentos' }
    ]),
    getTestimonialsSchema(testimonials)
  ];

  return (
    <main className="bg-slate-50 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-16 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
            <Link href="/" className="hover:text-red-600">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-900">Depoimentos</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">O que dizem nossos clientes</h1>
          
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-[#f4b400] text-[#f4b400]" />
              ))}
            </div>
            <div className="text-2xl font-black text-slate-900">EXCELENTE</div>
            <div className="flex items-center gap-2 text-slate-500 font-medium">
              <span className="text-blue-600 font-bold">Google</span>
              <span>Com base em 52 avaliações</span>
            </div>
          </div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-slate-50 opacity-50" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-black text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 leading-none mb-1">{testimonial.name}</h3>
                    <p className="text-xs text-slate-400 font-medium">{testimonial.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#f4b400] text-[#f4b400]" />
                  ))}
                </div>

                <p className="text-slate-600 leading-relaxed italic">
                  &quot;{testimonial.text}&quot;
                </p>
                
                <div className="mt-6 pt-6 border-t border-slate-50 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-300">
                  <span className="text-blue-600">Google Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-24 bg-slate-900 rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8">Seja nosso próximo cliente satisfeito</h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              Atendimento rápido, preço justo e garantia total em todos os serviços. Ligue agora ou chame no WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="https://wa.me/5519996085310" 
                className="bg-[#25d366] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:opacity-90 transition-all shadow-2xl"
              >
                Chamar no WhatsApp
              </a>
              <a 
                href="tel:+5519996085310" 
                className="bg-[#3b66bc] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:opacity-90 transition-all shadow-2xl"
              >
                Ligar Agora
              </a>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 bg-red-600 rounded-full blur-[100px]" />
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-600 rounded-full blur-[100px]" />
          </div>
        </section>
      </div>
    </main>
  );
}
