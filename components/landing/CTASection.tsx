'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Phone, Calculator } from 'lucide-react';

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 px-6 bg-navy">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-electric text-xs font-semibold uppercase tracking-widest mb-3">El siguiente paso</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Lleva tu empresa<br />
            <span className="text-electric">al siguiente nivel.</span>
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            IA que impulsa. Expertos que garantizan. Hablemos de tu próximo paso estratégico.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Calendar,
              title: 'Agendar consulta gratuita',
              desc: '30 minutos con nuestro equipo directivo. Diagnóstico sin compromiso.',
              cta: 'Agendar ahora',
              href: '/agendar',
              primary: true,
            },
            {
              icon: Calculator,
              title: 'Calcular tu ROI',
              desc: 'Usa nuestro simulador y descubre cuánto puedes ahorrar con IA.',
              cta: 'Ver simulador',
              href: '/#roi',
              primary: false,
            },
            {
              icon: Phone,
              title: 'Contacto directo',
              desc: 'Escríbenos y un asesor te responde en menos de 24 horas hábiles.',
              cta: 'Escribir ahora',
              href: '/contacto',
              primary: false,
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl p-8 border ${item.primary ? 'bg-electric border-electric/50' : 'bg-white/5 border-white/10'}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${item.primary ? 'bg-white/20' : 'bg-electric/20'}`}>
                  <Icon size={22} className={item.primary ? 'text-white' : 'text-electric'} />
                </div>
                <h3 className="text-lg font-black text-white mb-3">{item.title}</h3>
                <p className={`text-sm leading-relaxed mb-6 ${item.primary ? 'text-white/80' : 'text-white/50'}`}>{item.desc}</p>
                <Link
                  href={item.href}
                  className={`inline-block px-6 py-3 rounded-xl font-semibold text-sm transition-colors ${
                    item.primary
                      ? 'bg-white text-electric hover:bg-gray-100'
                      : 'bg-electric text-white hover:bg-blue-600'
                  }`}
                >
                  {item.cta} →
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
