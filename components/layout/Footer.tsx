import Link from 'next/link';
import { LinkIcon, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight">
                Valdivi<span className="text-primary">IA</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              No automatizamos decisiones. Las dirigimos. Inteligencia artificial con respaldo humano para ecosistemas SAP enterprise.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <LinkIcon size={20} />
              </a>
              <a href="mailto:contacto@valdiviaiapartners.com" className="text-gray-400 hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Soluciones</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-primary transition-colors">Integración SAP + IA</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Analítica Predictiva</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Optimización de Supply Chain</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Finanzas Inteligentes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Empresa</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-primary transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Casos de Éxito</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Metodología</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-primary transition-colors">Aviso de Privacidad</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Términos y Condiciones</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Seguridad de la Información</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} ValdiviIA Partners. Todos los derechos reservados.</p>
          <p>Consultoría especializada en SAP + IA Enterprise.</p>
        </div>
      </div>
    </footer>
  );
}