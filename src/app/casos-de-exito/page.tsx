import Link from 'next/link';

const CASES = [
  {
    client: 'PEMEX',
    industry: 'Energía',
    challenge: 'Procesos de mantenimiento predictivo manuales con alta tasa de error y paros no programados.',
    solution: 'Implementamos modelos de IA sobre SAP PM para predicción de fallas en equipos críticos.',
    results: ['+40% reducción de paros', '-35% costos de mantenimiento', '3x velocidad de diagnóstico'],
    color: 'bg-green-50 border-green-200',
    accent: 'text-green-700',
  },
  {
    client: 'FEMSA',
    industry: 'Consumo Masivo',
    challenge: 'Planificación de demanda reactiva con inventarios sobredimensionados en toda la cadena.',
    solution: 'Analítica predictiva sobre SAP IBP con modelos de demanda por región y temporada.',
    results: ['+30% precisión de forecast', '-25% inventario excedente', '$12M USD ahorrados'],
    color: 'bg-blue-50 border-blue-200',
    accent: 'text-blue-700',
  },
  {
    client: 'Grupo Modelo',
    industry: 'Bebidas',
    challenge: 'Cierre financiero mensual tomaba 12 días con alta intervención manual en SAP FI.',
    solution: 'Automatización del cierre financiero con IA sobre SAP S/4HANA y validación automática.',
    results: ['12 días → 3 días de cierre', '-80% intervención manual', '100% trazabilidad'],
    color: 'bg-amber-50 border-amber-200',
    accent: 'text-amber-700',
  },
  {
    client: 'IBM',
    industry: 'Tecnología',
    challenge: 'Gestión de proyectos de consultoría dispersa sin visibilidad en tiempo real del portafolio.',
    solution: 'Dashboard ejecutivo en tiempo real conectado a SAP PS con alertas automáticas de desviación.',
    results: ['+50% visibilidad portafolio', '-20% proyectos fuera de plazo', '5x velocidad de reporte'],
    color: 'bg-purple-50 border-purple-200',
    accent: 'text-purple-700',
  },
];

export default function CasosPage() {
  return (
    <main className="min-h-screen" style={{ background: '#FAF7F2' }}>
      {/* Hero */}
      <div className="bg-navy pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-electric text-sm font-semibold uppercase tracking-widest mb-4">Resultados reales</p>
          <h1 className="text-5xl font-black text-white mb-6">Casos de Éxito</h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Empresas líderes que transformaron sus operaciones con IA y criterio humano experto.
          </p>
        </div>
      </div>

      {/* Cases grid */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASES.map((c) => (
            <div key={c.client} className={`rounded-2xl border p-8 ${c.color}`}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className={`text-2xl font-black ${c.accent}`}>{c.client}</p>
                  <p className="text-sm text-gray-500 font-medium">{c.industry}</p>
                </div>
                <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-gray-600 border">
                  Caso real
                </span>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Reto</p>
                  <p className="text-sm text-gray-700">{c.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Solución ValdiviIA</p>
                  <p className="text-sm text-gray-700">{c.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Resultados</p>
                  <div className="flex flex-wrap gap-2">
                    {c.results.map((r) => (
                      <span key={r} className={`px-3 py-1 bg-white rounded-full text-xs font-bold border ${c.accent}`}>
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-navy rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-black text-white mb-4">¿Tu empresa es el próximo caso de éxito?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Agenda una consulta gratuita de 30 minutos y te mostramos cómo ValdiviIA puede transformar tu operación.
          </p>
          <Link href="/agendar" className="inline-block px-8 py-4 bg-electric text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors">
            Agendar consulta gratuita
          </Link>
        </div>
      </div>
    </main>
  );
}
