'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Brain, Database, Settings, Shield, Users, Trophy, BookOpen, Calculator, Phone, Calendar } from 'lucide-react';

const NAV_ITEMS = [
  {
    label: 'Soluciones',
    columns: [
      {
        title: 'Inteligencia Artificial',
        items: [
          { icon: Database, label: 'Consultoría SAP + IA', desc: 'Optimización inteligente sobre SAP', href: '/soluciones/sap-ia' },
          { icon: Brain, label: 'Inteligencia Empresarial', desc: 'Analítica predictiva y dashboards', href: '/soluciones/sap-ia' },
          { icon: Settings, label: 'Automatización Estratégica', desc: 'Flujos operativos con criterio humano', href: '/soluciones/sap-ia' },
          { icon: Shield, label: 'Implementación IA', desc: 'Soluciones enterprise a la medida', href: '/soluciones/sap-ia' },
        ],
      },
      {
        title: 'Por Industria',
        items: [
          { icon: Shield, label: 'Energía y Recursos', desc: 'PEMEX, Mexigas, API-SCT', href: '/soluciones/sap-ia' },
          { icon: Database, label: 'Consumo Masivo', desc: 'FEMSA, Grupo Modelo, MABE', href: '/soluciones/sap-ia' },
          { icon: Brain, label: 'Telecomunicaciones', desc: 'Telmex, Telnor y más', href: '/soluciones/sap-ia' },
          { icon: Settings, label: 'Retail y Distribución', desc: 'Liverpool, Gigante, Arendal', href: '/soluciones/sap-ia' },
        ],
      },
      {
        title: 'Tecnología',
        items: [
          { icon: Shield, label: 'AWS + SAP', desc: 'Infraestructura nativa en nube', href: '/soluciones/sap-ia' },
          { icon: Database, label: 'IA Generativa', desc: 'Modelos entrenados en tu negocio', href: '/soluciones/sap-ia' },
          { icon: Brain, label: 'Analytics en Tiempo Real', desc: 'Dashboards ejecutivos live', href: '/soluciones/sap-ia' },
        ],
      },
    ],
  },
  {
    label: 'Empresa',
    columns: [
      {
        title: 'Quiénes Somos',
        items: [
          { icon: Users, label: 'Sobre Nosotros', desc: 'Misión, visión y equipo directivo', href: '/nosotros' },
          { icon: Trophy, label: 'Casos de Éxito', desc: 'Resultados reales con clientes', href: '/casos-de-exito' },
          { icon: BookOpen, label: 'Blog y Novedades', desc: 'Tendencias en IA enterprise', href: '/blog' },
        ],
      },
      {
        title: 'Nuestros Clientes',
        items: [
          { icon: Shield, label: 'PEMEX', desc: 'Energía — México', href: '/casos-de-exito' },
          { icon: Database, label: 'FEMSA', desc: 'Consumo masivo — LATAM', href: '/casos-de-exito' },
          { icon: Brain, label: 'IBM', desc: 'Tecnología — Global', href: '/casos-de-exito' },
          { icon: Settings, label: 'Grupo Modelo', desc: 'Bebidas — México', href: '/casos-de-exito' },
        ],
      },
    ],
  },
  {
    label: 'Resultados',
    columns: [
      {
        title: 'Herramientas',
        items: [
          { icon: Calculator, label: 'Simulador de ROI', desc: 'Calcula tu ahorro con IA', href: '/#roi' },
          { icon: Trophy, label: 'Casos de Éxito', desc: '+30% optimización en promedio', href: '/casos-de-exito' },
        ],
      },
      {
        title: 'Métricas Reales',
        items: [
          { icon: Brain, label: '+30% Optimización', desc: 'En procesos operativos', href: '/casos-de-exito' },
          { icon: Settings, label: '-25% Costos', desc: 'Reducción operativa real', href: '/casos-de-exito' },
          { icon: Database, label: '5x Decisiones', desc: 'Velocidad de respuesta', href: '/casos-de-exito' },
          { icon: Shield, label: '100% Respaldo', desc: 'Validación humana siempre', href: '/casos-de-exito' },
        ],
      },
    ],
  },
  {
    label: 'Contacto',
    columns: [
      {
        title: 'Habla con Nosotros',
        items: [
          { icon: Calendar, label: 'Agendar Consultoría', desc: 'Reunión gratuita de diagnóstico', href: '/agendar' },
          { icon: Phone, label: 'Contacto Directo', desc: 'Escríbenos ahora', href: '/contacto' },
          { icon: Calculator, label: 'Simulador de Ahorro', desc: 'Calcula tu ROI en minutos', href: '/#roi' },
        ],
      },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-md'
            : 'bg-navy/60 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className={`text-xl font-black transition-colors ${scrolled ? 'text-navy' : 'text-white'}`}>
              Valdivi<span className="text-electric">IA</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
                className="relative"
              >
                <button className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-gray-600 hover:text-navy hover:bg-gray-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}>
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${activeMenu === item.label ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {activeMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                      style={{ minWidth: item.columns.length > 1 ? '600px' : '300px' }}
                    >
                      <div className={`grid gap-0 ${item.columns.length === 3 ? 'grid-cols-3' : item.columns.length === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                        {item.columns.map((col, ci) => (
                          <div key={ci} className={`p-6 ${ci < item.columns.length - 1 ? 'border-r border-gray-100' : ''}`}>
                            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">{col.title}</p>
                            <div className="space-y-1">
                              {col.items.map((navItem) => {
                                const Icon = navItem.icon;
                                return (
                                  <Link
                                    key={navItem.label}
                                    href={navItem.href}
                                    onClick={() => setActiveMenu(null)}
                                    className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group"
                                  >
                                    <div className="w-8 h-8 bg-electric/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-electric/20 transition-colors mt-0.5">
                                      <Icon size={14} className="text-electric" />
                                    </div>
                                    <div>
                                      <p className="text-sm font-semibold text-navy group-hover:text-electric transition-colors">{navItem.label}</p>
                                      <p className="text-xs text-gray-400 mt-0.5">{navItem.desc}</p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Bottom CTA bar */}
                      <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-t border-gray-100">
                        <p className="text-xs text-gray-400">No automatizamos decisiones, las dirigimos.</p>
                        <Link href="/agendar" className="text-xs font-semibold text-electric hover:underline">
                          Agendar consultoría →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/demo"
              className="hidden lg:flex px-5 py-2 border border-electric/50 text-electric text-sm font-semibold rounded-lg hover:bg-electric hover:text-white transition-colors"
            >
              Ver demo SAP
            </Link>
            <Link
              href="/agendar"
              className="hidden lg:flex px-5 py-2 bg-electric text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors"
            >
              Agendar gratis
            </Link>
            <button
              onClick={() => setMobileOpen(o => !o)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-navy' : 'text-white'}`}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-navy pt-16 overflow-y-auto"
          >
            <div className="px-6 py-6 space-y-6">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">{item.label}</p>
                  {item.columns.map((col, ci) => (
                    <div key={ci} className="space-y-1 mb-4">
                      {col.items.map((navItem) => {
                        const Icon = navItem.icon;
                        return (
                          <Link
                            key={navItem.label}
                            href={navItem.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-colors"
                          >
                            <div className="w-8 h-8 bg-electric/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon size={14} className="text-electric" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-white">{navItem.label}</p>
                              <p className="text-xs text-white/40">{navItem.desc}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                </div>
              ))}
              <Link
                href="/agendar"
                onClick={() => setMobileOpen(false)}
                className="block w-full py-4 bg-electric text-white text-center font-semibold rounded-xl hover:bg-blue-600 transition-colors"
              >
                Agendar demo gratis
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
