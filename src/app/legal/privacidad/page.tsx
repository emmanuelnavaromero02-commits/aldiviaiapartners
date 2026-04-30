import Link from 'next/link';

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen" style={{ background: '#FAF7F2' }}>
      <div className="bg-navy pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-electric text-sm font-semibold uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Aviso de Privacidad</h1>
          <p className="text-white/50">Última actualización: 30 de abril de 2025 · Versión 2.1</p>
          <div className="flex flex-wrap gap-3 mt-6">
            {['LFPDPPP México', 'GDPR Europa', 'CCPA California'].map((badge) => (
              <span key={badge} className="px-3 py-1 bg-electric/20 text-electric text-xs font-semibold rounded-full border border-electric/30">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h2 className="text-xl font-black text-navy mb-4">Nuestro compromiso</h2>
          <p className="text-gray-600 leading-relaxed">ValdiviIA Partners se compromete a proteger su privacidad con los más altos estándares internacionales. Tratamos sus datos con responsabilidad, transparencia y respeto — cumpliendo con la legislación aplicable en cada jurisdicción donde operamos.</p>
        </div>

        <section>
          <h2 className="text-2xl font-black text-navy mb-6 pb-3 border-b border-gray-200">1. Datos que podemos tratar</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-4">Únicamente tratamos los datos que usted nos proporciona voluntariamente al contactarnos o contratar nuestros servicios:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Nombre y apellidos',
                'Correo electrónico corporativo',
                'Empresa u organización',
                'Cargo o puesto',
                'País y región',
                'Descripción de su necesidad o proyecto',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                  <div className="w-1.5 h-1.5 bg-electric rounded-full flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-6 pb-3 border-b border-gray-200">2. Para qué usamos sus datos</h2>
          <div className="space-y-3">
            {[
              { purpose: 'Responder a sus consultas y solicitudes', retention: '3 años' },
              { purpose: 'Prestar los servicios de consultoría contratados', retention: '7 años' },
              { purpose: 'Enviar comunicaciones comerciales relevantes', retention: 'Hasta que retire el consentimiento' },
              { purpose: 'Cumplir con obligaciones legales aplicables', retention: 'Según normativa vigente' },
            ].map((row) => (
              <div key={row.purpose} className="bg-white rounded-xl p-6 border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <p className="text-navy font-semibold text-sm">{row.purpose}</p>
                <span className="text-electric font-bold text-sm flex-shrink-0">Retención: {row.retention}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-6 pb-3 border-b border-gray-200">3. Sus derechos según su país</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-8 border-l-4 border-l-blue-500 border border-blue-100">
              <p className="font-black text-navy mb-3">🇲🇽 México — Ley Federal de Protección de Datos Personales (LFPDPPP)</p>
              <p className="text-gray-600 text-sm mb-4">Usted tiene los derechos ARCO: Acceso, Rectificación, Cancelación y Oposición. Puede ejercerlos en cualquier momento.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  'Derecho de Acceso: conocer qué datos tenemos sobre usted',
                  'Derecho de Rectificación: corregir datos inexactos o incompletos',
                  'Derecho de Cancelación: solicitar la eliminación de sus datos',
                  'Derecho de Oposición: oponerse al tratamiento para fines específicos',
                  'Derecho a la Portabilidad: recibir sus datos en formato estructurado',
                  'Derecho a revocar el consentimiento otorgado en cualquier momento',
                ].map(r => (
                  <div key={r} className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                    {r}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-l-4 border-l-yellow-500 border border-yellow-100">
              <p className="font-black text-navy mb-3">🇪🇺 Europa — Reglamento General de Protección de Datos (GDPR)</p>
              <p className="text-gray-600 text-sm mb-4">Como residente en la Unión Europea, el GDPR le otorga derechos reforzados de protección:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  'Derecho de acceso (Art. 15 GDPR)',
                  'Derecho de rectificación (Art. 16 GDPR)',
                  'Derecho al olvido y supresión (Art. 17 GDPR)',
                  'Derecho a la limitación del tratamiento (Art. 18 GDPR)',
                  'Derecho a la portabilidad de datos (Art. 20 GDPR)',
                  'Derecho de oposición (Art. 21 GDPR)',
                  'Derechos frente a decisiones automatizadas (Art. 22 GDPR)',
                  'Derecho a reclamar ante la autoridad supervisora de su país',
                ].map(r => (
                  <div key={r} className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-1.5 flex-shrink-0" />
                    {r}
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-xs mt-4">Plazo de respuesta: 30 días hábiles. Puede reclamar ante la autoridad supervisora de su país de residencia.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-l-4 border-l-red-500 border border-red-100">
              <p className="font-black text-navy mb-3">🇺🇸 California, USA — CCPA / CPRA</p>
              <p className="text-gray-600 text-sm mb-4">Para residentes de California, la CCPA y su enmienda CPRA le otorgan los siguientes derechos:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  'Derecho a saber qué datos personales recopilamos y cómo los usamos',
                  'Derecho a eliminar sus datos personales bajo solicitud',
                  'Derecho a no ser discriminado por ejercer sus derechos de privacidad',
                  'Derecho a corregir información personal inexacta',
                  'Derecho a limitar el uso de información personal sensible',
                  'ValdiviIA NO vende datos personales bajo ninguna circunstancia',
                ].map(r => (
                  <div key={r} className="flex items-start gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0" />
                    {r}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-6 pb-3 border-b border-gray-200">4. Compartición de datos</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-4">ValdiviIA Partners <strong className="text-navy">NO vende, alquila ni comparte</strong> sus datos personales con terceros para fines comerciales. Sus datos son accesibles únicamente por el equipo interno directamente involucrado en su proyecto y bajo estrictas obligaciones de confidencialidad.</p>
            <p className="text-gray-600 leading-relaxed">Podemos compartir datos únicamente cuando existe una obligación legal expresa por parte de autoridad competente, o cuando usted lo autorice explícitamente.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-6 pb-3 border-b border-gray-200">5. Transferencias internacionales</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-6">ValdiviIA Partners opera globalmente. Cuando transferimos datos entre jurisdicciones, lo hacemos siempre bajo mecanismos legales adecuados:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { region: 'México → Europa', mechanism: 'Cláusulas Contractuales Tipo aprobadas por la Comisión Europea' },
                { region: 'México → USA', mechanism: 'Marco de Privacidad de Datos UE-EE.UU. cuando aplique' },
                { region: 'Europa → USA', mechanism: 'Cláusulas Contractuales Tipo — Decisión 2021/914' },
              ].map((t) => (
                <div key={t.region} className="p-4 rounded-xl" style={{ background: '#FAF7F2' }}>
                  <p className="font-black text-navy text-sm mb-2">{t.region}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{t.mechanism}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-6 pb-3 border-b border-gray-200">6. Menores de edad</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed">Nuestros servicios están dirigidos exclusivamente a profesionales y empresas. No recopilamos datos de menores de 16 años. Si detectamos que hemos recopilado datos de un menor sin consentimiento parental verificado, los eliminaremos de inmediato.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-6 pb-3 border-b border-gray-200">7. Cambios a este aviso</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed">Nos reservamos el derecho de actualizar este aviso. Cambios materiales serán notificados con al menos 30 días de anticipación. La versión vigente siempre estará disponible en esta página.</p>
          </div>
        </section>

        <div className="bg-navy rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-black text-white mb-4">¿Preguntas sobre tu privacidad?</h2>
          <p className="text-white/60 mb-6">Nuestro equipo responde en menos de 48 horas hábiles.</p>
          <Link href="/contacto" className="inline-block px-8 py-4 bg-electric text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors">
            Ejercer mis derechos
          </Link>
        </div>
      </div>
    </main>
  );
}
