import { MetadataRoute } from 'next';
import { cities, services, brands } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://diegochaveiro.com';

  // Static routes
  const staticRoutes = [
    '',
    '/servicos',
    '/cidades',
    '/marcas',
    '/depoimentos',
    '/contato',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic Service routes
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/servicos/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic City routes
  const cityRoutes = cities.map((city) => ({
    url: `${baseUrl}/cidades/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Dynamic Neighborhood routes
  const neighborhoodRoutes = cities.flatMap((city) =>
    city.neighborhoods.map((neighborhood) => {
      const neighborhoodSlug = neighborhood
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '-');
        
      return {
        url: `${baseUrl}/cidades/${city.slug}/${neighborhoodSlug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
      };
    })
  );

  // Dynamic Brand routes
  const brandRoutes = brands.map((brand) => ({
    url: `${baseUrl}/marcas/${brand.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...cityRoutes,
    ...neighborhoodRoutes,
    ...brandRoutes,
  ];
}
