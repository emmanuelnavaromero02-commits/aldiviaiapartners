'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NAV_ITEMS = [
  { label: 'Inicio', href: '/' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Casos de Éxito', href: '#casos' },
  { label: 'Tecnología', href: '#tecnologia' },
  { label: 'Sobre Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
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
          scrolled ? 'bg-white shadow-sm border-b border-gray-100 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-neutral-dark' : 'text-neutral-dark'}`}>
              Valdivi<span className="text-primary">IA</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? 'text-gray-600' : 'text-gray-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Button className="bg-primary hover:bg-blue-700 text-white font-medium shadow-sm">
              Agendar Consultoría Estratégica
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden p-2 text-neutral-dark"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-100 pt-20 pb-6 px-6 lg:hidden shadow-lg"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-gray-800 hover:text-primary py-2 border-b border-gray-50"
                >
                  {item.label}
                </Link>
              ))}
              <Button className="w-full mt-4 bg-primary hover:bg-blue-700 text-white font-medium py-6">
                Agendar Consultoría
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}