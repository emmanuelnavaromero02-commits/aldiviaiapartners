'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Article {
  title: string;
  description: string;
  url: string;
  source: { name: string };
  publishedAt: string;
  urlToImage: string | null;
  category?: string;
}

const CATEGORIES = ['Todos', 'SAP', 'IA Enterprise', 'RRHH', 'Integración', 'Tendencias', 'México', 'Resultados'];

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('Todos');

  useEffect(() => {
    fetch('/api/news')
      .then(r => r.json())
      .then(data => { setArticles(data.articles || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const filtered = activeCategory === 'Todos'
    ? articles
    : articles.filter(a => a.category === activeCategory);

  const timeAgo = (date: string) => {
    const diff = Date.now() - new Date(date).getTime();
    const days = Math.floor(diff / 86400000);
    if (days === 0) return 'Hoy';
    if (days === 1) return 'Ayer';
    if (days < 7) return `Hace ${days} días`;
    return `Hace ${Math.floor(days / 7)} semanas`;
  };

  return (
    <main className="min-h-screen" style={{ background: '#FAF7F2' }}>
      <div className="bg-navy pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-electric text-sm font-semibold uppercase tracking-widest mb-4">Conocimiento</p>
          <h1 className="text-5xl font-black text-white mb-6">Noticias SAP + IA</h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Las últimas tendencias en SAP, inteligencia artificial enterprise y transformación digital. Actualizado automáticamente.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-xs font-semibold">Actualización automática cada hora</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat
                  ? 'bg-navy text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-navy'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 animate-pulse">
                <div className="h-4 bg-gray-200 rounded mb-3 w-1/3" />
                <div className="h-6 bg-gray-200 rounded mb-2" />
                <div className="h-4 bg-gray-200 rounded mb-1 w-5/6" />
                <div className="h-4 bg-gray-200 rounded w-4/6" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filtered.map((article, i) => (
              <a
                key={i}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all hover:-translate-y-1 group flex flex-col"
              >
                {article.category && (
                  <span className="px-3 py-1 bg-electric/10 text-electric text-xs font-bold rounded-full self-start mb-4">
                    {article.category}
                  </span>
                )}
                <h2 className="text-navy font-black text-base leading-snug mb-3 group-hover:text-electric transition-colors flex-1">
                  {article.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-xs font-semibold text-gray-400">{article.source.name}</span>
                  <span className="text-xs text-gray-400">{timeAgo(article.publishedAt)}</span>
                </div>
              </a>
            ))}
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No hay artículos en esta categoría todavía.</p>
          </div>
        )}

        <div className="mt-16 bg-navy rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-black text-white mb-4">¿Quieres recibir insights exclusivos?</h2>
          <p className="text-white/60 mb-6">Análisis profundo sobre SAP, IA enterprise y transformación digital para directivos.</p>
          <Link href="/contacto" className="inline-block px-8 py-4 bg-electric text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors">
            Contactar al equipo
          </Link>
        </div>
      </div>
    </main>
  );
}
