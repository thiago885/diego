import { Metadata } from 'next';
import { City, Service } from './data';

export function generateMeta(title: string, description: string, url: string, keywords?: string): Metadata {
  const fullUrl = `https://diegochaveiro.com${url}`;
  const siteName = 'Diego Chaveiro 24h';
  const defaultImage = 'https://diegochaveiro24horas.com.br/imagens/diego_chaveiro_logo.png';

  return {
    title,
    description,
    keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName,
      locale: 'pt_BR',
      type: 'website',
      images: [
        {
          url: defaultImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [defaultImage],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

export function getLocalBusinessSchema(city?: string, neighborhood?: string) {
  const location = neighborhood ? `${neighborhood}, ${city}` : city || 'Região de Campinas';
  const isSumare = city?.toLowerCase() === 'sumare';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    'name': `Diego Chaveiro 24h - ${location}`,
    'description': `Chaveiro emergencial 24 horas em ${location}. Atendimento rápido para aberturas, chaves automotivas e fechaduras.`,
    'url': 'https://diegochaveiro.com',
    'telephone': '+5519996085310',
    'image': 'https://diegochaveiro24horas.com.br/imagens/diego_chaveiro_logo.png',
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': isSumare ? 'Rua Exemplo em Sumaré, 123' : '', // User should provide real address
      'addressLocality': city || 'Campinas',
      'addressRegion': 'SP',
      'addressCountry': 'BR'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': isSumare ? -22.8205 : -22.9064, // Sumaré vs Campinas center
      'longitude': isSumare ? -47.2718 : -47.0616
    },
    'areaServed': {
      '@type': 'GeoCircle',
      'geoMidpoint': {
        '@type': 'GeoCoordinates',
        'latitude': -22.9064,
        'longitude': -47.0616
      },
      'geoRadius': '50000'
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
      ],
      'opens': '00:00',
      'closes': '23:59'
    }
  };
}

export function getServiceSchema(serviceName: string, serviceDescription: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': serviceName,
    'description': serviceDescription,
    'provider': {
      '@type': 'Locksmith',
      'name': 'Diego Chaveiro 24h'
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Campinas e Região'
    }
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `https://diegochaveiro.com${item.item}`
    }))
  };
}

export function getTestimonialsSchema(testimonials: { name: string; rating: number; text: string; date: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Diego Chaveiro 24h',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '5',
      'reviewCount': '52'
    },
    'review': testimonials.map(t => ({
      '@type': 'Review',
      'author': {
        '@type': 'Person',
        'name': t.name
      },
      'datePublished': t.date,
      'reviewBody': t.text,
      'reviewRating': {
        '@type': 'Rating',
        'ratingValue': t.rating,
        'bestRating': '5'
      }
    }))
  };
}
