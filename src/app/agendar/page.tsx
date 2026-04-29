import Link from 'next/link';

export default function AgendarPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-navy pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-electric text-sm font-semibold uppercase tracking-widest mb-4">Consulta gratuita</p>
          <h1 className="text-5xl font-black text-white mb-6">
            30 minutos que pueden<br />
            <span className="text-electric">transformar tu empresa.</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Una sesión de diagnóstico gratuita con nuestro equipo directivo. Sin compromiso, con resultados.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-black text-navy mb-6">¿Qué incluye la consulta?</h2>
            <div className="space-y-4">
              {[
                { num: '01', title: 'Diagnóstico inicial', desc: 'Analizamos tu situación actual en SAP e IA para identificar oportunidades de mejora.' },
                { num: '02', title: 'Propuesta de valor', desc: 'Te mostramos casos similares al tuyo y los resultados que logramos para esos clientes.' },
                { num: '03', title: 'Hoja de ruta', desc: 'Diseñamos un plan preliminar con pasos concretos y estimación de ROI para tu empresa.' },
                { num: '04', title: 'Sin compromiso', desc: 'La consulta es completamente gratuita. Tú decides si quieres continuar.' },
              ].map((item) => (
                <div key={item.num} className="flex gap-4 p-4 rounded-xl hover:bg-surface transition-colors">
                  <span className="text-electric font-black text-lg flex-shrink-0">{item.num}</span>
                  <div>
                    <p className="font-black text-navy">{item.title}</p>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-surface rounded-3xl p-10 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-navy rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-black text-white">RV</span>
              </div>
              <h3 className="text-xl font-black text-navy">Rodolfo Valdivia</h3>
              <p className="text-electric font-semibold mb-4">Fundador & Director General</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Más de 20 años transformando empresas enterprise con SAP e Inteligencia Artificial. Director de proyectos para PEMEX, FEMSA, IBM y más de 50 corporativos líderes.
              </p>
              <div className="bg-electric/10 rounded-2xl p-6 mb-6">
                <p className="text-electric font-black text-lg">Sistema de agendado</p>
                <p className="text-gray-600 text-sm mt-2">Próximamente disponible en línea. Por ahora contáctanos directamente.</p>
              </div>
              <Link href="/contacto" className="block w-full py-4 bg-electric text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors">
                Contactar ahora →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
