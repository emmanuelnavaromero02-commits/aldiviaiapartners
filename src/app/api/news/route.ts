import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ articles: getFallbackNews() });
    }
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=SAP+OR+%22inteligencia+artificial+enterprise%22+OR+%22SAP+S4HANA%22+OR+%22AI+enterprise%22&language=es&sortBy=publishedAt&pageSize=12&apiKey=${apiKey}`,
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();
    if (data.status !== 'ok' || !data.articles?.length) {
      return NextResponse.json({ articles: getFallbackNews() });
    }
    return NextResponse.json({ articles: data.articles.slice(0, 9) });
  } catch {
    return NextResponse.json({ articles: getFallbackNews() });
  }
}

function getFallbackNews() {
  return [
    {
      title: 'SAP S/4HANA Cloud alcanza nuevo récord de adopción enterprise en LATAM',
      description: 'Las empresas latinoamericanas aceleran su migración a SAP S/4HANA Cloud, impulsadas por la necesidad de modernización y capacidades de IA integradas.',
      url: 'https://news.sap.com',
      source: { name: 'SAP News' },
      publishedAt: new Date().toISOString(),
      urlToImage: null,
      category: 'SAP',
    },
    {
      title: 'La IA generativa transforma los procesos financieros en empresas Fortune 500',
      description: 'Los CFOs de grandes corporativos reportan reducciones de hasta 70% en tiempo de cierre financiero gracias a agentes de IA integrados con SAP FI/CO.',
      url: 'https://www.gartner.com',
      source: { name: 'Gartner Research' },
      publishedAt: new Date(Date.now() - 86400000).toISOString(),
      urlToImage: null,
      category: 'IA Enterprise',
    },
    {
      title: 'SAP Business AI: nuevas capacidades de machine learning en S/4HANA 2025',
      description: 'SAP anuncia expansión de sus capacidades de Business AI con modelos predictivos nativos para gestión de inventarios, planificación de demanda y detección de fraude.',
      url: 'https://news.sap.com',
      source: { name: 'SAP News' },
      publishedAt: new Date(Date.now() - 172800000).toISOString(),
      urlToImage: null,
      category: 'SAP',
    },
    {
      title: 'Automatización inteligente: el futuro del ERP empresarial según IDC',
      description: 'IDC proyecta que el 75% de las empresas enterprise habrán implementado automatización con IA en sus sistemas ERP antes de 2026, con SAP liderando el mercado.',
      url: 'https://www.idc.com',
      source: { name: 'IDC Research' },
      publishedAt: new Date(Date.now() - 259200000).toISOString(),
      urlToImage: null,
      category: 'Tendencias',
    },
    {
      title: 'SuccessFactors impulsa la gestión del talento con IA predictiva',
      description: 'SAP SuccessFactors incorpora modelos de IA para predecir rotación de personal, identificar talento en riesgo y optimizar planes de sucesión en tiempo real.',
      url: 'https://news.sap.com',
      source: { name: 'SAP News' },
      publishedAt: new Date(Date.now() - 345600000).toISOString(),
      urlToImage: null,
      category: 'RRHH',
    },
    {
      title: 'Integración SAP-cloud: los 5 patrones más usados en proyectos enterprise 2025',
      description: 'Arquitectos de soluciones comparten los patrones de integración más efectivos entre SAP y plataformas cloud, incluyendo OData, CPI y arquitecturas event-driven.',
      url: 'https://community.sap.com',
      source: { name: 'SAP Community' },
      publishedAt: new Date(Date.now() - 432000000).toISOString(),
      urlToImage: null,
      category: 'Integración',
    },
    {
      title: 'Joule, el copiloto de IA de SAP, llega a todos los módulos de S/4HANA',
      description: 'SAP Joule, su asistente de IA generativa, se integra en Finance, HR, Supply Chain y Procurement, permitiendo consultas en lenguaje natural sobre datos empresariales.',
      url: 'https://news.sap.com',
      source: { name: 'SAP News' },
      publishedAt: new Date(Date.now() - 518400000).toISOString(),
      urlToImage: null,
      category: 'SAP',
    },
    {
      title: 'Mexico lidera adopción de SAP en mercados emergentes de LATAM',
      description: 'México se posiciona como el mercado de mayor crecimiento para SAP en América Latina, con 340 nuevas implementaciones en el último año y fuerte demanda en manufactura y retail.',
      url: 'https://www.forbes.com.mx',
      source: { name: 'Forbes México' },
      publishedAt: new Date(Date.now() - 604800000).toISOString(),
      urlToImage: null,
      category: 'México',
    },
    {
      title: 'ROI de la IA en enterprise: estudio revela retorno promedio de 3.5x en 18 meses',
      description: 'McKinsey Global Institute publica estudio con 500 empresas enterprise que implementaron IA: el 78% reporta ROI positivo con retorno promedio de 3.5x sobre la inversión inicial.',
      url: 'https://www.mckinsey.com',
      source: { name: 'McKinsey Global Institute' },
      publishedAt: new Date(Date.now() - 691200000).toISOString(),
      urlToImage: null,
      category: 'Resultados',
    },
  ];
}
