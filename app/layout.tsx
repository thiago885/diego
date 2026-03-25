import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { generateMeta } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ef4444',
};

export const metadata: Metadata = generateMeta(
  'Diego Chaveiro 24h | Chaveiro em Campinas e Região',
  'Atendimento emergencial 24 horas para aberturas, chaves automotivas e fechaduras. Atendemos Campinas, Sumaré, Hortolândia e região.',
  '/',
  'chaveiro 24h, chaveiro campinas, chaveiro sumaré, chaveiro hortolândia, chaves codificadas, abertura de portas'
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const logoUrl = 'https://diegochaveiro24horas.com.br/imagens/diego_chaveiro_logo.png';

  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans bg-[#ffff00] text-slate-900 antialiased">
        {/* Header Estilo Screenshot */}
        <header className="py-8 bg-[#ffff00]">
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
            <Link href="/" className="mb-6">
              <Image 
                src={logoUrl} 
                alt="Diego Chaveiro 24h Logo" 
                width={250} 
                height={150} 
                className="w-auto h-32 md:h-48 object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">Chaveiro 24 Horas</h1>
            
            <ul className="flex flex-col gap-2 mb-8 text-lg font-medium">
              <li className="flex items-center justify-center gap-2">✓ Residencial</li>
              <li className="flex items-center justify-center gap-2">✓ Automotivo</li>
              <li className="flex items-center justify-center gap-2">✓ Comercial</li>
            </ul>

            <div className="flex gap-4">
              <a 
                href="https://wa.me/5519996085310" 
                className="bg-[#008000] text-white px-6 py-2 rounded-md font-bold hover:opacity-90 transition-all"
              >
                Whatsapp
              </a>
              <a 
                href="tel:+5519996085310" 
                className="bg-[#3b66bc] text-white px-6 py-2 rounded-md font-bold hover:opacity-90 transition-all"
              >
                Telefone
              </a>
            </div>
          </div>
        </header>

        {children}

        {/* Footer Semântico */}
        <footer id="contato" className="bg-slate-900 text-slate-300 pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 border-b border-slate-800 pb-16">
            <div className="col-span-2">
              <h2 className="text-2xl font-bold text-white mb-6">Diego Chaveiro 24h</h2>
              <p className="max-w-md mb-8 leading-relaxed">
                Especialista em segurança e aberturas de emergência. Atendimento rápido e profissional em toda a região metropolitana de Campinas.
              </p>
              <div className="flex gap-4">
                <div className="p-3 bg-slate-800 rounded-lg"><ShieldCheck className="text-red-500" /></div>
                <div className="p-3 bg-slate-800 rounded-lg"><Clock className="text-red-500" /></div>
                <div className="p-3 bg-slate-800 rounded-lg"><MapPin className="text-red-500" /></div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Empresa</h3>
              <ul className="space-y-4 text-sm">
                <li><Link href="/contato" className="hover:text-white transition-colors">Fale Conosco</Link></li>
                <li><Link href="/depoimentos" className="hover:text-white transition-colors">Depoimentos de Clientes</Link></li>
                <li><Link href="/cidades" className="hover:text-white transition-colors">Cidades Atendidas</Link></li>
                <li><Link href="/marcas" className="hover:text-white transition-colors">Marcas de Veículos</Link></li>
                <li><Link href="/servicos" className="hover:text-white transition-colors">Nossos Serviços</Link></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 pt-10 text-center text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            © 2026 Diego Chaveiro 24h - Todos os direitos reservados
          </div>
        </footer>

        {/* Botão Flutuante WhatsApp Verde e Branco */}
        <a 
          href="https://wa.me/5519996085310"
          className="fixed bottom-6 right-6 w-16 h-16 bg-[#25d366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50"
          aria-label="Chamar no WhatsApp"
        >
          <svg className="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
