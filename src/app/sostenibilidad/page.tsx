import Link from 'next/link';

const COMMITMENTS = [
  {
    icon: '🌱',
    title: 'Infraestructura de bajo carbono',
    desc: 'Operamos sobre infraestructura cloud en centros de datos con certificación de energía renovable. Nuestra arquitectura serverless reduce el consumo energético hasta un 60% vs infraestructura tradicional.',
    metric: '-60%', metricLabel: 'consumo energético vs on-premise',
  },
  {
    icon: '♻️',
    title: 'IA para eficiencia operativa',
    desc: 'Cada proyecto de automatización que implementamos reduce el desperdicio operativo de nuestros clientes: menos papel, menos procesos redundantes, menos recursos malgastados en tareas manuales.',
    metric: '200+', metricLabel: 'procesos manuales eliminados',
  },
  {
    icon: '🏭',
    title: 'Optimización de cadena de suministro',
    desc: 'Nuestros modelos predictivos ayudan a las empresas a reducir inventarios excedentes, optimizar rutas logísticas y disminuir el desperdicio en toda la cadena de valor.',
    metric: '-25%', metricLabel: 'inventario excedente promedio',
  },
  {
    icon: '💡',
    title: 'Mantenimiento predictivo verde',
    desc: 'Los sistemas de mantenimiento predictivo que implementamos sobre SAP PM extienden la vida útil de los equipos, reduciendo residuos industriales y el impacto ambiental de reemplazos prematuros.',
    metric: '+40%', metricLabel: 'vida útil de equipos industriales',
  },
  {
    icon: '🌍',
    title: 'Trabajo remoto y movilidad reducida',
    desc: 'Nuestro modelo de consultoría híbrida minimiza traslados innecesarios. El 70% de nuestros proyectos se gestionan remotamente, reduciendo nuestra huella de carbono por desplazamientos.',
    metric: '70%', metricLabel: 'proyectos gestionados remotamente',
  },
  {
    icon: '📊',
    title: 'Reporte ESG para clientes',
    desc: 'Construimos dashboards de sostenibilidad y reportes ESG sobre SAP, permitiendo a nuestros clientes medir y comunicar su impacto ambiental con datos precisos y trazables.',
    metric: '100%', metricLabel: 'trazabilidad de métricas ESG',
  },
];

const SDGS = [
  { num: '9', title: 'Industria e Innovación', desc: 'Modernizamos infraestructura empresarial con tecnología sostenible.' },
  { num: '12', title: 'Producción Responsable', desc: 'Reducimos desperdicio operativo con automatización inteligente.' },
  { num: '13', title: 'Acción por el Clima', desc: 'Minimizamos huella de carbono en cada proyecto que implementamos.' },
  { num: '17', title: 'Alianzas para los Objetivos', desc: 'Colaboramos con socios globales comprometidos con la sostenibilidad.' },
];

export default function SostenibilidadPage() {
  return (
    <main className="min-h-screen" style={{ background: '#FAF7F2' }}>
      <div className="bg-navy pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-electric text-sm font-semibold uppercase tracking-widest mb-4">Sostenibilidad</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Tecnología que cuida<br />
            <span className="text-electric">el planeta.</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            En ValdiviIA Partners creemos que la transformación digital responsable no solo mejora los negocios — también reduce su impacto en el mundo que compartimos.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm mb-16">
          <p className="text-electric text-xs font-semibold uppercase tracking-widest mb-3">Nuestro compromiso</p>
          <h2 className="text-3xl font-black text-navy mb-6">IA que genera valor sin comprometer el futuro</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            La inteligencia artificial mal implementada puede ser enormemente ineficiente: modelos que consumen energía sin propósito, procesos que duplican recursos, sistemas que generan más trabajo del que eliminan.
          </p>
          <p className="text-gray-600 leading-relaxed">
            En ValdiviIA hacemos exactamente lo contrario. Cada solución que implementamos está diseñada para hacer más con menos: menos energía, menos recursos, menos desperdicio. La eficiencia operativa que creamos para nuestros clientes tiene un impacto ambiental directo y medible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {COMMITMENTS.map((c) => (
            <div key={c.title} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">{c.icon}</div>
              <h3 className="text-lg font-black text-navy mb-3">{c.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{c.desc}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-electric">{c.metric}</span>
                <span className="text-sm text-gray-400">{c.metricLabel}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: '#0D1B2A' }} className="rounded-3xl p-10 mb-16">
          <p className="text-electric text-xs font-semibold uppercase tracking-widest mb-3 text-center">Objetivos de Desarrollo Sostenible</p>
          <h2 className="text-3xl font-black text-white text-center mb-10">Alineados con la agenda 2030 de la ONU</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SDGS.map((sdg) => (
              <div key={sdg.num} className="text-center">
                <div className="w-16 h-16 bg-electric rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-black text-xl">{sdg.num}</span>
                </div>
                <p className="text-electric font-black text-sm mb-2">{sdg.title}</p>
                <p className="text-white/50 text-xs leading-relaxed">{sdg.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-3xl p-10 text-center">
          <div className="text-5xl mb-4">🌿</div>
          <h2 className="text-2xl font-black text-navy mb-4">¿Tu empresa tiene objetivos de sostenibilidad?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Te ayudamos a construir dashboards ESG sobre SAP, medir tu huella de carbono operativa y reportar impacto ambiental con datos trazables y auditables.
          </p>
          <Link href="/agendar" className="inline-block px-8 py-4 bg-navy text-white font-semibold rounded-xl hover:bg-electric transition-colors">
            Hablar de sostenibilidad →
          </Link>
        </div>
      </div>
    </main>
  );
}
