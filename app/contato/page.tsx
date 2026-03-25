import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageSquare, ChevronRight, ShieldCheck } from 'lucide-react';
import { generateMeta } from '@/lib/seo';

export const metadata = generateMeta(
  'Contato | Diego Chaveiro 24h',
  'Entre em contato com o Diego Chaveiro 24h. Atendimento emergencial em Campinas, Sumaré, Hortolândia e região. Ligue ou mande um WhatsApp.',
  '/contato'
);

export default function ContactPage() {
  return (
    <main className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-16 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
            <Link href="/" className="hover:text-red-600">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-900">Contato</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Fale Conosco</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Estamos prontos para te atender 24 horas por dia. Escolha o melhor canal de comunicação abaixo.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Card WhatsApp */}
          <a 
            href="https://wa.me/5519996085310"
            className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:border-green-500 transition-all group text-center"
          >
            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-slate-500 text-sm mb-6">Resposta imediata e envio de fotos para orçamento.</p>
            <span className="text-green-600 font-black text-lg">(19) 99608-5310</span>
          </a>

          {/* Card Telefone */}
          <a 
            href="tel:+5519996085310"
            className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm hover:border-[#3b66bc] transition-all group text-center"
          >
            <div className="w-16 h-16 bg-blue-50 text-[#3b66bc] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#3b66bc] group-hover:text-white transition-colors">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Telefone</h3>
            <p className="text-slate-500 text-sm mb-6">Ligue agora para emergências e socorro 24h.</p>
            <span className="text-[#3b66bc] font-black text-lg">(19) 99608-5310</span>
          </a>
        </div>

        <div className="bg-slate-900 text-white p-12 rounded-3xl shadow-2xl text-center">
          <h2 className="text-3xl font-black mb-8">Atendimento 24 Horas</h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Estamos prontos para socorro imediato em qualquer horário do dia ou da noite, todos os dias da semana.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <Clock className="text-red-500 w-6 h-6" />
              <span className="font-bold">Plantão Permanente</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-red-500 w-6 h-6" />
              <span className="font-bold">Garantia Total</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
