import Link from 'next/link';

const CASES = [
  {
    client: 'PEMEX',
    industry: 'Energía',
    employees: '8,400',
    challenge: 'Tres sistemas de RH que no se hablaban: SAP HCM on-prem, SuccessFactors y sistema de control de asistencia. Diferencias de hasta 400 registros entre sistemas en reportes mensuales.',
    solution: 'Arquitectura con SAP CPI como hub. SuccessFactors como master de identidad. Replicación delta con fechas efectivas en EmpJob y EmpCompensation. CDC con watermarks para alta transaccionalidad.',
    results: ['0 diferencias entre sistemas post go-live', '14 semanas de diseño a producción', '+40 flujos automatizados con monitoreo activo'],
    tags: ['SAP HCM', 'SuccessFactors', 'SAP CPI', 'CDC', 'OData'],
    color: 'bg-green-50 border-green-200',
    accent: 'text-green-700',
    badge: 'bg-green-100 text-green-800',
  },
  {
    client: 'FEMSA',
    industry: 'Consumo Masivo',
    employees: '12,000',
    challenge: 'Contabilización de nómina manual entre SAP HCM y ERP financiero externo. Cada quincena, 4 personas dedicaban 36 horas a generar archivos, validarlos y conciliar diferencias con errores recurrentes.',
    solution: 'Flujo CPI que extrae tablas RT y CRT, aplica reglas de mapeo configurables por wage type, genera asientos contables y los publica vía API al ERP. Reconciliación automática con alertas por varianza.',
    results: ['36h → 1.5h tiempo de cierre de nómina', '0 cargas manuales al ERP financiero', '99.97% match SAP↔ERP en producción'],
    tags: ['SAP HCM Payroll', 'CPI', 'API Integration', 'Nómina MX', 'Reconciliación'],
    color: 'bg-blue-50 border-blue-200',
    accent: 'text-blue-700',
    badge: 'bg-blue-100 text-blue-800',
  },
  {
    client: 'Grupo Modelo',
    industry: 'Bebidas',
    employees: '18,000',
    challenge: 'Cierre financiero mensual tomaba 12 días con alta intervención manual en SAP FI. Errores en clases de costo y centros de beneficio descubiertos días después en reportes ejecutivos.',
    solution: 'Automatización del cierre financiero con IA sobre SAP S/4HANA. Validación automática de asientos, dashboard ejecutivo en tiempo real y alertas cuando la varianza supera tolerancia definida.',
    results: ['12 días → 3 días de cierre financiero', '-80% intervención manual en conciliación', '100% trazabilidad de cada asiento'],
    tags: ['SAP S/4HANA', 'SAP FI/CO', 'IA Financiera', 'Automatización', 'Dashboard'],
    color: 'bg-amber-50 border-amber-200',
    accent: 'text-amber-700',
    badge: 'bg-amber-100 text-amber-800',
  },
  {
    client: 'IBM',
    industry: 'Tecnología',
    employees: '5,200',
    challenge: 'Datos de proyectos repartidos en cinco sistemas distintos. Sin visibilidad consolidada, decisiones sobre datos de hace 3 días, facturación manual y errores recurrentes en reportes ejecutivos.',
    solution: 'Plataforma interna de gestión conectando los 5 sistemas vía APIs. Motor de sincronización con capa unificada de datos y dashboard ejecutivo en tiempo real con facturación automática.',
    results: ['5 sistemas → 1 fuente de verdad unificada', '6 semanas de idea a producción', '100% mantenible por el equipo del cliente'],
    tags: ['Integración APIs', 'n8n', 'Dashboard ejecutivo', 'Automatización', 'SAP PS'],
    color: 'bg-purple-50 border-purple-200',
    accent: 'text-purple-700',
    badge: 'bg-purple-100 text-purple-800',
  },
];

export default function CasosPage() {
  return (
    <main className="min-h-screen" style={{ background: '#FAF7F2' }}>
      <div className="bg-navy pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-electric text-sm font-semibold uppercase tracking-widest mb-4">Resultados reales</p>
          <h1 className="text-5xl font-black text-white mb-6">Casos de Éxito</h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Proyectos donde la integración era el cuello de botella. Los desafíos técnicos, stacks usados y resultados son reales.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-10">
        {CASES.map((c) => (
          <div key={c.client} className={`rounded-3xl border p-10 ${c.color} bg-white`} style={{ background: 'white' }}>
            <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <p className={`text-3xl font-black ${c.accent}`}>{c.client}</p>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${c.badge}`}>{c.industry}</span>
                </div>
                <p className="text-gray-400 text-sm">{c.employees} empleados</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-electric/10 text-electric text-xs font-semibold rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">El reto</p>
                <p className="text-gray-700 leading-relaxed">{c.challenge}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">La solución ValdiviIA</p>
                <p className="text-gray-700 leading-relaxed">{c.solution}</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Resultados</p>
              <div className="flex flex-wrap gap-3">
                {c.results.map((r) => (
                  <div key={r} className={`px-4 py-2 rounded-xl border ${c.color} flex items-center gap-2`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${c.accent.replace('text-', 'bg-')}`} />
                    <span className={`text-sm font-bold ${c.accent}`}>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="bg-navy rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-black text-white mb-4">¿Tu empresa es el próximo caso de éxito?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Cuéntanos qué sistemas necesitas conectar y en qué fase del proyecto estás. En 48 horas te respondemos con un diagnóstico técnico inicial.
          </p>
          <Link href="/agendar" className="inline-block px-8 py-4 bg-electric text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors">
            Solicitar diagnóstico gratuito
          </Link>
        </div>
      </div>
    </main>
  );
}
