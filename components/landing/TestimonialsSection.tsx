'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const TESTIMONIALS = [
  {
    quote: 'ValdiviIA transformó nuestra operación de mantenimiento en PEMEX. Lo que antes tomaba semanas ahora sucede en horas. El ROI superó todas nuestras expectativas.',
    author: 'Director de Operaciones',
    company: 'PEMEX',
    industry: 'Energía',
    result: '+40% eficiencia operativa',
  },
  {
    quote: 'Su enfoque de IA con criterio humano es exactamente lo que necesitábamos. No solo implementaron tecnología — nos enseñaron a tomar mejores decisiones con datos.',
    author: 'VP de Tecnología',
    company: 'FEMSA',
    industry: 'Consumo Masivo',
    result: '$12M USD en ahorros anuales',
  },
  {
    quote: 'El cierre financiero que nos tomaba 12 días ahora lo hacemos en 3. El equipo de ValdiviIA entendió nuestra operación SAP desde el primer día.',
    author: 'CFO',
    company: 'Grupo Modelo',
    industry: 'Bebidas',
    result: '-75% tiempo de cierre financiero',
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-electric text-xs font-semibold uppercase tracking-widest mb-3">Testimonios</p>
          <h2 className="text-4xl font-black text-navy mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Resultados reales de empresas líderes que transformaron su operación con ValdiviIA.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.company}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-surface rounded-3xl p-8 border border-gray-100 flex flex-col"
              style={{ background: '#FAF7F2' }}
            >
              <div className="text-4xl text-electric/30 font-black mb-4">&quot;</div>
              <p className="text-gray-700 leading-relaxed flex-1 mb-6 italic">{t.quote}</p>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-black text-navy">{t.author}</p>
                <p className="text-electric font-semibold text-sm">{t.company}</p>
                <p className="text-gray-400 text-xs mb-3">{t.industry}</p>
                <span className="px-3 py-1 bg-electric/10 text-electric text-xs font-bold rounded-full">
                  {t.result}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
