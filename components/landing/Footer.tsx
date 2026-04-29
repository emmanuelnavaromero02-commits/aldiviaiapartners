import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <p className="text-white font-black text-xl mb-2">ValdiviIA</p>
          <p className="text-white/40 text-sm">Partners en IA Enterprise.</p>
        </div>
        {[
          { title: 'Soluciones', links: ['IA Predictiva', 'Analytics', 'Governance'] },
          { title: 'Empresa', links: ['Sobre nosotros', 'Casos de uso', 'Blog'] },
          { title: 'Legal', links: ['Privacidad', 'Términos', 'Contacto'] },
        ].map((col) => (
          <div key={col.title}>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">{col.title}</p>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l}><Link href="#" className="text-white/40 text-sm hover:text-white transition-colors">{l}</Link></li>
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
