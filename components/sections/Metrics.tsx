import { Briefcase, Building2, TrendingUp, ShieldCheck } from 'lucide-react';

const stats = [
  {
    value: "+45",
    label: "Proyectos SAP + IA",
    description: "Entregados con éxito e integrados en producción.",
    icon: Briefcase,
  },
  {
    value: "18",
    label: "Clientes Enterprise",
    description: "Corporativos en México y LATAM confiando en nosotros.",
    icon: Building2,
  },
  {
    value: "3.8x",
    label: "Promedio de ROI",
    description: "Retorno de inversión comprobado en los primeros 18 meses.",
    icon: TrendingUp,
  },
  {
    value: "100%",
    label: "Validación Humana",
    description: "Decisiones críticas siempre bajo control experto.",
    icon: ShieldCheck,
  },
];

export default function Metrics() {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-neutral-dark mb-4">Resultados que entregamos</h2>
          <p className="text-gray-600 text-lg">
            Métricas reales de transformación en ecosistemas empresariales complejos. Nuestro enfoque garantiza impacto en la última línea del estado de resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-primary/20 transition-colors group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-primary w-6 h-6" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <h3 className="text-lg font-semibold text-neutral-dark mb-2">{stat.label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}