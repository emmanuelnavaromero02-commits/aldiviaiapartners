'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Brain, Settings, Shield } from 'lucide-react';
import { SOLUTIONS } from '@/lib/constants';

const iconMap: Record<string, React.ElementType> = { Database, Brain, Settings, Shield };

export default function Solutions() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-electric mb-3">
          Nuestra propuesta de valor
        </p>
        <h2 className="text-4xl font-black text-navy text-center mb-4">IA con respaldo humano real</h2>
        <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto">
          No solo implementamos tecnología. Combinamos inteligencia artificial avanzada con experiencia humana especializada para <strong>dirigir, validar y garantizar</strong> resultados reales.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.div
                key={s.title}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                className="border border-gray-100 rounded-2xl p-8 cursor-default bg-surface hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-electric/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="text-electric" size={22} />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{s.summary}</p>
                <AnimatePresence>
                  {hovered === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-sm text-electric font-medium overflow-hidden"
                    >
                      {s.detail}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
