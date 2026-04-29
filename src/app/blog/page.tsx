import Link from 'next/link';

const POSTS = [
  {
    slug: 'sap-ia-transformacion',
    category: 'SAP + IA',
    title: 'Cómo SAP + IA está redefiniendo la gestión empresarial en 2025',
    excerpt: 'Las empresas que combinan SAP con inteligencia artificial están logrando reducciones de hasta 35% en costos operativos. Te explicamos cómo y por qué.',
    readTime: '8 min',
    date: 'Abril 2025',
  },
  {
    slug: 'ia-sin-supervision',
    category: 'Estrategia',
    title: 'Por qué la IA sin supervisión humana falla en el 60% de los casos',
    excerpt: 'Los modelos de IA más avanzados del mundo siguen fallando cuando no existe criterio humano experto detrás de cada decisión. Aquí están los datos.',
    readTime: '6 min',
    date: 'Marzo 2025',
  },
  {
    slug: 'roi-ia-enterprise',
    category: 'Resultados',
    title: 'ROI real de la IA en empresas enterprise: lo que nadie te cuenta',
    excerpt: 'Más allá de los casos de éxito publicitados, aquí analizamos los números reales de implementaciones de IA en corporativos mexicanos y latinoamericanos.',
    readTime: '10 min',
    date: 'Febrero 2025',
  },
  {
    slug: 'sap-s4hana-migracion',
    category: 'SAP',
    title: 'Migración a SAP S/4HANA: la guía definitiva para directores de TI',
    excerpt: 'La migración a S/4HANA es inevitable. La pregunta no es si hacerlo, sino cómo hacerlo sin interrumpir la operación. Aquí la estrategia que usamos con nuestros clientes.',
    readTime: '12 min',
    date: 'Enero 2025',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-navy pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-electric text-sm font-semibold uppercase tracking-widest mb-4">Conocimiento</p>
          <h1 className="text-5xl font-black text-white mb-6">Blog ValdiviIA</h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Insights, estrategias y análisis sobre SAP, Inteligencia Artificial y transformación digital enterprise.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-8">
          {POSTS.map((post, i) => (
            <article key={post.slug} className={`grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 ${i < POSTS.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-electric/10 text-electric text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                  <span className="text-gray-400 text-xs">· {post.readTime} de lectura</span>
                </div>
                <h2 className="text-xl font-black text-navy mb-3 hover:text-electric transition-colors cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                <button className="mt-4 text-electric font-semibold text-sm hover:underline">
                  Leer artículo →
                </button>
              </div>
              <div className="bg-surface rounded-2xl p-6 border border-gray-100 flex flex-col justify-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Tiempo de lectura</p>
                <p className="text-3xl font-black text-navy">{post.readTime}</p>
                <p className="text-gray-500 text-sm mt-1">Lectura recomendada</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-surface rounded-3xl p-10 text-center border border-gray-100">
          <h2 className="text-2xl font-black text-navy mb-4">¿Quieres recibir nuestros insights?</h2>
          <p className="text-gray-600 mb-6">Contenido exclusivo sobre SAP, IA y transformación digital para directivos enterprise.</p>
          <Link href="/contacto" className="inline-block px-8 py-4 bg-navy text-white font-semibold rounded-xl hover:bg-electric transition-colors">
            Contactar al equipo
          </Link>
        </div>
      </div>
    </main>
  );
}
