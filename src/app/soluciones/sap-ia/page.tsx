import Link from 'next/link';

const SERVICES = [
  {
    title: 'Consultoría SAP + IA',
    desc: 'Optimizamos y automatizamos tu ecosistema SAP con modelos de inteligencia artificial que reducen errores, aceleran procesos y mejoran la toma de decisiones en tiempo real.',
    modules: ['SAP S/4HANA', 'SAP ECC', 'SAP BTP', 'SAP Analytics Cloud', 'SAP IBP', 'SAP PM', 'SAP FI/CO', 'SAP MM'],
    results: ['+40% velocidad en procesos', '-35% errores operativos', '3x ROI en 12 meses'],
  },
  {
    title: 'Inteligencia Empresarial',
    desc: 'Transformamos tus datos en decisiones. Construimos dashboards ejecutivos en tiempo real, modelos predictivos y analítica avanzada conectada a tus fuentes SAP y no-SAP.',
    modules: ['Power BI + SAP', 'Modelos predictivos', 'Analítica en tiempo real', 'Data Lake AWS', 'Reporting ejecutivo', 'KPIs estratégicos'],
    results: ['+30% precisión de forecast', '5x velocidad de reporte', '100% visibilidad operativa'],
  },
  {
    title: 'Automatización Estratégica',
    desc: 'Automatizamos flujos operativos complejos con IA manteniendo supervisión humana experta en cada decisión crítica. No es RPA tradicional — es inteligencia dirigida.',
    modules: ['Procesos financieros', 'Cadena de suministro', 'Gestión de inventarios', 'Cierre financiero', 'Aprobaciones automáticas', 'Alertas inteligentes'],
    results: ['-80% intervención manual', '12 días → 3 días de cierre', '-25% costos operativos'],
  },
  {
    title: 'Implementación IA Enterprise',
    desc: 'Diseñamos e implementamos soluciones de IA completamente a la medida de tu industria y objetivos estratégicos, desde el diagnóstico inicial hasta el go-live en producción.',
    modules: ['Diagnóstico estratégico', 'Diseño de arquitectura', 'Desarrollo a medida', 'Integración AWS', 'Go-live y soporte', 'Capacitación ejecutiva'],
    results: ['100% proyectos en tiempo', 'Soporte 24/7 post-lanzamiento', 'ROI garantizado por contrato'],
  },
];

export default function SolucionesSAPPage() {
  return (
    <main className="min-h-screen" style={{ background: '#FAF7F2' }}>
      <div className="bg-navy pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-electric text-sm font-semibold uppercase tracking-widest mb-4">Nuestras soluciones</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            SAP + IA.<br />
            <span className="text-electric">El futuro de tu operación.</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Soluciones enterprise diseñadas para empresas que no se conforman con implementar tecnología — sino que exigen resultados reales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/agendar" className="px-8 py-4 bg-electric text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors">
              Solicitar diagnóstico gratuito
            </Link>
            <Link href="/casos-de-exito" className="px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
              Ver casos de éxito
            </Link>
          </div>
        </div>
      </div>

      <div className="py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {SERVICES.map((s, i) => (
            <div key={s.title} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div>
                <h2 className="text-3xl font-black text-navy mb-4">{s.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {s.modules.map((m) => (
                    <span key={m} className="px-3 py-1 bg-electric/10 text-electric text-xs font-semibold rounded-full">
                      {m}
                    </span>
                  ))}
                </div>
                <Link href="/agendar" className="inline-block px-6 py-3 bg-navy text-white text-sm font-semibold rounded-xl hover:bg-electric transition-colors">
                  Explorar esta solución →
                </Link>
              </div>
              <div className="bg-surface rounded-3xl p-8 border border-gray-100">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Resultados típicos</p>
                <div className="space-y-4">
                  {s.results.map((r) => (
                    <div key={r} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-electric rounded-full flex-shrink-0" />
                      <p className="text-navy font-bold">{r}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-navy py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">¿Tu empresa necesita estas soluciones?</h2>
          <p className="text-white/60 mb-8">Agenda un diagnóstico gratuito de 30 minutos con nuestros expertos SAP + IA.</p>
          <Link href="/agendar" className="inline-block px-8 py-4 bg-electric text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors">
            Solicitar diagnóstico gratuito
          </Link>
        </div>
      </div>
    </main>
  );
}
