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
          <h2 className="text-xl font-black text-navy mb-4">Resumen ejecutivo</h2>
          <p className="text-gray-600 leading-relaxed">ValdiviIA Partners se compromete a proteger su privacidad con los más altos estándares internacionales. Solo recopilamos los datos estrictamente necesarios para prestar nuestros servicios de consultoría, nunca los vendemos, y usted tiene control total sobre ellos en todo momento.</p>
        </div>

        <section>
          <h2 className="text-2xl font-black text-navy mb-6 pb-3 border-b border-gray-200">1. Responsable del tratamiento</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'Razón social', value: 'ValdiviIA Partners S.A. de C.V.' },
                { label: 'Representante legal', value: 'Rodolfo Valdivia' },
                { label: 'Domicilio fiscal', value: 'Ciudad de México, México' },
                { label: 'Presencia global', value: 'México · LATAM · USA · Europa' },
                { label: 'Sitio web', value: 'valdiviaiapartners-sap.ai' },
                { label: 'Delegado de Protección (DPO)', value: 'Disponible bajo solicitud' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
                  <p className="text-navy font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-6 pb-3 border-b border-gray-200">2. Datos que recopilamos</h2>
          <div className="space-y-4">
            {[
              { cat: 'Datos de identificación', items: ['Nombre completo', 'Cargo o puesto directivo', 'Empresa u organización'] },
              { cat: 'Datos de contacto', items: ['Correo electrónico corporativo', 'Número de teléfono (opcional)', 'País y región'] },
              { cat: 'Datos del proyecto', items: ['Sector o industria', 'Descripción de necesidades', 'Presupuesto aproximado (cuando aplique)'] },
              { cat: 'Datos técnicos', items: ['Dirección IP', 'Tipo de navegador y sistema operativo', 'Páginas visitadas y tiempo de sesión'] },
            ].map((group) => (
              <div key={group.cat} className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-black text-navy mb-3">{group.cat}</h3>
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li key={item} className="text-gray-600 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-electric rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-6 pb-3 border-b border-gray-200">3. Finalidad y base legal del tratamiento</h2>
          <div className="space-y-4">
            {[
              { purpose: 'Gestión de consultas y solicitudes', basis: 'Ejecución de contrato / Interés legítimo', retention: '3 años' },
              { purpose: 'Prestación de servicios de consultoría', basis: 'Ejecución de contrato', retention: '7 años (obligación fiscal)' },
              { purpose: 'Comunicaciones comerciales', basis: 'Consentimiento explícito', retention: 'Hasta revocación' },
              { purpose: 'Mejora del sitio web y análisis', basis: 'Interés legítimo', retention: '13 meses' },
              { purpose: 'Cumplimiento de obligaciones legales', basis: 'Obligación legal', retention: 'Según normativa aplicable' },
            ].map((row) => (
              <div key={row.purpose} className="bg-white rounded-xl p-6 border border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Finalidad</p>
                  <p className="text-navy font-semibold text-sm">{row.purpose}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Base legal</p>
                  <p className="text-gray-600 text-sm">{row.basis}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Retención</p>
                  <p className="text-electric font-semibold text-sm">{row.retention}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-6 pb-3 border-b border-gray-200">4. Seguridad y almacenamiento</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-6">Sus datos se almacenan en Amazon Web Services (AWS) en la región EU-South-1 (Milán, Italia), cumpliendo con los requisitos de residencia de datos del GDPR. Implementamos las siguientes medidas de seguridad:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Cifrado AES-256 en reposo',
                'TLS 1.3 en tránsito',
                'Control de acceso IAM con mínimo privilegio',
                'Auditoría continua con AWS CloudWatch',
                'Backups automáticos diarios',
                'Autenticación multifactor para acceso administrativo',
                'Pruebas de penetración anuales',
                'Plan de respuesta a incidentes documentado',
              ].map((measure) => (
                <div key={measure} className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                  {measure}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-6 pb-3 border-b border-gray-200">5. Sus derechos según su jurisdicción</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-8 border border-blue-100 border-l-4 border-l-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">🇲🇽 MÉXICO — LFPDPPP</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">Derechos ARCO: Acceso, Rectificación, Cancelación y Oposición al tratamiento de sus datos personales.</p>
              <ul className="space-y-1 text-sm text-gray-600">
                {['Derecho de Acceso: conocer qué datos tenemos sobre usted', 'Derecho de Rectificación: corregir datos inexactos', 'Derecho de Cancelación: solicitar eliminación de sus datos', 'Derecho de Oposición: oponerse al tratamiento para fines específicos', 'Derecho a la Portabilidad: recibir sus datos en formato estructurado'].map(r => (
                  <li key={r} className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />{r}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-yellow-100 border-l-4 border-l-yellow-500">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded">🇪🇺 EUROPA — GDPR</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">Como residente de la Unión Europea, el Reglamento General de Protección de Datos (GDPR) le otorga los siguientes derechos:</p>
              <ul className="space-y-1 text-sm text-gray-600">
                {['Derecho de acceso (Art. 15 GDPR)', 'Derecho de rectificación (Art. 16 GDPR)', 'Derecho al olvido / supresión (Art. 17 GDPR)', 'Derecho a la limitación del tratamiento (Art. 18 GDPR)', 'Derecho a la portabilidad de datos (Art. 20 GDPR)', 'Derecho de oposición (Art. 21 GDPR)', 'Derechos relativos a decisiones automatizadas (Art. 22 GDPR)', 'Derecho a presentar reclamación ante la autoridad supervisora competente'].map(r => (
                  <li key={r} className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-1.5 flex-shrink-0" />{r}</li>
                ))}
              </ul>
              <p className="text-gray-500 text-xs mt-4">Plazo de respuesta: 30 días hábiles. Puede presentar reclamación ante la Agencia Española de Protección de Datos (AEPD) o la autoridad supervisora de su país de residencia.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-red-100 border-l-4 border-l-red-500">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded">🇺🇸 CALIFORNIA — CCPA/CPRA</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">Para residentes de California, la Ley de Privacidad del Consumidor de California (CCPA) y su enmienda CPRA le otorgan los siguientes derechos:</p>
              <ul className="space-y-1 text-sm text-gray-600">
                {['Derecho a saber qué datos personales recopilamos, usamos y divulgamos', 'Derecho a eliminar sus datos personales', 'Derecho a optar por no participar en la "venta" de datos (ValdiviIA NO vende datos)', 'Derecho a la no discriminación por ejercer sus derechos de privacidad', 'Derecho a corregir información personal inexacta', 'Derecho a limitar el uso de información personal sensible'].map(r => (
                  <li key={r} className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0" />{r}</li>
                ))}
              </ul>
              <p className="text-gray-500 text-xs mt-4">ValdiviIA NO vende información personal de sus usuarios. Para ejercer sus derechos, contáctenos a través del formulario de contacto.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-6 pb-3 border-b border-gray-200">6. Transferencias internacionales</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-4">ValdiviIA Partners opera globalmente y puede transferir datos entre las siguientes jurisdicciones, siempre bajo mecanismos legales adecuados:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { region: 'México → Europa', mechanism: 'Cláusulas Contractuales Tipo (CCT) aprobadas por la Comisión Europea' },
                { region: 'México → USA', mechanism: 'Marco de Privacidad de Datos UE-EE.UU. (DPF) cuando aplique' },
                { region: 'Europa → USA', mechanism: 'Cláusulas Contractuales Tipo (SCCs) — Decisión 2021/914' },
              ].map((t) => (
                <div key={t.region} className="p-4 bg-gray-50 rounded-xl">
                  <p className="font-black text-navy text-sm mb-2">{t.region}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{t.mechanism}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-6 pb-3 border-b border-gray-200">7. Cookies y tecnologías de seguimiento</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <div className="space-y-4">
              {[
                { type: 'Cookies técnicas esenciales', purpose: 'Funcionamiento básico del sitio web', consent: 'No requerido', retention: 'Sesión' },
                { type: 'Cookies de análisis', purpose: 'Mejora de la experiencia de usuario', consent: 'Requerido', retention: '13 meses' },
                { type: 'Cookies de preferencias', purpose: 'Recordar configuraciones del usuario', consent: 'Requerido', retention: '12 meses' },
              ].map((cookie) => (
                <div key={cookie.type} className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-xl">
                  <div><p className="text-xs text-gray-400 mb-1">Tipo</p><p className="text-navy font-semibold text-sm">{cookie.type}</p></div>
                  <div><p className="text-xs text-gray-400 mb-1">Finalidad</p><p className="text-gray-600 text-sm">{cookie.purpose}</p></div>
                  <div><p className="text-xs text-gray-400 mb-1">Consentimiento</p><p className={`text-sm font-semibold ${cookie.consent === 'Requerido' ? 'text-amber-600' : 'text-green-600'}`}>{cookie.consent}</p></div>
                  <div><p className="text-xs text-gray-400 mb-1">Retención</p><p className="text-electric font-semibold text-sm">{cookie.retention}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-6 pb-3 border-b border-gray-200">8. Menores de edad</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed">Nuestros servicios están dirigidos exclusivamente a profesionales y empresas. No recopilamos intencionalmente datos de menores de 16 años (o la edad mínima aplicable en su jurisdicción). Si detectamos que hemos recopilado datos de un menor sin consentimiento parental, los eliminaremos de inmediato.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-6 pb-3 border-b border-gray-200">9. Notificación de brechas de seguridad</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-4">En caso de una brecha de seguridad que afecte sus datos personales, ValdiviIA Partners se compromete a:</p>
            <ul className="space-y-2 text-gray-600">
              {[
                'Notificar a las autoridades de protección de datos competentes dentro de las 72 horas siguientes a tener conocimiento de la brecha (requisito GDPR)',
                'Notificar a los titulares afectados sin demora indebida cuando la brecha suponga un alto riesgo para sus derechos y libertades',
                'Documentar todas las brechas de seguridad en el registro interno de incidentes',
                'Implementar medidas correctivas inmediatas para contener y remediar la brecha',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-electric rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-6 pb-3 border-b border-gray-200">10. Cambios a este aviso</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed">Nos reservamos el derecho de actualizar este Aviso de Privacidad. Cambios materiales serán notificados con al menos 30 días de anticipación. La versión vigente siempre estará disponible en esta página con su fecha de actualización.</p>
          </div>
        </section>

        <div className="bg-navy rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-black text-white mb-4">¿Preguntas sobre tu privacidad?</h2>
          <p className="text-white/60 mb-6">Nuestro equipo responde en menos de 48 horas hábiles.</p>
          <a href="/contacto" className="inline-block px-8 py-4 bg-electric text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors">
            Ejercer mis derechos
          </a>
        </div>
      </div>
    </main>
  );
}
