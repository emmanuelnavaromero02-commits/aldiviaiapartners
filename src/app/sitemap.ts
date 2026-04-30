import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://valdiviaiapartners-sap.ai';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/demo`, lastModified, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/nosotros`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/soluciones/sap-ia`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/casos-de-exito`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/agendar`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/contacto`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/legal/privacidad`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/legal/terminos`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
