import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Diego Chaveiro 24h',
    short_name: 'Diego Chaveiro',
    description: 'Chaveiro 24h em Campinas, Sumaré e Hortolândia. Aberturas, chaves codificadas e fechaduras.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ef4444',
    icons: [
      {
        src: 'https://diegochaveiro24horas.com.br/imagens/diego_chaveiro_logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
