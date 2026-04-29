import Link from 'next/link';

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-navy pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-electric text-sm font-semibold uppercase tracking-widest mb-4">Contacto</p>
          <h1 className="text-5xl font-black text-white mb-6">Hablemos de tu proyecto</h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para analizar tu caso y proponer una solución a medida.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-black text-navy mb-8">Información de contacto</h2>
            <div className="space-y-6">
              {[
                { label: 'Presencia global', value: 'México · LATAM · Estados Unidos · Europa' },
                { label: 'Horario de atención', value: 'Lunes a Viernes, 9:00 - 18:00 CST' },
                { label: 'Tiempo de respuesta', value: 'Menos de 24 horas hábiles' },
                { label: 'Consulta inicial', value: 'Gratuita y sin compromiso — 30 minutos' },
              ].map((item) => (
                <div key={item.label} className="border-b border-gray-100 pb-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
                  <p className="text-navy font-semibold">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-electric/5 rounded-2xl border border-electric/20">
              <p className="text-navy font-black mb-2">¿Prefieres agendar directamente?</p>
              <p className="text-gray-600 text-sm mb-4">Elige un horario que se adapte a tu agenda para una consulta de 30 minutos con nuestro equipo directivo.</p>
              <Link href="/agendar" className="inline-block px-6 py-3 bg-electric text-white text-sm font-semibold rounded-xl hover:bg-blue-600 transition-colors">
                Agendar consulta gratuita →
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black text-navy mb-8">Envíanos un mensaje</h2>
            <div className="bg-surface rounded-2xl p-8 border border-gray-100">
              <p className="text-gray-600 text-sm mb-6">Completa el formulario y un asesor se pondrá en contacto contigo en menos de 24 horas.</p>
              <Link href="/#contacto" className="block w-full py-4 bg-navy text-white text-center font-semibold rounded-xl hover:bg-electric transition-colors">
                Ir al formulario de contacto
              </Link>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                {[
                  { label: 'Proyectos completados', value: '200+' },
                  { label: 'Clientes satisfechos', value: '98%' },
                  { label: 'Países', value: '12+' },
                ].map((s) => (
                  <div key={s.label} className="p-4 bg-white rounded-xl border border-gray-100">
                    <p className="text-2xl font-black text-electric">{s.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
