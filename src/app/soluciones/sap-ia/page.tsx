import Link from 'next/link';

const SERVICES = [
  {
    title: 'Consultoría SAP + IA',
    desc: 'Optimizamos y automatizamos tu ecosistema SAP con inteligencia artificial que reduce errores, acelera procesos y mejora decisiones en tiempo real. Trabajamos con SAP S/4HANA, ECC, BTP, SuccessFactors y todos los módulos críticos del ecosistema.',
    modules: ['SAP S/4HANA', 'SAP ECC', 'SAP BTP', 'SuccessFactors EC', 'SAP HCM', 'SAP CPI', 'OData v2/v4', 'SAP PM', 'FI/CO', 'MM/SD'],
    results: ['+40% velocidad en procesos críticos', '-35% errores operativos', '3x ROI en 12 meses'],
    detail: 'Diseñamos la arquitectura antes de escribir la primera línea de código. Definimos patrones de mensajería, autenticación, retry policies y monitoreo desde el día cero.',
  },
  {
    title: 'Integración y Sincronización de Datos',
    desc: 'Conectamos SAP con sistemas cloud y on-prem con trazabilidad completa. Movemos información crítica — nómina, asistencia, payroll posting, master data de empleados — sin pérdidas ni duplicados.',
    modules: ['SAP CPI', 'Boomi', 'n8n', 'CDC watermarks', 'Snapshot diffing', 'SuccessFactors HCM', 'Effective dating', 'REST/SOAP', 'OAuth 2.0', 'API Gateway'],
    results: ['0 diferencias entre sistemas post go-live', '36h → 1.5h cierre de nómina', '99.97% match entre sistemas'],
    detail: 'Implementamos replicación delta con manejo correcto de fechas efectivas, CDC con watermarks para alta transaccionalidad y snapshot diffing diario para detectar inconsistencias.',
  },
  {
    title: 'Inteligencia Empresarial y Analytics',
    desc: 'Transformamos datos de SAP y sistemas externos en decisiones estratégicas. Dashboards ejecutivos en tiempo real, modelos predictivos y analítica avanzada con visibilidad total de la operación.',
    modules: ['Power BI + SAP', 'Modelos predictivos', 'Data Lake AWS', 'Snowflake', 'dbt', 'Apache Spark', 'KPIs estratégicos', 'Reporting ejecutivo', 'Alertas automáticas'],
    results: ['+30% precisión de forecast', '5x velocidad de reporte ejecutivo', '100% visibilidad operativa en tiempo real'],
    detail: 'Construimos dashboards que comparan totales entre sistemas, disparan alertas cuando la varianza supera tolerancia y eliminan el trabajo manual de conciliación.',
  },
  {
    title: 'Automatización Estratégica con IA',
    desc: 'Automatizamos flujos operativos complejos manteniendo supervisión humana experta. Agentes de IA que leen tickets, clasifican excepciones, sugieren remediaciones y disparan flujos automáticamente.',
    modules: ['Agentes IA', 'RAG documental', 'Event-driven', 'n8n workflows', 'RPA híbrido', 'Webhooks', 'Procesamiento batch', 'Alerting inteligente', 'Orquestación end-to-end'],
    results: ['-80% intervención manual en procesos críticos', '0 cargas manuales al ERP', 'Go-live en cronograma garantizado'],
    detail: 'No es marketing: agentes en producción que clasifican excepciones de integración, sugieren remediaciones y disparan flujos sin sumar headcount operativo.',
  },
];

const METHODOLOGY = [
  { code: 'V', title: 'Visión', desc: 'Mapeamos sistemas, dueños, integraciones existentes y dónde duele de verdad. Entendimiento operativo antes de proponer solución.' },
  { code: 'A', title: 'Arquitectura', desc: 'Definimos la fuente de verdad de cada entidad, normalizamos identidades y diseñamos la arquitectura antes de escribir código.' },
  { code: 'L', title: 'Lanzamiento', desc: 'Desarrollo de flujos, conectores y validación end-to-end con datos reales del cliente. Sin sorpresas en producción.' },
  { code: 'D', title: 'Despliegue', desc: 'Go-live monitoreado con dashboards activos, alerting y runbooks operativos desde el primer día.' },
  { code: 'I', title: 'Iteración', desc: 'Optimización sobre datos reales: retries, performance, reducción de excepciones y mejora continua.' },
  { code: 'A2', title: 'Aceleración', desc: 'Capa de IA que clasifica excepciones y sugiere remediaciones sin sumar headcount al equipo del cliente.' },
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
            No somos generalistas de IA. Somos especialistas SAP que dominan el ecosistema completo — desde arquitectura de integración hasta agentes inteligentes en producción.
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
        <div className="max-w-5xl mx-auto space-y-20">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <h2 className="text-3xl font-black text-navy mb-4">{s.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{s.desc}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 italic border-l-2 border-electric/30 pl-4">{s.detail}</p>
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
              <div className={`bg-white rounded-3xl p-8 border border-gray-100 shadow-sm ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Resultados típicos</p>
                <div className="space-y-5">
                  {s.results.map((r) => (
                    <div key={r} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-electric/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-electric rounded-full" />
                      </div>
                      <p className="text-navy font-bold">{r}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Methodology */}
      <div style={{ background: '#0D1B2A' }} className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-electric text-xs font-semibold uppercase tracking-widest mb-3">Metodología ValdiviIA</p>
          <h2 className="text-3xl font-black text-white text-center mb-4">Seis fases. Una sola idea.</h2>
          <p className="text-white/50 text-center max-w-2xl mx-auto mb-14">No entregamos nada que no podamos sostener en producción.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {METHODOLOGY.map((m, i) => (
              <div key={m.code} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-electric rounded-xl flex items-center justify-center">
                    <span className="text-white font-black text-sm">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-electric font-black">{m.title}</p>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-electric py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">¿Tu proyecto tiene una integración que no puede fallar?</h2>
          <p className="text-white/80 mb-8">Cuéntanos qué sistemas necesitas conectar. En 48 horas te respondemos con un diagnóstico técnico inicial.</p>
          <Link href="/agendar" className="inline-block px-8 py-4 bg-white text-electric font-semibold rounded-xl hover:bg-gray-100 transition-colors">
            Solicitar diagnóstico gratuito
          </Link>
        </div>
      </div>
    </main>
  );
}
