export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-navy pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-electric text-sm font-semibold uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-4xl font-black text-white">Aviso de Privacidad</h1>
          <p className="text-white/50 mt-2">Última actualización: Abril 2025</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-16 prose prose-gray max-w-none">
        <h2 className="text-2xl font-black text-navy mt-8 mb-4">1. Responsable del tratamiento de datos</h2>
        <p className="text-gray-600 leading-relaxed">ValdiviIA Partners (en adelante &quot;ValdiviIA&quot;) es responsable del tratamiento de sus datos personales. Operamos globalmente con presencia en México, LATAM, Estados Unidos y Europa.</p>

        <h2 className="text-2xl font-black text-navy mt-8 mb-4">2. Datos que recopilamos</h2>
        <p className="text-gray-600 leading-relaxed">Recopilamos los siguientes datos cuando usted completa nuestros formularios de contacto:</p>
        <ul className="text-gray-600 space-y-2 list-disc pl-6">
          <li>Nombre completo</li>
          <li>Correo electrónico corporativo</li>
          <li>Nombre de la empresa</li>
          <li>Sector o industria</li>
          <li>Mensaje o descripción de su necesidad</li>
          <li>Dirección IP (para fines de seguridad)</li>
        </ul>

        <h2 className="text-2xl font-black text-navy mt-8 mb-4">3. Finalidad del tratamiento</h2>
        <p className="text-gray-600 leading-relaxed">Sus datos son utilizados exclusivamente para:</p>
        <ul className="text-gray-600 space-y-2 list-disc pl-6">
          <li>Responder a sus consultas y solicitudes de información</li>
          <li>Agendar reuniones de consultoría</li>
          <li>Enviar información relevante sobre nuestros servicios (solo con su consentimiento)</li>
          <li>Mejorar la calidad de nuestros servicios</li>
        </ul>

        <h2 className="text-2xl font-black text-navy mt-8 mb-4">4. Almacenamiento y seguridad</h2>
        <p className="text-gray-600 leading-relaxed">Sus datos se almacenan en Amazon DynamoDB en la región EU-South-1 (Milán, Italia), bajo los estándares de seguridad más altos de AWS. Implementamos cifrado en tránsito y en reposo, control de acceso basado en roles IAM y auditoría continua.</p>

        <h2 className="text-2xl font-black text-navy mt-8 mb-4">5. Compartición de datos</h2>
        <p className="text-gray-600 leading-relaxed">ValdiviIA NO vende, alquila ni comparte sus datos personales con terceros para fines comerciales. Sus datos solo son accesibles por el equipo interno de ValdiviIA directamente involucrado en su proyecto.</p>

        <h2 className="text-2xl font-black text-navy mt-8 mb-4">6. Sus derechos</h2>
        <p className="text-gray-600 leading-relaxed">Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales (derechos ARCO). Para ejercer estos derechos, contáctenos a través de nuestro formulario de contacto.</p>

        <h2 className="text-2xl font-black text-navy mt-8 mb-4">7. Cookies</h2>
        <p className="text-gray-600 leading-relaxed">Nuestro sitio web utiliza cookies técnicas necesarias para su funcionamiento. No utilizamos cookies de seguimiento de terceros ni publicidad comportamental.</p>

        <h2 className="text-2xl font-black text-navy mt-8 mb-4">8. Cambios a este aviso</h2>
        <p className="text-gray-600 leading-relaxed">Nos reservamos el derecho de actualizar este aviso de privacidad. Cualquier cambio significativo será notificado en esta página con la fecha de actualización correspondiente.</p>
      </div>
    </main>
  );
}
