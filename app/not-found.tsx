import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#ffff00] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-12 rounded-3xl shadow-2xl text-center border-2 border-black">
        <h1 className="text-6xl font-black mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-6 uppercase tracking-widest">Página Não Encontrada</h2>
        <p className="text-slate-600 mb-10">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <div className="flex flex-col gap-4">
          <Link 
            href="/" 
            className="bg-black text-white py-4 rounded-xl font-bold hover:bg-slate-900 transition-all"
          >
            Voltar para Home
          </Link>
          <a 
            href="tel:+5519996085310" 
            className="flex items-center justify-center gap-3 bg-[#3b66bc] text-white py-4 rounded-xl font-bold hover:opacity-90 transition-all"
          >
            <Phone className="w-5 h-5" />
            Ligar para Chaveiro
          </a>
        </div>
      </div>
    </main>
  );
}
