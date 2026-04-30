export default function TerminosPage() {
  return (
    <main className="min-h-screen" style={{ background: '#FAF7F2' }}>
      <div className="bg-navy pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-electric text-sm font-semibold uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Términos y Condiciones</h1>
          <p className="text-white/50">Última actualización: 30 de abril de 2025 · Versión 2.1</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h2 className="text-xl font-black text-navy mb-4">Acuerdo de servicio</h2>
          <p className="text-gray-600 leading-relaxed">Al acceder y utilizar los servicios de ValdiviIA Partners, usted acepta estos Términos y Condiciones en su totalidad. Estos términos constituyen un acuerdo legalmente vinculante entre usted y ValdiviIA Partners. Si no acepta alguno de estos términos, le pedimos que no utilice nuestros servicios.</p>
        </div>

        <section>
          <h2 className="text-2xl font-black text-navy mb-6 pb-3 border-b border-gray-200">1. Definiciones</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <div className="space-y-4">
              {[
                { term: '"ValdiviIA" o "nosotros"', def: 'ValdiviIA Partners S.A. de C.V. y todas sus subsidiarias y afiliadas.' },
                { term: '"Usuario" o "usted"', def: 'Cualquier persona física o moral que acceda a nuestro sitio web o contrate nuestros servicios.' },
                { term: '"Servicios"', def: 'Consultoría en SAP, Inteligencia Artificial, automatización y transformación digital ofrecidos por ValdiviIA.' },
                { term: '"Plataforma"', def: 'El sitio web valdiviaiapartners-sap.ai y todas sus subpáginas y aplicaciones.' },
                { term: '"Contenido"', def: 'Toda la información, textos, gráficos, datos, código y materiales disponibles en la Plataforma.' },
              ].map((item) => (
                <div key={item.term} className="flex gap-4 pb-4 border-b border-gray-50 last:border-0">
                  <p className="font-black text-navy text-sm min-w-48">{item.term}</p>
                  <p className="text-gray-600 text-sm">{item.def}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-6 pb-3 border-b border-gray-200">2. Descripción y alcance de los servicios</h2>
          <div className="space-y-4">
            {[
              { title: 'Consultoría SAP + IA', desc: 'Servicios de diagnóstico, diseño e implementación de soluciones de inteligencia artificial sobre ecosistemas SAP S/4HANA, SAP ECC, SAP BTP y módulos relacionados.' },
              { title: 'Inteligencia Empresarial', desc: 'Desarrollo de dashboards ejecutivos, modelos predictivos y soluciones de analítica avanzada conectadas a fuentes de datos SAP y no-SAP.' },
              { title: 'Automatización Estratégica', desc: 'Implementación de flujos de trabajo automatizados con supervisión humana experta, incluyendo procesos financieros, logísticos y operativos.' },
              { title: 'Implementación IA Enterprise', desc: 'Diseño, desarrollo e implementación de soluciones de inteligencia artificial personalizadas sobre infraestructura AWS, desde el diagnóstico hasta el go-live.' },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-black text-navy mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-6 pb-3 border-b border-gray-200">3. Propiedad intelectual</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 space-y-4">
            <p className="text-gray-600 leading-relaxed">Todo el contenido de la Plataforma, incluyendo pero no limitado a textos, gráficos, logotipos, iconos, imágenes, clips de audio, descargas digitales y compilaciones de datos, es propiedad exclusiva de ValdiviIA Partners o de sus proveedores de contenido, y está protegido por las leyes de propiedad intelectual aplicables en México, Estados Unidos, la Unión Europea y los tratados internacionales.</p>
            <div className="p-4 bg-red-50 rounded-xl border border-red-100">
              <p className="font-black text-red-700 mb-2">Está expresamente prohibido:</p>
              <ul className="space-y-1 text-red-600 text-sm">
                {['Reproducir, distribuir o transmitir cualquier contenido sin autorización expresa por escrito', 'Modificar o crear obras derivadas basadas en nuestro contenido', 'Usar nuestro contenido con fines comerciales sin licencia', 'Eliminar avisos de derechos de autor o marcas registradas', 'Usar técnicas de scraping o extracción masiva de datos'].map(item => (
                  <li key={item} className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
            <p className="text-gray-600 text-sm">Los resultados y entregables específicos desarrollados para cada cliente en el marco de un proyecto de consultoría serán acordados en el contrato de servicios correspondiente.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-6 pb-3 border-b border-gray-200">4. Confidencialidad y NDA</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-4">ValdiviIA Partners mantiene los más altos estándares de confidencialidad en todos sus proyectos:</p>
            <ul className="space-y-3 text-gray-600">
              {[
                'Firmamos Acuerdos de No Divulgación (NDA) con todos nuestros clientes antes de iniciar cualquier proyecto o diagnóstico.',
                'La información estratégica, financiera, técnica y comercial compartida por nuestros clientes es tratada con estricta confidencialidad.',
                'Nuestros consultores están sujetos a obligaciones de confidencialidad incluso después de finalizada la relación laboral.',
                'Los casos de éxito publicados en nuestro sitio web utilizan únicamente información de dominio público o han sido expresamente autorizados por el cliente.',
                'No divulgaremos información confidencial de clientes a terceros salvo por requerimiento legal expreso de autoridad competente.',
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
          <h2 className="text-2xl font-black text-navy mb-6 pb-3 border-b border-gray-200">5. Limitación de responsabilidad</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 space-y-4">
            <p className="text-gray-600 leading-relaxed">En la máxima medida permitida por la ley aplicable, ValdiviIA Partners no será responsable por:</p>
            <ul className="space-y-2 text-gray-600">
              {[
                'Daños indirectos, incidentales, especiales, consecuentes o punitivos.',
                'Pérdida de ingresos, beneficios, datos o buena voluntad comercial.',
                'Interrupciones del servicio por causas fuera de nuestro control razonable.',
                'Decisiones empresariales tomadas con base en información proporcionada en nuestro sitio web sin contrato de servicios vigente.',
                'Acceso no autorizado de terceros a sus datos a pesar de nuestras medidas de seguridad.',
              ].map(item => (
                <li key={item} className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />{item}</li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm">La responsabilidad máxima de ValdiviIA Partners en cualquier circunstancia no excederá el monto pagado por el usuario en los 12 meses anteriores al evento que dio lugar al reclamo.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-6 pb-3 border-b border-gray-200">6. Ley aplicable y resolución de disputas</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-8 border border-blue-100 border-l-4 border-l-blue-500">
              <p className="font-black text-navy mb-2">🇲🇽 Clientes en México</p>
              <p className="text-gray-600 text-sm">Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Las disputas se resolverán ante los tribunales competentes de la Ciudad de México, renunciando expresamente a cualquier otro fuero.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-yellow-100 border-l-4 border-l-yellow-500">
              <p className="font-black text-navy mb-2">🇪🇺 Clientes en Europa</p>
              <p className="text-gray-600 text-sm">Para usuarios en la Unión Europea, se aplicarán las protecciones mínimas obligatorias del país de residencia del consumidor, de conformidad con el Reglamento Roma I y Roma II.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-red-100 border-l-4 border-l-red-500">
              <p className="font-black text-navy mb-2">🇺🇸 Clientes en Estados Unidos</p>
              <p className="text-gray-600 text-sm">Para usuarios en Estados Unidos, las disputas se resolverán mediante arbitraje vinculante bajo las reglas de la Cámara Internacional de Comercio (ICC), salvo que ambas partes acuerden lo contrario por escrito.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-navy mb-6 pb-3 border-b border-gray-200">7. Modificaciones al servicio y términos</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-4">ValdiviIA Partners se reserva el derecho de modificar estos términos en cualquier momento. Para cambios materiales:</p>
            <ul className="space-y-2 text-gray-600 text-sm">
              {['Notificaremos con al menos 30 días de anticipación para cambios que afecten derechos existentes.', 'La notificación se realizará mediante aviso en el sitio web y/o por correo electrónico.', 'El uso continuado de nuestros servicios tras la entrada en vigor de los cambios constituye aceptación.', 'Los contratos de servicios vigentes se regirán por los términos acordados al momento de su firma.'].map(item => (
                <li key={item} className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-electric rounded-full mt-1.5 flex-shrink-0" />{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <div className="bg-navy rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-black text-white mb-4">¿Dudas sobre nuestros términos?</h2>
          <p className="text-white/60 mb-6">Nuestro equipo legal responde en menos de 48 horas hábiles.</p>
          <a href="/contacto" className="inline-block px-8 py-4 bg-electric text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors">
            Consultar al equipo
          </a>
        </div>
      </div>
    </main>
  );
}
