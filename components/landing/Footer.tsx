import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <p className="text-white font-black text-xl mb-2">ValdiviIA</p>
          <p className="text-white/40 text-sm">Inteligencia que dirige. Resultados que trascienden.</p>
        </div>
        {[
          { title: 'Soluciones', links: [
            { label: 'SAP + IA', href: '/soluciones/sap-ia' },
            { label: 'Inteligencia Empresarial', href: '/soluciones/sap-ia' },
            { label: 'Automatización', href: '/soluciones/sap-ia' },
          ]},
          { title: 'Empresa', links: [
            { label: 'Sobre Nosotros', href: '/nosotros' },
            { label: 'Casos de Éxito', href: '/casos-de-exito' },
            { label: 'Blog', href: '/blog' },
          ]},
          { title: 'Legal', links: [
            { label: 'Privacidad', href: '/legal/privacidad' },
            { label: 'Términos', href: '/legal/terminos' },
            { label: 'Contacto', href: '/contacto' },
          ]},
        ].map((col) => (
          <div key={col.title}>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">{col.title}</p>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/40 text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-5xl mx-auto mt-12 pt-6 border-t border-white/10">
        <p className="text-white/20 text-xs text-center">© {new Date().getFullYear()} ValdiviIA Partners. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
